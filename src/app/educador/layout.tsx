import type { Metadata } from "next";
import TopNav from "@/components/educador/TopNav";
import EducadorFooter from "@/components/educador/EducadorFooter";

export const metadata: Metadata = {
  title: "Alta Vista Hub",
  description: "Portal interno do Colégio Alta Vista.",
};

export default function EducadorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopNav />
      <div className="flex-1">{children}</div>
      <EducadorFooter />
    </div>
  );
}
