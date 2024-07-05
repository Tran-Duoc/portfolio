import { ModeToggle } from "@/components/ui/mode-toggle";
import NavList from "@/components/ui/nav-list";
import { Spotlight } from "@/components/ui/spotlight";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased bg-grid-white/[0.02] md:items-center md:justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center p-4 pt-20 md:pt-0">
        <div className="relative h-32 w-32 lg:h-40 lg:w-40">
          <Image
            src="/images/tran-duoc.jpg"
            alt="Tran Duoc"
            loading="lazy"
            fill
            className="absolute rounded-full border-4 border-white bg-cover object-cover"
          />
        </div>
        <NavList />
        <h1 className="mt-4 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
          Hi everyone, I&apos;m <span className="text-red-500">Tran Duoc</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          Software engineer at TPP solutions. I love sharing knowledge with
          others and dream of becoming a teacher in the future.
        </p>
      </div>
    </div>
  );
}
