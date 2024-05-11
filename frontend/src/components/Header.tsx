import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="aspect-auto border-b-2 border-b-slate py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className=" text-3xl font-bold tracking-tight text-slate"
        >
          MERN-R3Feats
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
