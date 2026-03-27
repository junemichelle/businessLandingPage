// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

import React from "react";

export default function BusinessLandingPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md">
        <h1 className="text-xl font-bold text-blue-600">BizGrow</h1>
        <div className="hidden md:flex gap-6">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Get Started
        </button>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold">
          Grow Your Business Online
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          We help businesses build modern websites that attract customers and
          increase sales.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl">
          Start Now
        </button>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Features</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 shadow rounded-xl">
            <h4 className="font-semibold text-lg">Fast Performance</h4>
            <p className="text-gray-600 mt-2">
              Optimized websites for speed and efficiency.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h4 className="font-semibold text-lg">Responsive Design</h4>
            <p className="text-gray-600 mt-2">
              Looks perfect on phones, tablets, and desktops.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h4 className="font-semibold text-lg">SEO Friendly</h4>
            <p className="text-gray-600 mt-2">
              Built to rank higher on search engines.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-6 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold">About Us</h3>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          We are a team of developers and designers passionate about helping
          businesses succeed online through modern web solutions.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 text-center">
        <h3 className="text-3xl font-bold">Get In Touch</h3>
        <p className="mt-4 text-gray-600">
          Ready to start your project? Let’s talk.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl">
          Contact Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-gray-900 text-gray-400">
        © {new Date().getFullYear()} BizGrow. All rights reserved.
      </footer>
    </div>
  );
}
