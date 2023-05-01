import { useEffect } from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { FaFileAlt, FaGithubSquare, FaLinkedin } from "react-icons/fa";
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
                return <p className="my-0">{e}</p>;
              })}
            </ul>
          )}
        </p>
      </div>
    </li>
  );
};

const projects = [
  {
    id: 1,
    name: "React Easy Deploy",
    description: [
      "Install necessary npm packages.",
      "Create a production build locally.",
      "Transfer the build to the server specified.",
      "Install and configure NGINX server on AWS instance.",
    ],
    footer: [],
    summary:
      "React Easy Deploy is a promise driven script to help you in deploying your React.Js application with ease. Tech Stack: Node.Js, SSH2, AWS EC2",
    github: "https://github.com/atharva-borekar/react-deploy-v1",
    website: "https://www.npmjs.com/package/react-easy-deploy?activeTab=readme",
  },
  {
    id: 2,
    name: "Portfolio",
    description: [
      "A front-end developer portfolio to showcase skills, work experience. work samples, and contact information.",
    ],
    footer: [],
    summary:
      "A front-end developer portfolio to showcase skills, work experience. work samples, and contact information. Tech Stack: React.Js, TypeScript, HTML/CSS, Bootstrap, SCSS",
    github: "https://github.com/atharva-borekar/react-portfolio",
  },
  {
    id: 3,
    name: "Job Referral System",
    description: [
      "The Job Referral App is a platform where companies can ask their Employees for referrals for the posts generated in the company. ",
      "The recruiters will be able to post the requirements and the Employees will be able to view the posts, ask doubts in the comments section and also post the referrals to the employer.",
    ],
    footer: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    summary:
      "Mobile app made using React Native for entry at Vyomlabs Hackathon, for developing system for referrals inside organization. Tech Stack: React Native, JavaScript, Java",
    github: "https://github.com/atharva-borekar/jobReferralSystem",
  },

  {
    id: 4,
    name: "The Modern Times",
    description: [
      "This project is made to be deployed in P.E.S Modern College of Engineering for better information sharing inside the college.",
      "You can make changes to this project and deploy it in your systems as well.",
    ],
    footer: [],
    summary:
      "Mobile app made using Android SDK to broadcast events and information across college. Tech Stack: Android Studio, Android SDK, Java, XML",
    github: "https://github.com/atharva-borekar/TheModernTimes",
  },
  {
    id: 5,
    name: "Hashgame",
    description: [
      "Install necessary npm packages.",
      "Create a production build locally.",
      "Transfer the build to the server specified.",
      "Install and configure NGINX server on AWS instance.",
    ],
    footer: [],
    summary:
      "A simple game made in Python using Pygame demonstrating the concepts of Hashing concepts. Tech Stack: Python, Pygame, Adobe Photoshop",
    github: "https://github.com/atharva-borekar/Hashgame",
  },
];
const ProjectCard = ({
  project,
}: {
  project: {
    id: number;
    name: string;
    description: string[];
    footer: string[];
    summary: string;
    github?: string;
    website?: string;
  };
}) => {
  return (
    <div className="card my-5">
      <div className="card-image">
        <div className="p-3 d-flex justify-content-between">
          <h2>{project.name}</h2>
          <div className="px-5">
            {project?.github && (
              <FaGithubSquare
                size={50}
                className="swing mx-2 pointer"
                title="Github"
                onClick={() => {
                  window.open(project.github, "_blank");
                }}
              />
            )}
            {project?.website && (
              <CgWebsite
                size={50}
                className="swing mx-2 pointer"
                title="Website"
                onClick={() => {
                  window.open(project.website, "_blank");
                }}
              />
            )}
          </div>
        </div>
        <div className="ml-3 px-5 text-light">
          <p>{project.summary}</p>
          <ul>
            {project.description.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          AB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function toggleZoomScreen() {
  (document.body.style as any).zoom = "80%";
}
function App() {
  useEffect(() => {
    toggleZoomScreen();
  }, []);
  return (
    <div className="main">
      <CollapsibleExample />
      <section id="home">
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

      <section id="projects">
        <Container>
          <h2 className="text-light">Projects</h2>
          <div className="projects-container">
            {projects.map((e) => (
              <ProjectCard project={e} />
            ))}
          </div>
        </Container>
      </section>

      <div className="social-media-container">
        <FaGithubSquare
          size={50}
          className="swing mx-2 pointer text-light my-3"
          title="Github"
          onClick={() => {
            window.open("https://github.com/atharva-borekar", "_blank");
          }}
        />
        <FaLinkedin
          size={50}
          className="swing mx-2 pointer text-light my-3"
          title="LinkedIn"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/atharva-borekar-30590619a/",
              "_blank"
            );
          }}
        />
        <FaFileAlt
          size={50}
          className="swing mx-2 pointer text-light my-3"
          title="Resume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1VJKISufX0sJiWDLoohXPw2hrJYsIgbIo/view?usp=sharing",
              "_blank"
            );
          }}
        />
      </div>
      <div className="email-container">
        <p>athessi10@gmail.com</p>
      </div>
    </div>
  );
}

export default App;
