export default {
  title: 'Author',
  name: 'author',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      type: 'image',
      name: 'image',
      options: {
        hotspot: true
      },
    },
    {
      type: 'blockContent',
      name: 'bio',
      // Only want the bio to be localized in this case
      localize: true
    }
  ],
}
