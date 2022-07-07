import { baseLanguage } from '../languages'

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  localize: true,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        maxLength: 96
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
      //validation: Rule => Rule.required(),
    },
    //{
    //  name: 'dropdown',
    //  title: 'Menu dropdown',
    //  type: 'array',
    //  of: [{
    //    type: 'reference',
    //    to: [
    //      {type: 'post'}
    //    ]
    //  }],
    //  localize: false,
    //},
    {
      name: 'dropdown',
      title: 'Dropdown menu?',
      type: 'boolean',
      localize: false,
    },
    {
      name: 'dropmax',
      title: 'Max. menuitems',
      type: 'number',
      validation: Rule => Rule.positive(),
      localize: false,
    },
    {
      name: 'link',
      title: 'Menu links to page?',
      type: 'boolean',
      localize: false,
    },
    {
      name: 'abc',
      title: 'Sort posts by ABC?',
      type: 'boolean',
      localize: false,
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
      type: 'inlineContent'
    },
  ],
  initialValue: {
    abc: false,
    dropdown: false,
    link: true
  },
  preview: {
    select: {
      title: "name",
      subtitle: "menutitle",
      index: 'index',
      media: 'image'
    },
  },
}