"use client";
import css from "@/app/page.module.css";
import { ChangeEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const code = process.env.NEXT_PUBLIC_MY_CODE;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!code) {
      toast.error("Form configuration is missing.");
      return;
    }
    try {
      const response = await fetch(`https://formspree.io/f/${code}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast.success("Message sent to my email!");
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Oops! Something went wrong.");
      }
    } catch (err) {
      toast.error("Failed to connect to the server.");
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={css.contact} id="contact">
      <Toaster position="top-right" reverseOrder={false} />
      <div className={css.container}>
        <div className={css["contact-content"]}>
          <h2>Let&apos;s Work Together</h2>
          <p>
            Have a project in mind? Let&apos;s discuss how we can bring your
            ideas to life.
          </p>
        </div>
        <form className={css["contact-form"]} onSubmit={handleSubmit}>
          <div className={css["form-group"]}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={css["form-group"]}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={css["form-group"]}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className={css["form-group"]}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={css["submit-btn"]}>
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
}
