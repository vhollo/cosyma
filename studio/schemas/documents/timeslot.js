import { baseLanguage } from '../languages'

export default {
  name: 'timeslot',
  title: 'Timeslot',
  type: 'document',
  localize: true,
  fields: [
    {
      name: 'date1',
      title: 'Year from',
      type: 'number',
      localize: false,
    },
    {
      name: 'date2',
      title: 'Year to',
      type: 'number',
      localize: false,
      validation: Rule => Rule.min(Rule.valueOfField('date1'))
    },
    {
      title: 'Detail',
      name: 'detail',
      type: 'blockContent'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'captionImage',
      options: {
        hotspot: true
      },
    },
  ],
  preview: {
    select: {
      title: "date1",
    }
  },
}