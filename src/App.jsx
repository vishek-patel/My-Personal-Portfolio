import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './index.css'
import React from 'react'
import Image from './avatar.png'
import Resume from './resume.pdf'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function App() {
  const [darkMode , setDarkMode] = useState(false)
  return (
    <div className={darkMode? "dark" : ""}>
  
      <main className=" bg-blue-100 px-10 dark:bg-gray-900">
        <section>

        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-lg font-bold text-blue-600 dark:text-gray-400 rounded-md border-gray-600 border-x-2 px-2 dark:border-blue-600 md:text-2xl'>
            Vishek Patel
          </h1>
          <ul className='flex items-center'>
            <li> 
              <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className=' cursor-pointer text-2xl text-gray-700 dark:text-gray-400'/>
            </li> 
            <li>
            <a href={Resume} download className=' bg-gradient-to-r from-blue-600 to-blue-800 px-4 text-white border-none py-2 rounded-md ml-4'>Resume</a>
            </li>
          </ul>
        </nav>
       <div>
          <h1 className='text-4xl font-bold text-gray-700 dark:text-gray-400 md:text-6xl'>Hi, I'm Vishek Patel</h1>
          <h3 className=' text-xl text-blue-600 font-semibold py-2 md:text-2xl'>I'm a Full Stack Developer | Designer</h3>
          <p className='dark:text-white text-gray-800 text-sm md:text-lg'> 
            I'm a Full Stack Developer from India. I have a passion for building web applications and learning new technologies.
            I am currently pursuing my BTech Degree from <span> <a href="https://www.lpu.in/" className='text-blue-700 font-semibold'>Lovely Professional University</a></span> with minor in <span>Cyber Security. I am also a </span>
            <a href="https://www.freecodecamp.org/vishekpatel" className='text-blue-700 font-semibold'> freeCodeCamp</a> certified Full Stack Developer.
          </p>

       </div>

       <div className='flex gap-6 text-5xl py-1 justify-center cursor-pointer mt-6 text-gray-700 dark:text-gray-100'>
       <a href="https://twitter.com/" className='text-gray-700 font-semibold dark:text-blue-800 '><AiFillTwitterCircle/></a> 
       <a href="https://github.com/vishek-patel" className='text-gray-700 font-semibold dark:text-blue-800'>  <AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/imvishek/" className='text-gray-700 font-semibold dark:text-blue-800'>  <AiFillLinkedin/></a>

       </div>
       <div className="mx-auto mt-20 overflow-hidden relative shadow-blue-600 shadow-inner w-80 h-80 bg-gradient-to-b from-blue-300 dark:from-blue-800 to-white-500 rounded-full">
          <img src={Image} alt="Avatar"  />
       </div>
        </section>

      

        <section className=''>
          <h3 className='text-4xl font-bold text-gray-700 dark:text-gray-400 mb-4 mt-6' > Services I offer </h3>
          <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-3'>
            <div className='dark:bg-blue-800 bg-blue-100 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
              <h1 className='text-2xl font-bold  text-gray-600 dark:text-gray-200 overflow-x-hidden'>Web Development</h1>
              <p className='text-gray-600 dark:text-gray-400 mt-2'> 
              Designed beautiful and responsive
              websites using <span className=' text-red-400'>React</span> , <span className=' text-green-500'>Next.js </span>,
               <span className=' text-blue-400'> Tailwind CSS </span> 
                and <span className='text-blue-600 dark:text-blue-200'> Bootstrap </span>
               </p>
            </div>
            <div className='dark:bg-blue-800 bg-blue-100 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
              <h1 className='text-2xl font-bold text-gray-600 dark:text-gray-200 overflow-x-hidden'>Mobile Development</h1>
              <p className='text-gray-600 dark:text-gray-400 mt-2'>
                Made simple and beautiful android application using <span className=' text-green-500'>Kotlin </span> 
                and <span className=' text-blue-500 dark:text-blue-200'> Flutter</span> .

                </p>
            </div>
            <div className='dark:bg-blue-800 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
              <h1 className='text-2xl font-bold text-gray-600 dark:text-gray-200 overflow-x-hidden'>UI/UX Design</h1>
              <p className='text-gray-600 dark:text-gray-400 mt-2'>
                Designed beautiful UI in 
                <span className=' text-red-400'> Figma </span> and <span className=' text-blue-600 dark:text-blue-200'>Adobe XD </span>
                with animation and wireframes


                </p>
            </div>
          </div>

        </section>

        <section>
          <h1 className='text-4xl font-bold text-gray-700 mb-6 mt-8 dark:text-gray-400'>My Projects</h1>
          <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2'>
            <div className='bg-blue-100 dark:bg-blue-800 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
              <h1 className='text-2xl font-bold dark:text-gray-200 text-gray-800'> <a href="https://vishek-patel.github.io/PlacementPortal/" className='text-gray-800 dark:text-gray-200 font-bold'>Placement Portal</a></h1>
              <p className='text-gray-600 dark:text-gray-400'>Built a placement management portal , this system can be accessed throughout the organization with proper login credentials ,Students can register themselves for upcoming placement drives,view latest announcements offered by the organization.</p>
            </div>
            <div className='bg-blue-100 dark:bg-blue-800 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
              <h1 className='text-2xl font-bold dark:text-gray-200 text-gray-800'><a href="https://github.com/vishek-patel/My-Personal-Portfolio" className='text-gray-800 dark:text-gray-200 font-bold'>Personal Portfolio</a></h1>
              <p className='text-gray-600 dark:text-gray-400'>Built a Personal portfolio website using Next.js and Tailwind CSS  
              to showcase 
              my skills and projects.


              </p>
            </div>
            <div className='bg-blue-100 dark:bg-blue-800 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
              <h1 className='text-2xl font-bold dark:text-gray-200 text-gray-800'> <a href="https://vishek-patel.github.io/Tic-Tac-Toe/" className='text-gray-800 dark:text-gray-200 font-bold'>Tic-Tac-Toe</a></h1>
              <p className='text-gray-600 dark:text-gray-400'>Built a a game application with AI using MINIMAX algorithm along with alpha-beta pruning using HTML, CSS, Javascript. </p>
            </div>
            <div className='bg-blue-100 dark:bg-blue-800 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
              <h1 className='text-2xl font-bold dark:text-gray-200 text-gray-800 overflow-hidden'> <a href="https://github.com/vishek-patel/Learning-Management-System" className='text-gray-800 dark:text-gray-200 font-bold'>Learning management system</a></h1>
              <p className='text-gray-600 dark:text-gray-400'>Built a library management system that keeps track of the books present in the library , using Tkinter and Sql library in python </p>
            </div>
          </div>
        </section>

        <section>
          <h1 className='text-4xl font-bold text-gray-700 mt-10 dark:text-gray-400'>My Skills</h1>
          <div className='grid grid-cols-2 gap-4 mt-4 '>
            <div className='bg-blue-100 dark:bg-blue-800 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
              <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>Frontend</h1>
              <ul className='list-disc list-inside mt-2 dark:text-gray-400 text-gray-800 text-left ml-6 font-semibold md:ml-8'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
            
              </ul>
            </div>
            <div className='bg-blue-100 dark:bg-blue-800 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
              <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>Backend</h1>
              <ul className='list-disc list-inside mt-2 dark:text-gray-400 text-gray-800 text-left ml-6 font-semibold md:ml-8'>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>Django</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>


        </section>

        <footer className='py-6 mb-1 flex items-center justify-items-center text-gray-800 text-lg dark:text-gray-200'>
         <p className='text-center'>
            Made with ❤️ by <a href='https://github.com/vishek-patel' className='text-blue-600 font-semibold'> Vishek Patel</a>

         </p>

        </footer>

      </main>
    </div>
  )
}

