"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

function WhyChooseUs() {
  const content = [
    {
      title: "Collaborative Practice",
      description:
        "Learn and play music together in real time with your peers and instructors. Collaborate on compositions, share techniques, and improve together. Our platform enhances your learning experience by enabling group sessions and fostering creativity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
          Collaborative Practice
        </div>
      ),
    },
    {
      title: "Real-Time Feedback",
      description:
        "Receive instant feedback on your practice sessions. Track your progress in real time and make adjustments as you go. No more waiting for feedback — improve your skills with the simplicity of live guidance and updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/music-feedback.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="music feedback demo"
          />
        </div>
      ),
    },
    {
      title: "Composition Versioning",
      description:
        "Never lose track of your compositions. Our platform automatically saves every version of your work, ensuring you're always working on the latest draft. Keep your creative flow intact and share your compositions with ease.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Composition Versioning
        </div>
      ),
    },
    {
      title: "Creative Inspiration",
      description:
        "When you're running low on creative ideas, our platform provides you with new music styles, techniques, and exercises to spark your inspiration. Stay motivated and continuously explore new ways to enhance your musical journey.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--blue-500))] flex items-center justify-center text-white">
          Creative Inspiration
        </div>
      ),
    },
  ];

  return (
    <div className="p-10 ">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
