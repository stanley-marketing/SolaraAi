#!/usr/bin/env python3
import re
import sys
from pathlib import Path

try:
    import cairosvg
except ImportError:
    sys.exit("cairosvg not found — run: uv add cairosvg")

try:
    from PIL import Image
    import io
except ImportError:
    sys.exit("Pillow not found — run: uv add pillow")

SRC_SVG = Path(__file__).parent.parent / "opengraph-image.svg"
OUT_DIR = Path(__file__).parent
OUT_DIR.mkdir(parents=True, exist_ok=True)

print("🔍 Rendering original SVG to measure content bounds...")
original_png_bytes = cairosvg.svg2png(
    url=str(SRC_SVG), output_width=1200, output_height=630
)
orig_img = Image.open(io.BytesIO(original_png_bytes)).convert("RGB")
W, H = orig_img.size
assert W == 1200 and H == 630, f"Unexpected size: {W}x{H}"

bg_samples = [
    orig_img.getpixel((20, 20)),
    orig_img.getpixel((20, 600)),
    orig_img.getpixel((1180, 20)),
    orig_img.getpixel((1180, 600)),
]
bg_r = sum(s[0] for s in bg_samples) // 4
bg_g = sum(s[1] for s in bg_samples) // 4
bg_b = sum(s[2] for s in bg_samples) // 4
print(f"  Background sample colour: rgb({bg_r},{bg_g},{bg_b})")

pixels = orig_img.load()

MIN_CHANNEL_TO_DISTINGUISH_LOGO_FROM_NAVY_BG = 80
bright_rows = [
    y
    for y in range(H)
    for x in range(W)
    if all(
        pixels[x, y][c] > MIN_CHANNEL_TO_DISTINGUISH_LOGO_FROM_NAVY_BG for c in range(3)
    )
]

if bright_rows:
    top = min(bright_rows)
    bottom = max(bright_rows)
    content_cy = (top + bottom) / 2
    print(
        f"  Content y-range: [{top}, {bottom}]  centre: {content_cy:.1f}  (canvas centre: {H / 2:.1f})"
    )
    shift_y = H / 2 - content_cy
    print(f"  Shift needed: {shift_y:+.1f}px")
else:
    top, bottom = 160, 431
    shift_y = H / 2 - (top + bottom) / 2
    print(f"  Fallback shift: {shift_y:+.1f}px")

svg_text = SRC_SVG.read_text()

m_translate = re.search(r"translate\((\d+\.?\d*)\s+(\d+\.?\d*)\)", svg_text)
logo_tx = float(m_translate.group(1))
logo_ty = float(m_translate.group(2))

m_text_y = re.search(r'<text[^>]+y="(\d+\.?\d*)"', svg_text)
tagline_y = float(m_text_y.group(1))

print(f"  Logo translate: ({logo_tx}, {logo_ty})  →  new Y: {logo_ty + shift_y:.2f}")
print(f"  Tagline y: {tagline_y}  →  new Y: {tagline_y + shift_y:.2f}")


def apply_shift(svg: str, dy: float) -> str:
    svg = svg.replace(
        f"translate({logo_tx} {logo_ty})", f"translate({logo_tx} {logo_ty + dy:.2f})"
    )
    svg = re.sub(r'(<text[^>]+)y="[\d.]+"', rf'\1y="{tagline_y + dy:.2f}"', svg)
    return svg


def centered_exact(svg: str, dy: float) -> str:
    return apply_shift(svg, dy)


def centered_symmetric_glow(svg: str, dy: float) -> str:
    svg = apply_shift(svg, dy)
    new_glows = (
        '<radialGradient id="glowTop" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" '
        'gradientTransform="translate(600 315) scale(700)">'
        '<stop stop-color="#1E4B87" stop-opacity="0.9"/>'
        '<stop offset="0.45" stop-color="#173B6D" stop-opacity="0.4"/>'
        '<stop offset="1" stop-color="#173B6D" stop-opacity="0"/>'
        "</radialGradient>"
        '<radialGradient id="glowBottom" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" '
        'gradientTransform="translate(600 315) scale(500)">'
        '<stop stop-color="#0D2550" stop-opacity="0.6"/>'
        '<stop offset="0.5" stop-color="#0D2550" stop-opacity="0.2"/>'
        '<stop offset="1" stop-color="#0D2550" stop-opacity="0"/>'
        "</radialGradient>"
    )
    svg = re.sub(
        r'<radialGradient id="glowTop".*?</radialGradient>\s*<radialGradient id="glowBottom".*?</radialGradient>',
        new_glows,
        svg,
        flags=re.DOTALL,
    )
    return svg


def centered_brighter_navy(svg: str, dy: float) -> str:
    svg = apply_shift(svg, dy)
    svg = svg.replace('"#07102F"', '"#091535"')
    svg = svg.replace('"#08142F"', '"#0A1840"')
    svg = svg.replace('"#1E4B87"', '"#2055A0"')
    return svg


def centered_wider_tracking(svg: str, dy: float) -> str:
    svg = apply_shift(svg, dy)
    svg = re.sub(r'letter-spacing="-0\.03em"', 'letter-spacing="0.12em"', svg)
    svg = re.sub(r'font-size="48"', 'font-size="42"', svg)
    return svg


variants = [
    (
        "og-candidate-1.png",
        "Centred — same design, perfect vertical alignment",
        centered_exact,
    ),
    (
        "og-candidate-2.png",
        "Centred + symmetric centred radial glow",
        centered_symmetric_glow,
    ),
    (
        "og-candidate-3.png",
        "Centred + brighter navy / deeper blue glow",
        centered_brighter_navy,
    ),
    (
        "og-candidate-4.png",
        "Centred + wider tagline tracking (premium spacing)",
        centered_wider_tracking,
    ),
]

for filename, description, fn in variants:
    print(f"\n🎨  {filename}: {description}")
    svg_variant = fn(svg_text, shift_y)
    png_bytes = cairosvg.svg2png(
        bytestring=svg_variant.encode(), output_width=1200, output_height=630
    )
    out_path = OUT_DIR / filename
    out_path.write_bytes(png_bytes)
    img = Image.open(io.BytesIO(png_bytes))
    print(f"    ✅ {img.width}×{img.height}px  {len(png_bytes) // 1024}KB")

print("\n🔎 Validating candidate-1 centring...")
c1 = Image.open(OUT_DIR / "og-candidate-1.png").convert("RGB")
pix1 = c1.load()
bright = [
    y
    for y in range(H)
    for x in range(W)
    if pix1[x, y][0] > 80 and pix1[x, y][1] > 80 and pix1[x, y][2] > 80
]
if bright:
    cy = (min(bright) + max(bright)) / 2
    off = abs(cy - H / 2)
    print(
        f"    Content centre: {cy:.1f}px  off-centre: {off:.1f}px  {'✅' if off <= 4 else '⚠️'}"
    )

print(f"\n✨ All {len(variants)} candidates → {OUT_DIR}/")