export default App



// <div className={darkMode? "dark" : ""}>
// <main className=" bg-blue-100 px-10 dark:bg-gray-900">
//   <section>

  // <nav className='py-10 mb-12 flex justify-between'>
  //   <h1 className='text-2xl font-bold text-blue-600 dark:text-gray-400 rounded-md border-gray-600 border-x-2 px-2 dark:border-blue-600'>
  //     Vishek Patel
  //   </h1>
  //   <ul className='flex items-center'>
  //     <li> 
  //       <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className=' cursor-pointer text-2xl text-gray-700 dark:text-gray-400'/>
  //     </li> 
  //     <li>
  //     <a href='https://icecube-eu-406.icedrive.io/download?p=RaQGKE9QJBIHP4OW1w8ZEJ9_YZ_DLYu.pWwkYc1Ni_.naKDqgee7fx2HjRbDMU6SqvrH8Qigj45g0ux5sKUUwbtroOuw24sviWonSnxAkTalke3Kw4SmpTxiBCDqcBjkb0uuhLWAzgh11ZZJMfbNGNPUrC7UcHN7D_stBfw_.kSK4Op8WMdqis9K4qE.Qxoqb4aMhvrdvvauOL7vnfe5hA--' download className=' bg-gradient-to-r from-blue-600 to-blue-800 px-4 text-white border-none py-2 rounded-md ml-4'>Resume</a>
  //     </li>
  //   </ul>
  // </nav>
