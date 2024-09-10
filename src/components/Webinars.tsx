"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function Webinars() {
  const webinars = [
    {
      title: "Mastering the Piano: Techniques for Intermediate Players",
      description:
        "Join our expert instructors to enhance your piano skills with advanced techniques and tips for intermediate players.",
      link: "https://musicwebinars.com/piano-masterclass",
    },
    {
      title: "Vocal Warm-ups and Techniques for Singers",
      description:
        "Learn the best vocal exercises and techniques to improve your singing voice and maintain vocal health.",
      link: "https://musicwebinars.com/vocal-warmups",
    },
    {
      title: "Guitar for Beginners: Your First Steps",
      description:
        "This webinar is perfect for new guitar players. Learn basic chords, strumming patterns, and how to play your first song.",
      link: "https://musicwebinars.com/guitar-beginners",
    },
    {
      title: "The Art of Violin Playing: From Basics to Bowing",
      description:
        "Discover essential techniques in violin playing, from correct posture to perfecting your bowing skills.",
      link: "https://musicwebinars.com/violin-art",
    },
    {
      title: "Drumming 101: Beat Essentials for New Drummers",
      description:
        "Learn the fundamentals of drumming, including rhythm, beats, and coordination, in this beginner-friendly webinar.",
      link: "https://musicwebinars.com/drumming-essentials",
    },
    {
      title: "Songwriting Techniques: Crafting Your First Song",
      description:
        "Uncover the secrets of great songwriting, from melody composition to lyric writing, in this interactive webinar.",
      link: "https://musicwebinars.com/songwriting-techniques",
    },
  ];

  return (
    <div className="py-10">
      <div>
        <div className="text-center px-10">
          <h2
            className="text-[1.75rem] text-blue-500 font-semibold -tracking-wide
           uppercase"
          >
            Up Coming Webinars
          </h2>
          <p className="mt-2 text-[2rem] leading-8 font-extrabold tracking-tight text-white "></p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={webinars} />
      </div>

      <div className=" button mt-20 text-center">
        <Link
          href={"/"}
          className="text-[1rem] font-semibold px-4 py-3 rounded-[1rem] border border-neutral-600 bg-white text-black hover:bg-blue-500 hover:text-white transition-all duration-200 capitalize"
        >
          View all Webinars
        </Link>
      </div>
    </div>
  );
}

export default Webinars;
