
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Maximize, CheckCircle } from 'lucide-react';
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const ProjectModal = ({ project }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-h-[90vh] overflow-y-auto"
    >
      <DialogHeader className="p-0 relative">
        <div className="relative h-72 md:h-96 w-full"> {/* Increased height */}
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 p-6 md:p-8">
          <span className="inline-block px-3 py-1 bg-primary/80 text-black text-sm font-semibold rounded-full mb-2 tracking-widest uppercase"> {/* Increased span size */}
            {project.category}
          </span>
          <DialogTitle className="text-[#FEEBAE] text-4xl md:text-5xl !text-left">{project.title}</DialogTitle> {/* Changed title color to FEEBAE */}
        </div>
      </DialogHeader>
      
      <div className="p-6 md:p-8">
        <DialogDescription className="text-muted-foreground text-lg mb-8 !text-left">{project.description}</DialogDescription> {/* Increased description size */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-base mb-8"> {/* Increased text size */}
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-[#FEEBAE]" /> {/* Changed icon color to FEEBAE */}
            <span className="text-foreground">{project.completionDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-[#FEEBAE]" /> {/* Changed icon color to FEEBAE */}
            <span className="text-foreground">{project.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="h-6 w-6 text-[#FEEBAE]" /> {/* Changed icon color to FEEBAE */}
            <span className="text-foreground">{project.size}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-2xl text-[#FEEBAE] mb-4 tracking-widest uppercase font-semibold">Highlights</h4> {/* Changed h4 color to FEEBAE */}
            <ul className="space-y-4"> {/* Increased space */}
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#FEEBAE] mt-0.5 flex-shrink-0" /> {/* Changed icon color to FEEBAE */}
                  <span className="text-muted-foreground text-lg">{highlight}</span> {/* Increased text size */}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-2xl text-[#FEEBAE] mb-4 tracking-widest uppercase font-semibold">Gallery</h4> {/* Changed h4 color to FEEBAE */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3"> {/* Increased gap */}
              {project.gallery.slice(0, 6).map((image, index) => (
                <div key={index} className="overflow-hidden rounded-sm aspect-square">
                  <img
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectModal;
