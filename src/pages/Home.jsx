import { motion } from "framer-motion";

// Add these animation utilities
const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const AnimatedText = ({ text, className }) => {
  return (
    <motion.span className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          className="inline-block"
          style={{ originY: 0.5 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Add the scaffolding component
const Scaffolding = ({ className = "" }) => (
  <motion.div 
    className={`absolute left-0 right-0 ${className}`}
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="h-[2px] bg-white/20" />
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#004d00] px-4 sm:px-6 mt-[var(--navbar-height)]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)"/>
          </svg>
        </div>

        {/* Content */}
        <div className="container relative">
          <div className="flex flex-col items-center py-12 md:py-16">
            <div className="max-w-4xl text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Professional Property
                <span className="block mt-2">Maintenance Services</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Your Property Deserves <span className="text-white font-semibold">Absolute Care</span>
                <span className="block mt-2">with no hassle.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn btn-secondary">
                  Get a Free Quote
                </a>
                <a href="/services" className="btn btn-secondary">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6">
          <motion.div 
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-secondary mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive property maintenance solutions tailored to your needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-soft hover:shadow-lg transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-xl">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-brand-secondary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6">
          <motion.div 
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-secondary mb-3 sm:mb-4">
              Why Choose Us
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference of working with true professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center p-4 sm:p-6 rounded-xl bg-gray-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-brand-primary text-2xl sm:text-3xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-brand-secondary mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "General Maintenance",
    description: "Comprehensive maintenance services to keep your property in perfect condition.",
    icon: "🔧" // Replace with actual icon component
  },
  {
    title: "Repairs",
    description: "Quick and reliable repair services for all property issues.",
    icon: "🛠️" // Replace with actual icon component
  },
  {
    title: "Renovations",
    description: "Transform your space with our professional renovation services.",
    icon: "🏗️" // Replace with actual icon component
  }
]

const features = [
  {
    title: "Professional Team",
    description: "Experienced and certified maintenance professionals.",
    icon: "👥" // Replace with actual icon component
  },
  {
    title: "Quality Guaranteed",
    description: "We stand behind our work with satisfaction guarantee.",
    icon: "✓" // Replace with actual icon component
  },
  {
    title: "24/7 Support",
    description: "Always available for emergency maintenance needs.",
    icon: "🕒" // Replace with actual icon component
  }
] 