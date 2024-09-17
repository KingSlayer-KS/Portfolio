import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from "./components";
import FreelanceExperience from "./components/FreelanceExperience";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    // Add the Google Analytics script dynamically
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=G-YZGWQR6CMY`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YZGWQR6CMY');
    `;
    document.head.appendChild(script2);
  }, []);


  return (
    <div className="App">
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {/* <FreelanceExperience/> */}
        {/* <Tech /> */}
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    </MantineProvider>
    </div>
    // page for evye casestudy
  );
}

export default App;
