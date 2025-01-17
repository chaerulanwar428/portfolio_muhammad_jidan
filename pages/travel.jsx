import Image from 'next/image';
import React from 'react';
import travelImg from '../public/assets/projects/travel.jpeg';
import Link from 'next/link';

const travel = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={travelImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Recondition 6-Cylinder Engine</h2>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          Reconditioning a machine is an important process aimed at extending the machines lifespan, improving fuel efficiency, 
          and reducing emissions. This process includes disassembly, inspection, repair, and replacement of worn or damaged 
          components.
          </p>
          <a
            href='https://drive.google.com/file/d/1WRT_vp8GEZUFHpojV11vXml_0W-v5kOw/view'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Detail</button>
          </a>
          <Link href='/#projects'>
          <p className='underline cursor-pointer mt-5'>Back</p>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default travel;
