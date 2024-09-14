import projectdotnet from "@/assets/images/projectDotnet.png";
import tutoring from "@/assets/images/tutoring.png";
import myportfolio from "@/assets/images/myportfolio.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Yessine Agrebi",
    year: "2024",
    title: "Personal Portfolio",
    results: [
      { title: "Showcased professional projects and skills" },
      { title: "Implemented responsive design for mobile and desktop" },
      { title: "Integrated animations for smooth user experience" },
    ],
    link: "https://yessineagrebi.pro",
    image: myportfolio,
  },
  {
    company: "Yessine Agrebi",
    year: "2024",
    title: "Expense Management",
    results: [
      { title: "Built real-time expense tracking system" },
      { title: "Implemented data visualization for financial insights" },
      { title: "Integrated multi-user authentication and role management" },
    ],
    link: "https://yessineagrebi.pro",
    image: projectdotnet,
  },
  {
    company: "Yessine Agrebi",
    year: "2024",
    title: "Online Tutoring Platform",
    results: [
      { title: "Developed a scalable platform for tutors and students" },
      { title: "Implemented live video conferencing for virtual lessons" },
      { title: "Created scheduling and booking system" },
    ],
    link: "https://yessineagrebi.pro",
    image: tutoring,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 20}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 px-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-lg md:rounded-tl-lg"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
