import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from "./components";
import FreelanceExperience from "./components/FreelanceExperience";

const App = () => {
  return (
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
  );
}

export default App;
