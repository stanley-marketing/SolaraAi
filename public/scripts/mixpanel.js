var _ms = document.createElement("script");
_ms.async = true;
_ms.src = "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
_ms.onload = function () {
  mixpanel.init("4d4a15b923b6da7abebabea6fb749588", {
    autocapture: true,
    record_sessions_percent: 100,
    cookie_domain: ".solaraai.com",
    cross_subdomain_cookie: true,
    persistence: "localStorage",
    record_mask_text_selector: "",
    record_block_selector: ""
  });
  mixpanel.track("Marketing Page Viewed", {
    page: window.location.pathname,
    title: document.title,
    referrer: document.referrer
  });
};
document.head.appendChild(_ms);
