"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center py-20 px-6 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Image
          src="/avatar.png"
          alt="William Mark"
          width={100}
          height={100}
          className="rounded-full"
        />
      </motion.div>
      <h1 className="text-xl font-medium">Hi! I’m Nick 👋</h1>
      <h2 className="text-4xl font-bold mt-2">frontend web developer</h2>
      <h3 className="text-4xl font-bold text-gray-700 dark:text-white">
        based in Jakarta, Indonesia.
      </h3>
      <p className="text-gray-600 mt-4 max-w-xl dark:text-white">
        I am a frontend developer from Jakarta, Indonesia more than 3 years of
        experience in multiple companies like Microsoft, Tesla, and Apple.
      </p>
      <div className="mt-6 flex gap-4">
        <Button className="bg-black text-white px-6 py-3 rounded-full">
          Connect with me →
        </Button>
        <Button
          variant="outline"
          className="px-6 py-3 rounded-full border-gray-400"
        >
          My resume ⬇
        </Button>
      </div>
    </section>
  );
}
