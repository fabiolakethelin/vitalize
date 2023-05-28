import React from "react";
import { FooterContainer } from "./Footer.style";
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"

export const Footer = () => {
  return (
    <FooterContainer>
            <span></span>
            <a 
              href="https://github.com/fabiolakethelin"
              target='_blank'
              rel="noreferrer">
                <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/fabiolakethelin"
              target='_blank'
              rel="noreferrer">
                <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/fabiola_kethelin?igshid=ZDdkNTZiNTM="
              target='_blank'
              rel="noreferrer">
                <FaInstagram />
            </a>
    </FooterContainer>
  );
};

export default Footer