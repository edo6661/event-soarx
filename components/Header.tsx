"use client"; //!  temp use client
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineMail } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
const Header = () => {
  const pathname = usePathname();

  const [showNavbar, setShowNavbar] = useState(false);

  if (pathname.includes("/admin")) return null;
  return (
    <header>
      <div className="mt-6">
        <nav id="main-navbar" className="navbar container rounded-lg ">
          <div className=" flex items-center justify-between">
            <Link href={"/"}>
              <div className="header-img flex items-center  ">
                <Image
                  src={"/images/SoarX Logo.png"}
                  width={0}
                  height={0}
                  className="img-header img-responsive"
                  sizes="100vw"
                  alt="Header Logo"
                />
              </div>
            </Link>
            <div
              className="mbl-bars"
              onClick={() => setShowNavbar(!showNavbar)}
            >
              <FaHamburger size={25} />
              <p>hamburger icon</p>
            </div>
            <div
              className={
                showNavbar
                  ? "flex items-center side-nav-flex justify-between gap-52 active"
                  : "flex items-center side-nav-flex justify-between gap-52"
              }
            >
              <div>
                <ul className="flex items-center nav-ul font-normal text-lg text-black gap-8">
                  <li
                    className={
                      pathname === "/" ? "active rounded-md" : "rounded-md"
                    }
                  >
                    <Link href="/">Home</Link>
                  </li>
                  <li
                  // className={
                  //   pathname === "/events" || Object.keys(query).length > 0
                  //     ? "active rounded-md"
                  //     : "rounded-md"
                  // }
                  >
                    <Link href="/events">Events</Link>
                  </li>
                  <li
                    className={
                      pathname === "/about" ? "active rounded-md" : "rounded-md"
                    }
                  >
                    <Link href="/about">About</Link>
                  </li>
                </ul>
              </div>
              <div className="btn-primary rounded-md white flex items-center gap-2">
                <Link href="/admin/home">Temporary Admin</Link>
              </div>
              {/* <div className="btn-primary rounded-md white flex items-center gap-2">
                <AiOutlineMail className="bg-transparent fill-white" />
                Contact Us
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
