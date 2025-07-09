"use client";
import dynamic from "next/dynamic";
const Birthday = dynamic(() => import("@/components/BirthdayGiftVika"), { ssr: false });
export default function Page() {
  return <Birthday />;
}
