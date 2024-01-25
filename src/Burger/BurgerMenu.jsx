import React, { useState ,useRef, useEffect} from "react";
import styled from "styled-components";
import {RiHome3Fill} from "react-icons/ri"
import {CiLogin} from "react-icons/ci"
import {SiGnuprivacyguard} from "react-icons/si"
import {IoIosContact} from "react-icons/io"
import {FcAbout} from "react-icons/fc"
import {LiaBlogSolid} from "react-icons/lia"
import {FaWpforms} from "react-icons/fa"
import { FaHistory } from "react-icons/fa";
const StyledMenu = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  text-align: right;
  width: 20%;
  flex-direction: column;
  --tw-bg-opacity: 1;
    background-color: rgb(10 10 10 / var(--tw-bg-opacity));
  justify-content: start;
  /* background: #f2f2f2; */
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: center;
  padding: 2rem;
  /* border: 2px solid red; */
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  border-right: 1px solid green;
  /* overflow-y : scroll;  */

  @media (max-width: 576px) {
    width: 100%;
  }

  span{
    width: 20px;
    /* border: 2px solid red; */
    /* display: flex; */
    flex-direction: column;
    position: relative;
    top: 0.2rem;
  }

  a {
    font-size: 25px;
    /* text-transform: uppercase; */
    text-transform: capitalize;
    padding-top: 1.3rem;
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


                Home <span><RiHome3Fill /></span>
            </a>
            <a href="/">

                Login <span><CiLogin /></span>
            </a>
            <a href="/">


                Register <span><SiGnuprivacyguard /></span>
            </a>

            <a href="/">


                Contact <span><IoIosContact /></span>
            </a>

            <a href="/">


                About <span><FcAbout /></span>
            </a>

            <a href="/Form">


                Create New <span><FaWpforms /></span>
            </a>

            <a href="/">


                History <span><FaHistory /></span>
            </a>

            <a href="/">

                Blogs <span><LiaBlogSolid /></span>
            </a>
        </StyledMenu>
    );
};

export default Menu;
