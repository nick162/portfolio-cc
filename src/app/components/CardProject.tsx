import React from "react";
import { FC } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  techno: string;
  task: string;
  situation: string;
  result: string;
  imageUrl: any;
}

const CardProjects: FC<ProjectCardProps> = ({
  title,
  techno,
  task,
  situation,
  result,
  imageUrl,
}) => {
  return (
    <div className="space-y-4 rounded-md bg-[#9090e1] p-6 dark:bg-secondary">
      {/* <div className="flex w-fit items-center justify-center rounded-lg bg-white p-2 dark:text-black">
        <Icon />
      </div> */}
      <Image src={imageUrl} alt="Git" width={200} height={80} />

      <p className="text-xl font-semibold">{title}</p>
      <p className="text-xl font-semibold">{techno}</p>
      <p>{task}</p>
      <p>{situation}</p>
      <p>{result}</p>
    </div>
  );
};

export default CardProjects;
