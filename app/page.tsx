import Discord from "@/components/home/Discord";
import Events from "@/components/home/Events";
import HomeSlider from "@/components/home/HomeSlider";
import OurAim from "@/components/home/OurAim";
import Partners from "@/components/home/Partners";
import PressClippings from "@/components/home/PressClippings";
import Testimonial from "@/components/home/Testimonial";
import { getEvents } from "@/services/event";

export default async function Home() {
  const events = await getEvents();

  return (
    <main>
      <HomeSlider />
      <OurAim />
      <Events allEvents={events} />
      <Partners />
      <PressClippings />
      <Testimonial />
      <Discord />
    </main>
  );
}
