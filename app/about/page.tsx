import OurTeam from "@/components/about/OurTeam";
import Discord from "@/components/home/Discord";
import OurAim from "@/components/home/OurAim";
import Partners from "@/components/home/Partners";
import PressClippings from "@/components/home/PressClippings";
import Testimonial from "@/components/home/Testimonial";

export default async function Home() {
  return (
    <main>
      <div className="pt-52" />

      <OurAim />
      <Partners />
      <PressClippings />
      <OurTeam />
      <Testimonial />
      <Discord />
    </main>
  );
}
