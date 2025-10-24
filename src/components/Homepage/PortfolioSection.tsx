import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import Image from "next/image";

interface PortfolioProps {
  darkMode: boolean;
}

const PortfolioSection: React.FC<PortfolioProps> = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Corporate",
    "E-commerce",
    "Portfolio",
    "Landing Page",
  ];

  const projects = [
    {
      id: 1,
      title: "TechCorp Solutions",
      category: "Corporate",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "Modern corporate website with custom CMS",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Fashion Store",
      category: "E-commerce",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      description: "Full-featured e-commerce platform",
      tags: ["Next.js", "Stripe", "Tailwind"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Creative Agency",
      category: "Portfolio",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      description: "Portfolio website for creative agency",
      tags: ["React", "Framer Motion", "GSAP"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "SaaS Landing",
      category: "Landing Page",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
      description: "High-converting SaaS landing page",
      tags: ["Vue.js", "Tailwind", "Analytics"],
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Restaurant Chain",
      category: "Corporate",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      description: "Multi-location restaurant website",
      tags: ["Laravel", "MySQL", "Bootstrap"],
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Fitness App",
      category: "Landing Page",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      description: "Mobile app landing page",
      tags: ["React", "TypeScript", "Styled Components"],
      link: "#",
      github: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              darkMode
                ? "bg-gray-700 text-blue-400 border border-gray-600"
                : "bg-blue-100 text-blue-800 border border-blue-200"
            }`}
          >
            Our Portfolio
          </span>

          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Recent Projects &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>

          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore our latest work and see how we have helped businesses
            achieve their digital goals.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              <Filter size={16} className="inline mr-2" />
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  darkMode
                    ? "bg-gray-900 border border-gray-700"
                    : "bg-white border border-gray-200"
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    width={1200}
                    height={48}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div
                    className={`text-sm font-medium mb-2 ${
                      darkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {project.category}
                  </div>

                  <h3
                    className={`text-xl font-bold mb-2 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          darkMode
                            ? "bg-gray-800 text-gray-300 border border-gray-700"
                            : "bg-gray-100 text-gray-700 border border-gray-200"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p
            className={`text-lg mb-6 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Like what you see? Lets create something amazing together.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
