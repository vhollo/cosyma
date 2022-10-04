import { baseLanguage } from '../languages'

export default {
  title: 'Galleries',
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
      name: 'secret',
      title: 'Secret title',
      type: 'string',
      options: {
        maxLength: 96
      },
    },
    {
      name: 'posts',
      title: 'Gallery posts',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          {type: 'post'}
        ],
        options: {
          filter: '_lang == $lang && !(_id match $draft)',
          filterParams: {lang: 'hu', draft: 'drafts*'}
        }      
        }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'secret'
    },
    /*,
    prepare(selection) {
      const {title, secret} = selection
      return Object.assign({}, selection, {
        title: title.hu || secret
      })
    },*/
  },
}
