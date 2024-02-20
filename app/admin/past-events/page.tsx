import LayoutAdmin from "@/components/admin/LayoutAdmin";
import { getCloseEvents, getEvents } from "@/services/event";
import React from "react";
import AdminEvents from "../_components/AdminEvents";

const PastEvent = async () => {
  const events = await getCloseEvents();
  return (
    <LayoutAdmin>
      <AdminEvents events={events} label="Past Events" />
    </LayoutAdmin>
  );
};

export default PastEvent;
