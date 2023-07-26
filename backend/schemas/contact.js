export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Phone',
          type: 'array',
          of: [{type: 'string'}],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'email',
          title: 'E-mail',
          type: 'array',
          of: [{type: 'string'}],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'location',
          title: 'Location',
          type: 'array',
          of: [{type: 'string'}],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'object',
      fields: [
        {
          name: 'questionBlock',
          title: 'Question Block',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'question',
                  title: 'Question',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'answer',
                  title: 'Answer',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
