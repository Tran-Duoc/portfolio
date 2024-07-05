import Header from "@/components/ui/header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Resume | Tran Duoc",
  description:
    "Tran Duoc is a developer. He love sharing knowledge with others and dream of becoming a teacher in the future",
};

const ResumeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default ResumeLayout;
