import { createClient, groq } from 'next-sanity';
import { config } from '@/sanity/config/client-config';
import { cache } from 'react';

interface Event {
  _id: string;
  title: string;
}

const client = createClient({
  ...config,
});

const clientFetch = cache(client.fetch.bind(client));

export const getEvents = async (): Promise<Event[]> => {
  return clientFetch(groq`*[_type == "event"]{
    _id,
    title
  }`);
};
