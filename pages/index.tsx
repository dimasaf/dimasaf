import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='max-w-4xl	mx-auto text-gray-dark'>
      {/* Navbar */}
      <nav className='items-center justify-between py-5 md:py-10 md:flex-wrap md:flex'>
        <a href='#/' className='px-5  text-lg hover:text-blue tracking-wide'>
          &#123; dimasaf &#125;
        </a>
        <ul className=' bg-gray-dark fixed bottom-0 z-10 flex justify-center w-screen text-white bg-gray-700 font-normal text-gray md:text-gray-darkest md:bg-gray md:relative md:inset-0 md:w-auto'>
          <li className='mx-4 md:text-gray-dark md:bg-gray md:shadow-out md:hover:shadow-in hover:text-blue rounded-lg p-2 px-6'>
            <a href='#about' className='nav-btn'>
              .about
            </a>
          </li>
          <li className='mx-4 md:text-gray-dark md:bg-gray md:shadow-out md:hover:shadow-in hover:text-blue rounded-lg p-2 px-6'>
            <a href='#projects' className='nav-btn'>
              .projects
            </a>
          </li>
          <li className='mx-4 md:text-gray-dark md:bg-gray md:shadow-out  md:hover:shadow-in hover:text-blue rounded-lg p-2 px-6'>
            <a href='#contact' className='nav-btn'>
              .contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Header */}
      <header className='px-5 md:grid md:grid-cols-2 py-48 md:py-20'>
        <div className='flex flex-col content-center justify-center'>
          <h1 className='text-7xl font-semibold mb-5'>
            hi <span className='text-blue'> there! </span>
          </h1>
          <p className='text-2xl mb-1'>
            I&apos;m <span className='text-blue'>Dimas</span> Adji
          </p>
          <p className='text-2xl'>
            Front-end developer based in <span className='text-blue'>Indonesia</span>
          </p>
          <div className='flex flex-row mt-6'>
            <div className='mr-3 bg-gray shadow-out hover:shadow-in hover:text-blue rounded-lg p-3 px-5'>
            <a href="https://www.instagram.com/dimasaf._/" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a>
            </div>
            <div className='mx-3 bg-gray shadow-out hover:shadow-in hover:text-blue rounded-lg p-3 px-5'>
            <a href="https://www.linkedin.com/in/dimasaf21/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" /></a>
            </div>
            <div className='mx-3 bg-gray shadow-out hover:shadow-in hover:text-blue rounded-lg p-3 px-5'>
            <a href="https://github.com/dimasaf" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
            </div>
          </div>
        </div>
        <div className='hidden md:flex md:flex-col content-center justify-center mx-auto relative'>
          <div className='rounded-full bg-gradient-to-b from-blue to-blue-dark w-52 h-52 left-64 top-0 absolute '></div>
          <div className='rounded-full bg-gradient-to-b from-blue to-blue-dark w-28 h-28 right-10 bottom-6 absolute z-50'></div>
          <div className='rounded-full bg-gradient-to-b from-blue to-blue-dark h-5/6 w-5/6 absolute top-8  right-1 shadow-out'></div>
          <img src='./img/Saly.svg' alt='' className='w-full z-40' />
        </div>
      </header>

      {/* about */}
      <section id='about' className="px-5">
        <h1 className='text-center text-5xl tracking-wider py-8'>.about</h1>
        <h2 className='text-blue mb-4 text-2xl'>$&#123;<span className='text-gray-dark'>Education</span>&#125;</h2>
        <div className='flex flex-col shadow-out hover:shadow-in rounded-lg p-8 px-6 mb-10'>
          <h3 className='text-lg text-blue-dark font-semibold'>Computer Enginering</h3>
          <h4>State Polytechnic of Jember</h4>
          <h4>Agu 2018 - 2021</h4>
        </div>
        <h2 className='text-blue mb-4 text-2xl'>$&#123;<span className='text-gray-dark'>Experience</span>&#125;</h2>
        <div className='flex flex-col shadow-out hover:shadow-in rounded-lg p-8 px-6 mb-10'>
          <h3 className='text-lg text-blue-dark font-semibold'>Computer Enginering</h3>
          <h4>State Polytechnic of Jember</h4>
          <h4>Agu 2018 - 2021</h4>
        </div>
        <h2 className='text-blue mb-4 text-2xl'>$&#123;<span className='text-gray-dark'>Skills</span>&#125;</h2>
        <div className="flex flex-row flex-wrap lg:justify-start mb-10">
          <div className='shadow-out hover:shadow-in rounded-lg p-3 px-5 mr-4  mb-5'>
            HTML
          </div>
          <div className='shadow-out hover:shadow-in rounded-lg p-3 px-5 mr-4  mb-5'>
            CSS
          </div>
          <div className='shadow-out hover:shadow-in rounded-lg p-3 px-5 mr-4  mb-5'>
            SCSS
          </div>
          <div className='shadow-out hover:shadow-in rounded-lg p-3 px-5 mr-4  mb-5'>
            Bootstrap
          </div>
          <div className='shadow-out hover:shadow-in rounded-lg p-3 px-5 mr-4  mb-5'>
            Tailwind
          </div>
          <div className='shadow-out hover:shadow-in rounded-lg p-3 px-5 mr-4  mb-5'>
            Javascript
          </div>
          <div className='shadow-out hover:shadow-in rounded-lg p-3 px-5 mr-4  mb-5'>
            Python
          </div>
          <div className='shadow-out hover:shadow-in rounded-lg p-3 px-5 mr-4  mb-5'>
            React
          </div>
          <div className='shadow-out hover:shadow-in rounded-lg p-3 px-5 mr-4  mb-5'>
            Next
          </div>
          <div className='shadow-out hover:shadow-in rounded-lg p-3 px-5 mr-4  mb-5'>
            Node js
          </div>
        </div>
      </section>

      <section id='projects' className="px-5">
        <h1 className='text-center text-5xl tracking-wider py-8'>.project</h1>
        <div className='flex flex-row flex-wrap justify-center md:justify-between mb-10 mx-2'>
          <div className='shadow-out hover:shadow-in rounded-lg p-2 mb-5'>
            <img src='./img/tes.jpg' alt='' className='w-60 rounded-md' />
          <h3 className='text-lg py-3  text-blue-dark font-semibold'>Computer Enginering</h3>
            <h4>State Polytechnic of Jember</h4>
            <h4>Agu 2018 - 2021</h4>
          </div>
          <div className='shadow-out hover:shadow-in rounded-lg p-2 mb-5'>
            <img src='./img/tes.jpg' alt='' className='w-60 rounded-md' />
          <h3 className='text-lg py-3  text-blue-dark font-semibold'>Computer Enginering</h3>
            <h4>State Polytechnic of Jember</h4>
            <h4>Agu 2018 - 2021</h4>
          </div>
          <div className='shadow-out hover:shadow-in rounded-lg p-2 mb-5'>
            <img src='./img/tes.jpg' alt='' className='w-60 rounded-md' />
          <h3 className='text-lg py-3  text-blue-dark font-semibold'>Computer Enginering</h3>
            <h4>State Polytechnic of Jember</h4>
            <h4>Agu 2018 - 2021</h4>
          </div>
        </div>
      </section>

      <section id='contact'>
        <h1 className='text-center text-5xl tracking-wider py-8'>.contact</h1>
        <div className='grid justify-items-center'>
          <p className='mb-4'>Have a question or want to work together?</p>
          <input
            type='text'
            className='bg-gray mb-6 py-4 px-4 w-5/6 sm:w-3/6 shadow-out focus:shadow-in focus:outline-none rounded-md'
            placeholder='your name'
          />
          <input
            type='text'
            className='bg-gray mb-6 py-4 px-4 w-5/6 sm:w-3/6 shadow-out focus:shadow-in focus:outline-none rounded-md'
            placeholder='your email'
          />
          <input
            type='textArea'
            className='bg-gray mb-6 py-10 px-4 w-5/6 sm:w-3/6 shadow-out focus:shadow-in focus:outline-none rounded-md'
            placeholder='your message'
          />
          <button
            type='submit'
            className='bg-blue hover:bg-blue-dark mb-24 py-4 px-4 w-5/6 sm:w-3/6 text-gray-light rounded-md shadow-2xl'>
            send
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
