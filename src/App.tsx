import { Suspense } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Founder from './components/sections/Founder';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Expertise from './components/sections/Expertise';

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
          <Services />
          <About />
          <Founder />
          <Expertise />
          <Portfolio />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;