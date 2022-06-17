export default {
  title: 'Image',
  name: 'captionImage',
  type: 'image',
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Image caption',
      options: {
        isHighlighted: true
      }
    },
    {
      title: 'Hero',
      name: 'hero',
      type: 'boolean',
      options: {
        isHighlighted: false
      }
    },
    {
      title: 'Link preview',
      name: 'preview',
      type: 'boolean',
      options: {
        isHighlighted: false
      }
    },
  ],
  initialValue: {
    preview: true,
    hero: true,
  },
  liveEdit: true
}
