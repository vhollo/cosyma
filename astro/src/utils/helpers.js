import { parseISO, format } from "date-fns";
import { client } from '../lib/sanityClient.js';
import imageUrlBuilder from '@sanity/image-url';
import BlocksToMarkdown from '@sanity/block-content-to-markdown';

const builder = imageUrlBuilder(client);

// this was the previous way fetches were done but required more boilerplate on the frontend of queries
// so we are moving to the getSanityContent function below
// export function sanityGraphqlQuery(query) {
//     return `${import.meta.env.PUBLIC_SANITY_GRAPHQL_URL}?query=${query}`;
// }

//export async function getSanityContent({ query, variables = {} }) {
//  const { data } = await fetch(
//    `${import.meta.env.PUBLIC_SANITY_GRAPHQL_URL}`,
//    {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/json',
//      },
//      body: JSON.stringify({
//        query,
//        variables,
//      }),
//    },
//  ).then((response) => response.json()
//  )//.then((json) => console.log(json.data));
  
//  //console.log({data});
//  return data;
//}

//export async function getSanityContent(query/*{ query, variables = {} }*/) {
//  const data = await client.fetch(`* [_type == 'post'] { ${query} }`)
//  //console.log({data});
//  return data
//}

export function formatBlogPostDate ( date ) {
  if (!date) return ''
  const dateString = parseISO( date, "YYYY/MM/Do" );
  const formattedDateString = format( dateString, "MMMM do, yyyy" );
  return `${ formattedDateString }`;
}

export function getSanityImageUrl(source) {
  console.log({source})
  return source.asset && builder.image(source);
}

export async function convertBlockContentToMarkdown (postBody) {
  return BlocksToMarkdown(postBody);
}