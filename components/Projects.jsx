import React from 'react';
import consultantImg from '../public/assets/projects/consultant.jpeg';
import travelImg from '../public/assets/projects/travel.jpeg';
import bioskopImg from '../public/assets/projects/bioskop.jpeg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#ffdf00]">Project</p>
        <h2 className="py-4">My Project</h2>
        <div className="grid md:grid-cols-1 gap-8">
          <ProjectItem title="Digitalisasi Training Kit Alat Berat" backgroundImg={consultantImg} projectUrl="/consultant" tech="" />
          <ProjectItem title="Recondition 6-Cylinder Engine" backgroundImg={travelImg} projectUrl="/travel" tech="" />
          <ProjectItem
            title='Mini Excavator Main Pump'
            backgroundImg={bioskopImg}
            projectUrl='/bioskop'
            tech=''

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
