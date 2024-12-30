import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

function App() {
  return (
    <Router>
      <header style={styles.header}>
        <nav style={styles.nav}>
        <h1 style={styles.logo}>
  <img src="https://cdn-icons-png.flaticon.com/128/12747/12747160.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
  My Website
</h1>
          <ul style={styles.navLinks}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.link}>Home</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/About" style={styles.link}>About</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Contact" style={styles.link}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

const styles = {
  header: {
    backgroundColor: '#007BFF',
    padding: '10px 20px',
    color: '#fff',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s',
  },
  main: {
    padding: '20px',
  },
};

// Add hover effect for links
styles.link[':hover'] = {
  color: '#FFD700', // Changes to gold on hover
};

export default App;
