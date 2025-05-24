import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">React with Tailwind CSS</h1>
        <p className="text-gray-700">
          This project was set up with React and Tailwind CSS, compatible with Node.js 16.20.2
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
          Click me!
        </button>
      </div>
    </div>
  );
}

export default App;