//  <div>
//     <h1 className='text-5xl font-bold text-gray-700 dark:text-gray-400'>Hi, I'm Vishek Patel</h1>
//     <h3 className='text-2xl text-blue-600 font-medium py-2'>I'm a Full Stack Developer | Designer</h3>
//     <p className='dark:text-white'> 
//       I'm a Full Stack Developer from India. I have a passion for building web applications and learning new technologies.
//       I am currently pursuing my BTech Degree from <span> <a href="https://www.lpu.in/" className='text-blue-700 font-semibold'>Lovely Professional University</a></span> with minor in <span>Cyber Security. I am also a </span>
//       <a href="https://www.freecodecamp.org/vishekpatel" className='text-blue-700 font-semibold'> freeCodeCamp</a> certified Full Stack Developer.
//     </p>

//  </div>

//  <div className='flex gap-6 text-5xl py-1 justify-center cursor-pointer mt-6 text-gray-700 dark:text-gray-100'>
//  <a href="https://twitter.com/" className='text-gray-700 font-semibold dark:text-blue-800 '><AiFillTwitterCircle/></a>
//  <a href="https://github.com/vishek-patel" className='text-gray-700 font-semibold dark:text-blue-800'>  <AiFillGithub/></a>
//  <a href="https://www.linkedin.com/in/imvishek/" className='text-gray-700 font-semibold dark:text-blue-800'>  <AiFillLinkedin/></a>

//  </div>
//  <div className="mx-auto mt-20 overflow-hidden relative shadow-blue-600 shadow-inner w-80 h-80 bg-gradient-to-b from-blue-300 dark:from-blue-800 to-white-500 rounded-full">
//     {/* <Image src={Avatar} alt="Avatar" layout="fill" objectFit='cover' /> */}
//  </div>
//   </section>



//   <section className=''>
//     <h3 className='text-4xl font-bold text-gray-700 dark:text-gray-400 mb-4 mt-6' > Services I offer </h3>
//     <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-3'>
//       <div className='dark:bg-blue-800 bg-blue-100 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
//         <h1 className='text-2xl font-bold  text-gray-600 dark:text-gray-200 overflow-x-hidden'>Web Development</h1>
//         <p className='text-gray-600 dark:text-gray-400 mt-2'> 
//         Designed beautiful and responsive
//         websites using <span className=' text-red-400'>React</span> , <span className=' text-green-500'>Next.js </span>,
//          <span className=' text-blue-400'> Tailwind CSS </span> 
//           and <span className='text-blue-600 dark:text-blue-200'> Bootstrap </span>
//          </p>
//       </div>
//       <div className='dark:bg-blue-800 bg-blue-100 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
//         <h1 className='text-2xl font-bold text-gray-600 dark:text-gray-200 overflow-x-hidden'>Mobile Development</h1>
//         <p className='text-gray-600 dark:text-gray-400 mt-2'>
//           Made simple and beautiful android application using <span className=' text-green-500'>Kotlin </span> 
//           and <span className=' text-blue-500 dark:text-blue-200'> Flutter</span> .

