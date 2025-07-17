import { Facebook, Twitter, Linkedin, Youtube, Instagram, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const popularTutorials = [
    "Data Science Tutorial",
    "Machine Learning Tutorial",
    "Cyber Security Tutorial",
    "Salesforce Tutorial",
    "AWS Tutorial",
    "Azure Tutorial",
    "SQL Tutorial",
    "Selenium Tutorial",
    "Ethical Hacking Tutorial",
    "Artificial Intelligence Tutorial",
  ]

  const popularResources = [
    "Data Science",
    "Machine Learning",
    "AWS",
    "Digital Marketing",
    "Cyber Security",
    "Artificial Intelligence",
    "DevOps",
    "Python",
    "UI UX Design",
    "Ethical Hacking",
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact Banner */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Phone className="h-5 w-5 text-blue-400" />
            <span className="text-sm">Call Our Course Advisors</span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-sm">IND: +91 7065379947</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold text-xl">Zrosis</div>
                <span className="font-semibold text-lg">Education</span>
              </div>
              <p className="text-gray-300 mb-6">
                Leading education platform helping professionals advance their careers with cutting-edge skills and
                industry-relevant knowledge.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Youtube className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>

            {/* Popular Tutorials */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Popular Tutorials</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/tutorials/data-science" className="text-gray-300 hover:text-blue-400">
                    Data Science Tutorial
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials/machine-learning" className="text-gray-300 hover:text-blue-400">
                    Machine Learning Tutorial
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials/cyber-security" className="text-gray-300 hover:text-blue-400">
                    Cyber Security Tutorial
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials/salesforce" className="text-gray-300 hover:text-blue-400">
                    Salesforce Tutorial
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials/aws" className="text-gray-300 hover:text-blue-400">
                    AWS Tutorial
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials/azure" className="text-gray-300 hover:text-blue-400">
                    Azure Tutorial
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Popular Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/categories/data-science" className="text-gray-300 hover:text-blue-400">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link href="/categories/machine-learning" className="text-gray-300 hover:text-blue-400">
                    Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="/categories/aws" className="text-gray-300 hover:text-blue-400">
                    AWS
                  </Link>
                </li>
                <li>
                  <Link href="/resources/digital-marketing" className="text-gray-300 hover:text-blue-400">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/categories/cyber-security" className="text-gray-300 hover:text-blue-400">
                    Cyber Security
                  </Link>
                </li>
                <li>
                  <Link href="/categories/ai-and-machine-learning" className="text-gray-300 hover:text-blue-400">
                    Artificial Intelligence
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-blue-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/company/media" className="text-gray-300 hover:text-blue-400">
                    Media
                  </Link>
                </li>
                <li>
                  <Link href="/company/become-instructor" className="text-gray-300 hover:text-blue-400">
                    Become an Instructor
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-blue-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/interview-questions" className="text-gray-300 hover:text-blue-400">
                    Interview Questions
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-gray-300 hover:text-blue-400">
                    Tutorials
                  </Link>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Contact Info</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>AWFIS, Knowledge Bouelvard, 7th Floor, Tower A, Knowledge Boulevard, Sector 62, Noida, UP 201309</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+91 7065379947</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>info@zeducation.in, info@zrosiseducation.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © Copyright 2011 - 2025 Zrosis Education. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-blue-400">
              Terms of Use
            </Link>
            <Link href="/refund-policy" className="hover:text-blue-400">
              Refund Policy
            </Link>
            <Link href="/sitemap" className="hover:text-blue-400">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
