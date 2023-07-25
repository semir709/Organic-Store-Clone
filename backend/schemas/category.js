export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'cateogry',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'cateogry',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
