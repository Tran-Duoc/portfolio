"use client";
import { IMAGES } from "@/constants/image-items";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Paragraph } from "@/components/ui/paragraph";

const AboutPage = () => {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-100px)] w-full max-w-4xl flex-col items-start px-4">
      <div>
        <span className="text-4xl">💬</span>
        <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-base font-semibold md:text-xl lg:text-4xl">
          About Me
        </h1>
      </div>
      <div className="my-10 grid grid-cols-2 gap-10 md:grid-cols-4">
        {IMAGES.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="block h-40 w-full rotate-3 transform rounded-md object-cover shadow-xl transition duration-200 hover:rotate-0 md:h-60"
            />
          </motion.div>
        ))}
      </div>
      <div className="max-w-screen-xl">
        <Paragraph>
          Hey there, I&apos;m Tran Duoc - a passionate developer. I love sharing
          knowledge with others and dream of becoming a teacher in the future.
          Welcome to my corner of the digital world!
        </Paragraph>
      </div>
    </div>
  );
};

export default AboutPage;
