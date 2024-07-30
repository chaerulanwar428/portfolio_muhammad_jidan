import Image from 'next/image';
import React from 'react';
import consultantImg from '../public/assets/projects/consultant.jpeg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const consultant = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={consultantImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Digitalisasi Training Kit Alat Berat</h2>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          The development of a segmented type Basic Electrical Trainer specifically for heavy equipment 
          is highly relevant. The segmented approach allows for structured and detailed learning of each vital part of 
          the electrical system in heavy equipment. This trainer is expected to enhance the competencies of students in accordance
           with the Indonesian Kompetensi Kerja Nasional Indonesia (KKNI) and prepare them for challenges in the industry. 
          This research aims to improve the quality of electrical system learning for heavy equipment in vocational education.
          </p>
          <a
            href='https://drive.google.com/file/d/1zq3CkfsUNRb-e175BoFpORQVmtIZeUs7/view'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Detail</button>
          </a>
          <Link href='/#projects' >
          <p className='underline cursor-pointer mt-4'>Back</p>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default consultant;
