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
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'SubtTitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        //source: doc => `${doc.title}-${doc._lang}`,
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    },
    {
      name: 'index',
      title: 'Teaser on the landing page – false / true / double / full',
      type: 'string',
      options: {
        list: ['false', 'true', 'double', 'full'],
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
      name: 'timeline',
      title: 'Timeline',
      type: 'array',
      of: [{type: 'timeslot'}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }
  ],
  initialValue: {
    index: 'false',
    summaryfrom: 'auto'
    //slug: (doc => `${doc.title}-${doc._lang}`)
  },
  preview: {
    select: {
      title: 'title',
      category: 'category.title.hu',
      media: 'image'
    },
    prepare(selection) {
      const {category} = selection
      return Object.assign({}, selection, {
        subtitle: category && `📎 ${category}`,
      })
    },
  },
}
