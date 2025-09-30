import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-green-500/20">
        <div>
          <h2 className="text-2xl pops">Contact Information</h2>
          <p className="outfit text-white/50">Here are the different ways you can reach me.</p>
        </div>
        <div className="space-y-6 mt-5 monte">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-white/70 nun">
                Olubiyioderinde7@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-white/70 nun">+234 (0) 916 199 2657</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-white/70 nun">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-green-500/20">
        <div>
          <h2 className="text-2xl monte">Follow Me</h2>
          <p className="nun">Connect with me on social media and professional networks.</p>
        </div>
        <div className="mt-5">
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/Timonics" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black bg-transparent flex items-center fira px-2 py-1 rounded-md cursor-pointer">
              <FaGithub className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://twitter.com" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent flex items-center fira px-2 py-1 rounded-md cursor-pointer">
              <FaXTwitter className="w-5 h-5 mr-2" />
              Twitter
            </a>
            <a href="https://linkedin.com" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent flex items-center fira px-2 py-1 rounded-md cursor-pointer">
              <FaLinkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/30">
        <div className="p-6">
          <h3 className="text-xl font-bold text-green-500 mb-2 pops">
            Quick Response
          </h3>
          <p className="text-white/70 outfit">
            I typically respond to messages within 24 hours. For urgent matters,
            feel free to reach out via phone or connect with me on social media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
