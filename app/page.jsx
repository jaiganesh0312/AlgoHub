'use client'
import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import ImageSlideShow from "@/components/ImageSlideShow";

export default function Home() {
  
  return (
    <div className="flex justify-evenly mt-10">
      <Card className="w-1/2">
        <CardHeader className="block">
          <p className="text-xl text-center">Today's Schedule</p>

        </CardHeader>
      </Card>
      <Card className="w-1/3">
        <CardHeader className="block">
          <p className="text-xl text-center">Best Performers</p>
        </CardHeader>
        <CardBody>
          <ImageSlideShow />
        </CardBody>
      </Card>

    </div>
    
  );
}
