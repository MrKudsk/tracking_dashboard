import React from "react";
import { Link, Navlink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy.js";

const Sidebar = () => {
  const activeMenu = true;

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pd-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={() => {}} className="items-center">
              <SiShopware /> <span>Shoppy</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
