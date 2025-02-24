export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#004d00]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)"/>
          </svg>
        </div>

        <div className="container relative">
          <div className="flex flex-col items-center py-20 lg:py-32">
            {/* Main Content */}
            <div className="max-w-4xl text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
                Professional Property
                <span className="block mt-2">Maintenance Services</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                Your Property Deserves Absolute Care 
                <span className="block mt-2">with no hassle.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="btn btn-secondary">
                  Get a Free Quote
                </a>
                <a href="/services" className="btn btn-secondary">
                  Our Services
                </a>
              </div>
            </div>

            {/* Decorative bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"/>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-secondary mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive property maintenance solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4 text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-secondary mb-4">
              Why Choose Us
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference of working with true professionals
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50"
              >
                <div className="w-16 h-16 mx-auto mb-4 text-brand-primary text-3xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-secondary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
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