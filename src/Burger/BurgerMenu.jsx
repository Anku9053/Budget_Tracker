import React, { useState ,useRef, useEffect} from "react";
import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  text-align: center;
  width: 20%;
  flex-direction: column;
  justify-content: center;
  background: transparent;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  border-right: 1px solid white;
  /* overflow-y : scroll;  */

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 30px;
    /* text-transform: uppercase; */
    padding-top: 1rem;
    position: relative;
    /* top: 2rem; */
    
    /* border: 2px solid red; */
    /* font-weight: bold; */
    /* letter-spacing: 0.5rem; */
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: yellow;
    }

    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: yellow;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
    }

    &:hover::before {
      visibility: visible;
      width: 100%;
    }
  }
`;


const Menu = ({ open }) => {
    const menuRef = useRef(null);
    const [isCursorOnMenu, setIsCursorOnMenu] = useState(false);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        const menuRect = menuRef.current.getBoundingClientRect();
        const isOnMenu =
          e.clientX >= menuRect.left &&
          e.clientX <= menuRect.right &&
          e.clientY >= menuRect.top &&
          e.clientY <= menuRect.bottom;
  
        setIsCursorOnMenu(isOnMenu);
      };
  
      document.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
    return (
        <StyledMenu open={open} ref={menuRef}>
            <a href="/">


                Home
            </a>
            <a href="/">

                Login
            </a>
            <a href="/">


                Register
            </a>

            <a href="/">


                Contact
            </a>

            <a href="/">


                About
            </a>

            <a href="/">


                Create New
            </a>

            <a href="/">


                History
            </a>

            <a href="/">

                Blogs
            </a>




            <a href="/">

                Developers
            </a>
        </StyledMenu>
    );
};

export default Menu;
