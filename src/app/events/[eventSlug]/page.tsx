import { getEvent } from '@/sanity/sanity-utils';
import type { Metadata } from 'next';

interface SingleEventProps {
  params: {
    eventSlug: string;
  };
}

export async function generateMetadata({
  params: { eventSlug },
}: SingleEventProps): Promise<Metadata> {
  const { title } = await getEvent(eventSlug);

  return {
    title: `${title} | Test`,
  };
}

const SingleEvent = async ({ params: { eventSlug } }: SingleEventProps) => {
  const event = await getEvent(eventSlug);

  const { title, slug, _id } = event;

  return (
    <main className="p-8">
      <h1 className="mb-4 text-2xl font-bold">{title}</h1>
      <pre>{JSON.stringify(event, null, 4)}</pre>
    </main>
  );
};

export default SingleEvent;
