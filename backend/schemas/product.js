export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
      options: {
        list: [{title: 'Euro', value: '€'}],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shipping',
      title: 'Shipping',
      type: 'number',
      description: 'If set to 0 it will appear free shipping on the product',
    },
    {
      name: 'setPrevious',
      title: 'Set Previous',
      type: 'boolean',
    },
    {
      name: 'previusPrice',
      title: 'Previus Price',
      type: 'number',
      hidden: ({document}) => !document?.setPrevious,
    },
    {
      name: 'sale',
      title: 'Sale',
      type: 'boolean',
    },
  ],

  initialValue: {
    sale: false,
    setPrevious: false,
  },
}
