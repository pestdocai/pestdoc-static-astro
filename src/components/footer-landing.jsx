import React from "react";
import { Divider, Image, Link } from "@nextui-org/react";

export default function App() {
  return (
    <div className="max-w-full font-roboto">
      <div className="flex items-center gap-3 p-5">
        <Image src="../assets/PestDoc-AI-Logo.svg" className="w-10" alt="logo" />
        <h1 className="text-white text-lg tracking-widest">
          Pest
          <span className="font-thin"> Doctor</span> AI
        </h1>
      </div>
      <div className="px-5 sm:px-10 lg:pl-40">
        <Divider className="mx-auto bg-[#FFFFFF] w-full" />
      </div>
      <div className="flex flex-row justify-between items-center py-5 px-4 sm:px-10">
        <div className="flex flex-wrap justify-start gap-2 sm:gap-4 lg:gap-10 text-white lg:pl-32">
          <Link className="text-[#FFFFFF] text-[8px] sm:text-xs font-thin whitespace-nowrap" href={"/privacy-policy"}>
            Privacy Policy
          </Link>
          <Link className="text-[#FFFFFF] text-[8px] sm:text-xs font-thin whitespace-nowrap" href={"/terms-conditions"}>
            Terms and Conditions
          </Link>
          <Link className="text-[#FFFFFF] text-[8px] sm:text-xs font-thin whitespace-nowrap" href="#">
            Delete Account
          </Link>
        </div>
        <div className="flex gap-2 sm:gap-5 ml-2 sm:ml-0">
          <Link href="#">
            <Image radius="none" className="w-4 h-4 sm:w-auto sm:h-auto" src="../assets/fb-social.svg" alt="fb-social" />
          </Link>
          <Link href="#">
            <Image radius="none" className="w-4 h-4 sm:w-auto sm:h-auto" src="../assets/tweet-social.svg" alt="tweet-social" />
          </Link>
          <Link href="#">
            <Image radius="none" className="w-4 h-4 sm:w-auto sm:h-auto" src="../assets/telegram-social.svg" alt="telegram-social" />
          </Link>
          <Link href="#">
            <Image radius="none" className="w-4 h-4 sm:w-auto sm:h-auto" src="../assets/instagram-social.svg" alt="instagram-social" />
          </Link>
        </div>
      </div>
    </div>
  );
}
