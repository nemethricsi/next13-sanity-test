import { event } from '@/sanity/schemas/documents/event';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export const config = defineConfig({
  projectId,
  dataset,
  title: 'Next13 Sanity Studio',
  apiVersion: '2023-06-25',
  basePath: '/cms',
  plugins: [deskTool()],
  schema: { types: [event] },
});
