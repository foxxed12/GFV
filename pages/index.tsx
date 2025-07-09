import dynamic from "next/dynamic";
const BirthdayGiftVika = dynamic(
  () => import("../components/BirthdayGiftVika"),
  { ssr: false }
);

export default function Home() {
  return <BirthdayGiftVika />;
}
