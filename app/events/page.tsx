import React, { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { Event } from "@prisma/client";
import { formatDate } from "@/utils";
import { getCloseEvents, getEvents, getOpenEvents } from "@/services/event";

const Events = async () => {
  const pastEvents = await getCloseEvents();
  const ongoingEvents = await getOpenEvents();
  return (
    <main>
      <section className="section ">
        <div className="container ">
          <div className="pt-24">
            <h1 className="text-5xl">Ongoing Events</h1>
          </div>
          <section className="all-events pt-8">
            {ongoingEvents.length > 0 ? (
              <div className="grid-4">
                {ongoingEvents.map((e) => (
                  <div className="events-box aim-box" key={e.id}>
                    <div className="events-img">
                      <Image
                        width={500}
                        height={500}
                        sizes="100vw"
                        src={e.image}
                        alt="Banner"
                        className="img-responsive"
                      />
                    </div>
                    <div className="event-content">
                      <h2 className="text-2xl font-medium">{e.title}</h2>
                      <p>{e.description}</p>
                      {/* <p className="pt-2">
                          {e.eventDesc.slice(0, 180) + "..."}
                        </p> */}
                      <p className="pt-2 flex items-center gap-2 font-medium">
                        <AiOutlineCalendar />
                        {formatDate(e.createdAt.toString())}
                      </p>
                      <div className="flex items-center gap-3">
                        <Link href={`/${e.title}`}>
                          <button className="btn-primary mt-4">View</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h1>No Ongoing Events Currently</h1>
            )}
          </section>
        </div>
      </section>
      <section className="pb-32">
        <div className="container ">
          <div className="">
            <h1 className="text-5xl">Past Events</h1>
          </div>

          <section className="all-events pt-8">
            {pastEvents.length > 0 ? (
              <div className="grid-4">
                {pastEvents.map((e) => (
                  <div className="events-box aim-box" key={e.id}>
                    <div className="events-img">
                      <Image
                        src={e.image}
                        alt="Banner"
                        className="img-responsive"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="event-content">
                      <h2 className="text-2xl font-medium">{e.title}</h2>
                      <p className="pt-2">
                        {e.description.slice(0, 180) + "..."}
                      </p>
                      <p className="pt-2 flex items-center gap-2 font-medium">
                        <AiOutlineCalendar />
                        {formatDate(e.createdAt.toString())}
                      </p>
                      <div className="flex items-center gap-3">
                        <Link href={`/${e.title}`}>
                          <button className="btn-primary mt-4">View</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h1>No Past Events Currently</h1>
            )}
          </section>
        </div>
      </section>
    </main>
  );
};

export default Events;
