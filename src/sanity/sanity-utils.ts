import { createClient, groq } from 'next-sanity';
import { config } from '@/sanity/config/client-config';
import { cache } from 'react';

interface Event {
  _id: string;
  title: string;
  slug: string;
}

const client = createClient({
  ...config,
});

const clientFetch = cache(client.fetch.bind(client));

export const getEvents = async (): Promise<Event[]> => {
  return clientFetch(groq`*[_type == "event"]{
    _id,
    title,
    "slug": slug.current,
  }`);
};

export const getEvent = async (slug: string): Promise<Event> => {
  return clientFetch(
    groq`*[_type == 'event' && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
  }`,
    { slug },
  );
};
