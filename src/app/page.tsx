import Image from "next/image";
import FirstSentence from "../components/top/firstsentence/FirstSentence";
import SecondSentence from "../components/top/secondsentence/SecondSentence";
import ThirdSentence from "../components/skill/ThirdSentence";
import Footer from "@/components/footer";
import Top from "@/pages/top";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Top />
    </div>
  );
}
