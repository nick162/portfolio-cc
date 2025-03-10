import React from "react";
import { FC } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: any;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <Card className="overflow-hidden shadow-lg bg-slate-400">
      <Image src={imageUrl} alt="Git" width={100} height={40} className="m-4" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
