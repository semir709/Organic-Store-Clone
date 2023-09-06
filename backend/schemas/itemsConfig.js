export default {
  name: 'itemsConfig',
  title: 'Items Config',
  type: 'document',
  fields: [
    {
      name: 'itemsPerPage',
      title: 'Items per page',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
  ],
}
