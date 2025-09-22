import Navbar from '../Components/Navbar/Navbar'
import Hero from './Hero'
import Project from '../Project/Project'
import { navbarContext } from '../Context/NavContext';
import { useContext, useEffect, useRef, useState } from 'react';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';


const Home = () => {
  const { active, HandleActive } = useContext(navbarContext);

  const heroRef = useRef(null);
  const projectRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);


  const [isManualScroll, setIsManualScroll] = useState(false); // NEW

  // Smooth scroll when a nav link is clicked
  useEffect(() => {
    const refs = {
      home: heroRef,
      project: projectRef,
      resume: resumeRef,
      contact: contactRef,
    };
    const targetRef = refs[active];

    if (targetRef?.current) {
      setIsManualScroll(true); // pause observer
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // After scroll animation (~600ms), allow observer again
      const timeout = setTimeout(() => setIsManualScroll(false), 700);
      return () => clearTimeout(timeout);
    }
  }, [active]);

  // useEffect(() => {
  //   if(active === "home" && heroRef.current){
  //     heroRef.current.scrollIntoView({behavior : "smooth"})
  //   }
  //   else if(active === "project" && projectRef.current){
  //     projectRef.current.scrollIntoView({behavior : "instant"})
  //   }
  //   else if(active === "resume" && resumeRef.current){
  //     resumeRef.current.scrollIntoView({behavior : "instant"})
  //   }
  //   else if(active === "contact" && contactRef.current){
  //     contactRef.current.scrollIntoView({behavior : "smooth"})
  //   }
  // }, [active])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-60px 0px 0px 0px',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      if (isManualScroll) return;

      entries.forEach((entry) => {
        if(entry.isIntersecting){
          const sectionId = entry.target.getAttribute("data-section")
          HandleActive(sectionId)
        }
      })
    }, options)

    const sections = [heroRef, projectRef, resumeRef, contactRef]
    sections.forEach((ref) => {
      if(ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect();

    // return () => {
    //   sections.forEach((ref) => {
    //     if (ref.current) observer.unobserve(ref.current)
    //   })
    // }

  }, [isManualScroll])

  return (
    <div>
      <div ref={heroRef} data-section="home" className="w-[100%] min-h-[100vh]">
        <Navbar/>
        <Hero/>
      </div>
      <div ref={projectRef} data-section="project" className="w-[100%] min-h-[100vh] project-container">
        <Project/>
      </div>
      <div ref={resumeRef} data-section="resume" className="w-[100%] min-h-[100vh]">
        <Resume/>
      </div>
      <div ref={contactRef} data-section="contact" className="w-[100%] min-h-[100vh]">
        <Contact/>
      </div>
    </div>
  )
}

export default Home