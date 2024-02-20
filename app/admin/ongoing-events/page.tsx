import React from "react";
import { getOpenEvents } from "@/services/event";
import LayoutAdmin from "@/components/admin/LayoutAdmin";
import AdminEvents from "../_components/AdminEvents";

const OnGoing = async () => {
  const events = await getOpenEvents();

  return (
    <LayoutAdmin>
      <AdminEvents events={events} label="Ongoing Events" />;
    </LayoutAdmin>
  );
};

export default OnGoing;
