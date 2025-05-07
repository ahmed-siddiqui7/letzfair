// components/BackButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IoArrowBackSharp } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bg-none my-2 cursor-pointer flex items-center"
    >
      <span className="text-gray-500 mr-1.5">
        <IoArrowBackSharp />
      </span>{" "}
      Back
    </button>
  );
}
