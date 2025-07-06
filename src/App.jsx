import { useState, useRef, useEffect } from 'react'
import Poll from './components/poll'
import Popup from './components/Popup'
import ProjectPopup from './components/ProjectPopup'
import Typewriter from 'typewriter-effect'
import './App.css'
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { Timeline } from './components/Timeline'
import { VerticalTimeline } from './components/vertical-timeline'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from './components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import Sprout from './components/Sprout'

//todo someday:
// add moving arrow to FAQ accordion
// add dark mode functionality

function App() {

  const journeyInfo = ["Hover over a plant to read details.", "Studied language structures including phonetics, morphology, and syntax, gaining strong analytical and pattern-recognition skills.", "Assessed across multiple domains: grammar, vocabulary, reading, writing, and listening comprehension.", "Created plant identification quiz using Flask.", "Gained deep understanding of MERN and API calls.", "Completed 500+ hours of hands-on coding and project-based learning. Built 5+ full stack apps."]
  const [info, setInfo] = useState(journeyInfo[0])
  const [popup, setPopup] = useState(false)
  const [projectPopup, setProjectPopup] = useState(false)
  
  const [projectInfo, setProjectInfo] = useState(null)

  const projects = [
        {name:"Pokemon Guesser", details:"Web app makes guesses while eliminating possible answers. Made with React.js and Lottifiles.", img: "/pokemon.jpg", link:"https://github.com/Ariella-Rollins/pokemon_guesser", site:"https://ariella-rollins.github.io/pokemon_guesser/"},
        {name:"Tiny Quiz", details:"Create and share custom 5-question quizzes. User info secured with JSON Web Token and Bcrypt authentication.", img: "/quiz.jpg", link:"https://github.com/Ariella-Rollins/tiny_quiz"},
        {name:"Snapshot", details:"Fully responsive photography portfolio website. Interactive carousel built using shadcn. Messaging capabilities via EmailJS; no backend required.", img:"snapshot.jpg", link:"https://github.com/Ariella-Rollins/Snapshot"}
    ]
  
  // useRef is like state but it does NOT trigger a re-render
  const ref = useRef(null)

  const loadOffset = useRef(0);
  const hasLoaded = useRef(false);



  // make stars race by when site loads
  useEffect(() => {
    let position = 0;
    let speed = 100;
    let slowingFactor = 0.95;
    let animationFrameId;

    const animateBackground = () => {
      position += speed;
      speed *= slowingFactor;

      document.querySelector('.parallax').style.backgroundPosition = `center ${position}px`;

      if (speed > 0.5) {
        animationFrameId = requestAnimationFrame(animateBackground);
      }
      else {
        loadOffset.current = position; 
        hasLoaded.current = true;
        // console.log('Final loadOffset:', loadOffset.current);
      }
    };

    animationFrameId = requestAnimationFrame(animateBackground);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);


  //parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (hasLoaded.current) {
      const y = window.scrollY;
      // console.log("loaded. scroll", y, "loadoff", loadOffset.current)
      document.querySelector('.parallax').style.backgroundPosition = `center ${loadOffset.current - window.scrollY * .3}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <div className="parallax"></div>
      <div className="containers text-blue-100">
        {projectPopup && <ProjectPopup setProjectPopup={setProjectPopup} projectInfo={projectInfo}/>}
        {popup && <Popup setPopup={setPopup} />}
        <div className='banner gap-2 flex justify-end'>
          <div className='flex justify-between md:w-[57%] w-[90%]'>
            <h1 className=' flex items-center'>Ariella Rollins</h1>
            <button className="justify-self-end bg-gradient-to-r from-[#33e4ff] to-[#007896] hover:bg-gradient-to-r hover:from-[#6decff] hover:to-[#089cc2] text-black border-2 border-cyan-200 p-2 m-2 rounded-md" onClick={() => { setPopup(true) }}>Contact me</button>
          </div>
        </div>
        <div className='title bg-black/40 flex justify-center align-center mb-10'>
          <div className="one flex justify-center align-center">
            <Typewriter
              options={{
                autoStart: false,
                loop: false,
                cursor: '',
                delay: 90,
              }}
              onInit={(typewriter) => {
                const text = '<a class="link text-lg" href="#projects">Front-end Dev 💻</a>';
                const maxLen = 17;
                const delay = 90;
                const basePause = 1000;
                const typeTime = text.length * delay;
                const deleteTime = text.length * delay;
                const typePad = (maxLen - text.length) * delay;
                const totalLoopTime = maxLen * delay + basePause + deleteTime;

                typewriter
                  .typeString(text)

                setTimeout(() => {
                  typewriter.start();
                }, 2000);
              }}
            />
          </div>

          <div className="one">
            <Typewriter
              options={{
                autoStart: false,
                loop: false,
                cursor: '',
                delay: 90,
              }}
              onInit={(typewriter) => {
                const text = '<a class="link text-lg" href="#about">Visual Story-teller 🌟</a>';
                const maxLen = 17;
                const delay = 90;
                const basePause = 1000;
                const typeTime = text.length * delay;
                const deleteTime = text.length * delay;
                const typePad = (maxLen - text.length) * delay;
                const totalLoopTime = maxLen * delay + basePause + deleteTime;

                typewriter
                  .typeString(text)

                setTimeout(() => {
                  typewriter.start();
                }, 2000);
              }}
            />
          </div>

          <div className="one">
            <Typewriter
              options={{
                autoStart: false,
                loop: false,
                cursor: '',
                delay: 90,
              }}
              onInit={(typewriter) => {
                const text = '<a class="link text-lg" href="#work">Life-long Learner 📗</a>';
                const maxLen = 17;
                const delay = 90;
                const basePause = 1000;
                const typeTime = text.length * delay;
                const deleteTime = text.length * delay;
                const typePad = (maxLen - text.length) * delay;
                const totalLoopTime = maxLen * delay + basePause + deleteTime;

                typewriter
                  .typeString(text)

                setTimeout(() => {
                  typewriter.start();
                }, 2000);

              }}
            />
          </div>

        </div>
        <div className="cols">
          <div className="side">
            <div className='ariella pt-[20px]'>
              <img src="/ariella.jpg" className='h-35 w-35 rounded-lg border-solid border-2 border-gray-300' alt="Ariella Rollins"></img>
              <p className='intro bg-white/20 ml-[10px] p-[10px] rounded-md backdrop-blur' style={{ backdropFilter: "blur(1.5px)" }} >Hi! I'm a front-end web developer with a background in Linguistics. When I'm not building awesome apps, you can find me hiking or gardening with my pet ducks.</p>
            </div>
            <div className='sidebar text-blue-950'>
              <Accordion type="multiple" className="acc" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="trigger bg-gradient-to-r from-[#33e4ff] to-[#007896] text-black p-[10px] rounded-md border-2 border-cyan-200 w-100%">Frequently Asked Questions</AccordionTrigger>
                  <AccordionContent className="content flex flex-col gap-5 p-[20px] mx-[5px] my-[10px] text-left w-100% border-2 border-white/50 bg-white/10 text-white backdrop-blur" style={{ backdropFilter: "blur(1.5px)" }}>
                    <div className='flex flex-col items-start'>
                      <p className='font-bold'>Q: What is your biggest inspiration? ✨</p>
                      <p>A: My teachers at Coding Dojo who modeled life-long learning  and gave extensive feedback on my code.</p>
                    </div>
                    <div className='flex flex-col items-start'>
                      <p className='font-bold'>Q: What is your favorite language?</p>
                      <p>A: Javascript and Japanese. 🌸</p>
                    </div>
                    <div className='flex flex-col items-start'>
                      <p className='font-bold'>Q: Is a hotdog a sandwich? 🤔</p>
                      <p>A: Structurally speaking, it's a taco.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Poll />
            </div>
          </div>
          <div className="main">
            <fieldset className='sprout-box flex flex-col justify-center items-center border-2 p-0 bg-white/20'>
              <legend className='journey bg-gradient-to-r from-[#afff10] to-[#007513] text-black px-3 py-1 rounded-md'><h2>Education</h2></legend>
              <div className="slots">
                <div className='blocks mb-0' onMouseEnter={() => { setInfo(journeyInfo[1]) }} onMouseLeave={() => { setInfo("") }}>
                  <Sprout className="sprout" sproutText="Graduated SPU with Bachelor's in Linguistics" typeId="0" />
                </div>
                <div className='blocks mb-0' onMouseEnter={() => { setInfo(journeyInfo[2]) }} onMouseLeave={() => { setInfo("") }}>
                  <Sprout className="sprout" sproutText="Earned JLPT N2 certificate (Business Japanese)" typeId="1" />
                </div>
                <div className='blocks mb-0 pb-0' onMouseEnter={() => { setInfo(journeyInfo[4]) }} onMouseLeave={() => { setInfo("") }}>
                  <Sprout className="sprout" sproutText="Attained Black Belt in MERN Stack (Coding Dojo)" typeId="2" />
                </div>
                <div className='blocks' onMouseEnter={() => { setInfo(journeyInfo[5]) }} onMouseLeave={() => { setInfo("") }}>
                  <Sprout className="sprout" sproutText="Graduated Coding Dojo with 2 stacks (May 2025)" typeId="3" />
                </div>
              </div>
              <div className='info border-2 border-white/50 bg-black/50 p-5 mt-0 mx-7 mb-7 w-full break-words overflow-hidden'>
                <p className='min-h-[25px]'>{info}</p>
              </div>
            </fieldset>
            <fieldset id="about" className='border-2 border-white bg-white/20 mt-10 flex flex-col items-center'>
              <legend className='journey bg-gradient-to-r from-[#afff10] to-[#007513] text-black px-3 py-1 rounded-md'><h2>About me</h2></legend>
              <p className='bg-black/40 p-2 mt-10 mx-10 text-lg'>From a young age, I was drawn to photography and digital art. As a teenager, I became fascinated with languages. Now as a front-end dev, I combine my love for visual aesthetics and languages.</p>
              <img src="/axo2.png" alt="axo" className='md:w-[80%] sm:w-[90%] w-[100%] p-5'></img>
            </fieldset>
            <fieldset className='projects bg-white/20 mt-10 flex-col pt-8 px-8 border-2 border-white' id="projects">
              <legend className='journey bg-gradient-to-r from-[#afff10] to-[#007513] text-black px-3 py-1 rounded-md'><h2>Projects</h2></legend>
              <div className="cards grid grid-cols-3 gap-5">
                <Card onClick={()=>{ setProjectInfo(projects[0]); setProjectPopup(true);}} className="project-card py-10 bg-slate-900 hover:bg-slate-800 hover:cursor-pointer text-white">
                  <div className='inner'>
                    <div className='front flex justify-center'>
                      <img src="ivysaur.jpg" alt="ivysaur" className='border-9 ring-2 ring-slate-400 border-white rounded-lg'></img>
                    </div>
                    <CardHeader className="back pt-3">
                      <CardTitle className="text-lg">Pokemon Guesser</CardTitle>
                      <CardDescription className="text-slate-400 text-base pb-2">Front-end Game</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>App guesses what pokemon you're thinking of in under 20 questions. Utilizes external API calls.</p>
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                  </div>
                </Card>
                <Card onClick={()=>{setProjectInfo(projects[1]); setProjectPopup(true);}} className="project-card py-10 bg-slate-900 hover:bg-slate-800 hover:cursor-pointer text-white">
                  <div className='inner'>
                    <div className='front flex justify-center'>
                      <img src="quiz.png" alt="quiz" className='border-4 ring-2 ring-slate-400 border-transparent rounded-lg'></img>
                    </div>
                    <CardHeader className="back pt-3">
                      <CardTitle className="text-lg">Tiny Quiz</CardTitle>
                      <CardDescription className="text-slate-400 text-base pb-2">Full-stack MERN app</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Create and take tiny quizzes. Secure login and registration with B-crypt. Optional image upload feature.</p>
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                  </div>
                </Card>
                <Card onClick={()=>{setProjectInfo(projects[2]); setProjectPopup(true);}} className="project-card py-10 bg-slate-900 hover:bg-slate-800 hover:cursor-pointer text-white">
                  <div className='inner'>
                    <div className='front flex justify-center'>
                      <img src="square-mello.jpg" alt="duck" className='scale-x-[-1] border-4 ring-2 ring-slate-400 border-transparent rounded-lg'></img>
                    </div>
                    <CardHeader className="back pt-3">
                      <CardTitle className="text-lg">Snapshot</CardTitle>
                      <CardDescription className="text-slate-400 text-base pb-2">Front-end Gallery</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Photography portfolio with carousels, automated-email functionality and optimalized image loading.</p>
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                  </div>
                </Card>
              </div>
            </fieldset>
            <fieldset className=' timeline-field bg-white/20 pt-4 pb-8 mt-10 border-2 border-white' id="work">
              <legend className='journey bg-gradient-to-r from-[#afff10] to-[#007513] text-black px-3 py-1 rounded-md'><h2>My Journey</h2></legend>
              <div className='horizontal flex items-center justify-center p-3'>
                <Timeline />
              </div>
              <div className='vertical flex items-center justify-center p-3'>
                <VerticalTimeline />
              </div>
            </fieldset>
            <fieldset className='bg-transparent pt-4 pb-8 px-2 mt-10 border-2 border-white'>
              <legend className='journey bg-gradient-to-r from-[#afff10] to-[#007513] text-black px-3 py-1 rounded-md w-fit'><h2>Skills</h2></legend>
              <div className='flex justify-center items-center'>
                <table className='horizontal table-auto border-separate border-white/30 border-3 border-spacing-2 w-fit'>
                  <tbody>
                    <tr className='bg-white/20 backdrop-blur-sm' style={{ backdropFilter: "blur(1.5px)" }}>
                      <th className='p-2' scope="row">Languages</th>
                      <td className='p-2'>Javascript</td>
                      <td className='p-2'>Python</td>
                      <td className='p-2'>HTML</td>
                      <td className='p-2'>CSS</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className='bg-white/20 backdrop-blur-sm' style={{ backdropFilter: "blur(1.5px)" }}>
                      <th className='p-2' scope="row">Frameworks/libraries</th>
                      <td className='p-2'>React.js</td>
                      <td className='p-2'>Express.js</td>
                      <td className='p-2'>Node.js</td>
                      <td className='p-2'>Flask</td>
                      <td className='p-2'>Tailwind.css</td>
                      <td className='p-2'>Shadcn</td>
                      <td className='p-2'>Vite</td>
                    </tr>
                    <tr className='bg-white/20 backdrop-blur-sm' style={{ backdropFilter: "blur(1.5px)" }}>
                      <th className='p-2' scope="row">Databases/tools</th>
                      <td className='p-2'>MongoDB</td>
                      <td className='p-2'>Mongoose</td>
                      <td className='p-2'>MySQL</td>
                      <td className='p-2'>Postman</td>
                      <td className='p-2'>Github</td>
                      <td className='p-2'>ASW (EC2)</td>
                      <td className='p-2'>JSON</td>
                    </tr>
                  </tbody>
                </table>

                <table className='vertical table-auto border-separate border-3 border-white/30 border-spacing-2'>
                  <thead>
                    <tr>
                      <th className='p-2'>Languages</th>
                      <th className='p-2'>Frameworks/libraries</th>
                      <th className='p-2'>Databases/tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white/20 backdrop-blur-sm' style={{ backdropFilter: "blur(1.5px)" }}>
                      <td className='p-2'>Javascript</td>
                      <td className='p-2'>React.js</td>
                      <td className='p-2'>MongoDB</td>
                    </tr>
                    <tr className='bg-white/20 backdrop-blur-sm' style={{ backdropFilter: "blur(1.5px)" }}>
                      <td className='p-2'>Python</td>
                      <td className='p-2'>Express.js</td>
                      <td className='p-2'>Mongoose</td>
                    </tr>
                    <tr className='bg-white/20 backdrop-blur-sm' style={{ backdropFilter: "blur(1.5px)" }}>
                      <td className='p-2'>HTML</td>
                      <td className='p-2'>Node.js</td>
                      <td className='p-2'>MySQL</td>
                    </tr>
                    <tr className='bg-white/20 backdrop-blur-sm' style={{ backdropFilter: "blur(1.5px)" }}>
                      <td className='p-2'>CSS</td>
                      <td className='p-2'>Flask</td>
                      <td className='p-2'>Postman</td>
                    </tr>
                    <tr className='bg-white/20 backdrop-blur-sm' style={{ backdropFilter: "blur(1.5px)" }}>
                      <td className='p-2'></td>
                      <td className='p-2'>Tailwind</td>
                      <td className='p-2'>Github</td>
                    </tr>
                    <tr className='bg-white/20 backdrop-blur-sm' style={{ backdropFilter: "blur(1.5px)" }}>
                      <td className='p-2'></td>
                      <td className='p-2'>Shadcn</td>
                      <td className='p-2'>ASW (EC2)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </fieldset>
          </div>
        </div>
        <div className='outro mt-[70px]'>
          <a href="https://github.com/Ariella-Rollins" target="_blank" rel="noopener noreferrer"><IoLogoGithub className='h-[50px] w-[50px] p-[5px] opacity-80 hover:opacity-100 bg-black/30 border-2 border-white rounded-xl' /></a>
          <a href="mailto:ariella.rollins.dev@gmail.com" target="_blank" rel="noopener noreferrer"><TfiEmail className='h-[50px] w-[50px] p-[10px] border-2 border-white rounded-xl opacity-80 hover:opacity-100 bg-black/30' /></a>
          <a href="https://www.linkedin.com/in/ariella-rollins-080354178/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='h-[50px] w-[50px] p-[10px] border-2 border-white rounded-xl opacity-80 hover:opacity-100 bg-black/30' /></a>
        </div>
        <p className='bg-black/40 w-[70%] py-2 my-8 rounded-lg'>Made with React.js and Tailwind.css</p>
      </div >
    </>
  )
}

export default App
