import { UserIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const authorType = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
            },
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'bio',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                }),
            ],
        }),
        defineField({
            name: 'role',
            title: 'Role / title',
            type: 'string',
            description: 'e.g. Physiotherapist, R3BOOT Recovery Centre',
        }),
        defineField({
            name: 'credentials',
            title: 'Credentials',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Short credential chips shown on blog author cards.',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
})
