import Header from "./components/header.jsx";
import Container from "./components/container.jsx";
// Images
import portfolioImage from "./assets/portfolio.png";
import gradegenieImage from "./assets/gradegenie.png";
import todoImage from "./assets/todo.png";
import spaceImage from "./assets/space.png";
import weatherImage from "./assets/weatherapp.png";
import shoppingImage from "./assets/shopping.png";

const projects = [
  {
    imgUrl: portfolioImage,
    altText: "Portfolio",
    title: "Portfolio",
    description: "A Showcase for the work i have done.",
    github: "https://github.com/ahad324/Portfolio/",
    LiveUrl: "https://ahad324.github.io/Portfolio/",
  },
  {
    imgUrl: gradegenieImage,
    alt: "Gradegenie",
    title: "Gradegenie",
    description:
      "An Online tool to calculate gpa, cgpa and sgpa and many more.",
    github: "https://github.com/ahad324/MarksCalculator/",
    LiveUrl: "https://ahad324.github.io/MarksCalculator/",
  },
  {
    imgUrl: todoImage,
    alt: "Todo",
    title: "TodoApp",
    description: "A Todo website made with React.",
    github: "https://github.com/ahad324/ReactTodoApp/",
    LiveUrl: "https://ahad324.github.io/ReactTodoApp/",
  },
  {
    imgUrl: spaceImage,
    alt: "Space",
    title: "Space Website",
    description: "A simple website with multipages navigation.",
    github: "https://github.com/ahad324/ReactTodoApp/",
    LiveUrl: "https://ahad324.github.io/ReactTodoApp/",
  },
  {
    imgUrl: weatherImage,
    alt: "weatherApp",
    title: "Weather App",
    description: "A simple Weather website to see weather updates.",
    github: "https://github.com/ahad324/ReactTodoApp/",
    LiveUrl: "https://ahad324.github.io/ReactTodoApp/",
  },
  {
    imgUrl: shoppingImage,
    alt: "shoppingApp",
    title: "Shopping App",
    description:
      "A simple Carting website to showcase some products and implementation of carting.",
    github: "https://github.com/ahad324/ReactTodoApp/",
    LiveUrl: "https://ahad324.github.io/ReactTodoApp/",
  },
];

function App() {
  return (
    <>
      <Header />
      <Container projects={projects} />
    </>
  );
}

export default App;
