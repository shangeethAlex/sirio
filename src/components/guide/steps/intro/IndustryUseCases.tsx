import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Camera, Megaphone, Briefcase, User } from 'lucide-react';

const industries = [
  {
    icon: Palette,
    title: "For Designers",
    benefits: [
      "Create branded visuals featuring yourself or your team without costly photoshoots",
      "Experiment with concepts and poses for campaigns before committing resources",
      "Prototype ideas for client presentations faster than ever"
    ]
  },
  {
    icon: Camera,
    title: "For Photographers",
    benefits: [
      "Turn a single photoshoot into unlimited compositions using AI-generated backdrops",
      "Offer clients avatar-based headshots for remote teams or digital projects",
      "Reduce costs and time for product or model shoots"
    ]
  },
  {
    icon: Megaphone,
    title: "For Content Creators",
    benefits: [
      "Scale your presence with avatars that can appear in multiple campaigns",
      "Produce high-quality video content, stories, or posts without constant filming",
      "Transform your avatar into a digital brand ambassador"
    ]
  },
  {
    icon: Briefcase,
    title: "For Branding Experts",
    benefits: [
      "Help brands create consistent, relatable identities",
      "Test branding concepts visually in minutes",
      "Offer cutting-edge deliverables like AI-enhanced logos and avatars"
    ]
  },
  {
    icon: User,
    title: "For Personal Brands",
    benefits: [
      "Stand out with a professional AI presence that enhances your marketing",
      "Create avatars that mirror your aesthetic in every scenario",
      "Save time while maintaining authenticity in your campaigns"
    ]
  }
];

const IndustryUseCases = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-sirio-blue/5 rounded-xl p-6 border border-sirio-blue/10"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          The Creative Industry is Changing. Are You Ready?
        </h2>
        <p className="text-gray-600 mb-4">
          The tools we use, the skills we value, and the way we work are evolving faster than ever. 
          AI isn't just a trend—it's becoming the backbone of how we create, communicate, and connect.
        </p>
        <p className="text-gray-600">
          One of the most transformative shifts? AI avatars. Imagine this: a lifelike digital version 
          of yourself that can star in visuals, videos, campaigns, or even client pitches—without 
          needing a studio or even leaving your desk.
        </p>
      </motion.div>

      <div className="space-y-6">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-sirio-blue/10 flex items-center justify-center flex-shrink-0">
                <industry.icon className="w-6 h-6 text-sirio-blue" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{industry.title}</h3>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-sirio-blue mt-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-sirio-yellow/5 rounded-xl p-6 border border-sirio-yellow/10"
      >
        <p className="text-gray-600">
          <span className="font-medium text-sirio-yellow">The best part?</span>{' '}
          This isn't about replacing your creativity; it's about amplifying it. AI avatars unlock 
          workflows that save time, open new opportunities, and push the boundaries of what's possible. 
          They empower you to focus on the big ideas that truly matter.
        </p>
      </motion.div>
    </div>
  );
};

export default IndustryUseCases;