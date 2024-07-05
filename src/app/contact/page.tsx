import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import { SOCIAL_ITEMS } from "@/constants/social-items";
import { Facebook, Github, Linkedin, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col px-4">
      <span className="text-4xl">✉️</span>
      <h1 className="mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-base font-semibold md:text-xl lg:text-4xl">
        Contact Me
      </h1>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <GlowingStarsBackgroundCard className="w-full flex-1">
          <GlowingStarsTitle className="flex space-x-4">
            <Facebook />
            <span>{SOCIAL_ITEMS.facebook.name}</span>
          </GlowingStarsTitle>
          <div className="flex items-end justify-between">
            <GlowingStarsDescription>
              {SOCIAL_ITEMS.facebook.desc}
            </GlowingStarsDescription>
            <Link
              target="_blank"
              href={SOCIAL_ITEMS.facebook.href}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsla(0,0%,100%,.1)] p-2 hover:bg-blue-500"
            >
              <MoveRight />
            </Link>
          </div>
        </GlowingStarsBackgroundCard>
        <GlowingStarsBackgroundCard className="w-full flex-1">
          <GlowingStarsTitle className="flex space-x-4">
            <Linkedin />
            <span>{SOCIAL_ITEMS.linkedin.name}</span>
          </GlowingStarsTitle>
          <div className="flex items-end justify-between">
            <GlowingStarsDescription>
              {SOCIAL_ITEMS.linkedin.desc}
            </GlowingStarsDescription>
            <Link
              target="_blank"
              href={SOCIAL_ITEMS.linkedin.href}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsla(0,0%,100%,.1)] p-2 hover:bg-blue-500"
            >
              <MoveRight />
            </Link>
          </div>
        </GlowingStarsBackgroundCard>
        <GlowingStarsBackgroundCard className="w-full flex-1">
          <GlowingStarsTitle className="flex space-x-4">
            <Github />
            <span>{SOCIAL_ITEMS.github.name}</span>
          </GlowingStarsTitle>
          <div className="flex items-end justify-between">
            <GlowingStarsDescription>
              {SOCIAL_ITEMS.github.desc}
            </GlowingStarsDescription>
            <Link
              target="_blank"
              href={SOCIAL_ITEMS.github.href}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsla(0,0%,100%,.1)] p-2 hover:bg-blue-500"
            >
              <MoveRight />
            </Link>
          </div>
        </GlowingStarsBackgroundCard>
      </div>
    </div>
  );
};

export default ContactPage;
