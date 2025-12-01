import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProjectById } from '@/data/projects';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold gold-text mb-4">Project Not Found</h2>
          <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-500 hover:to-yellow-300">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} - ProHome Construction</title>
        <meta name="description" content={project.description} />
      </Helmet>
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="mb-8 text-yellow-500 hover:text-yellow-400 hover:bg-yellow-500/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold gold-text mb-6">{project.title}</h1>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">{project.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="font-semibold mr-2">Completed:</span>
                    <span>{project.completionDate}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="font-semibold mr-2">Location:</span>
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Ruler className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="font-semibold mr-2">Size:</span>
                    <span>{project.size}</span>
                  </div>
                </div>

                <div className="border-t border-yellow-500/20 pt-6">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-4">Project Highlights</h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <motion.img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold gold-text mb-8">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;