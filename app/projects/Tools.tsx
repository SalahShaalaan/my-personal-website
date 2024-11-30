import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiBootstrap,
  SiJavascript,
  SiFigma,
  SiAdobephotoshop,
  SiJest,
  SiGulp,
  SiGit,
} from "react-icons/si";
import Heading from "../UI/Heading";

export default function Tools() {
  const tools = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Jest", icon: <SiJest /> },
    { name: "Gulp.JS", icon: <SiGulp /> },
  ];

  return (
    <section className="bg-[##4831d4] py-20">
      <div className="px-4">
        <Heading
          title="Tools I Use"
          quote="Dream big, work hard"
          color="#ccf381"
        />
        <div className="border border/10 rounded-xl p-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col space-y-3 
                            transform transition-transform duration-300 
                            hover:-translate-y-2 hover:scale-110"
              >
                <div className="text-4xl text-white opacity-80 hover:opacity-100">
                  {tool.icon}
                </div>
                <span className="text-sm text-white/45 font-medium">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
