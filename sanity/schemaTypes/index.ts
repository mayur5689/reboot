import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import { authorType } from './authorType'
import { categoryType } from './categoryType'
import { blockContentType } from './blockContentType'
import { blogTableType } from './blogTableType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogTableType, blockContentType, postType, authorType, categoryType],
}
