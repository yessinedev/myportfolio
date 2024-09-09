import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import NestjsIcon from "@/assets/icons/nestjs.svg";
import GitIcon from "@/assets/icons/git.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import CssIcon from "@/assets/icons/css3.svg";
import { TechIcon } from "@/components/TechIcon";
import MapImage from "@/assets/images/map2.png";
import MemojiSmile from "@/assets/images/memoji-smile.png";
import Image from "next/image";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const tools = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "NextJs",
    iconType: NextjsIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "NestJs",
    iconType: NestjsIcon,
  },
  {
    title: "TailwindCss",
    iconType: TailwindIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: '5%',
    top: '5%'
  },
  {
    title: "Camping",
    emoji: "⛺",
    left: '50%',
    top: '5%'
  },
  {
    title: "Movies",
    emoji: "🎬",
    left: '15%',
    top: '35%'
  },
  {
    title: "Music",
    emoji: "🎵",
    left: '20%',
    top: '70%'
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: '40%',
    top: '55%'
  },
  {
    title: "Reading",
    emoji: "🏋️‍♂️",
    left: '60%',
    top: '30%'
  },
 

];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimps Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px] md:col-span-3">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I useto craft exceptional
                digital experiences."
              className=""
            />
            <ToolboxItems tools={tools} className="" />
            <ToolboxItems
              tools={tools}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm"
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          {/* <Card className="h-[320px] p-0">
            <Image src={MapImage} alt="map" className="h-full w-full object-cover object-left-top" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <Image src={MemojiSmile} alt="memoji" className="size-20" />
            </div>
          </Card> */}
        </div>
      </div>
    </div>
  );
};
