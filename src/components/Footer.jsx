export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Absolute Property Maintenance</h3>
            <p className="text-gray-300">Professional property maintenance services</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Contact</h4>
            <p className="text-gray-300">Phone: (555) 123-4567</p>
            <p className="text-gray-300">Email: info@absoluteproperty.com</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Absolute Property Maintenance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 