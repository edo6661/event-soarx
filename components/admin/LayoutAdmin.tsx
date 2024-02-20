"use client"; //!  temp use client
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineEmojiEvents,
} from "react-icons/md";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface SidebarItem {
  id: string;
  title: string;
  icons: React.ReactNode;
  links: string;
}
const sidebarItems = [
  { id: "0", title: "Dashboard", icons: <RxDashboard />, links: "/admin/home" },
  {
    id: "1",
    title: "All Events",
    icons: <MdOutlineEmojiEvents />,
    links: "/admin/events",
  },
  {
    id: "2",
    title: "Ongoing Events",
    icons: <MdOutlineEmojiEvents />,
    links: "/admin/ongoing-events",
  },
  {
    id: "3",
    title: "Past Events",
    icons: <MdOutlineEmojiEvents />,
    links: "/admin/past-events",
  },
];

const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, onSetShowSidebar] = useState(false);

  return (
    // <AdminRoute>
    <div className="flex">
      <Sidebar
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />
      <Content
        onSidebarHide={() => {
          onSetShowSidebar(true);
        }}
      >
        {children}
      </Content>
    </div>
    // </AdminRoute>
  );
};

function Sidebar({
  onSidebarHide,
  showSidebar,
}: {
  onSidebarHide: () => void;
  showSidebar: boolean;
}) {
  const [selected, setSelected] = useState("0");

  return (
    <div
      className={clsx(
        "fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col bg-white text-white z-10",
        showSidebar ? "flex" : "hidden"
      )}
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center  sm:justify-center xl:justify-start p-2  sidebar-separator-top">
          <div className="sidebar-header-img">
            <Link href={"/"}>
              <Image
                src={"/images/SoarX-Logo.png"}
                width={0}
                height={0}
                sizes="100vw"
                className="img-responsive"
                alt="Banner"
              />
            </Link>
          </div>
          <div className="block sm:hidden xl:block ml-2 font-bold text-xl ">
            AR CLUB
          </div>
          <div className="flex-grow sm:hidden xl:block" />

          <AiOutlineClose
            className=" text-4xl block sm:hidden"
            onClick={onSidebarHide}
          />
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
        {sidebarItems.map((i) => (
          <MenuItem key={i.id} item={i} selected={selected} />
        ))}
      </div>

      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-bottom">
          <div className="block sm:hidden xl:block ml-2 font-bold ">
            {/* {auth?.user?.email} */}
            test email
          </div>
          <div className="flex-grow block sm:hidden xl:block" />
          <BsThreeDotsVertical className="block sm:hidden xl:block w-3 h-3" />
        </div>
      </div>
    </div>
  );
}

function MenuItem({
  item: { id, title, icons, links },
  selected,
}: {
  item: SidebarItem;
  selected: string;
}) {
  const pathname = usePathname();
  return (
    <Link href={links}>
      <div
        className={clsx(
          "w-full mt-6 flex items-center px-6 sm:px-0 xl:px-6 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer text-lg",
          pathname === links ? "sidebar-item-selected" : "sidebar-item"
        )}
      >
        {icons}
        <div className="block sm:hidden xl:block ml-2">{title}</div>
        <div className="block sm:hidden xl:block flex-grow" />
      </div>
    </Link>
  );
}

function Content({
  onSidebarHide,
  children,
}: {
  onSidebarHide: () => void;
  children: React.ReactNode;
}) {
  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const currentDate = getCurrentDate();

  return (
    <div className="w-full">
      <div className="flex w-full gap-10">
        <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
          .
        </div>
        <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
          <div className="w-full sm:flex p-2 mb-5 items-end pt-10">
            <div className="sm:flex-grow flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <MdOutlineKeyboardDoubleArrowRight />
                  <div className="ml-2">{currentDate}</div>
                </div>
              </div>
              <HiOutlineBars3BottomRight
                className="block sm:hidden text-3xl"
                onClick={onSidebarHide}
              />
            </div>
          </div>
          <div className="content-main ">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default LayoutAdmin;
