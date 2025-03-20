import Link from "next/link";
import { FaRocket, FaStar, FaUsers } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";

export default function CreatorsComingSoon() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute h-20 w-20 rounded-full bg-slate-700/30 animate-float top-20 left-1/4" />
        <div className="absolute h-32 w-32 rounded-full bg-slate-600/30 animate-float-slow top-40 right-1/3" />
        <div className="absolute h-16 w-16 rounded-full bg-slate-800/30 animate-float bottom-20 right-1/4" />
      </div>

      <div className="text-center z-10 p-8 max-w-2xl">
        <div className="flex items-center justify-center gap-4 mb-6">
          {/* <FaRocket className="text-6xl text-slate-600 animate-bounce" /> */}
          <FaDotCircle className="text-2xl text-slate-600 animate-bounce" />
          <FaDotCircle className="text-2xl text-slate-600 animate-bounce" />
          <FaDotCircle className="text-2xl text-slate-600 animate-bounce" />
        </div>
        <h1 className="text-6xl font-black text-slate-700 mb-6 tracking-tighter">
          This Section will
        </h1>
        <div className="space-y-4">
          <h2 className="text-6xl font-black text-slate-700 tracking-tighter">
            Live Soooon...
          </h2>

          <div className="text-lg text-slate-800 tracking-[-1px]">
            Stay tuned for our incredible lineup of talented individuals...
          </div>
        </div>
        <Link
          href="/"
          className="mt-12 px-8 py-4 bg-slate-800 text-slate-100 rounded-md font-bold 
            hover:bg-slate-700 transition-all inline-block border border-slate-400"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
