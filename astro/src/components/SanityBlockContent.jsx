import {h} from 'preact';
import BlockContent from '@sanity/block-content-to-react';
import { tryGetFile } from '@sanity/asset-utils';

const serializers = {
  types: {
    code: ({node}) => <code-block code={node.code} language={node.language}></code-block>,
    file: ({node}) => {
      const { asset } = tryGetFile(node?.asset?._ref, {
        // put your own envs
        dataset: import.meta.env.PUBLIC_SANITY_DATASET,
        projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
        token: import.meta.env.PUBLIC_SANITY_READ_TOKEN,
      });
      return asset?.url && <a href={asset.url} target="_blank">{node.description}</a>
    },
  }
}

export default function SanityBlockContent({blocks}) {
  return (
    <BlockContent blocks={blocks} serializers={serializers} />
  )
}