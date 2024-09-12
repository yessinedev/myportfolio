"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "Camping",
    emoji: "⛺",
    left: "50%",
    top: "5%",
  },
  {
    title: "Movies",
    emoji: "🎬",
    left: "15%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "20%",
    top: "70%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "40%",
    top: "55%",
  },
  {
    title: "Reading",
    emoji: "🏋️‍♂️",
    left: "60%",
    top: "30%",
  },
];

export default function Hobbies() {
  const constraintRef = useRef(null);
  return (
    <div className="relative flex-1" ref={constraintRef}>
      {hobbies.map((hobby) => (
        <motion.div
          key={hobby.title}
          className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
          style={{
            left: hobby.left,
            top: hobby.top,
          }}
          drag
          dragConstraints={constraintRef}
        >
          <span className="font-medium text-gray-950">{hobby.title}</span>
          <span>{hobby.emoji}</span>
        </motion.div>
      ))}
    </div>
  );
}
