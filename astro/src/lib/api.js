export const catPages = `
*[_type == 'category' && !(_id match "drafts*")]{
  ...,
  'category': name
} | order(index asc)`;

export const allPosts = `
*[_type == 'post' && !(_id match "drafts*")]{...,
  category->{slug, name},
  relposts[]->{..., category->{slug, name}},
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
} | order(coalesce(publishedAt, _createdAt) desc)`;

export const allCategoriesWithPosts = `
*[_type == 'category' && !(_id match "drafts*")]{
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
    galleries[]->{..., posts[!(_id match "drafts*")]->{
      ..., 
      _langRefs,
      !(_id match "i18n*") => {
        "refs": *[_id in path("i18n." + ^._id + ".*")]{...,_lang, slug}
      },
      _id match "i18n*" => {
        "refs":
          *[^._id in _langRefs[].ref._ref]{_lang, slug} + 
          *[^._id in _langRefs[].ref._ref][0]{
            "matches": *[_id in path("i18n." + ^._id + ".*")]{...,_lang, slug}
          }.matches
      }
    }},
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
  } | order(coalesce(publishedAt, _createdAt) desc),

} | order(index asc)`;
