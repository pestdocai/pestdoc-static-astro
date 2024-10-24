import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";

export default function App() {
  const cardContent = [
    {
      title: "Self-diagnose",
      description: "Please your content here. Keep it short and simple. And smile :)",
      image: "../assets/self-diagnose.svg",
    },
    {
      title: "Smart suggestion",
      description: "Please your content here. Keep it short and simple. And smile :)",
      image: "../assets/smart-suggestion.svg",
    },
    {
      title: "Enchance AI assistance",
      description: "Please your content here. Keep it short and simple. And smile :)",
      image: "../assets/enhance-AI-assistance.svg",
    },
  ];

  return (
    <div className="flex flex-col items-center sm:items-stretch xl:flex-row justify-center p-7 space-y-6 xl:space-y-0 xl:space-x-6">
      {cardContent.map((content, index) => (
        <Card key={index} className="w-full max-w-[384px] sm:mx-auto xl:mx-0 xl:w-80">
          <Image alt={content.title} src={content.image} />
          <CardHeader className="pb-0 pt-2 px-4 flex-col h-[100px]">
            <h4 className="font-bold text-lg text-center">{content.title}</h4>
            <p className="text-[#666666] text-center text-sm mb-5 mt-2 whitespace-normal">{content.description}</p>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
