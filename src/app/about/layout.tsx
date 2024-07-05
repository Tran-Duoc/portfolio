import Header from "@/components/ui/header";
import { Metadata } from "next";

interface AboutLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "About | Tran Duoc",
  description:
    "Tran Duoc is a developer. He love sharing knowledge with others and dream of becoming a teacher in the future",
};

const AboutLayout = ({ children }: AboutLayoutProps) => {
  return (
    <main className="flex flex-col">
      <Header />
      {children}
    </main>
  );
};

export default AboutLayout;
