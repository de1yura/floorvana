
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';

const ServiceArea = () => {
  const position = [51.5072, -0.1276]; // Central London
  const serviceRadius = 40233.6; // roughly 25 miles

  return (
    <section id="service-area" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl gold-text mb-6">Where we install</h2> {/* Increased h2 size */}
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-8 w-8 text-primary" /> {/* Changed icon color */}
              <p className="text-3xl text-stone-800"> {/* Changed text color */}
                Greater London &amp; Home Counties
              </p>
            </div>
            <p className="text-xl text-muted-foreground font-light mb-8 max-w-lg leading-relaxed"> {/* Increased p size */}
              We operate from our London atelier, partnering with estate owners, developers, and design studios within a curated radius.
              Concentrated geography ensures each installation receives senior craftsmanship and white-glove care.
            </p>
             <div className="flex items-center gap-3 text-primary"> {/* Changed text color */}
                <Navigation className="h-6 w-6"/> {/* Increased icon size */}
                <span className="font-semibold text-xl">Serving projects within ~25 miles</span> {/* Increased span size */}
             </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-96 w-full overflow-hidden border border-border bg-white rounded-3xl"
          >
            <MapContainer center={position} zoom={11} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}></Marker>
               <Circle 
                center={position} 
                radius={serviceRadius}
                pathOptions={{ color: '#d4a373', fillColor: '#d4a373', fillOpacity: 0.1, weight: 2 }}
              />
            </MapContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
