import S from '@sanity/desk-tool/structure-builder'
import * as I18nS from 'sanity-plugin-intl-input/lib/structure';
import { i18n } from './schemas/documentTranslation'

import {
  GrDocumentText as FieldIcon,
  GrMultiple as DocumentIcon,
  GrTextAlignLeft as PostIcon,
  GrArticle as ArticleIcon,
} from 'react-icons/gr'

export const getDefaultDocumentNode = (props) => {
  if (props.schemaType === 'post') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  }
  if (props.schemaType === 'page') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  }
  if (props.schemaType === 'gallery') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  }
  return S.document();
};

export default () =>
  S.list()
    .title('Content')
    .items([
      
      S.documentTypeListItem('category')
        .icon(ArticleIcon),
      //S.listItem()
      //  .title('Settings')
      //  .icon(FieldIcon)
      //  .child(
      //    S.list()
      //      .id('settings')
      //      .title('Settings')
      //      .items([
      //        S.documentTypeListItem('category')
      //          .icon(ArticleIcon),
      //      ])
      //  ),

      S.listItem()
      .title('Posts By Category')
      .child(
        S.documentTypeList('category')
          .title('Posts by Category')
          .child(categoryId =>
            S.documentList()
              .title('Posts')
              .filter('_type == "post" && $categoryId == category._ref')
              .params({ categoryId })
          )
      ),

      S.documentTypeListItem('gallery')
        .icon(ArticleIcon),

      S.listItem()
      .title('All Posts & Assets')
      .id('posts')
      .icon(PostIcon)
      .schemaType('post')
      .child(
        S.documentList()
          .id('post')
          .title('Post')
          // Use a GROQ filter to get documents.
          .filter('_type == "post" || _type == "image"')
          // && category == null && (!defined(_lang) || _lang == $baseLang)
          .params({ baseLang: i18n.base })
          .canHandleIntent((_name, params, _context) => {
            // Assume we can handle all intents (actions) regarding post documents
            return params.type === '*'
          })
      ),
])
