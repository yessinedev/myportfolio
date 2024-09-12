"use client";
import Link from "next/link";

export const Header = () => {
  
  const scrollToSection = (e: any, id:string) => {
    console.log("cliecked")
    e.preventDefault();
    let section = document.querySelector(id) as HTMLElement;;
    console.log(section)
    window.scrollTo({
      top: section?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <span onClick={(e) => scrollToSection(e, "#home")} className="nav-item">Home</span>
        <span onClick={(e) => scrollToSection(e, "#projects")} className="nav-item">Projects</span>
        <span onClick={(e) => scrollToSection(e, "#about")} className="nav-item">About</span>
        <span onClick={(e) => scrollToSection(e, "#contact")} className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          Contact
        </span>
      </nav>
    </div>
  );
};
