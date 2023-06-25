import type { Metadata } from 'next';
import { metadata as studioMetadata } from 'next-sanity/studio/metadata';

import { Cms } from '@/app/cms/[[...index]]/Cms';

export const metadata: Metadata = {
  ...studioMetadata,
  viewport: `${studioMetadata.viewport}, interactive-widget=resizes-content`,
};

export default function StudioPage() {
  return <Cms />;
}
