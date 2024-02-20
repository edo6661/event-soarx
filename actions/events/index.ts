"use server";

import { db } from "@/lib/db";
import { EventType } from "@/types/Event";
import { Event } from "@prisma/client";
import { revalidatePath } from "next/cache";

// ! i tried but does'nt work
const revalidatePaths = () => {
  revalidatePath("/admin/events");
  revalidatePath("/admin/ongoing-events");
  revalidatePath("/admin/past-events");
  revalidatePath("/");
  revalidatePath("/events");
};

export const addEvent = async (data: EventType) => {
  try {
    await db.event.create({
      data,
    });
    revalidatePath("/admin/events");
    revalidatePath("/admin/ongoing-events");
    revalidatePath("/admin/past-events");
    revalidatePath("/");
    revalidatePath("/events");
  } catch (err) {
    console.error(err);
    throw new Error("Failed to add event");
  }
};

export const deleteEvent = async (id: string) => {
  try {
    await db.event.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin/events");
    revalidatePath("/admin/ongoing-events");
    revalidatePath("/admin/past-events");
    revalidatePath("/");
    revalidatePath("/events");
  } catch (err) {
    console.error(err);
    throw new Error("Failed to delete event");
  }
};
