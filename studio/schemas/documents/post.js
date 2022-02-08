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
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: { type: 'location' },
    },
    {
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [{type: 'reference', to: {type: 'location'}}],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      type: 'array',
      name: 'authors',
      of: [
        {
          type: 'reference',
          to: [{ type: 'author' }]
        }
      ]
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
      name: 'excerpt',
      title: 'Summary',
      type: 'text',
      validation: Rule => Rule.max(200).warning('The description shouln\'t be longer than 200 characters'),
    },
    {
      title: 'Content',
      name: 'body',
      type: 'blockContent'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }
  ],
  initialValue: {
    //slug: (doc => `${doc.title}-${doc._lang}`)
  },
  preview: {
    select: {
      title: 'title',
      location: 'location.name',
      media: 'image'
    },
    prepare(selection) {
      const {location} = selection
      return Object.assign({}, selection, {
        subtitle: location && `📎 ${location}`,
      })
    },
  },
}
