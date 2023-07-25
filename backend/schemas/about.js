export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'sectionInfo',
      title: 'Section Info',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'text',
          title: 'Text',
          type: 'text',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'sectionNumber',
      title: 'Section Number',
      type: 'object',
      fields: [
        {
          name: 'createdProducts',
          title: 'Created Products',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'productsCategory',
          title: 'Products Category',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'happyCustomers',
          title: 'Happy Customers',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
}
