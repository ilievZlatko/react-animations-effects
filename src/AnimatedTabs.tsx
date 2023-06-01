import { motion } from 'framer-motion';
import { useState } from 'react';

let tabs = [
  { id: 'world', label: 'World' },
  { id: 'ny', label: 'N.Y.' },
  { id: 'business', label: 'Business' },
  { id: 'arts', label: 'Arts' },
  { id: 'science', label: 'Science' },
];

function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div
      className='w-full flex items-center justify-center h-14 bg-gray-950 bg-opacity-20 backdrop-blur-2xl border-b-[1px] drop-shadow-md'
      style={{
        borderColor: 'rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className='flex space-x-1'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? '' : 'hover:opacity-50'
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white otuline-2 otuline-sky-400 focus-visible:outline`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId='active-pill'
                className='absolute inset-0 bg-white'
                transition={{ type: 'spring', duration: 0.6 }}
                style={{
                  borderRadius: 9999,
                }}
              />
            )}
            <span className='relative z-10 mix-blend-exclusion'>
              {tab.label}
            </span>
            {/* <span className='relative z-10'>{tab.label}</span> */}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AnimatedTabs;
