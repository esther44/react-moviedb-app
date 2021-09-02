import { Link } from 'react-router-dom';
import './Header.scss';
const Header = () => {
  return (
    <Link to={'/movies'}>
      <h1 className='header'>TMDB</h1>
    </Link>
  );
};

export default Header;
