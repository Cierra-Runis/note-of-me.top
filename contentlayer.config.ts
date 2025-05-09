import { Post as GeneratedPost } from 'contentlayer/generated';
import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer2/source-files';
import { KatexOptions } from 'katex';
import rehypeKaTeX from 'rehype-katex';
import {
  rehypePrettyCode,
  Options as RehypePrettyCodeOptions,
} from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGFM, { Options as RemarkGFMOptions } from 'remark-gfm';
import remarkMath from 'remark-math';
import stringWidth from 'string-width';

const computedFields: ComputedFields = {
  url: {
    resolve: (post) => `/post/${post._raw.flattenedPath}`,
    type: 'string',
  },
  wordCount: {
    resolve: (post) => post.body.raw.length,
    type: 'number',
  },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  computedFields,
  contentType: 'mdx',
  fields: {
    id: { required: true, type: 'string' },
    date: { required: true, type: 'date' },
    title: { required: true, type: 'string' },
    description: { type: 'string' },
  },
  filePathPattern: `**/*.mdx`,
}));

async function validateDuplicateIds(allDocs: GeneratedPost[]) {
  const ids = allDocs.map((doc) => doc.id);

  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) {
    throw new Error(`❌ Duplicate ids found: ${duplicates.join(', ')}`);
  }

  console.log('✅ No duplicate ids found');
}

const rehypeKaTeXOptions: KatexOptions = {
  output: 'html',
};

const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  keepBackground: false,
  theme: {
    dark: 'one-dark-pro',
    light: 'one-light',
  },
};

const remarkGFMOptions: RemarkGFMOptions = {
  singleTilde: false,
  stringLength: stringWidth,
};

/// https://contentlayer.dev/docs/sources/files/mdx
export default makeSource({
  contentDirPath: 'src/post',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      // https://github.com/remarkjs/remark-math/tree/main/packages/rehype-katex
      [rehypeKaTeX, rehypeKaTeXOptions],
      // https://rehype-pretty.pages.dev
      [rehypePrettyCode, rehypePrettyCodeOptions],
      // https://github.com/rehypejs/rehype-slug
      [rehypeSlug],
    ],
    remarkPlugins: [
      // https://github.com/remarkjs/remark-math
      [remarkMath],
      // https://github.com/remarkjs/remark-gfm
      [remarkGFM, remarkGFMOptions],
    ],
  },
  onSuccess: async (importData) => {
    const { allPosts } = await importData();
    await validateDuplicateIds(allPosts);
  },
});
