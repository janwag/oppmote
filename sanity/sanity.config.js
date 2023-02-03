import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schema from './schemas/schema'

export default defineConfig({
	title: 'ClassList',
	projectId: 'qmgpu00g',
	dataset: 'production',
	plugins: [deskTool(), visionTool()],
	schema: {
		types: schema,
	},
})
