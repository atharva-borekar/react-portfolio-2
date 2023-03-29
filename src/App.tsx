import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

interface WorkExperience {
  id: string;
  designation: string;
  organization: string;
  fromDate: string;
  toDate: string;
  description: string[];
  techStack: string;
}

const workExperience: Array<WorkExperience> = [
  {
    id: "1",
    designation: "Software Engineer",
    organization: "Josh Software Pvt. Ltd.",
    fromDate: "09/2021",
    toDate: "Present",
    description: [
      "Part of team on 3 project teams following agile methodologies.",
      "Designed and created UI elements and integrated REST APIs.",
      "Performed code reviews, monitored status of project and mentored freshers.",
      "Debugging, bug fixing and code optimization.",
      "Setup deployment environment.",
    ],
    techStack:
      "ReactJs, React Redux, Redux Saga, React Query, Javascript, Typescript, Git, NPM, Yarn, React Testing Library",
  },
  {
    id: "2",
    designation: "Software Engineer Intern",
    organization: "Josh Software Pvt. Ltd.",
    fromDate: "01/2021",
    toDate: "07/2021",
    description: [
      "Received comprehensive training for ReactJs and worked in co-ordination with senior developers.",
      "Participated in brainstorming sessions for new feature development.",
      "Designed and created UI elements and integrated REST APIs. ",
    ],
    techStack:
      "ReactJs, React Redux, Redux Saga, Javascript, Git, NPM, Yarn, React Testing Library",
  },
  {
    id: "3",
    designation: "React Native Developer (Internship)",
    organization: "Expert English Academy",
    fromDate: "03/2020",
    toDate: "03/2020",
    description: [
      "Desgined screens using Figma and implemented UI on React Native.",
      "Designed UI elements and integrated REST APIs",
    ],
    techStack: "React Native, HTML/CSS, Javascript, Git",
  },
];

const educationExperience: Array<WorkExperience> = [
  {
    id: "1",
    designation: "Bachelor of Engineering",
    organization: "Savitribai Phule Pune University",
    fromDate: "2017",
    toDate: "2021",
    description: [
      "SGPA: 9.15",
      "ACM Student Chapter Chair Person (09/2020 - 09/2021)",
      "MPulse CodeFiesta Co-Head (02/2020)",
      "Invicta (2020) Event Co-ordinator",
    ],
    techStack: "",
  },
  {
    id: "2",
    designation: "HSC (12 th)",
    organization: "MSBSHSE (Santaji Mahavidyalaya)",
    fromDate: "2015",
    toDate: "2017",
    description: ["Percentage: 78.3%"],
    techStack: "",
  },
  {
    id: "3",
    designation: "SSC (10 th)",
    organization: "CBSE (Narayana Vidyalayam)",
    fromDate: "",
    toDate: "2015",
    description: ["CGPA: 9.6, Percentage: 89.8%"],
    techStack: "",
  },
];

const WorkCard = ({ work }: { work?: WorkExperience }) => {
  return (
    <li>
      <span>{work?.designation}</span>
      <div className="content">
        <h3>{work?.organization}</h3>
        <h3>
          {work?.fromDate} - {work?.toDate}
        </h3>
        <p>
          {(work?.description as Array<string>)?.length > 0 && (
            <ul>
              {work?.description.map((e) => {
                return <p className="fs-6 my-0">{e}</p>;
              })}
            </ul>
          )}
        </p>
      </div>
    </li>
  );
};

const ProjectCard = () => {
  return (
    <div className="card my-5">
      <div className="card-image">
        <div className="p-3">React Easy Deploy</div>
      </div>
      <div className="card-description">
        <p className="text-title"> Card Title</p>
        <p className="text-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="main">
      <section>
        <Container>
          <div className="intro-start">
            <h1>Hi, my name is</h1>
          </div>
          <h2 className="big-heading name">Atharva Borekar</h2>

          <h3 className="big-heading role">I build things for the web.</h3>

          <div className="mt-4">
            <Button disabled variant="outline-warning" className="mx-2 my-2">
              React.Js
            </Button>
            <Button disabled variant="outline-warning" className="mx-2 my-2">
              JavaScript
            </Button>
            <Button disabled variant="outline-warning" className="mx-2 my-2">
              TypeScript
            </Button>
            <Button disabled variant="outline-warning" className="mx-2 my-2">
              HTML / CSS
            </Button>
          </div>
          <div className="intro-body">
            An avid person who is always curious about the working of technology
            around him.
            <br />
            Technical skills:- JavaScript, TypeScript, ReactJS, Git, Redux,
            Redux Saga, React Query, React Testing Library.
            <br />
            Possess good communication skills and flexible to work in any
            environment as required.
          </div>
        </Container>
      </section>
      <section id="work" style={{ padding: "100px 0%" }}>
        <Container className="work-container">
          <Row>
            <Col className="my-2">
              <div className="timeline">
                <h2>Work Experience</h2>
                <ul>
                  {workExperience.map((work) => {
                    return <WorkCard work={work} />;
                  })}
                </ul>
              </div>
            </Col>
            <Col className="my-2">
              <div className="timeline">
                <h2>Education</h2>
                <ul>
                  {educationExperience.map((work) => {
                    return <WorkCard work={work} />;
                  })}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="cards">
        <Container>
          <div className="projects-container">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
              <ProjectCard />
            ))}
          </div>
        </Container>
      </section>

      <div className="social-media-container">
        <Button className="social-media-button">A</Button>
        <Button className="social-media-button">A</Button>
        <Button className="social-media-button">A</Button>
        <Button className="social-media-button">A</Button>
      </div>
      <div className="email-container">
        <p>athessi10@gmail.com</p>
      </div>
    </div>
  );
}

export default App;
