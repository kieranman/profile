import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar grid">
      <ul>
        <li><a href='#about-me'>About Me</a></li>
        <li><a href='#tech-stack'>Tech Stack</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#education'>Education</a></li>
      </ul>
    </nav>

  );
}