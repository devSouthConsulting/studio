import Link from "next/link";
import OpenStudio from "./components";

export default function Home() {
  // when the page loads, redirect to /studio
  return (
    <div>
      <OpenStudio />
    </div>
  );
}
