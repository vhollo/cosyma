import { i18n } from '../documentTranslation'

export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  // The next property enables full-document translation for this document
  // via the sanity-intl plugin. You can of course modify this object should you
  // need to on a document-to-document bassis.
  i18n,
  fields: [
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        source: doc => `${doc.title}`,
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'menutitle',
      title: 'Menutitle',
      type: 'string',
      //validation: Rule => Rule.required(),
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    },
    {
      name: 'index',
      title: 'Show teaser on landing page?',
      type: 'boolean',
    },
    {
      name: 'size',
      title: 'Teaser size',
      type: 'string',
      options: {
        list: ['default', 'double'],
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'captionImage',
      options: {
        hotspot: true
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'inlineContent',
      validation: Rule => Rule.max(500).warning('The description shouln\'t be longer than 500 characters'),
    },
    {
      name: 'summaryfrom',
      title: 'Summary on Mozaik page',
      type: 'string',
      options: {
        list: ['auto', 'content', 'none'],
      },
    },
    {
      title: 'Content',
      name: 'body',
      type: 'blockContent'
    },
    {
      name: 'galleries',
      title: 'Galleries',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          {type: 'gallery'}
        ]
      }],
    },
    {
      title: 'Related posts title',
      name: 'reltitle',
      type: 'string',
    },
    {
      name: 'relposts',
      title: 'Related posts',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          {type: 'post'}
        ]
      }],
    },
    {
      name: 'timeline',
      title: 'Timeline',
      type: 'array',
      of: [{type: 'timeslot'}],
    },
  ],
  initialValue: {
    index: false,
    size: 'default',
    summaryfrom: 'auto',
    slug: doc => `${doc.title}`
  },
  preview: {
    select: {
      title: 'title',
      menutitle: 'menutitle',
      category: 'category.name.hu',
      media: 'image'
    },
    prepare(selection) {
      const {title, menutitle, category} = selection
      return Object.assign({}, selection, {
        title: title || menutitle,
        subtitle: category && `📎 ${category}`,
      })
    },
  },
}
