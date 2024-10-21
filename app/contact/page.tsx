import React from 'react';
import Link from 'next/link';
import { socialLinks, contactInfo } from '../config';
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-between space-x-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
    >
      <div className="flex items-center space-x-3 truncate">
        <Icon className="text-2xl" />
        <span className='truncate'>{label}</span>
      </div>
    </a>
  );
}

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <p className="flex items-center space-x-3">
              <TbMailFilled className="text-xl" />
              <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                {contactInfo.email}
              </a>
            </p>
            <p className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{contactInfo.location}</span>
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Connect with Me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SocialLink href={socialLinks.github} icon={FaGithub} label="GitHub" />
            <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} label="LinkedIn" />
            <SocialLink href={socialLinks.instagram} icon={FaInstagram} label="Instagram" />
            {socialLinks.twitter && <SocialLink href={socialLinks.twitter} icon={FaXTwitter} label="Twitter" />}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Link href="/" className="text-blue-600 hover:underline flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}