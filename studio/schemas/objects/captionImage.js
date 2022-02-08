export default {
  title: 'Image',
  name: 'captionImage',
  type: 'image',
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true
      }
    },
    {
      title: 'Hero',
      name: 'hero',
      type: 'boolean',
      options: {
        isHighlighted: true
      }
    },
    {
      title: 'Link preview',
      name: 'preview',
      type: 'boolean',
      options: {
        isHighlighted: true
      }
    },
  ],
  initialValue: {
    preview: true,
    hero: true,
  },
  liveEdit: true
}
