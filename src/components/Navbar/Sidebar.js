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
  SubMenu,
} from "react-pro-sidebar";

//import icons {react icons}
import { FiLogOut } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog, BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { BsFillPersonFill, BsFillCreditCardFill, BsFillFileBarGraphFill, BsPlusSquare, BsFillPiggyBankFill, BsGraphDown, BsGraphUp, BsShuffle } from "react-icons/bs";
import { MdDashboard, MdAutoGraph } from "react-icons/md";

//import css
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import ModalAddEntry from "../Modals/ModalAddEntry";
import ModalAddExit from "../Modals/ModalAddExit";
import ModalAddMark from "../Modals/ModalAddMark";
import ModalAddTansations from "../Modals/ModalAddTansations";



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

              {menuCollapse ? (<BiChevronsRight />) : (<BiChevronsLeft />)}

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

              <SubMenu icon={<BsPlusSquare />} title={'Adicionar'}>
                <MenuItem> <BsGraphUp style={{ fontSize:'25px', color:'green'}} /> <ModalAddEntry /> </MenuItem>
                <MenuItem> <BsGraphDown style={{ fontSize:'25px', color:'red'}} /> <ModalAddExit /> </MenuItem>
                <MenuItem> <MdAutoGraph style={{ fontSize:'25px',color:'blue'}} /> <ModalAddMark /> </MenuItem>
                <MenuItem> <BsShuffle style={{ fontSize:'25px',color:'yellow'}} /> <ModalAddTansations /> </MenuItem>
              </SubMenu>

              <MenuItem icon={<MdDashboard />}>
                Dashboard
                <Link to="/Dashboard" />
              </MenuItem>

              <MenuItem icon={<BsFillPiggyBankFill />}>
                Contas
              </MenuItem>

              <MenuItem icon={<BsFillCreditCardFill />}>
                Cartão de Credito
              </MenuItem>

              <MenuItem icon={<RiPencilLine />}>
                Metas
              </MenuItem>

              <MenuItem icon={<BsFillFileBarGraphFill />}>
                Relatórios
              </MenuItem>

            </Menu>
          </SidebarContent>

          <SidebarFooter>
            <Menu iconShape="square">

              <MenuItem icon={<BiCog />}>
                Configurações
                <Link to="/Settings" />

              </MenuItem>

              <MenuItem icon={<FiLogOut style={{ color: 'red' }} />}>
                Sair
                <Link to="/" />
              </MenuItem>

            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;