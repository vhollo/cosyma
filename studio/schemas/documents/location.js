export default {
  title: 'Location',
  name: 'location',
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
      type: 'richText',
      name: 'bio',
      // Only want the bio to be localized in this case
      localize: true
    }
  ],
}
