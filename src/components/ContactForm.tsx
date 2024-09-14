"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <section className="container" id="contact-form">
      <div className="pb-8 max-w-screen-lg">
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
            <div className="w-[40%] sm:w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-200"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow-sm bg-gray-50 text-gray-900 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="w-[60%] sm:w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-200"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 text-gray-900 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-200"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let me know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-200"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type your message..."
            ></textarea>
          </div>
          <button className="border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span className="font-semiblod">Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
