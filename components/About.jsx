import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#FFDF00]'>
            About
          </p>
          <h2 className='py-4'>About Me</h2>
          <p className='py-2 text-gray-600'>
          Hardworking college student with a motivated attitude and powerful skills. 
          Able to work in a team and adept in various organizational and volunteer activities. I’m eager 
          to immerse myself to an international exposure and committed to contributing my expertise in management and product
           innovation development. I have strong analytical skills, strategic thinking, and detail orientation.<br></br><br></br>
           I am an environmentally conscious individual who is passionate about sustainability and protecting our planet. 
           I prioritize my health by engaging in regular physical activities and sports, understanding that a healthy body is 
           essential for a productive and fulfilling life. I enjoy interacting with people and find great satisfaction in being helpful and beneficial to those around me. My commitment to these values drives me to make a positive impact in both my personal and professional life.
          </p>
          <br></br>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
            Come on, check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
