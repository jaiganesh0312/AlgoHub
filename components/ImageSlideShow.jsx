import React, { useState } from 'react';
import {Card, CardHeader, CardBody, CardFooter, Avatar} from "@nextui-org/react";
import {FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const BESTPERFORMERS = [{studentName: "a", date: "01-08-2024", imageSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704d"},
  {studentName: "A", date: "21-08-2024", imageSrc: "https://i.pravatar.cc/150?u=a04258a2462d826712d"},
  {studentName: "B", date: "11-08-2024", imageSrc: "https://i.pravatar.cc/150?u=a042581f4e29026024d"},
  {studentName: "C", date: "03-08-2024", imageSrc: "https://i.pravatar.cc/150?u=a04258114e29026302d"},
  {studentName: "D", date: "12-08-2024", imageSrc: "https://i.pravatar.cc/150?u=a04258114e29026702d"},
  {studentName: "E", date: "18-08-2024", imageSrc: "https://i.pravatar.cc/150?u=a04258114e29026708c"},
]



function ImageSlideShow() {
  const [bestPerformer, setBestPerformer] = useState(0);
  function bestPerformerHandler(delta){
    setBestPerformer((curr) => ((curr + delta + BESTPERFORMERS.length)%BESTPERFORMERS.length))
  }

  return (
    <div className='relative'>
      <FaAngleLeft className='absolute top-[40%] left-0 w-16 h-16 z-10 cursor-pointer' onClick={() => bestPerformerHandler(-1)} />
      <FaAngleRight className='absolute top-[40%] right-0 w-16 h-16 z-10 cursor-pointer' onClick={() => bestPerformerHandler(1)}/>
      {
        BESTPERFORMERS.map(({studentName, date, imageSrc}, index) =>  (
          index === bestPerformer && 
          <Card key={index} className='bg-transparent' shadow='none'>
            <CardHeader className='block'>
              <p className='text-center'>For Date: {date} </p>
            </CardHeader>
            <CardBody>
              <Avatar src={imageSrc} className='h-60 w-60 m-auto'/>
            </CardBody>
            <CardFooter>
              <p className='m-auto'>{studentName}</p>
            </CardFooter>
          </Card>
        )
      )
      }
      

    </div>
  );
};

export default ImageSlideShow;