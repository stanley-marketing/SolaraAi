## 2026-04-27
- Kept `CTA_MAP` as 8 explicit slot keys (`heroPrimary`, `heroSecondary`, `showcase`, `beforeAfter`, `comparison`, `pricing`, `faqHuman`, `close`) so tests can enforce the exact conversion-entry contract.
- Kept `TESTIDS` as a flat object of the 12 required selectors so future UI components can import one canonical selector map without duplicating literals.