//           </p>
//       </div>
//       <div className='dark:bg-blue-800 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
//         <h1 className='text-2xl font-bold text-gray-600 dark:text-gray-200 overflow-x-hidden'>UI/UX Design</h1>
//         <p className='text-gray-600 dark:text-gray-400 mt-2'>
//           Designed beautiful UI in 
//           <span className=' text-red-400'> Figma </span> and <span className=' text-blue-600 dark:text-blue-200'>Adobe XD </span>
//           with animation and wireframes


//           </p>
//       </div>
//     </div>

//   </section>

//   <section>
//     <h1 className='text-4xl font-bold text-gray-700 mb-6 mt-8 dark:text-gray-400'>My Projects</h1>
//     <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2'>
//       <div className='bg-blue-100 dark:bg-blue-800 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
//         <h1 className='text-2xl font-bold dark:text-gray-200 text-gray-800'> <a href="https://vishek-patel.github.io/PlacementPortal/" className='text-gray-800 dark:text-gray-200'>Placement Portal</a></h1>
//         <p className='text-gray-600 dark:text-gray-400'>Built a placement management portal , this system can be accessed throughout the organization with proper login credentials ,Students can register themselves for upcoming placement drives,view latest announcements offered by the organization.</p>
//       </div>
//       <div className='bg-blue-100 dark:bg-blue-800 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
//         <h1 className='text-2xl font-bold dark:text-gray-200 text-gray-800'>Personal Portfolio</h1>
//         <p className='text-gray-600 dark:text-gray-400'>Built a Personal portfolio website using Next.js and Tailwind CSS  
//         to showcase 
//         my skills and projects.


//         </p>
//       </div>
//       <div className='bg-blue-100 dark:bg-blue-800 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
//         <h1 className='text-2xl font-bold dark:text-gray-200 text-gray-800'> <a href="https://vishek-patel.github.io/Tic-Tac-Toe/" className='text-gray-800 dark:text-gray-200'>Tic-Tac-Toe</a></h1>
//         <p className='text-gray-600 dark:text-gray-400'>Built a a game application with AI using MINIMAX algorithm along with alpha-beta pruning using HTML, CSS, Javascript. </p>
//       </div>
//       <div className='bg-blue-100 dark:bg-blue-800 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
//         <h1 className='text-2xl font-bold dark:text-gray-200 text-gray-800 overflow-hidden'> <a href="https://github.com/vishek-patel/Learning-Management-System" className='text-gray-800 dark:text-gray-200'>Learning management system</a></h1>
//         <p className='text-gray-600 dark:text-gray-400'>Built a library management system that keeps track of the books present in the library , using Tkinter and Sql library in python </p>
//       </div>
//     </div>
//   </section>

//   <section>
//     <h1 className='text-4xl font-bold text-gray-700 mt-10 dark:text-gray-400'>My Skills</h1>
//     <div className='grid grid-cols-2 gap-4 mt-4 '>
//       <div className='bg-blue-100 dark:bg-blue-800 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
//         <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>Frontend</h1>
//         <ul className='list-disc list-inside mt-2 text-gray-800 dark:text-gray-400'>
//           <li>HTML</li>
//           <li>CSS</li>
//           <li>JavaScript</li>
//           <li>React</li>
//           <li>Next.js</li>
//           <li>Bootstrap</li>
//           <li>Tailwind CSS</li>
      
//         </ul>
//       </div>
//       <div className='bg-blue-100 dark:bg-blue-800 rounded-md p-4 drop-shadow-md shadow-blue-600 shadow-inner'>
//         <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>Backend</h1>
//         <ul className='list-disc list-inside mt-2 text-gray-800 dark:text-gray-400'>
//           <li>Node.js</li>
//           <li>Express.js</li>
//           <li>Python</li>
//           <li>Django</li>
//           <li>SQL</li>
//           <li>MongoDB</li>
//           <li>MySQL</li>
//         </ul>
//       </div>
//     </div>


//   </section>

//   <footer className='py-6 mb-1 flex items-center justify-items-center text-gray-800 text-lg dark:text-gray-200'>
//    <p className='text-center'>
//       Made with ❤️ by <a href='https://github.com/vishek-patel' className='text-blue-600 font-semibold'> Vishek Patel</a>

//    </p>

//   </footer>

// </main>
// </div>
