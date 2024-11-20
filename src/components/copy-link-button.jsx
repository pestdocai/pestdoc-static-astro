import React from "react";
import { Button } from "@nextui-org/react";

export default function CopyLinkButton() {
  const copyToClipboard = () => {
    const url = "http://localhost:4321/landing/blog-help";
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Tautan telah disalin ke clipboard!");
      })
      .catch((error) => {
        console.log("Gagal menyalin: ", error);
      });
  };

  return (
    <Button onClick={copyToClipboard} className="bg-gray-200 rounded-full w-[100px] h-[28px]" startContent={<img src="/link.svg" alt="link-logo" width={15} height={15} />}>
      Share
    </Button>
  );
}
