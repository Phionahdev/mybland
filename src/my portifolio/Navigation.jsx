import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="px-10 bg-blue-950 ">
      <div className="flex justify-center h-[15]  w-[20] item-center rounded-lg">
        <div className="flex items-center justify-between">
          <div className="rounded-full overflow-hidden h-10 w-10">
            <img src="p.jpg" alt="welcome" className="max-w-full w-10" />
            {/* <img src="/image3.png" alt="welcome" className='max-w-full w-10'/> */}
          </div>
          <ul className="hidden md:flex gap-10 text-blue-100  py-8 pl-20 justify-end ">
            <Link to="/">
              <li className="hover:text-white cursor-pointer font-bold">
                home
              </li>
            </Link>
            <Link to="/skills">
              {" "}
              <li className="hover:text-white cursor-pointer font-bold">
                skills
              </li>
            </Link>
            <Link to="/service">
              <li className="hover:text-white cursor-pointer font-bold">
                Services
              </li>
            </Link>
            <Link to="/about">
              <li className="hover:text-white cursor-pointer font-bold">
                About
              </li>
            </Link>
            <Link to="/award">
              <li className="hover:text-white cursor-pointer font-bold">
                Awards
              </li>
            </Link>
            <Link to="/portifolio">
              <li className="hover:text-white cursor-pointer font-bold">
                Portifolio
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-white cursor-pointer font-bold">
                Contacts
              </li>
            </Link>
          </ul>{" "}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
