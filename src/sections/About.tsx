
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import NestjsIcon from "@/assets/icons/nestjs.svg";
import GitIcon from "@/assets/icons/git.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import CssIcon from "@/assets/icons/css3.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import Hobbies from "@/components/Hobbies";

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



export const AboutSection = () => {
  return (
    <div className="py-20" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimps Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col md:flex-row gap-8">
          <Card className="h-[320px] md:col-span-3 md:w-[60%]">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I useto craft exceptional
                digital experiences."
              className=""
            />
            <ToolboxItems tools={tools} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
            <ToolboxItems
              tools={tools}
              className="mt-6"
              itemsWrapperClassName="animate-move-right [animation-duration:15s]"
            />
          </Card>
          <Card className="h-[320px] md:w-[40%] p-0 flex flex-col">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm"
              className="px-6 py-6"
            />
            <Hobbies />
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
