import LayoutAdmin from "@/components/admin/LayoutAdmin";
import React from "react";
import { getEvents } from "@/services/event";
import AdminEvents from "../_components/AdminEvents";

const Events = async () => {
  const events = await getEvents();
  return (
    <LayoutAdmin>
      <AdminEvents label="Events" events={events} />
    </LayoutAdmin>
  );
};

export default Events;
