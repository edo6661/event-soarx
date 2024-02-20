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

export const getOpenEvents = async () => {
  try {
    return await db.event.findMany({
      where: {
        availability: "Open",
      },
    });
  } catch (err) {
    console.error(err);
    throw new Error("Failed to get open events");
  }
};
export const getCloseEvents = async () => {
  try {
    return await db.event.findMany({
      where: {
        availability: "Closed",
      },
    });
  } catch (err) {
    console.error(err);
    throw new Error("Failed to get open events");
  }
};
