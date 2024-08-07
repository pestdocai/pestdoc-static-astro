import React, { useState } from "react";
import { Button } from "@nextui-org/button";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setResponseMessage("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);
    setResponseMessage("");

    const url = process.env.REACT_APP_API_URL;
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

    console.log("Access Token:", accessToken);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.status === 201 && data.status === "success") {
        setResponseMessage("Thank you! Your email has been successfully registered.");
        setEmail("");
      } else {
        setResponseMessage(`Error: ${data.message || "Something went wrong"}`);
      }
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-3 md:p-10">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold">Hey Guys! We're coming soon...</h2>
        <p className="mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <form onSubmit={handleSubmit} className="flex items-center space-x-4 mt-10">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="p-2 text-black flex-grow" style={{ borderRadius: "0.5rem" }} required />
          <button type="submit" className="bg-custom-button text-black font-bold py-2 px-4" style={{ borderRadius: "0.5rem" }} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Notify me"}
          </button>
        </form>
        {responseMessage && <p className="mt-4 text-black">{responseMessage}</p>}
        <div className="socmed flex space-x-2 mt-10">
          <a href="https://www.instagram.com/pestdoc_ai" className="text-black">
            <img src="assets/instagram-landingpage.svg" alt="instagram" className="w-8 h-6" />
          </a>
          <a href="https://www.tiktok.com/@pestdoc_ai" className="text-black">
            <img src="assets/tiktok.svg" alt="tiktok" className="w-8 h-6" />
          </a>
        </div>
      </div>
      <div className="m-0">
        <img src="assets/Hp.svg" alt="Hp" />
      </div>
      <div>
        <img src="assets/Human.svg" alt="Human" />
      </div>
    </div>
  );
};

export default HeroSection;
