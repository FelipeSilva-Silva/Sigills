import React, { useState } from "react";
import { Link } from "react-router-dom";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons {react icons}
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { BsFillPersonFill, BsFillCreditCardFill, BsFillFileBarGraphFill, BsPlusSquare, BsFillPiggyBankFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";

//import css
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";



const Header = () => {

  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  

  return (
    <>
      <div id="header">

        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>

              {menuCollapse ? (<IoIosArrowForward />) : (<IoIosArrowBack />)}

            </div>

            <div className="logotext">

              <h3>{menuCollapse ? "Logo" : "SIGILLS"}</h3>

              <hr className="hrtest" />
            </div>

          </SidebarHeader>

          <SidebarHeader >
            <div className="userMenu">

              <BsFillPersonFill className="userMenuIcon" />
              <div>
                <h5>Nome</h5>
                <h5>user@gmail.com</h5>

              </div>

            </div>
            <hr className="hrtest" />

          </SidebarHeader>

          <SidebarContent>
            <Menu iconShape="square">

              <div className="menuItemHover">
                <MenuItem icon={<BsPlusSquare />}>
                  adicionar
                </MenuItem>

              </div>
              <div className="menuItemHover">
                <MenuItem icon={<MdDashboard />}>
                  Dashboard
                </MenuItem>
              </div>

              <div className="menuItemHover">
                <MenuItem icon={<BsFillPiggyBankFill />}>
                  Contas
                </MenuItem>
              </div>

              <div className="menuItemHover">
                <MenuItem icon={<BsFillCreditCardFill />}>
                  Cartão de Credito
                </MenuItem>
              </div>

              <div className="menuItemHover">
                <MenuItem icon={<RiPencilLine />}>
                  Metas
                </MenuItem>
              </div>

              <div className="menuItemHover">
                <MenuItem icon={<BsFillFileBarGraphFill />}>
                  Relatórios
                </MenuItem>
              </div>

            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">

              <div className="menuItemHover">
                <MenuItem icon={<BiCog />}>
                  Configurações
                  <Link to="/" />

                </MenuItem>

              </div>

              <div className="menuItemHover">

                <MenuItem icon={<FiLogOut />}>
                  Sair
                  <Link to="/" />
                </MenuItem>

              </div>


            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
