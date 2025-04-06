import React,{useState} from "react";
import {
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,

  
} from "@material-tailwind/react";
import lego from "../img/bag.png";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { styled, useTheme } from '@mui/material/styles';
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const drawerWidth = 240;
const nestedMenuItems = [
  {
    title: "Hero",
  },
  {
    title: "Features",
  },
  {
    title: "Testimonials",
  },
  {
    title: "Ecommerce",
  },
];


function NavbarMenuItem() {

  const [isMenuOpen1, setIsMenuOpen1] =useState(false);
  const [isMobileMenuOpen1, setIsMobileMenuOpen1] =useState(false);
 
  const [isMenuOpen2, setIsMenuOpen2] =useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] =useState(false);
 
  const [isMenuOpen3, setIsMenuOpen3] =useState(false);
  const [isMobileMenuOpen3, setIsMobileMenuOpen3] =useState(false);
 
  return (
    <>
    <nav dir="rtl" className= "hidden border-b-2 border-b-zinc-200  px-5 md:flex justify-between  items-center w-full h-full">
      
      <div dir="rtl" className="hidden md:flex  self-end bg-white my-0 px-3  ">
        <div className="my-auto">



          <ul className="hidden md:flex uppercase font-bold">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="flex lg:text-sm text-xs items-center gap-2 py-2  mr-5 
               text-gray-900
               transition delay-150 duration-300 ease-in-out
               hover:border-2 hover:border-transparent hover:border-b-orange-500 ">
                همه ی محصولات
              </li>
            </NavLink>
            <NavLink to={"/suitcase"}
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="flex lg:text-sm text-xs items-center gap-2 py-2 mr-5 font-medium
               text-gray-900
               transition delay-150 duration-300 ease-in-out
               hover:border-2 hover:border-transparent hover:border-b-orange-500">
                چمدان و ساک دستی
              </li>
            </NavLink>
            <Menu
        open={isMenuOpen1}
        handler={setIsMenuOpen1}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 mr-5 font-medium rounded-none
               text-gray-900
               transition delay-150 duration-300 ease-in-out
               hover:border-2 hover:border-transparent hover:border-b-orange-500"
              selected={isMenuOpen1 || isMobileMenuOpen1}
              onClick={() => setIsMobileMenuOpen1((cur) => !cur)}
            >
              کیف 
              <FaChevronDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform md:block ${
                  isMenuOpen1 ? "rotate-180" : ""
                }`}
              />
              <FaChevronDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform md:hidden ${
                  isMobileMenuOpen1 ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl md:block w-1/6 h-auto p-3 -mt-5">
          <ul className=" flex flex-col items-end outline-none outline-0">
          <NavLink to={"/allbag"}  >
        <MenuItem className="flex items-center pb-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
            همه ی کیف ها
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/dastib"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
             کیف دستی
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/doshib"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
             کیف دوشی
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/kolehb"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
            کوله پشتی
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/polb"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
             کیف پول
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/sportb"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
             کیف اسپورت
            </Typography>
        </MenuItem>
      </NavLink>
          </ul>
        </MenuList>
      </Menu>


      <Menu
        open={isMenuOpen2}
        handler={setIsMenuOpen2}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 mr-5 rounded-none
               font-medium text-gray-900
               transition delay-150 duration-300 ease-in-out
               hover:border-2 hover:border-transparent hover:border-b-orange-500"
              selected={isMenuOpen2 || isMobileMenuOpen2}
              onClick={() => setIsMobileMenuOpen2((cur) => !cur)}
            >
             کفش
              <FaChevronDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform md:block ${
                  isMenuOpen2 ? "rotate-180" : ""
                }`}
              />
              <FaChevronDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform md:hidden ${
                  isMobileMenuOpen2 ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl md:block w-1/6 h-auto p-3  -mt-5">
          <ul className=" flex flex-col items-end outline-none outline-0">
          <NavLink to={"/allshose"}  >
        <MenuItem className="flex items-center pb-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
            همه ی کفش ها
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/kalezhsh"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
           کالج
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/sandalsh"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
           صندل
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/botsh"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
            بوت
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/majlesish"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
            مجلسی
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/sportsh"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
              اسپورت
            </Typography>
        </MenuItem>
      </NavLink>
          </ul>
        </MenuList>
      </Menu>

         
           

      <Menu
        open={isMenuOpen3}
        handler={setIsMenuOpen3}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 mr-5 font-medium rounded-none
               text-gray-900
               transition delay-150 duration-300 ease-in-out
               hover:border-2 hover:border-transparent hover:border-b-orange-500"
              selected={isMenuOpen3 || isMobileMenuOpen3}
              onClick={() => setIsMobileMenuOpen3((cur) => !cur)}
            >
             اکسسوری
              <FaChevronDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform md:block ${
                  isMenuOpen3 ? "rotate-180" : ""
                }`}
              />
              <FaChevronDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform md:hidden ${
                  isMobileMenuOpen3 ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl md:block w-1/6 h-auto p-3  -mt-5">
          <ul className=" flex flex-col items-end outline-none outline-0">
          <NavLink to={"/allack"}  >
        <MenuItem className="flex items-center pb-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
          همه ی اکسسوری ها
            </Typography>
        </MenuItem>
      </NavLink>
          <NavLink to={"/glassa"}  >
        <MenuItem className="flex items-center pb-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
          عینک آفتابی
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/atra"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
           عطر و ادکلن
            </Typography>
        </MenuItem>
      </NavLink>
          </ul>
        </MenuList>
      </Menu>
            <NavLink
              to="/pageshegeft"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
             <li className="flex text-sm items-center gap-2 py-2 mr-5 font-medium
               text-gray-900
               transition delay-150 duration-300 ease-in-out
               hover:border-2 hover:border-transparent hover:border-b-orange-500">
                محصولات شگفت انگیز
              </li>
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="flex text-sm items-center gap-2 py-2 mr-5 font-medium
               text-gray-900
               transition delay-150 duration-300 ease-in-out
               hover:border-2 hover:border-transparent hover:border-b-orange-500">
                تماس با ما
              </li>
            </NavLink>
          </ul>
        </div>
       
      </div>
      <NavLink to={"/"}>
      <div className="flex justify-center mx-2">
<img src={lego} width={50} height={20}/>
</div></NavLink>
    </nav>
   
   
</>
  );
}

export default NavbarMenuItem;
