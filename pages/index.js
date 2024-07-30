import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Image from 'next/image';
import Prestasi from '../public/assets/prestasi.jpeg';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Muhammad Jidan Trilaksono</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <div className='mx-[20px]'>
    <p className='text-4xl tracking-widest font-bold uppercase'>
      Achievement
        </p>
        <h3 className='py-4'>Juara umum Kompetisi Mobil Listrik Indonesia</h3>
        <div className='grid grid-cols-1'>
          <div className='rounded-xl mx-auto w- full md:w-[400px]'>
          <Image src={Prestasi} />
          </div>
        </div>        
    </div>
    <Contact />
    </div>
  )
}
