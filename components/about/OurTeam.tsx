import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
const OurTeam = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-center">Our Team</h1>
        <div className="our-team-grid mt-10">
          <div className="team-box-wrap">
            <div className="our-team-box">
              <div className="otb-img">
                <Image
                  src={"/images/banner1.avif"}
                  width={0}
                  sizes="100vw"
                  height={0}
                  className="img-responsive"
                  alt="team"
                />
              </div>
              <h2 className="text-xl font-medium">Hanok Shrestha</h2>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis, assumenda.
              </p>
            </div>
            <div className="social-icons">
              <FaFacebookF className="social-logos" />
            </div>
          </div>
          <div className="team-box-wrap">
            <div className="our-team-box">
              <div className="otb-img">
                <Image
                  src={"/images/banner1.avif"}
                  width={0}
                  sizes="100vw"
                  height={0}
                  className="img-responsive"
                  alt="team-2"
                />
              </div>
              <h2 className="text-xl font-medium">Hanok Shrestha</h2>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis, assumenda.
              </p>
            </div>
            <div className="social-icons">
              <FaFacebookF className="social-logos" />
            </div>
          </div>
          <div className="team-box-wrap">
            <div className="our-team-box">
              <div className="otb-img">
                <Image
                  src={"/images/banner1.avif"}
                  width={0}
                  sizes="100vw"
                  height={0}
                  className="img-responsive"
                  alt="banner-1"
                />
              </div>
              <h2 className="text-xl font-medium">Hanok Shrestha</h2>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis, assumenda.
              </p>
            </div>
            <div className="social-icons">
              <FaFacebookF className="social-logos" />
            </div>
          </div>
          <div className="team-box-wrap">
            <div className="our-team-box">
              <div className="otb-img">
                <Image
                  src={"/images/banner1.avif"}
                  width={0}
                  sizes="100vw"
                  height={0}
                  className="img-responsive"
                  alt="banner-2"
                />
              </div>
              <h2 className="text-xl font-medium">Hanok Shrestha</h2>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis, assumenda.
              </p>
            </div>
            <div className="social-icons">
              <FaFacebookF className="social-logos" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
