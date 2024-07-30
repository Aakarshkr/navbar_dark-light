
import './Navbar.css';
import logo from '../../assets/WHITE.png';
import logo2 from '../../assets/BLACK.png';
import search2 from '../../assets/search-b.png';
import search from '../../assets/search-w.png';
import toggle from '../../assets/day.png';
import toggle2 from '../../assets/night.png';

const Navbar = ({ theme , setTheme }) => {
  
  const toggleClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className='navbar'>
      <img src={theme === 'light' ? logo2 : logo} alt="Logo" className='logo' />
      
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
        <li>Features</li>
      </ul>

      <div className='search-box'>
        <input type="text" placeholder='Search' />
        <img src={theme === 'light' ? search : search2} alt="Search Icon" />
      </div>

      <img src={theme === 'light' ? toggle2 : toggle} alt="Toggle Icon" className='toggle-icon' onClick={toggleClick} />
    </div>
  );
};

export default Navbar;
