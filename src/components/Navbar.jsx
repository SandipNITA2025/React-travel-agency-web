import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { BsPerson } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setIsNavOpen(false));
  return (
    <Nav state={isNavOpen ? 1 : 0}>
      <div className="brand">
        <img src={logo} alt="logo" />
      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>

      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#destination">Destination</a>
          </li>
          <li>
            <a href="#offers">Offers</a>
          </li>
          <li>
            <a href="#tour">Tour</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </div>

      <div className="account-info">
        <div className="account">
          <span>
            <BsPerson />
          </span>
          <span>My Account</span>
        </div>
        <div className="search">
          <IoSearchOutline />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand {
    img {
      cursor: pointer;
    }
  }
  .toggle {
    display: none;
  }
  .links {
    ul {
      display: flex;
      justify-content: center;
      gap: 3rem;

      li {
        a {
          color: black;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
  .account-info {
    display: flex;
    gap: 2rem;

    .account {
      display: flex;
      gap: 0.5rem;
      cursor: pointer;
    }
    .search {
      cursor: pointer;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    padding: 0.5rem 1rem;
    z-index: 10;
    .account-info {
      display: none;
    }
    .toggle {
      display: block;
      z-index: 1;
      padding-right: 1rem;
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      height: 100vh;
      background-color: var(--primary-color);
      width: ${({ state }) => (state ? "70%" : "0%")};
      opacity: 0;
      visibility: hidden;
      transition: 0.3s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          a {
            color: white;
          }
        }
      }
    }
  }
`;
