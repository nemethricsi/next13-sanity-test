'use client';

import { NextStudio } from 'next-sanity/studio';
import { config } from '@/sanity.config';

export const Cms = () => {
  return <NextStudio config={config} />;
};
