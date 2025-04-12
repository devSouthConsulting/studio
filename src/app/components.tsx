"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function OpenStudio() {
  const router = useRouter();

  useEffect(() => {
    router.push("/studio");
  }, [router]);

  return (
    <div>
      <Link href="/studio" className="text-2xl font-bold text-sky-300">
        Opening Studio...
      </Link>
    </div>
  );
}
