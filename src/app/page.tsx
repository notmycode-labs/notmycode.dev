import { Roboto_Mono } from "next/font/google";

const descFont = Roboto_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="flex justify-center h-screen items-center w-full py-6 md:py-12 lg:py-16 p-2">
      <div className="">
        <h2 className="text-4xl text-center p-4 font-bold tracking-tighter underline xl:text-5xl">
          <span>notmycode</span>
          <span>.</span>
          <span className="bg-gradient-to-l from-red-300 via-blue-300 to-slate-300 bg-clip-text text-transparent">
            dev
          </span>
        </h2>

        <p className={`max-w-3xl text-center ${descFont.className}`}>
          We are stupid Thailand teams for making some random stuff and creative
          stuff about programming, coding, computer and more!
        </p>

        {/*
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-4 mt-4 border-2 rounded-lg shadow-md p-4 w-fit">
            <h3 className="text-2xl font-bold tracking-tight">History</h3>
            <p className="">
            Nothing available but better than nothing
               </p>
          </div>
          <div className="space-y-4 mt-4 border-2 rounded-lg shadow-md p-4 w-fit">
            <h3 className="text-2xl font-bold tracking-tight">Meet the Team</h3>
            <p className="">
          I SAID IT'S BETTER THAN NOTHING!!!!!</p>
          </div>
        </div>
  */}
      </div>
    </main>
  );
}
