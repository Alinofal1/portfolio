import { Link } from "react-router-dom";
import logo from "../assets/aliLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="mx-2 w-32" alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <Link to={"https://www.linkedin.com/in/ali-noffal/"} target="_blank">
          <FaLinkedin className="hover:text-purple-800 cursor-pointer duration-300" />
        </Link>
        <Link to={"https://github.com/Alinofal1"} target="_blank">
          <FaGithub className="hover:text-purple-800 cursor-pointer duration-300" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
