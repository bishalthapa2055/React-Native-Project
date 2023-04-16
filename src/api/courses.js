import web from "../../assets/web.jpg";
import front from "../../assets/front.jpg";
import back from "../../assets/node.jpg";
import java from "../../assets/java.jpg";
import django from "../../assets/django.jpg";

const CoursesApi = [
  {
    id: 1,
    title: "Web Development",
    image: web,
    description:
      "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). ",
    course1: "html",
    course2: "css",
    course3: "js",
    price: 6000,
  },
  {
    id: 2,
    title: "Backend Development",
    image: back,
    description:
      "Backend development is the process of writing code that allows a database and an application to communicate with one another. It covers server-side web application logic and integration and activities such as writing APIs",
    course1: "html",
    course2: "css",
    course3: "js",
    price: 5000,
  },
  {
    id: 3,
    title: "Frontend Development",
    image: front,
    description:
      "Front backend development focuses on analyzing code, design, and debugging applications along with ensuring a seamless user experiencel",
    course1: "html",
    course2: "css",
    course3: "js",
    price: 1000,
  },
  {
    id: 4,
    title: "Django Development",
    image: django,
    description:
      "Python is about as easy to learn as a language could be, which is one of the main selling points of the language. As someone that is very experienced in OO languages",
    course1: "html",
    course2: "css",
    course3: "js",
    price: 51000,
  },
  {
    id: 5,
    title: "Java Development",
    image: java,
    description:
      " Both are married to their respective languages. I choose Python over Java because of its simplicity and readability. To develop in java you need to write a lot of code.",
    course1: "html",
    course2: "css",
    course3: "js",
    price: 50000,
  },
];
export default CoursesApi;
