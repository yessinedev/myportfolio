"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Card } from "./Card";

export function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
    const publicKeyy = process.env.NEXT_PUBLIC_KEY || "";
    console.log(form.current);
    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey: publicKeyy,
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }
  };
  return (
    <section className="container pb-8" id="contact-form">
      <Card className="container">
        <div className="py-8 max-w-screen-lg">
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
              <div className="md:w-[40%] w-full">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow-sm bg-gray-700 text-gray-400 border border-gray-900/60 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="md:w-[60%] w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow-sm bg-gray-700 text-gray-400 border border-gray-900/60 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm text-gray-400 bg-gray-700 rounded-lg border border-gray-900/60 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let me know how I can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-400 bg-gray-700 rounded-lg shadow-sm border border-gray-900/60 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <button className="border border-gray-900/60 bg-gray-700/80 text-gray-300 h-12 px-6 rounded-xl">
              <span className="font-semiblod">Send Message</span>
            </button>
          </form>
        </div>
      </Card>
    </section>
  );
}

export default ContactForm;
