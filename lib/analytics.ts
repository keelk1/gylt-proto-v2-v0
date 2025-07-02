/**
 * URL de ton Apps Script. Conserve le même endpoint pour "click" & "view" ;
 * distingue-les avec le paramètre `type`.
 */
const BASE_URL =
  "https://script.google.com/macros/s/AKfycbymhXrSqPAwEelDgp1jEZcDD2Tl4yxHmCryUQ4gErBOeU--VsUTJ13BtdtvjEoYvDmZRA/exec"

export function trackClick(button: string, slide: string, extra: Record<string, string> = {}) {
  const params = new URLSearchParams({ type: "click", button, slide, ...extra });
  navigator.sendBeacon(`${BASE_URL}?${params.toString()}`);
}

export function trackSlideView(slide: string, extra: Record<string, string> = {}) {
  const params = new URLSearchParams({ type: "view", slide, ...extra });
  navigator.sendBeacon(`${BASE_URL}?${params.toString()}`);
}
