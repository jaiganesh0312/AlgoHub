'use client';
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";
import SampleSignup from "@/components/sampleSignup";

export default function About() {
  return (
    <Card className="bg-transparent" radius="none">
      <CardHeader >
        <div className="m-auto flex flex-col gap-4 text-xl text-center text-[#fffff]">
          <p className="text-4xl mb-5 text-primary">About AlgoHub</p>
          <p >
            Its not just an Institute... Its not just a placement agency...
          </p>
          <p >
            Its more than a University... Its more than a Company...
          </p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="text-center text-4xl mb-8 mt-4 text-primary">Our Vision and Mission</p>
        <div className="grid grid-cols-2 text-xl text-center gap-8 px-20 ">
          <Card radius="sm" className="py-3 text-white bg-primary-200">Coaching Excellence, Building Futures</Card>
          <Card radius="sm" className="py-3 text-white  bg-primary-200">Focused Coaching, Lasting Achievements</Card>
          <Card radius="sm" className="py-3 text-white bg-primary-200">Practical Knowledge, Real-world Impact</Card>
          <Card radius="sm" className="py-3 text-white bg-primary-200">Striving for Excellence, Shaping Careers</Card>
        </div>
      </CardBody>
      <Divider/>
      <CardFooter className="flex flex-col">
        <p className="text-4xl mb-8 mt-4 text-primary">
          Four Pillars to Every Learner
        </p>
        <div className="flex gap-10 justify-around px-20 text-lg">
          <Card className="text-white bg-primary-200">
            <CardHeader>
              <p>
                Technical Skills
              </p>
            </CardHeader>
            <CardBody>
              <p>
                Develop proficiency in programming languages, tools, and technologies relevant to your field of study or career path.
              </p>
            </CardBody >
          </Card> 
          <Card className="text-white  bg-primary-200">
            <CardHeader>
              <p>
                Aptitude and Reasoning 
              </p>
            </CardHeader>
            <CardBody>
              <p>
                Enhance problem-solving abilities, logical reasoning, and critical thinking skills to tackle challenges effectively.
              </p>
            </CardBody>
          </Card>
          <Card className="text-white  bg-primary-200">
            <CardHeader>
              <p>
                Soft Skills
              </p>
            </CardHeader>
            <CardBody> 
              <p>
                Develop communication, teamwork, leadership, and time management skills to excel in both professional and personal life
              </p>
            </CardBody>
          </Card>
          <Card className="text-white bg-primary-200">
            <CardHeader>
              <p>
                Internship
              </p>
            </CardHeader>
            <CardBody>
              <p>
                Gain practical experience and exposure by working on real-world projects through internships and industry collaborations.
              </p>
            </CardBody>
          </Card>
        </div>
      </CardFooter>
    </Card>
  );
}
