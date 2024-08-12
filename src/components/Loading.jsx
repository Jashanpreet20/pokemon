import React from 'react';
import { FaSpinner } from 'react-icons/fa'; // Import a spinner icon

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-x-2">
      <FaSpinner className="text-blue-500 text-5xl animate-spin" />
      <p className='text-blue-500 text-5xl'>Please wait...</p>
    </div>
  );
};

export default Loading;