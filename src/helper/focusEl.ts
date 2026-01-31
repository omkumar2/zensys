export const focusEnd = (el: HTMLElement) => {
  const range = document.createRange();
  const sel = window.getSelection();
  range.selectNodeContents(el);
  range.collapse(false); // ← end
  sel?.removeAllRanges();
  sel?.addRange(range);
  el.focus();
};