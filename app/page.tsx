"use client";
import Image from "next/image";
import { FaCode } from "react-icons/fa6";
import { GoTerminal } from "react-icons/go";
import { LuBinary } from "react-icons/lu";
import { IoMdDownload } from "react-icons/io";
import { CiMail, CiPhone } from "react-icons/ci";

import { SiGithub, SiFacebook, SiX, SiLinkedin } from "react-icons/si";
import myImage from "@/public/my-photo.png";
import Nav from "./UI/Nav";
import Link from "next/link";

export default function Home() {
  const socialLinks = [
    {
      icon: <SiGithub className="w-6 h-6 text-[#4831d4]" />,
      href: "https://github.com/SalahShaalaan",
      label: "GitHub",
    },
    {
      icon: <SiLinkedin className="w-6 h-6 text-[#4831d4]" />,
      href: "https://www.linkedin.com/in/salah-shaalaan/",
      label: "LinkedIn",
    },
    {
      icon: <SiX className="w-6 h-6 text-[#4831d4]" />,
      href: "https://x.com/salah_shaalaan",
      label: "Twitter",
    },
    {
      icon: <SiFacebook className="w-6 h-6 text-[#4831d4]" />,
      href: "https://www.facebook.com/salah.a.shalaan",
      label: "Facebook",
    },
  ];

  const programmingShapes = [
    {
      icon: <FaCode className="w-8 h-8 text-[#ccf381]/20" />,
      position: "top-20 left-10",
    },
    {
      icon: <GoTerminal className="w-10 h-10 text-[#ccf381]/20" />,
      position: "bottom-32 left-20",
    },
    {
      icon: <LuBinary className="w-12 h-12 text-[#ccf381]/20" />,
      position: "top-40 left-32",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden pt-14 md:pt-0">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 w-full md:w-[70%] bg-[#4831d4]" />
        <div className="absolute right-0 top-0 w-0 md:w-[30%] h-full bg-[#ccf381]" />
      </div>
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 w-full md:w-[70%] bg-[#4831d4]" />
        <div className="absolute right-0 top-0 w-0 md:w-[30%] h-full bg-[#ccf381]" />
      </div>

      {/* Programming Icons */}
      {programmingShapes.map((shape, index) => (
        <div
          key={index}
          className={`absolute ${shape.position} hidden lg:block`}
        >
          {shape.icon}
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
          {/* Social Media Sidebar */}
          <div className="hidden lg:flex flex-col gap-8 lg:col-span-1 justify-center items-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="backdrop-blur-md bg-white/20 p-3 rounded-xl shadow-lg hover:translate-x-1 transition-all border border-white/10"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Content Section */}
          <div className="space-y-8 text-center lg:text-left lg:col-span-5">
            <div className="space-y-6">
              <span
                className={`name italic inline-block bg-[#ccf381] text-[#4831d4] px-4 py-2 rounded-full text-sm font-medium`}
              >
                Hello, I&apos;m Salah Shaalaan, Nice To have you here!
              </span>
              <h1 className="position text-4xl md:text-5xl lg:text-6xl font-black text-[#ccf381] leading-wide">
                Software Engineer
              </h1>
              <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
                Front-End Developer that enjoys building high performance and
                fully responsive web applications with a focus on user
                experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start font-medium">
              <Link
                href="https://wa.me/+201064928120"
                target="_blank"
                className="flex items-center gap-2 bg-[#ccf381] text-[#4831d4] px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                <CiPhone className="w-5 h-5" />
                WhatsApp
              </Link>
              <Link
                href="mailto:salah.shaalaan.dev@gmail.com"
                target="_blank"
                className="flex items-center gap-2 bg-[#ccf381] text-[#4831d4] px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                <CiMail className="w-5 h-5" />
                Email Me
              </Link>
              <Link
                href="/Salah-Shaalaan Resume.pdf"
                target="_blank"
                className="flex items-center gap-2 border-2 border-[#ccf381] text-[#ccf381] px-6 py-3 rounded-xl hover:bg-[#ccf381] hover:text-[#4831d4] transition-colors"
              >
                <IoMdDownload className="w-5 h-5" />
                Download CV
              </Link>
            </div>

            {/* Mobile Social Links */}
            <div className="flex gap-4 justify-center lg:hidden pt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="backdrop-blur-md bg-white/20 p-3 rounded-xl shadow-lg border border-white/10"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative lg:col-span-6">
            <div className="relative max-w-md mx-auto">
              {/* Decorative Shapes */}
              <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-[#ccf381] opacity-20 rounded-2xl rotate-12" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border-2 border-[#ccf381] opacity-20 rounded-full" />
              <div className="absolute top-1/2 -left-20 w-12 h-12 bg-[#ccf381] opacity-20 rounded-lg transform rotate-45" />
              <div className="absolute top-1/4 -right-6 w-16 h-16 border-2 border-[#ccf381] opacity-20 rounded-full" />
              <div className="absolute bottom-0 -left-20 w-8 h-8 bg-[#ccf381] opacity-20 transform rotate-12" />

              {/* Main Image Container */}
              <div className="relative">
                <div className="absolute w-full h-full border border-white rounded transform translate-x-6 translate-y-6" />
                <Image
                  src={myImage}
                  alt="Professional Developer"
                  width={500}
                  height={500}
                  className="relative z-10 w-full h-full object-cover rounded shadow-2xl"
                  priority
                  quality={100}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </main>
  );
}
