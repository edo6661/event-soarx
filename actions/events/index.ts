"use server";

import { db } from "@/lib/db";
import { EventType } from "@/types/Event";
import { Event } from "@prisma/client";
import { revalidatePath } from "next/cache";

const revalidatePaths = () => {
  revalidatePath("/admin/events/new");
  revalidatePath("/");
};

export const addEvent = async (data: EventType) => {
  try {
    await db.event.create({
      data,
    });
    revalidatePaths();
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
    revalidatePaths();
  } catch (err) {
    console.error(err);
    throw new Error("Failed to delete event");
  }
};
