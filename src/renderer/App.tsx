import React, { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  const [activeElement, setActiveElement] = useState('main-page');

  const showElement = (elementId: React.SetStateAction<string>) => {
    setActiveElement(elementId);
  };

  return (
    <div className="bg-purple text-white">
      <div>
        <nav className="bg-[#2E3239]">
          <ul className="flex">
            <li
              className={`py-2 px-4 hover:bg-[#A2B2EE] hover:text-white ${
                activeElement === 'main-page' ? 'bg-[#5F7ADB] text-white' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => showElement('main-page')}
                className="w-full h-full"
              >
                Main page
              </button>
            </li>
            <li
              className={`py-2 px-4 hover:bg-[#A2B2EE] hover:text-white ${
                activeElement === 'game-list' ? 'bg-[#5F7ADB] text-white' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => showElement('game-list')}
                className="w-full h-full"
              >
                Game list
              </button>
            </li>
            <li
              className={`py-2 px-4 hover:bg-[#A2B2EE] hover:text-white ${
                activeElement === 'your-games' ? 'bg-[#5F7ADB] text-white' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => showElement('your-games')}
                className="w-full h-full"
              >
                Your games
              </button>
            </li>
            <li
              className={`py-2 px-4 hover:bg-[#A2B2EE] hover:text-white ${
                activeElement === 'ai' ? 'bg-[#5F7ADB] text-white' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => showElement('ai')}
                className="w-full h-full"
              >
                AI
              </button>
            </li>
            <li
              className={`py-2 px-4 hover:bg-[#A2B2EE] hover:text-white ${
                activeElement === 'feedback' ? 'bg-[#5F7ADB] text-white' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => showElement('feedback')}
                className="w-full h-full"
              >
                Feedback
              </button>
            </li>
            <li
              className={`py-2 px-4 hover:bg-[#A2B2EE] hover:text-white ${
                activeElement === 'account' ? 'bg-[#5F7ADB] text-white' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => showElement('account')}
                className="w-full h-full"
              >
                Account
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main page */}
      {activeElement === 'main-page' && (
        <div id="main-page">
          <p>Main page content</p>
        </div>
      )}

      {/* Game list */}
      {activeElement === 'game-list' && (
        <div id="game-list">
          <h1>Game list</h1>
          <p className="text-gray-300">
            Here you can find all the games that are available on our platform.
          </p>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <div className="bg-[#5F7ADB] rounded-lg p-4 flex flex-col">
              <div className="flex-1">
                <h3 className="text-white">Warframe</h3>
                <p className="text-gray-300">Warframe is a free to play game</p>
                <img
                  src="https://ig-assets.luciousdev.nl/app/covers/warframe_cover.jpg"
                  alt="Game 1"
                  className="mt-4 mb-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-transparent text-white px-4 py-2 rounded"
                >
                  {'Goto game >'}
                </button>
              </div>
            </div>
            <div className="bg-[#5F7ADB] rounded-lg p-4 flex flex-col">
              <div className="flex-1">
                <h3 className="text-white">Warframe</h3>
                <p className="text-gray-300">Warframe is a free to play game</p>
                <img
                  src="https://ig-assets.luciousdev.nl/app/covers/warframe_cover.jpg"
                  alt="Game 1"
                  className="mt-4 mb-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-transparent text-white px-4 py-2 rounded"
                >
                  {'Goto game >'}
                </button>
              </div>
            </div>
            <div className="bg-[#5F7ADB] rounded-lg p-4 flex flex-col">
              <div className="flex-1">
                <h3 className="text-white">Warframe</h3>
                <p className="text-gray-300">Warframe is a free to play game</p>
                <img
                  src="https://ig-assets.luciousdev.nl/app/covers/warframe_cover.jpg"
                  alt="Game 1"
                  className="mt-4 mb-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-transparent text-white px-4 py-2 rounded"
                >
                  {'Goto game >'}
                </button>
              </div>
            </div>
            <div className="bg-[#5F7ADB] rounded-lg p-4 flex flex-col">
              <div className="flex-1">
                <h3 className="text-white">Warframe</h3>
                <p className="text-gray-300">Warframe is a free to play game</p>
                <img
                  src="https://ig-assets.luciousdev.nl/app/covers/warframe_cover.jpg"
                  alt="Game 1"
                  className="mt-4 mb-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-transparent text-white px-4 py-2 rounded"
                >
                  {'Goto game >'}
                </button>
              </div>
            </div>
            <div className="bg-[#5F7ADB] rounded-lg p-4 flex flex-col">
              <div className="flex-1">
                <h3 className="text-white">Warframe</h3>
                <p className="text-gray-300">Warframe is a free to play game</p>
                <img
                  src="https://ig-assets.luciousdev.nl/app/covers/warframe_cover.jpg"
                  alt="Game 1"
                  className="mt-4 mb-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-transparent text-white px-4 py-2 rounded"
                >
                  {'Goto game >'}
                </button>
              </div>
            </div>
            <div className="bg-[#5F7ADB] rounded-lg p-4 flex flex-col">
              <div className="flex-1">
                <h3 className="text-white">Warframe</h3>
                <p className="text-gray-300">Warframe is a free to play game</p>
                <img
                  src="https://ig-assets.luciousdev.nl/app/covers/warframe_cover.jpg"
                  alt="Game 1"
                  className="mt-4 mb-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-transparent text-white px-4 py-2 rounded"
                >
                  {'Goto game >'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Your games */}
      {activeElement === 'your-games' && (
        <div id="your-games">
          <p>Your games content</p>
        </div>
      )}

      {/* AI */}
      {activeElement === 'ai' && (
        <div id="ai">
          <p>AI content</p>
        </div>
      )}

      {/* Feedback */}
      {activeElement === 'feedback' && (
        <div id="feedback">
          <p>Feedback content</p>
        </div>
      )}

      {/* Account */}
      {activeElement === 'account' && (
        <div id="account">
          <p>Account content</p>
        </div>
      )}

      {/* Other content */}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
