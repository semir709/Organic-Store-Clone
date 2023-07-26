export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'mainSection',
      title: 'Main Section',
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
          type: 'string',
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
      ],
    },
    {
      name: 'bestSellingProducts',
      title: 'Best Selling Products',
      type: 'object',
      fields: [
        {
          name: 'products',
          title: 'Products',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'product'}]}],
        },
      ],
    },
    {
      name: 'categorySection',
      title: 'Category Section',
      type: 'object',
      fields: [
        {
          name: 'category',
          title: 'Category',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'titleCategory',
                  title: 'Title Category',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'textCategory',
                  title: 'Text Category',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'imageCategory',
                  title: 'Image Category',
                  type: 'image',
                  fields: [
                    {
                      name: 'captionImageCategory',
                      title: 'Caption',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'trendingProducts',
      title: 'Trending Products',
      type: 'object',
      fields: [
        {
          name: 'products',
          title: 'Products',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'product'}]}],
        },
      ],
    },
    {
      name: 'custumerReviews',
      title: 'Section Customer Reviews',
      type: 'object',
      fields: [
        {
          name: 'imageReviewsSection',
          title: 'Image Reviews Section',
          type: 'object',
          fields: [
            {
              name: 'titleReviews',
              title: 'Title Reviews',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'textReviews',
              title: 'Text Reviews',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'imageReviews',
              title: 'Image Reviews',
              type: 'image',
              fields: [
                {
                  name: 'captionImageReviews',
                  title: 'Caption',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
              ],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: 'reviewsList',
          title: 'Reviews',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [
                {
                  type: 'reviews',
                },
              ],
            },
          ],
          validation: (Rule) => Rule.max(2),
        },
      ],
    },
  ],
}
