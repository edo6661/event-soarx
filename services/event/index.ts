"use server";

import { db } from "@/lib/db";

export const getEvents = async () => {
  try {
    return await db.event.findMany();
  } catch (err) {
    console.error(err);
    throw new Error("Failed to get events");
  }
};
