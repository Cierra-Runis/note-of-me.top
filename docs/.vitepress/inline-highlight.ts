import type { MarkdownRenderer } from 'vitepress';

/// Inline code syntax highlighting, using Shiki's inline syntax:
/// `` `const a = 1{:ts}` `` → highlighted as TypeScript.
/// https://github.com/vuejs/vitepress/issues/3093
/// https://shiki.style/packages/rehype#inline-code
///
/// VitePress highlights asynchronously: `options.highlight` returns a `<pre>`
/// placeholder that `md.renderAsync` later swaps for Shiki's output. So the
/// highlighted `<pre>` is wrapped in a marker here and flattened into an
/// inline `<code>` once `renderAsync` has resolved it.

const LANG_SUFFIX_RE = /^([\s\S]+)\{:([\w+#-]+)\}$/;
const MARKER = 'data-inline-highlight';
const RESOLVED_RE = new RegExp(
  `<span ${MARKER}><pre([^>]*)><code>([\\s\\S]*?)</code></pre></span>`,
  'g',
);
const LINE_RE = /^<span class="line">([\s\S]*)<\/span>$/;

export function inlineHighlightPlugin(md: MarkdownRenderer) {
  // Strip the `{:lang}` suffix right after inline parsing, so anchors, titles
  // and search see the bare code.
  md.core.ruler.after('inline', 'inline_highlight', (state) => {
    for (const block of state.tokens) {
      for (const token of block.children ?? []) {
        if (token.type !== 'code_inline') continue;
        const match = LANG_SUFFIX_RE.exec(token.content);
        if (!match) continue;
        token.content = match[1];
        token.meta = { ...token.meta, highlightLang: match[2] };
      }
    }
  });

  const fallback = md.renderer.rules.code_inline!;
  md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
    const lang: string | undefined = tokens[idx].meta?.highlightLang;
    if (!lang || !options.highlight) {
      return fallback(tokens, idx, options, env, self);
    }
    return `<span ${MARKER}>${options.highlight(tokens[idx].content, lang, '')}</span>`;
  };

  const renderAsync = md.renderAsync.bind(md);
  md.renderAsync = async (src, env) =>
    (await renderAsync(src, env)).replace(RESOLVED_RE, (_, preAttrs, inner) => {
      const cls = /class="([^"]*)"/.exec(preAttrs)?.[1] ?? 'shiki';
      const vPre = /\sv-pre\b/.test(preAttrs) ? ' v-pre' : '';
      const code = LINE_RE.exec(inner)?.[1] ?? inner;
      return `<code class="${cls} vp-code-inline"${vPre}>${code}</code>`;
    });
}
