import Image from 'next/image';
import React from 'react';
import bioskopImg from '../public/assets/projects/bioskop.jpeg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const bioskop = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={bioskopImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Mini Excavator Main Pump</h2>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          The hydraulic pump is a crucial component in the operational system of a mini excavator. 
          This pump functions to drive hydraulic fluid. Hydraulic pumps are prone to various types of damage due to wear, 
          contamination, leakage, and internal component failure. Damage to the hydraulic pump can significantly impact 
          performance, productivity, and operational costs. One of the common issues with hydraulic pumps is low power or loss 
          of power in the hydraulic system. Students are required to have theoretical knowledge and practical skills in diagnosis 
          and repair, which include identifying damage symptoms, analyzing causes, and taking appropriate corrective actions.
          </p>
          <a
            href='https://drive.google.com/file/d/1lMPHoiUEtcuYWgoPNRFCbU_mkwG2Vomn/view?usp=drive_link'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Detail</button>
          </a>
          <Link href='/#projects'>
          <p className='underline cursor-pointer mt-5'>Back</p>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default bioskop;
