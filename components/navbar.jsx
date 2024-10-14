"use client";
import React, {useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {FaPlus, FaAngleDown} from 'react-icons/fa'

import NavbarAvatar from "./navbarAvatar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const NAVLINKS = [{title: "About", href:"/about"}, {title: "Write Test", href: "/test"}];
  const DASHBOARD = [
    {title: "Student Drives Info", href:"strudent-drives"}, 
    {title: "Drives", href: "drives"},
    {title: "Manage Drives", href: "manage-drives"},
    {title: "Add Companies", href: "add-companies"},
    {title: "Companies List", href: "companies-list"},
    {title: "View Interactions", href: "view-interactions"},
    {title: "Students Info", href: "students-info"},
    {title: "Update Role", href: "update-role"},
    {title: "Bulk Signup", href: "bulk-signup"},
    {title: "Cumulative Test", href: "cumulative-test"},
    {title: "Add Webinars", href: "add-webinars"},
    {title: "View Webinars", href: "view-webinars"}
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link href="/" className="text-foreground">
          <NavbarBrand>
            <FaPlus />
            <p className="font-bold text-inherit ml-2">AlgoHub</p>
          </NavbarBrand>
        </Link>
        
      </NavbarContent>
      <NavbarContent justify="end">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger title="Dashboard">
              <Button
                variant="light"
                endContent={<FaAngleDown className="m-0"/>}
                size="lg"
              >
                Dashboard
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            {DASHBOARD.map(({title, href}, index) => (
              <DropdownItem
                key={index}
              >
                <Link 
                  color="foreground"
                  href={href}
                >
                  {title}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          NAVLINKS.map(({title, href}, index) => (
            <NavbarItem key={index}>
                <Link color="foreground" href={href}>
                  {title}
                </Link>
            </NavbarItem>))
        }
      </NavbarContent>

      <NavbarContent justify="end">
        {
          !isLoggedin ? 
          <NavbarItem>
            <Button as={Link} color="primary" href="login" variant="shadow">
              Login
            </Button>
          </NavbarItem> :
          <NavbarAvatar />
          
        }
        

      </NavbarContent>
      <NavbarMenu>
        
        {NAVLINKS.map(({title, href}, index) => (
          <NavbarMenuItem key={index} >
            <Link
              className="w-full text-foreground"
              href={href}
              size="lg"
            >
              {title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
