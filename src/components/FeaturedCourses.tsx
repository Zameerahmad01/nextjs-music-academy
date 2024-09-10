"use client";

import Link from "next/link";
import courseData from "../data/courses.json";
import { div } from "framer-motion/client";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}
function FeaturedCourses() {
  const data = courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className="py-10 ">
      <div>
        <div className="text-center">
          <h2
            className="text-[1.75rem] text-blue-500 font-semibold -tracking-wide
           uppercase"
          >
            Featured Courses
          </h2>
          <p className="mt-2 text-[2rem] leading-8 font-extrabold tracking-tight text-white ">
            Checkout our featured courses
          </p>
        </div>
      </div>

      <div className="mt-20 px-20">
        <div
          className="grid
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center"
        >
          {data.map((course: Course) => (
            <div key={course.id} className="flex justify-center ">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-10 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="mt-3 text-[1rem] font-semibold px-4 py-2 rounded-[1rem] border border-neutral-600 bg-white text-black hover:bg-blue-500 hover:text-white transition-all duration-200 capitalize"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className=" button mt-20 text-center">
        <Link
          href={"/courses"}
          className="text-[1rem] font-semibold px-4 py-3 rounded-[1rem] border border-neutral-600 bg-white text-black hover:bg-blue-500 hover:text-white transition-all duration-200 capitalize"
        >
          View all courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
