'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Calendar, Clock } from 'lucide-react';

type TabCategory =
  | 'Popular'
  | 'AI & Machine Learning'
  | 'Data Science & Business Analytics'
  | 'Leadership & Management'
  | 'Finance'
  | 'Online Degrees & Study Abroad'
  | 'Doctorate'
  | 'Undergraduate'
  | 'Cloud Computing'
  | 'Cyber Security'
  | 'Electric and Hybrid Vehicles'
  | 'Product and Design'
  | 'Supply Chain & Logistics'
  | 'Software Development';

const tabs: TabCategory[] = [
  'Popular',
  'AI & Machine Learning',
  'Data Science & Business Analytics',
  'Leadership & Management',
  'Finance',
  'Online Degrees & Study Abroad',
  'Doctorate',
  'Undergraduate',
  'Cloud Computing',
  'Cyber Security',
  'Electric and Hybrid Vehicles',
  'Product and Design',
  'Supply Chain & Logistics',
  'Software Development',
];

const programsMap: Record<
  TabCategory,
  {
    title: string;
    institute: string;
    cohort: string;
    duration: string;
    image?: string;
  }[]
> = {
  Popular: [
    {
      title: 'Executive PG Certification in AI',
      institute: 'IIT Roorkee',
      cohort: '20th July 2025',
      duration: '11 Months',
      image: '/IITRoorkee.webp',
    },
    {
      title: 'MBA in Leadership',
      institute: 'IIM Bangalore',
      cohort: '15th Aug 2025',
      duration: '18 Months',
      image: '/NITRaipur.jpg',
    },
  ],
  'AI & Machine Learning': [
    {
      title: 'Executive M.Tech in AI & ML',
      institute: 'NIT Raipur',
      cohort: '19th July 2025',
      duration: '2 Years',
      image: '/nit-raipur.jpg',
    },
    {
      title: 'Generative AI Course',
      institute: 'IntelliPaat',
      cohort: '5th Sept 2025',
      duration: '6 Months',
      image: '/genai.jpg',
    },
  ],
  'Data Science & Business Analytics': [
    {
      title: 'Data Science with Placement Assistance',
      institute: 'MIT IDSS',
      cohort: '20th July 2025',
      duration: '8 Months',
      image: '/mit.jpg',
    },
  ],
  'Leadership & Management': [
    {
      title: 'MBA in Leadership & Strategy',
      institute: 'IIM Ahmedabad',
      cohort: '25th July 2025',
      duration: '2 Years',
      image: '/iim-a.jpg',
    },
  ],
  Finance: [
    {
      title: 'Executive Finance Program',
      institute: 'Wharton School',
      cohort: '10th Aug 2025',
      duration: '1 Year',
      image: '/wharton.jpg',
    },
  ],
  'Online Degrees & Study Abroad': [],
  Doctorate: [],
  Undergraduate: [],
  'Cloud Computing': [],
  'Cyber Security': [],
  'Electric and Hybrid Vehicles': [],
  'Product and Design': [],
  'Supply Chain & Logistics': [],
  'Software Development': [],
};

export default function RedesignedTabs() {
  const [selectedTab, setSelectedTab] = useState<TabCategory>('Popular');

  return (
    <section className="bg-gray-100 py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Explore Programs by Category
        </h2>

        {/* Tab Buttons */}
        <div className="flex overflow-x-auto gap-3 mb-8 pb-1 hide-scrollbar -mx-2 px-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`whitespace-nowrap px-4 py-2 text-sm rounded-full border font-medium transition-all duration-300 ${selectedTab === tab
                  ? 'bg-gradient-to-br from-[#931b27] via-[#b02e45] to-[#7d226b] text-white border-transparent shadow-md'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#931b27] hover:text-[#931b27]'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {programsMap[selectedTab].length > 0 ? (
          <CardList programs={programsMap[selectedTab]} />
        ) : (
          <div className="text-center text-gray-500 py-10 border border-dashed border-gray-300 rounded-lg">
            <p className="text-lg">🚧 Coming Soon for <strong>{selectedTab}</strong></p>
          </div>
        )}
      </div>
    </section>
  );
}

// Generate slug from program title
function getSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

// Program Card List
function CardList({
  programs,
}: {
  programs: {
    title: string;
    institute: string;
    cohort: string;
    duration: string;
    image?: string;
  }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer">
      {programs.map((program, idx) => {
        const slug = `/programs/${getSlug(program.title)}`;
        return (
          <Link href={slug} key={idx}>
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-200 overflow-hidden">
              {program.image && (
                <Image
                  src={program.image}
                  alt={program.title}
                  width={500}
                  height={280}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold text-gray-800">{program.title}</h3>

                <div className="flex items-center text-sm text-gray-500 gap-1">
                  <GraduationCap className="w-4 h-4" />
                  {program.institute}
                </div>

                <div className="flex items-center text-sm text-gray-500 gap-1">
                  <Calendar className="w-4 h-4" />
                  Next Cohort: {program.cohort}
                </div>

                <div className="flex items-center text-sm text-gray-500 gap-1">
                  <Clock className="w-4 h-4" />
                  Duration: {program.duration}
                </div>

                <div className="mt-5 text-center">
                  <div className="hidden group-hover:flex flex-col items-center gap-1 transition-all duration-300">
                    <div className="w-50 border-t border-gray-400 opacity-80"></div>
                    <span className="text-sm text-[#931b27] font-semibold cursor-pointer">
                      Know More
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
