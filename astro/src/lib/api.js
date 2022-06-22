export const catPages = `
*[_type == 'category' && !(_id match "drafts*")]{
  ...,
  'category': name
} | order(index asc)`;

export const allPosts = `
*[_type == 'post']{...,
  category->{slug, 'category': name},
  relposts[]->{..., category->{slug, 'category': name}},
  galleries[]->{..., gallery->{..., posts[]->{..., slug, 'category': name}}},
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
  }
} | order(publishedAt desc)`;

export const allCategoriesWithPosts = `
*[_type == 'category']{
  ..., 
  "posts": *[_type == 'post' && references(^._id) && !(_id match "drafts*")]
  {
    ..., 
    body[]{
      ...,
      markDefs[]{
        ...,
        // Join the referenced document and get the slug and type
        _type == "ref" => {
          _key,
          "slug": @.reference->slug,
          "category": @.reference->category->{slug, 'name': name},
          // You can also build an URL using string concatination
          //"url": "/" + @.reference->_type + "/" + @.reference->slug.current
        }
      }
    },
    category->{slug, 'name': name},
    relposts[]->{..., category->{slug, 'category': name}},
    galleries[]->{
      ..., posts[]->{
        ..., category->{slug, 'name': name}
      }
    },
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
    }
  } | order(publishedAt desc), 
  "pages": *[_type == "page" && references(^._id) && !(_id match "drafts*")]
  {
    ..., 
    title->{slug, title},
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
    }
  }
} | order(index asc)`;


/*
export const alllPages = `
*[_type == 'page']{
  category->{slug, title},
  menutitle->{slug, title},
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
  ...
} | order(index asc)`;
*/

/*
export const allPosts = `
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