import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async'; // Updated import
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Schema JSON-LD Data
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Britania Flooring and Decor",
    "description": "Contact Britania Flooring and Decor for luxury flooring services including carpet, wood, laminate, vinyl and tiles.",
    "url": "https://britaniaflooring.co.uk/contact",
    "telephone": "020 3345 6228",
    "email": "info@britaniaflodec.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "219 Station Rd",
      "addressLocality": "Harrow",
      "postalCode": "HA1 2TH",
      "addressCountry": "GB"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "17:00"
      }
    ]
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('company', ''); // honeypot

      const res = await fetch('/contact.php', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!res.ok) throw new Error('Failed to send');

      toast({
        title: 'Message received',
        description: 'Thank you for connecting with Britania. Our studio concierge will respond within one business day.',
        className: 'bg-white border border-border text-foreground rounded-2xl',
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again later or contact us directly.',
        variant: 'destructive',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Britania Flooring & Decoration</title>
        <meta
          name="description"
          content="Contact Britania Flooring and Decor for luxury flooring services including carpet, wood, laminate, vinyl and tiles in Harrow, London."
        />
        {/* ✅ Schema JSON-LD properly stringified with react-helmet-async */}
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      {/* 🔽 UI SECTION (KEEP AS IS) */}
      <section id="contact" className="py-32 bg-[#f8f1e7]">
        {/* ... আপনার আগের সব UI কোড এখানে থাকবে ... */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl gold-text mb-4">Request a private consultation</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light">
              Share your ambitions and timelines and we will arrange a tailored presentation of samples and concepts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Label htmlFor="name" className="text-stone-600 tracking-wider text-base">Full Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-2 text-lg bg-white border-border rounded-2xl" placeholder="Amelia Hart" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-stone-600 tracking-wider text-base">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2 text-lg bg-white border-border rounded-2xl" placeholder="studio@example.com" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-stone-600 tracking-wider text-base">Project Details</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="mt-2 resize-none text-lg bg-white border-border rounded-2xl" placeholder="Tell us about your space, inspiration, and timelines..." />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-12 text-lg tracking-[0.3em] font-light rounded-full uppercase">
                  Submit Request
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-2"
            >
              <div className="bg-white border border-border/80 rounded-3xl p-8 h-full flex flex-col justify-center shadow-[0_20px_60px_rgba(60,46,32,0.08)]">
                <h3 className="text-4xl text-stone-800 mb-8">Contact Information</h3> 
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" /> 
                    <div className="ml-4">
                      <p className="text-base text-muted-foreground tracking-wider uppercase">Phone</p>
                      <p className="text-stone-800 font-medium text-lg"> 07360 095207</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="text-base text-muted-foreground tracking-wider uppercase">Office</p>
                      <p className="text-stone-800 font-medium text-lg">020 3345 6228</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="text-base text-muted-foreground tracking-wider uppercase">Email</p> 
                      <p className="text-stone-800 font-medium text-lg">info@britaniaflodec.co.uk</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" /> 
                    <div className="ml-4">
                      <p className="text-base text-muted-foreground tracking-wider uppercase">Atelier</p> 
                      <p className="text-stone-800 font-medium text-lg">219 Station Rd<br />Harrow, HA1 2TH<br />London, United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;