import { Title } from "@/components/Title";
import { Roboto_Mono } from "next/font/google";
import { TypeAnimation } from 'react-type-animation';
const descFont = Roboto_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="flex justify-center h-screen items-center w-full py-6 md:py-12 lg:py-16 p-2">
      <div className="">

        <h2 className="title text-4xl text-center p-4 font-bold tracking-tighter underline xl:text-5xl">
        <Title/>
        </h2>

        <p className={`max-w-3xl text-center ${descFont.className}`}>
          We are stupid Thailand teams for making some random stuff and creative
          stuff about programming, coding, computer and more!
        </p>
      </div>
    </main>
  );
}
