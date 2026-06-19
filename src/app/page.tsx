import { redirect } from "next/navigation";

// Alta Vista Hub (/educador) is the front door of the project.
export default function HomePage() {
  redirect("/educador");
}
