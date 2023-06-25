import Image from 'next/image';
import { getEvents } from '@/sanity/sanity-utils';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const Home = async () => {
  const events = await getEvents();

  return (
    <main className="flex h-full flex-col p-8">
      <h1 className="text-2xl font-bold">Events</h1>
      <ul>
        {events.map(({ title, _id, slug }) => (
          <li
            key={_id}
            className="text-lg text-blue-600 underline-offset-2 hover:underline"
          >
            <Link href={`/events/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
