import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const projects = [
  {
    id: "p1",
    projectName: "Harrow Central Mosque",
    location: "Classroom LVT Herringbone",
    images: ["/images/recent_projects/mosque/project1.jpeg",
       "/images/recent_projects/mosque/project2.jpeg",
       "/images/recent_projects/mosque/project3.jpeg",
       "/images/recent_projects/mosque/project4.jpeg"]
  },
  {
    id: "p2",
    projectName: "Church Project",
    location: "London",
    images: ["/images/recent_projects/church/project1.jpeg",
       "/images/recent_projects/church/project2.jpeg",
       "/images/recent_projects/church/project3.jpeg"]
  },
  {
    id: "p3",
    projectName: "Gym Project",
    location: "Slough",
    images: ["/images/recent_projects/gym/project1.jpeg", 
      "/images/recent_projects/gym/project2.jpeg"]
  },
  {
    id: "p4",
    projectName: "Domestic Projects",
    location: "Residential Installations",
    images: Array(15).fill(0).map((_, i) => `/images/domestic/domestic${i + 1}.jpeg`)
  }
];

const GalleryPop = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  const openLightbox = (projectIndex, imageIndex) => {
    setSelectedProject(projectIndex);
    setImgIndex(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setImgIndex(0);
  };

  const showNext = (e) => {
    e?.stopPropagation();
    const totalImages = projects[selectedProject].images.length;
    setImgIndex((prev) => (prev + 1 === totalImages ? 0 : prev + 1));
  };

  const showPrev = (e) => {
    e?.stopPropagation();
    const totalImages = projects[selectedProject].images.length;
    setImgIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <div className="w-full bg-[#fcfaf8] py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] font-bold mb-4">Portfolio</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-[#1a1512]">Recent Projects</h1>
        </div>

        {/* Projects Loop */}
        {projects.map((project, pIdx) => (
          <div key={project.id} className="mb-24 last:mb-0">
            <div className="flex items-center gap-4 mb-8 border-l-4 border-[#c5a059] pl-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-[#1a1512]">{project.projectName}</h3>
                <p className="text-[#c5a059] text-sm font-medium tracking-wide mt-1 italic">{project.location}</p>
              </div>
              <div className="ml-auto flex items-center gap-2 text-stone-400">
                <Camera size={16} />
                <span className="text-xs font-bold">{project.images.length} Photos</span>
              </div>
            </div>

            {/* Image Grid with Hover Effect */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {project.images.map((img, iIdx) => (
                <motion.div
                  key={iIdx}
                  whileHover={{ y: -5 }}
                  className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group shadow-sm bg-stone-200"
                  onClick={() => openLightbox(pIdx, iIdx)}
                >
                  <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="work" />
                  
                  {/* Hover Overlay - Light Black Appear */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30 transform scale-90 group-hover:scale-100 transition-transform">
                        <Maximize2 className="text-white w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Slider with Proper Light Black BG */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Top Bar Controls */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-white z-[110]">
              <div className="font-serif">
                <p className="text-[#c5a059] text-xs uppercase tracking-widest font-bold">{projects[selectedProject].projectName}</p>
                <p className="text-[10px] opacity-60">Image {imgIndex + 1} of {projects[selectedProject].images.length}</p>
              </div>
              <button 
                onClick={closeLightbox} 
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            {/* Slider Content */}
            <div className="relative w-full max-w-5xl flex items-center justify-center px-4" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={showPrev} 
                className="absolute left-0 md:-left-20 text-white/40 hover:text-white p-2 transition-all hover:scale-110"
              >
                <ChevronLeft size={48} />
              </button>
              
              <motion.img 
                key={imgIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={projects[selectedProject].images[imgIndex]} 
                className="max-w-full max-h-[75vh] object-contain shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-xl border border-white/10"
              />

              <button 
                onClick={showNext} 
                className="absolute right-0 md:-right-20 text-white/40 hover:text-white p-2 transition-all hover:scale-110"
              >
                <ChevronRight size={48} />
              </button>
            </div>

            {/* Mobile Navigation Helpers */}
            <div className="flex md:hidden gap-10 mt-12 text-white items-center">
                <button onClick={showPrev} className="p-3 bg-white/5 rounded-full"><ChevronLeft size={28} /></button>
                <span className="text-sm font-bold tracking-widest">{imgIndex + 1} / {projects[selectedProject].images.length}</span>
                <button onClick={showNext} className="p-3 bg-white/5 rounded-full"><ChevronRight size={28} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPop;