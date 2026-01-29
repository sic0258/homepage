
import React from 'react';
import { Project } from '../types';

interface Props {
  projects: Project[];
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-blue-600 font-extrabold text-sm tracking-[0.2em] uppercase">Portfolios</h2>
            <h3 className="text-4xl font-bold text-gray-900">주요 실적 및 프로젝트</h3>
          </div>
          <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            전체 보기 <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/3] bg-gray-200">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-10 text-white w-full">
                <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs font-bold mb-4">{project.category}</span>
                <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                <p className="text-gray-300 line-clamp-2">{project.description}</p>
                <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between">
                  <span className="text-sm font-medium">{project.date}</span>
                  <i className="fas fa-plus bg-white text-blue-600 p-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
