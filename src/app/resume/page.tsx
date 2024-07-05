import { SOCIAL_ITEMS } from "@/constants/social-items";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const ResumePage = () => {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col">
      <div className="mt-4 hidden flex-col space-y-4 md:flex">
        <div className="flex w-full flex-col items-center justify-center pb-10">
          <h1 className="text-2xl font-bold uppercase text-blue-500 underline md:text-3xl lg:text-4xl">
            Tran Minh Duoc
          </h1>
          <span className="mt-2">An Khanh, Ninh Kieu, Can Tho</span>
          <ul className="mt-4 flex w-full flex-wrap items-center justify-center gap-x-4 md:gap-x-8 lg:gap-x-16">
            <li className="flex items-end space-x-2">
              <Mail />
              <span>duoctm.169@gmail.com</span>
            </li>
            <li className="flex items-end space-x-2">
              <Phone />
              <span>0392280056</span>
            </li>
            <li className="item-end flex space-x-2 hover:text-blue-500 hover:underline">
              <Linkedin />
              <Link href={SOCIAL_ITEMS.linkedin.href}>Linkedin</Link>
            </li>
            <li className="item-end flex space-x-2 hover:text-blue-500 hover:underline">
              <Github />
              <Link href={SOCIAL_ITEMS.github.href}>Github</Link>
            </li>
          </ul>

          <div className="mt-8 flex w-full flex-col space-y-4">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">EDUCATION</h2>
              <div className="mt-2 h-[1px] w-full bg-white" />
              <div className="mt-2 flex items-center justify-between">
                <b>Can Tho University </b>
                <b>Can Tho City</b>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <i>Computer Science </i>
                <i>Expected Graduation: December 2024</i>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">EXPERIENCES</h2>
              <div className="mt-2 h-[1px] w-full bg-white" />
              <div className="mt-2 flex items-center justify-between">
                <b>InternShip</b>
                <b>Can Tho City</b>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <i>DH Digital Solutions Company Limited</i>
                <i>Jan 2024 - Mar 2024</i>
              </div>
              <ul className="mt-4 text-justify">
                <li className="mb-4">
                  Research on the{" "}
                  <b className="text-blue-500">&quot;Apriori algorithm&quot;</b>{" "}
                  helps doctors make more accurate diagnoses and prescribe
                  medications for patients.
                </li>
                <li>
                  Design and implement a drug prescription support system
                  applying the{" "}
                  <b className="text-blue-500">
                    &quot;Apriori algorithm&quot;{" "}
                  </b>
                  with <b className="text-blue-500">&quot;Winform&quot;</b>{" "}
                  interface.
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">TECHNICAL SKILLS</h2>
              <div className="mt-2 h-[1px] w-full bg-white" />
              <ul className="mt-4">
                <li className="mb-2 flex items-center space-x-2">
                  <b className="text-blue-500">Languages: </b>
                  <b>Java, C#, JavaScript, TypeScript, Python</b>
                </li>
                <li className="mb-2 flex items-center space-x-2">
                  <b className="text-blue-500">Frameworks: </b>
                  <b>
                    Spring Boot, ASP.Net, React, VueJS, NextJS, ExpressJS,
                    FastAPI, Tailwind, Redux Toolkit, ..v..v..
                  </b>
                </li>
                <li className="mb-2 flex items-center space-x-2">
                  <b className="text-blue-500">Database: </b>
                  <b>MongoDB, SQL Server, PostgreSQL</b>
                </li>
                <li className="mb-2 flex items-center space-x-2">
                  <b className="text-blue-500">Other: </b>
                  <b>Figma, Photoshop and Version control with Git.</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center md:hidden">
        Online Resume doesn&apos;t support mobile device.
      </div>
    </div>
  );
};

export default ResumePage;
