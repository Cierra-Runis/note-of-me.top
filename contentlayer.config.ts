import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import { KatexOptions } from 'katex';
import rehypeKaTeX from 'rehype-katex';
import {
  rehypePrettyCode,
  Options as RehypePrettyCodeOptions,
} from 'rehype-pretty-code';
import remarkGFM, { Options as RemarkGFMOptions } from 'remark-gfm';
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

const rehypeKaTeXOptions: KatexOptions = {
  output: 'html',
};

const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  theme: {
    light: 'one-light',
    dark: 'one-dark-pro',
  },
  keepBackground: false,
};

const remarkGFMOptions: RemarkGFMOptions = {
  singleTilde: false,
};

export default makeSource({
  contentDirPath: 'src/post',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      /// https://github.com/remarkjs/remark-math/tree/main/packages/rehype-katex
      [rehypeKaTeX, rehypeKaTeXOptions],
      /// https://rehype-pretty.pages.dev
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
    remarkPlugins: [
      /// https://github.com/remarkjs/remark-math
      [remarkMath],
      /// https://github.com/remarkjs/remark-gfm
      [remarkGFM, remarkGFMOptions],
    ],
  },
});
