import { Send } from "lucide-react";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white/5 rounded-lg p-4 flex flex-col">
      <div>
        <h2 className="text-2xl monte font-bold">Send Me a Message</h2>
        <p className="outfit text-white/50">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className="mt-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 outfit">
            <div className="space-y-2 flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="border p-1 pl-2 rounded-md outline-none focus:border-green-400"
                required
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@gmail.com"
                className="border p-1 pl-2 rounded-md outline-none focus:border-green-400"
                required
              />
            </div>
          </div>

          <div className="space-y-2 flex flex-col outfit">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className="border p-1 pl-2 rounded-md outline-none focus:border-green-400"
              required
            />
          </div>

          <div className="space-y-2 flex flex-col outfit">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or just say hello..."
              className="border p-1 pl-2 rounded-md outline-none focus:border-green-400"
              rows={6}
              required
            />
          </div>
        </form>
      </div>
      <button
        type="submit"
        className="w-full bg-rose-400 cursor-pointer transition-all duration-300 mt-auto max-lg:mt-10 hover:bg-green-600 text-black flex items-center px-3 py-1.5 rounded-md pops justify-center font-bold"
      >
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </button>
    </div>
  );
};

export default ContactForm;
