
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectModal from '@/components/ProjectModal';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-background to-zinc-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl gold-text mb-4">Projects</h2> {/* Increased h2 size */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light"> {/* Increased p size */}
            A showcase of our commitment to excellence and luxury.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.slice(0, 4).map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-none shadow-lg cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block px-3 py-1 bg-primary/80 text-black text-sm font-semibold rounded-full mb-4 tracking-widest uppercase"> {/* Increased span size */}
                      {project.category}
                    </span>
                    <h3 className="text-4xl text-[#FEEBAE] mb-2 group-hover:text-primary transition-colors duration-300"> {/* Changed h3 color to FEEBAE */}
                      {project.title}
                    </h3>
                    <div className="flex items-center text-[#FEEBAE] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"> {/* Changed text color to FEEBAE */}
                      <span className="font-medium tracking-wider text-base">View Project</span> {/* Increased span size */}
                      <ArrowRight className="ml-2 h-5 w-5" /> {/* Changed icon color to FEEBAE */}
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="p-0 max-w-4xl bg-card border-border rounded-none outline-none">
                 {selectedProject && selectedProject.id === project.id && <ProjectModal project={selectedProject} />}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
