export default {
  name: 'sideProducts',
  title: 'Side Products',
  type: 'document',
  fields: [
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
    },
  ],
}
