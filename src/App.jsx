import Header from "./components/header.jsx";
import Container from "./components/container.jsx";
// Images
import portfolioImage from "./assets/portfolio.jpg";
import gradegenieImage from "./assets/gradegenie.jpg";
import todoImage from "./assets/todo.jpg";
import spaceImage from "./assets/space.jpg";
import weatherImage from "./assets/weatherapp.jpg";
import shoppingImage from "./assets/shopping.jpg";
import calculatorImage from "./assets/calculator.jpg";
import loopstudioImage from "./assets/loopstudio.jpg";
import formsImage from "./assets/forms.jpg";
import passwordImage from "./assets/password.jpg";
import projectschoolImage from "./assets/projectschool.jpg";
import schoolmanagementImage from "./assets/schoolmanagement.jpg";
import spotifyImage from "./assets/spotify.jpg";
import tableImage from "./assets/table.jpg";
import webcountImage from "./assets/webcount.jpg";
import burgerImage from "./assets/burger.jpg";
import fanImage from "./assets/fan.jpg";
import launchcounterImage from "./assets/launchcounter.jpg";
import introsectionImage from "./assets/introsection.jpg";

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
    github: "https://github.com/ahad324/SpaceWebsite",
    LiveUrl: "https://ahad324.github.io/SpaceWebsite/",
  },
  {
    imgUrl: weatherImage,
    alt: "weatherApp",
    title: "Weather App",
    description: "A simple Weather website to see weather updates.",
    github: "https://github.com/ahad324/Weatherapp",
    LiveUrl: "https://ahad324.github.io/WeatherApp/",
  },
  {
    imgUrl: shoppingImage,
    alt: "shoppingApp",
    title: "Shopping App",
    description:
      "A simple Carting website to showcase some products and implementation of carting.",
    github: "https://github.com/ahad324/ShoppingApp/",
    LiveUrl: "https://ahad324.github.io/ShoppingApp/",
  },
  {
    imgUrl: calculatorImage,
    alt: "Calcualtor",
    title: "Calculator App",
    description: "A simple Calculator to perfrom some basic calculations.",
    github: "https://github.com/ahad324/Calculator-App/",
    LiveUrl: "https://ahad324.github.io/Calculator-App/",
  },
  {
    imgUrl: formsImage,
    alt: "Form",
    title: "Multi Forms",
    description: "A simple website that showcases multi forms.",
    github: "https://github.com/ahad324/TripleForms/",
    LiveUrl: "https://ahad324.github.io/TripleForms/",
  },
  {
    imgUrl: passwordImage,
    alt: "password",
    title: "Password Checker",
    description: "A website that check the password strength.",
    github: "https://github.com/ahad324/PasswordChecker",
    LiveUrl: "https://ahad324.github.io/PasswordChecker/",
  },
  {
    imgUrl: projectschoolImage,
    alt: "Project School",
    title: "School Website",
    description: "A simple school website.",
    github: "https://github.com/ahad324/schoolweb",
    LiveUrl: "https://ahad324.github.io/schoolweb/",
  },
  {
    imgUrl: schoolmanagementImage,
    alt: "School Management",
    title: "School Management System",
    description: "It's my semester project in c++.",
    github: "https://github.com/ahad324/WebSchoolManagement",
    LiveUrl: "https://ahad324.github.io/WebSchoolManagement/",
  },
  {
    imgUrl: spotifyImage,
    alt: "Spotify",
    title: "Spotify",
    description: "A basic level spotify clone.",
    github: "https://github.com/ahad324/Spotify-NAAT",
    LiveUrl: "https://ahad324.github.io/Spotify-NAAT/",
  },
  {
    imgUrl: introsectionImage,
    alt: "Intro section",
    title: "Hero Section",
    description: "A website's hero section design.",
    github: "https://github.com/ahad324/IntroSection",
    LiveUrl: "https://ahad324.github.io/IntroSection/",
  },
  {
    imgUrl: tableImage,
    alt: "Table generator",
    title: "Table generator",
    description: "A website to generate multiplication table.",
    github: "https://github.com/ahad324/TableGenerator",
    LiveUrl: "https://ahad324.github.io/TableGenerator/",
  },
  {
    imgUrl: webcountImage,
    alt: "WebCounter",
    title: "Launch Counter",
    description: "A website to inform people about the launch of anything.",
    github: "https://github.com/ahad324/WebCount",
    LiveUrl: "https://ahad324.github.io/WebCount/",
  },
  {
    imgUrl: burgerImage,
    alt: "Burger Menu",
    title: "Menu",
    description: "A website for the Menu of resturant.",
    github: "https://github.com/ahad324/BurgerMenu",
    LiveUrl: "https://ahad324.github.io/BurgerMenu/",
  },
  {
    imgUrl: fanImage,
    alt: "Fan",
    title: "Fan",
    description: "A fun website showing a Fan.",
    github: "https://github.com/ahad324/Fan",
    LiveUrl: "https://ahad324.github.io/Fan/",
  },
  {
    imgUrl: launchcounterImage,
    alt: "Launch Counter",
    title: "Launching Counter",
    description: "A website to inform people about the launch of anything.",
    github: "https://github.com/ahad324/Launchcounter",
    LiveUrl: "https://ahad324.github.io/Launchcounter/",
  },
  {
    imgUrl: loopstudioImage,
    alt: "Loopstudio",
    title: "Loop Studio",
    description: "A simple website (not responsive).",
    github: "https://github.com/ahad324/Loopstudios/",
    LiveUrl: "https://ahad324.github.io/Loopstudios/",
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
