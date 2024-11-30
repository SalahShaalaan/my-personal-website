import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import Heading from "../UI/Heading";

import examsPic from "@/public/exams-project.png";
import healthcarePic from "@/public/healthcare-site.png";
import dashboardPic from "@/public/dashboard.png";

export default function Projects() {
  const projects = [
    {
      title: "Exams Management Dashboard",
      description:
        "Dashboard for Admin and Super Admin users, designed for managing student information, upcoming exams, and displaying exam results across various subjects. This dashboard is available in two languages: Arabic and English.",
      image: examsPic,
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
        "Protected Router",
      ],
      features: [
        "Multilingual support (Arabic and English)",
        "Role-based access control",
        "Comprehensive exam management",
        "Student information tracking",
        "Real-time result display",
      ],
      liveLink: "https://admin-and-super-admin-dashboard.vercel.app/",
      githubLink: "https://github.com/SalahShaalaan/exams-danagement-dashboard",
    },
    {
      title: "Healthcare Company Website",
      description:
        "A full website for healthcare business that provides information about the company, services, and contact details.",
      image: healthcarePic,
      technologies: [
        "React",
        "Next.JS",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Google Maps API",
      ],
      features: [
        "Interactive Location Finder",
        "Optimized Performance",
        "Comprehensive Facility Overview",
        "Professional Healthcare Team Profiles",
        "Ability to book consultation",
      ],
      liveLink: "https://website-healthcare-company.vercel.app/",
      githubLink:
        "https://github.com/SalahShaalaan/full-website-for-healthcare-componay",
    },
    {
      title: "Dashboard for E-commerce Platform",
      description:
        "dashboard application for managing business or website operations, dashbaord comes with 11 page in dark and light mode with ability to add members and new contacts",
      image: dashboardPic,
      technologies: [
        "React",
        "Next.JS",
        "JavaScript",
        "Chart.JS",
        "Redux - Redux Toolkit",
      ],
      features: [
        "Dark and Light Mode",
        "Advanced State Management",
        "Manage orders, customers and products",
        "Inbox page for receiving messages",
        "Show orders status that users are requested",
      ],
      liveLink: "https://dashboard-app-beta-ten.vercel.app/",
      githubLink:
        "https://github.com/SalahShaalaan/admin-dashboard-application",
    },
  ];

  return (
    <section className="py-20 min-h-screen container mx-auto px-4">
      <div className="text-center space-y-6 mb-20">
        <Heading
          title="Explore My Projects"
          quote="The beauty lies in simplicity."
          color="#ccf381"
        />
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}
            >
              {/* Image Container */}
              <div
                className={`
                ${index % 2 === 0 ? "-order-1" : "order-2"}`}
              >
                <div
                  className="relative overflow-hidden rounded-xl 
                  "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-700 hover:scale-110 w-auto h-auto"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="space-y-8">
                <h3 className="text-4xl font-bold text-[#ccf381] mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#ccf381]/10 text-[#ccf381] px-4 py-2 rounded-full text-sm
                        border border-[#ccf381]/20 hover:bg-[#ccf381]/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl text-[#ccf381] font-semibold">
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300 hover:text-[#ccf381] transition-colors duration-300"
                      >
                        <span className="text-[#ccf381] mr-2">➤</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-6 pt-4">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="flex items-center gap-2 bg-[#ccf381] text-[#4831d4] px-6 py-3 rounded-lg
                      font-semibold hover:opacity-90 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Live Demo
                  </Link>

                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center gap-2 border-2 border-[#ccf381] text-[#ccf381] px-6 py-3 
                      rounded-lg font-semibold hover:bg-[#ccf381] hover:text-[#4831d4] transition-all 
                      duration-300 hover:translate-y-[-2px]"
                  >
                    <FiGithub className="w-4 h-4" />
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
