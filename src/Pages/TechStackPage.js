import "./TechStackPage.css";
import { DiJava,DiJavascript,DiPython,DiMysql } from "react-icons/di";
import {RiReactjsFill} from "react-icons/ri"
import {SiSpringboot} from "react-icons/si"
export default function TechStackPage() {
  return (
    <div className="tech-banner" id="tech-stack">

      <nav className="tech-banner-items grid">
        <ul>
          <li>
            <span>Java</span>
            <DiJava size={70} />
          </li>
          <li>
            <span>JavaScript/Html/CSS</span>
            <DiJavascript size={70} />
          </li>
          <li>
            <span>Python</span>
            <DiPython size={70} />
          </li>
          <li>
            <span>MySQL</span>
            <DiMysql size={70} />
          </li>
          <li>
            <span>ReactJS</span>
            <RiReactjsFill size={70} />
          </li>
          <li>
            <span>Spring Boot</span>
            <SiSpringboot size={70} />
          </li>
        </ul>
      </nav>
    </div>
    
  );
}
