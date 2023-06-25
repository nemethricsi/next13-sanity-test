import Image from 'next/image';
import { getEvents } from '@/sanity/sanity-utils';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const Home = async () => {
  const events = await getEvents();

  return (
    <main className="flex h-full flex-col p-8">
      <h1 className="ms-4 text-2xl font-bold">Events</h1>
      <ul className="flex flex-col gap-4">
        {events.map(({ title, _id, slug }) => (
          <li key={_id}>
            <Link
              href={`/events/${slug}`}
              className="block w-fit rounded-lg p-4 text-lg text-blue-600 underline-offset-2  transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
