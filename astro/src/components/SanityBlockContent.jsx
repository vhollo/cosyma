//import 'astro/jsx-runtime'
import {h} from 'preact';
import BlockContent from '@sanity/block-content-to-react';
import { tryGetFile } from '@sanity/asset-utils';

const serializers = {
  types: {
    //code: ({node}) => <code-block code={node.code} language={node.language}></code-block>,
    file: ({node}) => {
      const { asset } = tryGetFile(node?.asset?._ref, {
        // put your own envs
        dataset: import.meta.env.PUBLIC_SANITY_DATASET,
        projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
        token: import.meta.env.PUBLIC_SANITY_READ_TOKEN,
      });
      return asset?.url && <a href={asset.url} target="_blank">{node.description}</a>
    },
  },
  marks: {
    reef: ({value, children}) => {
      const {_type, slug = {}, url} = value
      const href = url ? url : `/${_type}/${slug.current}`
      return <a href={href}>{children}</a>
    },
    ref: ({mark, children}) => {
      return mark?.category?.slug ? <a href={`/${mark.category.slug['hu'].current}/${mark.slug.current}`}>{children}</a> : <span>{children}</span>
    },
  }
}

export default function SanityBlockContent({blocks}) {
  return (
    <BlockContent blocks={blocks} serializers={serializers} />
  )
}