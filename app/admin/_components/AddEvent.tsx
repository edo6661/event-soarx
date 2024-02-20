"use client";
import React, { SyntheticEvent, useState, useTransition } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Dropdown } from "primereact/dropdown";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import LayoutAdmin from "@/components/admin/LayoutAdmin";
import { addEvent } from "@/actions/events";
import { useRouter } from "next/navigation";
const AddEvent = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [location, setLocation] = useState("");
  const [slug, setSlug] = useState("");
  const [availability, setAvailability] = useState({
    name: "Open",
    code: "O",
  });
  const availableOptions = [
    { name: "Open", code: "O" },
    { name: "Closed", code: "C" },
  ];

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const updatedAt = new Date();
    const ownerId = "65d4739e1f6709bc9db8b94e";

    const parsedDate = date ? new Date(date) : new Date();

    const data = {
      title,
      description,
      image,
      date: parsedDate,
      location,
      slug,
      availability: availability.name,
      updatedAt,
      ownerId,
    };

    startTransition(() => {
      addEvent(data).then(() => {
        router.push("/admin/events");
      });
    });
  };

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-medium">Add Event</h2>
      {isPending && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <form className="flex flex-col gap-5 pt-9" onSubmit={handleSubmit}>
        <div className="flex w-full gap-5 e-nfg">
          <InputText
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Event Title"
          />
          <Calendar
            value={date}
            onChange={(e) => setDate(e.value as Date)}
            className="w-full"
            placeholder="Event Date"
          />
        </div>
        <div className="flex w-full e-nfg  gap-5">
          <InputText
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Event Location"
          />

          <InputText
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="Event Slug"
          />
        </div>

        <div className="flex w-full e-nfg  gap-5">
          <InputText
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Event Image"
          />
          <Dropdown
            value={availability}
            onChange={(e) => setAvailability(e.value)}
            options={availableOptions}
            optionLabel="name"
            placeholder="Availability"
            className="w-full md:w-14rem"
          />
        </div>
        <InputTextarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          cols={30}
          placeholder="Event Description"
        />

        <button className="btn-primary" type="submit" disabled={isPending}>
          Submit
        </button>
      </form>
    </LayoutAdmin>
  );
};

export default AddEvent;
