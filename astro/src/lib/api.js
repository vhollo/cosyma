export const allPosts = `
*[_type == 'post']{
  categories[]->{slug, title},
  _langRefs,
  !(_id match "i18n*") => {
    "refs": *[_id in path("i18n." + ^._id + ".*")]{_lang, slug}
  },
  _id match "i18n*" => {
    "refs":
      *[^._id in _langRefs[].ref._ref]{_lang, slug} + 
      *[^._id in _langRefs[].ref._ref][0]{
        "matches": *[_id in path("i18n." + ^._id + ".*")]{_lang, slug}
      }.matches
  },
  authors[]->{name},
  ...
} | order(publishedAt desc)`;

export const allCategoriesWithPosts = `*[_type == 'category']{"posts": *[_type == "post" && references(^._id)] | order(publishedAt desc), ...}`;

/*export const allPosts = `
_type,
slug {
  current
},
title,
publishedAt,
mainImage{
  asset{
    url
  }
},
image{
  asset{
    url
  }
},
excerpt,
body,
blockContent,
bodyRaw,
location,
_lang,
author{
  name
}
`*/