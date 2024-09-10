"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function TestimonialCards() {
  const testimonials = [
    {
      quote:
        "The instructors here are incredible! They helped me improve my piano skills beyond what I thought possible.",
      name: "Sarah Johnson",
      title: "Piano Student",
    },
    {
      quote:
        "Learning guitar at this school has been an amazing experience. The lessons are fun and easy to follow.",
      name: "Mark Williams",
      title: "Guitar Student",
    },
    {
      quote:
        "I’ve always wanted to learn the violin, and thanks to the great teaching here, I’m now playing confidently.",
      name: "Emily Davis",
      title: "Violin Student",
    },
    {
      quote:
        "The vocal coaching is outstanding! My singing voice has improved so much in just a few months.",
      name: "James Anderson",
      title: "Vocal Student",
    },
    {
      quote:
        "The music school’s approach to teaching drums is both engaging and effective. I highly recommend it!",
      name: "Rachel Brown",
      title: "Drum Student",
    },
  ];

  return (
    <div className="h-[30rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear from Our Musicians
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
