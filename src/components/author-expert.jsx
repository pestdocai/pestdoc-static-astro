import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";

const AuthorCard = ({ imageSrc, name, description, isRight }) => (
  <Card className={`w-full md:w-5/12 lg:w-9/12 flex flex-col md:flex-col lg:flex-row ${isRight ? "lg:ml-auto" : "lg:mr-auto"} ${isRight ? "lg:rounded-r-none" : "lg:rounded-l-none"} rounded-lg overflow-hidden`}>
    {isRight ? (
      <>
        <div className="w-full lg:w-3/6 md:h-95 lg:h-auto bg-[#006676] flex items-center justify-center rounded-t-lg lg:rounded-t-none lg:rounded-l-none">
          <Image alt={`${name} background`} className="object-cover w-full h-full" src={imageSrc} />
        </div>
        <div className="w-full lg:w-2/3 flex flex-col bg-white">
          <CardHeader className="p-6 lg:p-40 lg:px-6 flex-col items-start">
            <h4 className="font-bold text-xl lg:text-2xl">{name}</h4>
            <p className="text-sm lg:text-tiny text-[#666666] mt-2">{description}</p>
          </CardHeader>
        </div>
      </>
    ) : (
      <div className="flex flex-col lg:flex-row w-full">
        <div className="order-2 lg:order-1 w-full lg:w-2/3 flex flex-col bg-white">
          <CardHeader className="p-6 lg:p-40 lg:px-6 flex-col items-start">
            <h4 className="font-bold text-xl lg:text-2xl">{name}</h4>
            <p className="text-sm lg:text-tiny text-[#666666] mt-2">{description}</p>
          </CardHeader>
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-3/6 md:h-95 lg:h-auto bg-[#006676] flex items-center justify-center rounded-t-lg lg:rounded-t-none lg:rounded-r-none">
          <Image alt={`${name} background`} className="object-cover w-full h-full" src={imageSrc} />
        </div>
      </div>
    )}
  </Card>
);

export default function App() {
  const authors = [
    {
      name: "Prof. Intan Ahmad, Ph.D",
      description: "Please add your content here. Keep it short and simple. And smile :)",
      imageSrc: "../assets/1.svg",
      isRight: true,
    },
    {
      name: "Dr. Sri Yusmalinar, M.Si,.M.M",
      description: "Please add your content here. Keep it short and simple. And smile :)",
      imageSrc: "../assets/3.png",
      isRight: false,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-8 md:gap-14 px-4 sm:px-0">
      {authors.map((author, index) => (
        <AuthorCard key={index} {...author} />
      ))}
    </div>
  );
}
