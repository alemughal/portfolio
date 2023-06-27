import Link from "next/link";
import Head from "next/head";
import React from "react";
import { Span } from "./HeaderStyles";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

<Head>
  <title>Portfolio</title>
  <link rel="icon" href="/favicon.ico" />
</Head>;
const Header = () => (
  <>
    <Head>
      <title>Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <Div1>
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </Link>
      </Div1>
      <Div2>
        <li>
          <NavLink href="#projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="#tech">Technolgies</NavLink>
        </li>
        <li>
          <NavLink href="#about">About</NavLink>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/alemughal" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/muhammad-ali-shan-000a511bb/"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/alemughal" target="_blank">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </>
);

export default Header;
