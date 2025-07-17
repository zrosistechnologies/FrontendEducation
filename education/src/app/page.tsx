'use client';
import { useState } from 'react';
import Image from "next/image";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Search } from 'lucide-react';
import Link from 'next/link';
import Tabs from '../../components/tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaLinkedin, FaPlayCircle } from 'react-icons/fa'


export default function Home() {
  const partners = [
    { name: "Capegemini", image: "capgemini2.jpg" },
    { name: "Accenture", image: "accenture.jpg" },
    { name: "airtel", image: "airtel.jpg" },
    { name: "TCS", image: "tcs.jpg" },
    { name: "Flipkart", image: "flipkart.jpg" },
    { name: "Infosys", image: "infosys.jpg" },
  ]
  const companyLogos = [
    { name: 'Google', src: '/google.png' },
    { name: 'Microsoft', src: '/microsoft.png' },
    { name: 'Servicenow', src: '/servicenow.webp' },
    { name: 'Amazon', src: '/amazon.png' },
    { name: 'IBM', src: '/IBM.png' },
    { name: 'Oracle', src: '/oracle.png' },
    { name: 'Salesforce', src: '/salesforce.png' },

  ];
  const successStories = [
    {
      name: 'Success Stories',
      image: '/images/story1.jpg',
    },
    {
      name: 'Ayush Shah',
      image: '/images/story2.jpg',
    },
    {
      name: 'Gaurav Saboo',
      image: '/images/story3.jpg',
    },
    {
      name: 'Priya Desai',
      image: '/images/story4.jpg',
    },
  ]
  const teamMembers = [
    {
      name: 'Jack Delgado',
      role: 'Project Manager',
      image: '/men.webp',
    },
    {
      name: 'Cynthia Carr',
      role: 'Managing Director',
      image: '/men.webp',
    },
    {
      name: 'Russell Patel',
      role: 'Developer',
      image: '/men.webp',
    },
    
  ];
  return (
    <>
      <Header />

      <section className="bg-[url('/HomeHeroBg.webp')] bg-cover py-16 px-4 md:px-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">

          {/* Left Content (Reduced Width) */}
          <div className="w-full md:w-[48%]">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Learn AI Skills & Get <br />
              <span className="bg-gradient-to-br from-[#931b27] via-[#b02e45] to-[#7d226b] bg-clip-text text-transparent font-semibold">
                Certified
              </span> From Industry Experts
            </h1>
            <p className="mt-4 text-white text-base max-w-lg">
              Jumpstart your career with our comprehensive AI courses. Learn from top instructors and gain in-demand skills.
            </p>

            {/* Search Bar */}
            <div className="mt-6 flex rounded shadow-md overflow-hidden w-[450px] border border-white">
              <input
                type="text"
                placeholder="Search for courses, skills or subjects"
                className="w-full p-4 text-base focus:outline-none text-white"
              />
              <button className="bg-gradient-to-br from-[#931b27] via-[#b02e45] to-[#7d226b] px-4 text-white flex items-center justify-center">
                <Search size={20} />
              </button>
            </div>


            {/* Course Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "ServiceNow" },
                { title: "Full Stack Development" },
                { title: "Machine Learning" },
              ].map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border-l-4 border-[#931b27] shadow p-4"
                >
                  <h3 className="font-semibold text-lg text-black">{course.title}</h3>
                  <p className="text-sm text-gray-600">Course Fee: ₹28,000/-</p>
                  <p className="text-green-600 text-sm font-semibold mt-1">100% Job Assistance</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-[260px] mt-25">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-black mb-4">Register for a Course</h3>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <select className="w-full mb-4 p-2 border border-gray-300 rounded">
                <option>Select a Course</option>
                <option>AI & ML</option>
                <option>Web Development</option>
                <option>Data Science</option>
              </select>
              <button className="w-full bg-gradient-to-br from-[#931b27] via-[#b02e45] to-[#7d226b] text-white py-2 rounded font-semibold hover:bg-blue-700 transition">
                Register Now
              </button>
            </div>
          </div>


        </div>
      </section>

      {/* University Partners */}
      <section className="bg-white py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">
            In collaboration with top-tier academic institutions and multinational firms
          </h2>

          {/* Slider container */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-slide flex gap-8 w-max">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg h-20 flex items-center justify-center border min-w-[150px] hover:shadow-md transition-shadow"
                >
                  <img
                    src={`/${partner.image}?height=60&width=120&text=${partner.name}`}
                    alt={partner.name}
                    className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*Explore Our Programs */}
      <Tabs />
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            What Our Learners Say About Us
          </h2>

          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {successStories.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white rounded-2xl border border-gray-200 shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="relative group">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <FaPlayCircle className="absolute top-1/2 left-1/2 text-white text-5xl drop-shadow-md transform -translate-x-1/2 -translate-y-1/2 opacity-90 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-lg font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">Learner</p>
                      </div>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-xl hover:text-blue-800 transition-colors"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Arrows */}
            <div className="flex justify-end mt-6 gap-4">
              <button className="swiper-prev cursor-pointer text-2xl text-gray-600 hover:text-purple-700 transition">
                ←
              </button>
              <button className="swiper-next cursor-pointer text-2xl text-gray-600 hover:text-purple-700 transition">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 md:px-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Certificate Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/certificate.png" // Replace with your actual image path
              alt="Course Completion Certificate"
              width={400}
              height={300}
              className="rounded-lg border shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>🎓</span> Get Your Certificate
            </h2>

            <p className="text-xl font-semibold text-gray-700 mb-2">
              Full Stack Development Course
            </p>

            <p className="text-gray-600 italic mb-6">
              Earn a certificate of completion after successfully finishing the course.
            </p>

            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Watch at least 60% of course videos</li>
              <li>Score 60% or more in Quizzes & Assignments</li>
              <li>
                These criteria apply to certificate eligibility. For Job Assistance info,
                please check the <a href="#" className="text-blue-600 underline">FAQs</a>.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#931b27] via-[#b02e45] to-[#7d226b] py-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center ">
          Our Team Member
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[40px] mb[20px]">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20 shadow-xl"
            >
              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-white mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-200">{member.role}</p>
              <div className="flex justify-center mt-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
              </div>
            </div>
          ))}
        </div>

 
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
            Our Corporate Partners & Recruiters
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-5">
            {companyLogos.map((logo) => (
              <div
                key={logo.name}
                className="w-28 md:w-36 grayscale hover:grayscale-0 transition-transform hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={150}
                  height={100}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>

  );
}
