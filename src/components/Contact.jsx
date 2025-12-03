
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.push({
      ...formData,
      date: new Date().toISOString(),
    });
    localStorage.setItem('contacts', JSON.stringify(contacts));

    toast({
      title: 'Message received',
      description: 'Thank you for connecting with Britania. Our studio concierge will respond within one business day.',
      className: 'bg-white border border-border text-foreground rounded-2xl'
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-[#f8f1e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl gold-text mb-4">Request a private consultation</h2> {/* Increased h2 size */}
          <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light"> {/* Increased p size */}
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
                  <Label htmlFor="name" className="text-stone-600 tracking-wider text-base">Full Name</Label> {/* Increased label size */}
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-2 text-lg bg-white border-border rounded-2xl" placeholder="Amelia Hart" /> {/* Increased input text size */}
                </div>
                <div>
                  <Label htmlFor="email" className="text-stone-600 tracking-wider text-base">Email</Label> {/* Increased label size */}
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2 text-lg bg-white border-border rounded-2xl" placeholder="studio@example.com" /> {/* Increased input text size */}
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-stone-600 tracking-wider text-base">Project Details</Label> {/* Increased label size */}
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="mt-2 resize-none text-lg bg-white border-border rounded-2xl" placeholder="Tell us about your space, inspiration, and timelines..." /> {/* Increased textarea text size and rows */}
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-12 text-lg tracking-[0.3em] font-light rounded-full uppercase"> {/* Changed button color */}
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
              <h3 className="text-4xl text-stone-800 mb-8">Contact Information</h3> {/* Increased h3 size */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" /> {/* Changed icon color */}
                  <div className="ml-4">
                    <p className="text-base text-muted-foreground tracking-wider uppercase">Phone</p> {/* Increased p size */}
                    <p className="text-stone-800 font-medium text-lg">+44 7360 095207</p> {/* Changed text color */}
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" /> {/* Changed icon color */}
                  <div className="ml-4">
                    <p className="text-base text-muted-foreground tracking-wider uppercase">Email</p> {/* Increased p size */}
                    <p className="text-stone-800 font-medium text-lg">info@britaniaflodec.co.uk</p> {/* Changed text color */}
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" /> {/* Changed icon color */}
                  <div className="ml-4">
                    <p className="text-base text-muted-foreground tracking-wider uppercase">Atelier</p> {/* Increased p size */}
                    <p className="text-stone-800 font-medium text-lg">219 Station Rd<br />Harrow, HA1 2TH<br />London, United Kingdom</p> {/* Changed text color */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
