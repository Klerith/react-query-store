
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

import { AcmeLogo } from "./AcmeLogo";

export const NavBar = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link to="/" color="foreground">
            Todo
          </Link>
        </NavbarItem>
        
        <NavbarItem>
          <Link to="/" color="foreground">
            Hombres
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" to="/">
            Mujeres
          </Link>
        </NavbarItem>

      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to="/">Login</Link>
        </NavbarItem>
        <NavbarItem>
          
          <Button as={Link} color="primary" to="/" variant="flat">
            Ingresar
          </Button>
          
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
