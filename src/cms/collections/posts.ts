import { fields, collection } from '@keystatic/core';

export const posts = collection({
    label: 'Posts',
    slugField: 'title',
    path: 'src/content/posts/*',
    entryLayout: 'content',
    format: { contentField: 'content' },
    schema: {
      title: fields.slug({ name: { label: 'Title' } }),
      featuredImage: fields.image({
        label: "Featured Image",
        directory: "src/assets/images/posts",
        publicPath: "src/assets/images/posts/",
      }),
      imgAlt: fields.text({ label: 'Image Alt' }),
      content: fields.markdoc({
        label: "Content",
        options: {
          image: {
            directory: "src/assets/images/posts",
            publicPath: "@assets/images/posts/",
          },
        },
      }),
      publishedDate: fields.date({ label: "Published date" }),
    
    // tags: fields.array(
    //   fields.object({
    //     name: fields.text({ label: "Tags" }),
    //     bio: fields.markdoc({
    //       label: "Tags",
    //     }),
    //   }),
    //   {
    //     label: "Tags",
    //     slugField: "name",
    //     itemLabel: (props) => props.fields.name.value,
    //   }
    // ),
    },
  });