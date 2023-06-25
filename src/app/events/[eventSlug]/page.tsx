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

  const { title, slug, _id: id } = event;

  return (
    <main className="ms-4 p-8">
      <h1 className="mb-4 text-2xl font-bold">{title}</h1>
      <p>{id}</p>
      <p>{slug}</p>
    </main>
  );
};

export default SingleEvent;
