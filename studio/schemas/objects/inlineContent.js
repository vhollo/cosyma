/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'inlineContent'
 *  }
 */
 export default {
  title: 'Inline Content',
  name: 'inlineContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
        ],
      },
    },
    {
      type: 'captionImage',
      options: {hotspot: true},
    },
    {
      title: 'File link',
      type: 'file',
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Description',
          options: {
            isHighlighted: true
          }
        },
      ]
    },
  ],
}
