import Image from 'next/image';
import { getEvents } from '@/sanity/sanity-utils';

export const dynamic = 'force-dynamic';

const Home = async () => {
  const events = await getEvents();

  return (
    <main className="flex h-full flex-col p-8">
      <h1 className="text-2xl font-bold">Events:</h1>
      <ul>
        {events.map(({ title, _id }) => (
          <li key={_id}>{title}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
