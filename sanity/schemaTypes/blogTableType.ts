import { ThListIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

/** Editable comparison / spec table for blog body (renders with site table UI). */
export const blogTableType = defineType({
  name: 'blogTable',
  title: 'Table',
  type: 'object',
  icon: ThListIcon,
  fields: [
    defineField({
      name: 'caption',
      title: 'Table title',
      type: 'string',
      description: 'Shown above the table (e.g. "Day Cycle vs Night Cycle").',
    }),
    defineField({
      name: 'headers',
      title: 'Column headers',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(2).max(4),
    }),
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'row',
          fields: [
            defineField({
              name: 'cells',
              title: 'Cells',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (Rule) => Rule.required().min(2),
            }),
          ],
          preview: {
            select: { cells: 'cells' },
            prepare({ cells }) {
              return { title: cells?.join(' · ') ?? 'Row' }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: 'caption', headers: 'headers' },
    prepare({ title, headers }) {
      return {
        title: title || 'Table',
        subtitle: headers?.join(' · '),
      }
    },
  },
})
