
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

import { AcmeLogo } from "./AcmeLogo";


const routes = [
  { to: '/', text: 'Todo' },
  { to: '/men', text: 'Hombres' },
  { to: '/women', text: 'Mujeres' },
]

export const NavBar = () => {

  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">

        {
          routes.map(({ to, text }) => (
            <NavbarItem key={to}>
              <NavLink to={ to } className={({ isActive }) => isActive? styles.active : styles.inactive }>
                { text }
              </NavLink>
            </NavbarItem>
          ))
        }



      </NavbarContent>

      <NavbarContent justify="end">
        
        <NavbarItem>

          <Button as={NavLink} color="primary" to="/new" variant="flat">
            Nuevo producto
          </Button>

        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
