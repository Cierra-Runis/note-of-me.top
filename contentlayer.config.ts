import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
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

const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  theme: 'one-dark-pro',
  keepBackground: false,
};

const remarkGFMOptions: RemarkGFMOptions = {};

export default makeSource({
  contentDirPath: 'src/post',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypeKaTeX, [rehypePrettyCode, rehypePrettyCodeOptions]],
    remarkPlugins: [remarkMath, [remarkGFM, remarkGFMOptions]],
  },
});
