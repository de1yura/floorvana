import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Storefront = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="storefront" className="py-32 bg-[#f8f1e7] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl gold-text mb-4">Visit Our Atelier</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light">
            Experience our curated collection in person. Our showroom showcases premium materials and expert craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Storefront Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative group space-y-8"
          >
            <div className="relative overflow-hidden rounded-[2.25rem] shadow-[0_30px_80px_rgba(58,41,29,0.15)]">
              <motion.img
                src="/images/britania-store.png"
                alt="Britania Flooring & Decoration Storefront"
                className="w-full h-full object-cover"
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* Decorative corner accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary/20 rounded-full opacity-50"></div>
            
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4"
            >
              <div className="text-center lg:text-left">
                <p className="text-2xl font-semibold text-primary mb-1">Established</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase">Trusted Business</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-semibold text-primary mb-1">Premium</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase">Quality Materials</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-semibold text-primary mb-1">Expert</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase">Craftsmanship</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white border border-border/80 rounded-3xl p-10 shadow-[0_20px_60px_rgba(60,46,32,0.08)]">
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl text-stone-800 mb-6">Our Showroom</h3>
                  <p className="text-lg text-stone-600 leading-relaxed font-light">
                    Step into our atelier and discover an extensive range of premium flooring solutions, 
                    decorative surfaces, and bespoke installations. Our expert team is on hand to guide 
                    you through our curated collection and help bring your vision to life.
                  </p>
                </div>

                <div className="space-y-6 pt-6 border-t border-border/50">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="text-base text-muted-foreground tracking-wider uppercase mb-2">Location</p>
                      <p className="text-stone-800 font-medium text-lg leading-relaxed">
                        219 Station Rd<br />
                        Harrow, HA1 2TH<br />
                        London, United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Calendar className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="text-base text-muted-foreground tracking-wider uppercase mb-2">Visit Us</p>
                      <p className="text-stone-800 font-medium text-lg">
                        By appointment or walk-in welcome
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="text-base text-muted-foreground tracking-wider uppercase mb-2">Opening Hours</p>
                      <div className="text-stone-800 font-medium text-lg space-y-1">
                        <p>Monday - Saturday: 10am - 6pm</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-12 text-lg tracking-[0.3em] font-light rounded-full uppercase"
                  >
                    Schedule a Visit
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Storefront;

