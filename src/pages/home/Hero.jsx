import banner from "@/assets/images/aboutus.jpg";
import { useEffect, useState } from "react";

import {
  Calendar,
  Megaphone,
  PackageOpen,
  Palette,
  Trophy,
  User,
  Users,
} from "lucide-react";
import { announcements } from "./announcements";
import { leaders } from "./Leadership";
function Hero() {
  const [selectedAnnouncemnet, setSelectedAnnouncement] = useState("all");
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);
  const announcementIcon = {
    sports: <Trophy size={20} />,
    arts: <Palette size={20} />,
    others: <Megaphone size={20} />,
    meetups: <Users size={20} />,
  };

  useEffect(() => {
    let filtered =
      selectedAnnouncemnet == "all"
        ? announcements
        : announcements.filter((el) => {
            return selectedAnnouncemnet == "sports" && el?.category == "sports"
              ? el
              : selectedAnnouncemnet == "arts" && el?.category == "arts"
              ? el
              : selectedAnnouncemnet == "meetups" && el?.category == "meetups"
              ? el
              : selectedAnnouncemnet == "others" && el;
          });
    setFilteredAnnouncements(filtered);
  }, [selectedAnnouncemnet]);

  return (
    <div className="relative">
      {/* <div className={`absolute inset-0  mix-blend-multiply`}></div> */}
      <div>
        <div
          className="
  inset-0 flex h-[600px]  relative p-6 flex-col justify-center items-center text-center px-4
  bg-[radial-gradient(circle_at_top_right,#ffcab9,transparent_40%),radial-gradient(circle_at_bottom_left,#ffcab9,transparent_40%)]
"
        >
          <div
            style={{ backgroundImage: `url(${banner})` }}
            className="absolute inset-0 flex flex-1 opacity-10 
             bg-center bg-no-repeat bg-cover
             justify-center items-center overflow-hidden"
          ></div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  drop-shadow-lg">
            {" "}
            LBS College <span className="text-[#e4744b]">Alumni </span>
            Association
          </h2>
          <p className="text-sm sm:text-lg text-gray-500">
            Connecting generations of excellence. Stay updated with
            announcements from sports, arts, and more. Join our thriving
            community of alumni.
          </p>
          <div className="mt-16 opacity-100 z-10 border-[#e4744b] bg-[#ffdecd] border  rounded-xl p-8 text-center animate-slide-up">
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  5000+
                </div>
                <p className="text-black">Active Alumni Members</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-black">Annual Events &amp; Meetups</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-black">Community Driven</p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="about"
          className="w-full px-5 mt-15 sm:p-15 text-sm sm:text-lg bg-[#f8f3f2] min-h-[300px] text-center font-bold items-center flex flex-col justify-center"
        >
          <h1 className="text-2xl sm:text-4xl  ">
            Uniting Alumni, Building Futures
          </h1>
          <p className=" max-w-[900px] text-gray-500 font-normal">
            The LBS College Alumni Association is a vibrant community dedicated
            to fostering lifelong connections among our graduates. We believe in
            the power of unity and shared experiences to create meaningful
            impact.
          </p>
          <div className="justify-between my-15 max-w-[1400px] items-center gap-5 mt-15  grid grid-cols-3">
            <div
              className="card rounded-lg bg-white p-5 h-full text-start col-span-3 md:col-span-1"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
            >
              <div className="rounded-md flex justify-center items-center mb-2 bg-[#F9E3DC] w-20 p-3 text-3xl">
                🤝
              </div>
              <h3 className="font-semibold text-xl mb-2">
                Connect & Collaborate
              </h3>
              <p className=" max-w-[900px] text-gray-500 font-normal">
                Reconnect with classmates, build professional networks, and
                collaborate on meaningful projects that drive innovation and
                growth across industries.
              </p>
            </div>
            <div
              className="card rounded-lg bg-white h-full p-5 text-start col-span-3 md:col-span-1"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
            >
              <div className="rounded-md flex justify-center items-center mb-2 bg-[#F9E3DC] w-20 p-3 text-3xl">
                🌟
              </div>
              <h3 className="font-semibold text-xl mb-2">Celebrate Success</h3>
              <p className=" max-w-[900px] text-gray-500 font-normal">
                Celebrate the achievements of our alumni community. From
                entrepreneurial ventures to leadership roles, we take pride in
                every success story.
              </p>
            </div>
            <div
              className="card rounded-lg bg-white h-full p-5 text-start col-span-3 md:col-span-1"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
            >
              <div className="rounded-md flex justify-center items-center mb-2 bg-[#F9E3DC] w-20 p-3 text-3xl">
                🎓
              </div>
              <h3 className="font-semibold text-xl mb-2">Give Back & Mentor</h3>
              <p className=" max-w-[900px] text-gray-500 font-normal">
                Share your expertise with current students and emerging alumni.
                Mentorship creates a cycle of growth and excellence that
                strengthens our institution.
              </p>
            </div>
          </div>
          <div className="bg-[#F7E5E1] w-full sm:px-15 px-5 flex justify-center items-center flex-col max-w-[1400px] bg-linear-to-r from-primary/10 to-accent/10 rounded-lg p-12 border border-primary/20 animate-scale-in">
            <h3>Our Mission</h3>
            <p className=" max-w-[900px] font-normal">
              To foster a thriving global community of LBS College alumni united
              by shared values, mutual support, and a commitment to excellence.
              We empower our members to achieve their aspirations, contribute
              meaningfully to society, and maintain lifelong bonds with their
              alma mater.
            </p>
          </div>
        </div>
        <div
          id="events"
          className="flex px-5 sm:px-15 justify-center items-center"
        >
          <div className="w-full max-w-[1400px] self-center flex justify-center items-center flex-col py-15">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  drop-shadow-lg">
              {" "}
              Latest <span className="text-[#e4744b]">Events </span>
            </h2>
            <p className="text-sm sm:text-lg mt-5 text-gray-500">
              Stay informed about events, updates, and opportunities from our
              vibrant alumni community
            </p>
            <div className="w-full mt-5  sm:px-15 px-5 flex-wrap max-w-[800px] flex gap-3 justify-center items-center">
              <button
                className={`rounded-md hover:scale-105 text-[#e4744b] transition-transform p-1 px-3 ${
                  selectedAnnouncemnet == "all" && "bg-[#e4744b] text-white"
                }`}
                onClick={() => setSelectedAnnouncement("all")}
                style={{ border: "0.1px solid #e4744b" }}
              >
                All
              </button>
              <button
                className={`rounded-md hover:scale-105 text-[#e4744b] transition-transform p-1 px-3 ${
                  selectedAnnouncemnet == "sports" && "bg-[#e4744b] text-white"
                }`}
                style={{ border: "0.1px solid #e4744b" }}
                onClick={() => setSelectedAnnouncement("sports")}
              >
                Sports
              </button>
              <button
                className={`rounded-md hover:scale-105 text-[#e4744b] transition-transform p-1 px-3 ${
                  selectedAnnouncemnet == "meetups" && "bg-[#e4744b] text-white"
                }`}
                style={{ border: "0.1px solid #e4744b" }}
                onClick={() => setSelectedAnnouncement("meetups")}
              >
                Meetups
              </button>
              <button
                className={`rounded-md hover:scale-105 text-[#e4744b] transition-transform p-1 px-3 ${
                  selectedAnnouncemnet == "Others" && "bg-[#e4744b] text-white"
                }`}
                style={{ border: "0.1px solid #e4744b" }}
                onClick={() => setSelectedAnnouncement("Others")}
              >
                Others
              </button>
              <button
                className={`rounded-md hover:scale-105 text-[#e4744b] transition-transform p-1 px-3 ${
                  selectedAnnouncemnet == "arts" && "bg-[#e4744b] text-white"
                }`}
                style={{ border: "0.1px solid #e4744b" }}
                onClick={() => setSelectedAnnouncement("arts")}
              >
                Arts
              </button>
            </div>
            {filteredAnnouncements?.length ? (
              <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAnnouncements.map((el, ind) => (
                  <div
                    key={ind}
                    className="group bg-card border border-border rounded-xl p-6
                    hover:shadow-xl hover:border-primary/50
                    transition-all duration-300 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className="bg-[#e4744b] mb-2 w-[45px] p-3 text-white rounded-md
                        group-hover:scale-110 transition-transform  duration-300"
                      >
                        {announcementIcon[el.category]}
                      </div>

                      <span
                        className="font-semibold text-xl
                        group-hover:text-primary transition-colors duration-300"
                      >
                        {el?.eventTitle}
                      </span>

                      <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                        {el?.description}
                      </p>
                    </div>

                    <div className="w-full mt-3 pt-3 border-t border-gray-300">
                      <div className="flex gap-1 items-center">
                        <Calendar size={13} />
                        <p className="text-gray-500 text-xs">
                          {el?.conductDate}
                        </p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <User size={13} />
                        <p className="text-gray-500 text-xs">{el?.committee}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="group bg-card border border-border rounded-xl p-6
                hover:shadow-xl hover:border-primary/50 mt-5 text-[#e4744b]
                transition-all duration-300 h-68 flex flex-col justify-center items-center w-68"
              >
                <PackageOpen size={30} />
                No data
              </div>
            )}
          </div>
        </div>
        <div
          id="leaders"
          className="flex px-5 sm:px-15 max-w-[1400px] mx-auto justify-center items-center flex-col mt-15"
        >
          <h2 className="text-4xl text-center sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Meet Our <span className="text-[#e4744b]">Leadership </span> Panel
          </h2>
          <p className=" max-w-[900px] text-gray-500 text-center font-normal">
            Dedicated personals guiding our alumni association with passion and
            expertise
          </p>
          <div
            className="w-full mb-15 mt-10 grid md:grid-cols-2 place-items-center
              grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {leaders?.map((el, ind) => (
              <div>
                <div
                  key={ind}
                  style={{ backgroundImage: `url(/${el?.img})` }}
                  className="group  relative rounded-md bg-center bg-no-repeat bg-cover
               sm:w-62 w-36  h-36 sm:h-68 border border-border overflow-hidden
               transition-transform duration-300 ease-out "
                >
                  {/* Overlay */}
                  <div
                    className="absolute w-full bg-black/60
                  sm:opacity-0 opacity-100 group-hover:opacity-100
                 transition-opacity duration-300
                 flex flex-col items-center h-16 bottom-0 justify-center text-white"
                  >
                    <div className="text-lg font-semibold">{el?.name}</div>
                    <div className="text-sm">{el?.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section
          id="contact"
          className="py-20 bg-linear-to-b from-background to-muted/20"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Have questions or suggestions? We'd love to hear from you. Reach
                out to us through any of our contact channels and we'll respond
                as soon as possible.
              </p>
            </div>
            <div className="flex flex-wrap items-stretch justify-center gap-6 max-w-6xl mx-auto">
              <div
                data-slot="card"
                className="
  bg-card text-card-foreground
  flex flex-col gap-6
  rounded-xl shadow-sm p-6 border-2
  hover:border-primary/50
  transition-all duration-300
  hover:shadow-lg hover:-translate-y-1
  cursor-pointer
  animate-slide-in-left
  flex-1 min-w-[280px] max-w-[360px]
"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail w-8 h-8 text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Email Us
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Send us a message anytime
                  </p>
                  <p className="text-sm text-primary font-medium break-all">
                    alumni@lbscollege.edu
                  </p>
                  <a
                    href="mailto:alumni@lbscollege.edu"
                    className="inline-flex items-center justify-center gap-2
    rounded-md text-sm font-medium transition-all
    h-9 px-4 py-2 mt-4 w-full
    bg-primary/10 text-primary
    hover:bg-primary hover:text-white"
                  >
                    Send Email
                  </a>
                </div>
              </div>
              <div
                data-slot="card"
                className="
  bg-card text-card-foreground
  flex flex-col gap-6
  rounded-xl shadow-sm p-6 border-2
  hover:border-primary/50
  transition-all duration-300
  hover:shadow-lg hover:-translate-y-1
  cursor-pointer
  animate-slide-in-left
  flex-1 min-w-[280px] max-w-[360px]
"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone w-8 h-8 text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Call Us
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Mon-Fri 9AM-5PM
                  </p>
                  <p className="text-sm text-primary font-medium">
                    +91 123 456 7890
                  </p>
                  <a
                    href="tel:+919072238717"
                    className="inline-flex items-center justify-center gap-2
    rounded-md text-sm font-medium transition-all
    h-9 px-4 py-2 mt-4 w-full
    bg-primary/10 text-primary
    hover:bg-primary hover:text-white"
                  >
                    Make a Call
                  </a>
                </div>
              </div>
              <div
                data-slot="card"
                className="
  bg-card text-card-foreground
  flex flex-col gap-6
  rounded-xl shadow-sm p-6 border-2
  hover:border-primary/50
  transition-all duration-300
  hover:shadow-lg hover:-translate-y-1
  cursor-pointer
  animate-slide-in-left
  flex-1 min-w-[280px] max-w-[360px]
"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-circle w-8 h-8 text-primary"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Quick response guaranteed
                  </p>
                  <p className="text-sm text-primary font-medium">
                    +91 123 456 7890
                  </p>
                  <a
                    href="https://wa.me/+919072238717?text=Hello,%20I%20am%20an%20LBS%20Alumni%20and%20need%20to%20join%20the%20association."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2
    rounded-md text-sm font-medium transition-all
    h-9 px-4 py-2 mt-4 w-full
    bg-primary/10 text-primary
    hover:bg-primary hover:text-white"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
              {/* <div
                data-slot="card"
                className="bg-card animation-delay: 0.3s; text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm p-6 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-in-right"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin w-8 h-8 text-primary"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Visit Us
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Come meet us in person
                  </p>
                  <p className="text-sm text-primary font-medium">
                    LBS College Campus
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Alumni Office, 2nd Floor
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <div
          className="grid p-15 grid-cols-1 md:grid-cols-4 
            justify-items-start md:justify-items-center items-start
            gap-8  text-white text-sm sm:text-md bg-black "
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-3 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold text-lg">
                LBSCEKB
              </div>
              <span className="font-semibold text-lg">Alumni</span>
            </div>
            <p className="">
              Connecting generations of excellence and fostering lifelong
              relationships.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 ">
              <li>
                <a
                  href="#about"
                  className="inline-block transition-transform duration-200 hover:scale-105"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="inline-block transition-transform duration-200 hover:scale-105"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#leaders"
                  className="inline-block transition-transform duration-200 hover:scale-105"
                >
                  Leaders
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-block transition-transform duration-200 hover:scale-105"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 ">
              <li className="flex items-start sm:items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <a
                  href="mailto:alumni@lbs.edu"
                  className="hover:scale-102 transition-colors"
                >
                  alumni@lbs.edu
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a
                  href="tel:+919876543210"
                  className="hover:scale-102 transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Banglore, Karnataka</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#"
                className="w-10 hover:scale-110 h-10 bg-background/20 rounded-lg flex items-center justify-center hover:bg-background/40 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 hover:scale-110 h-10 bg-background/20 rounded-lg flex items-center justify-center hover:bg-background/40 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 hover:scale-110 h-10 bg-background/20 rounded-lg flex items-center justify-center hover:bg-background/40 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 hover:scale-110 h-10 bg-background/20 rounded-lg flex items-center justify-center hover:bg-background/40 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
