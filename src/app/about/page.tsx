"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="about py-16 px-6 md:px-20 lg:px-32 flex flex-col md:flex-row items-center gap-10 dark:text-white"
    >
      <div className="flex-shrink-0">
        <Image
          src="/avatar.png"
          alt="Profile Image"
          width={300}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-sm text-gray-500 uppercase dark:text-white">
          Introduction
        </h2>
        <h3 className="text-4xl font-bold mt-2">About me</h3>
        <p className="text-gray-600 mt-4 dark:text-white">
          I am an experienced Frontend Developer with over a decade of
          professional expertise in the field. Throughout my career, I have had
          the privilege of collaborating with prestigious organizations,
          contributing to their success and growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold flex items-center gap-2">
              <span className="text-xl">&lt;/&gt;</span> Languages
            </h3>
            <p className="text-black text-sm mt-1 dark:text-white">
              HTML, CSS, JavaScript, React Js, Next Js
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold flex items-center gap-2">
              🎓 Education
            </h3>
            <p className="text-black text-sm mt-1 dark:text-white">
              I am a Tech Engineer Graduted from Purwadhika
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold flex items-center gap-2">
              🏗 Projects
            </h3>
            <p className="text-black text-sm mt-1 dark:text-white">
              Built more than 5 projects
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold flex items-center gap-2">
              <span className="text-xl">🖥️ </span> Design Application
            </h3>
            <p className="text-black text-sm mt-1 dark:text-white">
              Figma, Photoshop, Corel Draw, Canva
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-8">Tools I use</h3>
        <div className="flex gap-4 mt-2">
          <Image src="/vscode.png" alt="VSCode" width={40} height={40} />
          <Image src="/firebase.png" alt="Firebase" width={40} height={40} />
          <Image src="/mongodb.png" alt="MongoDB" width={40} height={40} />
          <Image src="/figma.png" alt="Figma" width={40} height={40} />
          <Image src="/git.png" alt="Git" width={40} height={40} />
          <Image src="/react-next.png" alt="Git" width={100} height={40} />
        </div>
      </div>
    </section>
  );
}
