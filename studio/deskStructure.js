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
  return S.document();
};

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(FieldIcon)
        .child(
          S.list()
            .id('settings')
            .title('Settings')
            .items([
              S.documentTypeListItem('category')
                .icon(ArticleIcon),
            ])
        ),

      S.listItem()
        .title('Documents')
        .icon(DocumentIcon)
        .child(
          S.list()
            .id('docs')
            .title('Documents')
            .items([

              S.listItem()
                .title('Articles')
                .id('posts')
                .icon(PostIcon)
                .schemaType('post')
                .child(
                  S.documentList()
                    .id('post')
                    .title('Post')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "post" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'post'
                    })
                ),
                
              /*S.listItem()
                .title('Pages')
                .id('pages')
                .icon(ArticleIcon)
                .schemaType('page')
                .child(
                  S.documentList()
                    .id('page')
                    .title('Page')
                    // Use a GROQ filter to get documents.
                    .filter('_type == "page" && (!defined(_lang) || _lang == $baseLang)')
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding page documents
                      return params.type === 'page'
                    })
                ),*/
            ]),
        ),
    ])
