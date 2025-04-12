import { redirect } from "next/navigation";

export default function Home() {
  redirect("/blog/draft/[[...tool]]");
}
