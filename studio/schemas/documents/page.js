import { i18n } from '../documentTranslation'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  i18n,
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    },
    {
      title: 'Menuindex',
      name: 'index',
      type: 'number',
      //validation: Rule => Rule.positive()
    },
    {
      title: 'Menutitle',
      name: 'menutitle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Page title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
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
    },
  ],
  initialValue: {
    //index: 'false'
    //menutitle: doc => `${doc.category.title}`
  },
  preview: {
    select: {
      title: 'menutitle',
      category: 'category.title.hu',
      index: 'index'
    },
    prepare(selection) {
      const {category, index} = selection
      return Object.assign({}, selection, {
        subtitle: `${index} 📎 ${category}`,
      })
    },
  },
}
