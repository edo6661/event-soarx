import { getEvents } from "@/services/event";
import Image from "next/image";

export default async function Home() {
  const events = await getEvents();

  console.log(events);
  return (
    <main>
      {events.map((evt) => {
        return (
          <div key={evt.id}>
            <Image src={evt.image} alt={evt.title} width={200} height={200} />
            <h2>{evt.title}</h2>
          </div>
        );
      })}
    </main>
  );
}
