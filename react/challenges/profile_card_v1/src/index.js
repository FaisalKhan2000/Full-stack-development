import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://img.freepik.com/premium-vector/modern-3d-illustration-young-man-programming-concept_145666-1709.jpg"
      alt="profile image"
    />
  );
}
function Intro() {
  return (
    <div>
      <h1>Faisal Khan</h1>
      <p>
        Proficient in HTML, CSS, and JavaScript, I stand poised at the cusp of
        broadening my horizons as a full-stack developer. Transitioning from
        crafting captivating interfaces to architecting comprehensive systems,
        my journey involves mastering back-end frameworks, delving into
        databases, and orchestrating seamless server-client interactions.
        Embracing a holistic mindset, I aim to blend creativity with
        functionality, crafting immersive experiences from inception to
        execution in the ever-evolving landscape of full-stack development.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skillName="HTML + CSS 💪" color="blue" />
      <Skill skillName="Javascript 💪" color="yellow" />
      <Skill skillName="Debugging 💪" color="green" />
      <Skill skillName="Git and Github 💪" color="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <p>{props.skillName}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
