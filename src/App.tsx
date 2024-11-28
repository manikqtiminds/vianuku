import React, { Suspense } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
          <Services />
          <About />
          <Team />
          <Portfolio />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;