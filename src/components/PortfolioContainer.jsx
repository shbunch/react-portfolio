import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>

      <footer class="bg-light text-center text-black">
        <div class="container p-4 pb-0">
        </div>
        <p id="footer-copyright text-center p-3">
          © Developed by Shawn Bunch
        </p>
        <span className='p-1 fa-2x'>
          <a href='https://www.linkedin.com/in/shawn-bunch/' target='_blank' rel='noreferrer' >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "black", }} className='link' />
          </a>
        </span>
        <span className='p-1 fa-2x'>
          <a href='https://github.com/shbunch' target='_blank' rel='noreferrer' className='link'>
            <FontAwesomeIcon icon={faGithub} style={{ color: "black", }} className='link' />
          </a>
        </span>
        <p id="telephone text-center p-3">
          Tel: +1 862-432-2859
        </p>
      </footer>
    </div>
  );
}