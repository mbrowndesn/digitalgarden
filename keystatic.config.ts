
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    designs: collection({
      label: 'Designs',
      slugField: 'title',
      path: 'src/content/designs/*',

      schema: {
        title: fields.slug({
          name: { label: 'Title' },
        }),

        image: fields.image({
          label: 'Image',
          directory: 'public/designs',
          publicPath: '/designs/',
        }),

        date: fields.date({
          label: 'Date',
        }),
      },
    }),

    film: collection({
      label: 'Film',
      slugField: 'title',
      path: 'src/content/film/*',

      schema: {
        title: fields.slug({
          name: { label: 'Title' },
        }),

        image: fields.image({
          label: 'Image',
          directory: 'public/film',
          publicPath: '/film/',
        }),

        date: fields.date({
          label: 'Date',
        }),
      },
    }),

    notebook: collection({
      label: 'Notebook',
      slugField: 'title',
      path: 'src/content/notebook/*',
      format: { contentField: 'content' },

      schema: {
        title: fields.slug({
          name: { label: 'Title' },
        }),

        image: fields.image({
          label: 'Image',
          directory: 'public/notebook',
          publicPath: '/notebook/',
        }),

        description: fields.text({
          label: 'Description',
          multiline: true,
        }),

        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),

    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },

      schema: {
        title: fields.slug({
          name: { label: 'Title' },
        }),

        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),
  },
});
