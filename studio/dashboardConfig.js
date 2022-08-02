export default {
  widgets: [
    /*{
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },*/
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62d66120990e3f5c13da7c2a',
                  title: 'Cosyma Website',
                  name: 'cosyma',
                  apiId: '2539ea1c-1ac9-4a61-a3ae-c5b04efb6b28'
                }
              ]
            }
          }
        ]
      }
    },
    //{name: 'categories', layout: {height: 'auto'}},
    {name: 'project-users', layout: {height: 'auto'}},
    /*{
      name: 'document-list',
      options: {title: 'Latest posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }*/
  ]
}
