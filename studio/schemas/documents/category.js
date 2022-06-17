import { baseLanguage } from '../languages'

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  localize: true,
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'index',
      title: 'Menuindex',
      type: 'number',
      //validation: Rule => Rule.positive()
      localize: false,
    },
    {
      name: 'menutitle',
      title: 'Menutitle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Page title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'captionImage',
      options: {
        hotspot: true
      },
      localize: false,
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'inlineContent',
    },
    {
      title: 'Content',
      name: 'body',
      type: 'blockContent'
    },
    {
      name: 'order',
      title: 'Order of posts',
      type: 'string',
      options: {
        list: ['date', 'abc'],
      },
      localize: false,
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "menutitle",
      index: 'index',
      media: 'image'
    },
  },
}