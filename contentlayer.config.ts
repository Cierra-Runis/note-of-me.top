import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import { all } from 'lowlight';
import rehypeHighlight from 'rehype-highlight';
import rehypeKaTeX from 'rehype-katex';
import remarkGFM from 'remark-gfm';
import remarkMath from 'remark-math';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post: { _raw: { flattenedPath: string } }) =>
        `/post/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/post',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypeKaTeX, [rehypeHighlight, { languages: all }]],
    remarkPlugins: [remarkMath, remarkGFM],
  },
});
