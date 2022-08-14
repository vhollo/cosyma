import { baseLanguage } from '../languages'

export default {
  title: 'Gallery',
  name: 'gallery',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      localize: true,
    },
    {
      name: 'posts',
      title: 'Gallery posts',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          {type: 'post'}
        ]
        }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.name.hu',
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
