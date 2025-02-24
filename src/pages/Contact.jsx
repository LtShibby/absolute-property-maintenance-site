import { useTheme } from '../context/ThemeContext';
import PageLayout from '../components/PageLayout';
import ContactForm from '../components/ContactForm';
import GraphPaper from '../components/GraphPaper';

function Contact() {
  const { theme } = useTheme();

  const contactMethods = [
    {
      title: "Emergency Service",
      description: "24/7 emergency maintenance support",
      icon: "🚨",
      action: "Call (555) 123-4567",
      urgent: true
    },
    {
      title: "General Inquiries",
      description: "Questions about our services",
      icon: "📞",
      action: "Fill out the form below"
    },
    {
      title: "Free Estimates",
      description: "Get a quote for your project",
      icon: "📋",
      action: "Request an estimate"
    }
  ];

  return (
    <PageLayout>
      <section className={`${theme.section} bg-gray-50`}>
        <GraphPaper opacity="0.05" />
        <div className="relative">
          <div className="space-y-12">
            {/* Header */}
            <section>
              <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center`}>
                Contact Us
              </h2>
              <div className={`${theme.nav} p-6 rounded-lg shadow-lg text-center mb-12`}>
                <p className={`${theme.text} text-lg leading-relaxed`}>
                  Need property maintenance services? We're here to help.
                  <br />
                  Choose your preferred contact method below.
                </p>
              </div>
            </section>

            {/* Contact Methods */}
            <section className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`${theme.card} p-6 
                    ${method.urgent ? 'border-2 border-[#004d00]' : ''}`}
                >
                  <GraphPaper opacity="0.03" />
                  <div className="relative">
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <h3 className={`${theme.text} text-xl font-bold mb-2`}>
                      {method.title}
                    </h3>
                    <p className={`${theme.text} opacity-75 mb-4`}>
                      {method.description}
                    </p>
                    <p className={`${method.urgent ? 'text-[#004d00]' : theme.text} font-medium`}>
                      {method.action}
                    </p>
                  </div>
                </div>
              ))}
            </section>

            {/* Contact Form */}
            <section className="max-w-2xl mx-auto">
              <div className={`${theme.card} p-8`}>
                <GraphPaper opacity="0.03" />
                <div className="relative">
                  <h3 className={`${theme.text} text-2xl font-bold mb-6 text-center`}>
                    Send Us a Message
                  </h3>
                  <ContactForm />
                </div>
              </div>
            </section>

            {/* Additional Info */}
            <section className="text-center">
              <p className={`${theme.text} opacity-75`}>
                Serving the greater area with pride.
                <br />
                Response time: Same day for emergencies, 24-48 hours for general inquiries
              </p>
            </section>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Contact; 