function isSkippableText(t) {
  const s = (t || "").trim();
  if (!s) return true;
  if (s.length < 2) return true;
  if (/https?:\/\/|www\./i.test(s)) return true;
  if (/\b\S+@\S+\.\S+\b/.test(s)) return true;

  // skip mostly numbers/symbols
  const letters = s.replace(
    /[^A-Za-z\u00C0-\u024F\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u0900-\u097F\u0B80-\u0BFF\u0E00-\u0E7F\u4E00-\u9FFF]/g,
    ""
  );
  if (letters.length === 0) return true;

  return false;
}

function getTextNodes(root) {
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const txt = node.nodeValue;
        if (!txt || !txt.trim()) return NodeFilter.FILTER_REJECT;

        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;

        const tag = parent.tagName?.toLowerCase();
        if (["script", "style", "noscript"].includes(tag)) return NodeFilter.FILTER_REJECT;

        if (parent.closest("input, textarea, select, [contenteditable='true']")) {
          return NodeFilter.FILTER_REJECT;
        }

        if (parent.closest("[data-no-translate='true']")) return NodeFilter.FILTER_REJECT;

        const cs = window.getComputedStyle(parent);
        if (cs.display === "none" || cs.visibility === "hidden") return NodeFilter.FILTER_REJECT;

        if (isSkippableText(txt)) return NodeFilter.FILTER_REJECT;

        return NodeFilter.FILTER_ACCEPT;
      },
    },
    false
  );

  const nodes = [];
  let n;
  while ((n = walker.nextNode())) nodes.push(n);
  return nodes;
}

export function cacheOriginalText() {
  const nodes = getTextNodes(document.body);
  nodes.forEach((node) => {
    if (!node.__srcText) node.__srcText = node.nodeValue;
  });
}

export function restoreEnglish() {
  const nodes = getTextNodes(document.body);
  nodes.forEach((node) => {
    if (node.__srcText) node.nodeValue = node.__srcText;
  });
}

export function collectOriginalTexts() {
  const nodes = getTextNodes(document.body);
  const texts = nodes.map((n) => n.__srcText || n.nodeValue);
  return { nodes, texts };
}