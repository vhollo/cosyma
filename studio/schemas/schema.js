import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import { translateFields } from './fieldTranslation'

import openGraph from './objects/openGraph'
import captionImage from './objects/captionImage'
import blockContent from './objects/blockContent'
import inlineContent from './objects/inlineContent'
import category from './documents/category'
import timeslot from './documents/timeslot'
import gallery from './documents/gallery'
import post from './documents/post'
//import page from './documents/page'

export default createSchema({
  name: 'default',
  types: schemaTypes
    .concat([
      // Any base object you've defined,
      // or document type that should not have
      // field-level validations (but Document translation)
      blockContent,
      inlineContent,
      openGraph,
      captionImage,
      post,
      //page,
    ])
    // Include documents with field translation support.
    // This changes their structure, transforming
    // simple fields like 'string' into 'object'
    // with multiple string properties, one per
    // language.
    //
    // Any document definition that does
    // not set localize: true on root level, or
    // set localize: true on any field level will
    // not be changed.
    .concat(translateFields([
      category,
      timeslot,
      gallery,
    ]))
})
