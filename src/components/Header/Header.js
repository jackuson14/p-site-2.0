import Link from 'next/link';
import React,{ useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { OuterCont, Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', changeNavbarColor)
  }

  return(
    <>
    <OuterCont>
      <Container className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <Div1>
          <Link href="/">
            <a style={{ display: 'flex', alignItems: 'center', color:"white",marginTop: '-12px' }}>
              <span>JacksonLee</span>
            </a>
          </Link>
        </Div1>
        <Div2>
          <li>
            <Link href="#projects">
              <NavLink>Projects</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#tech">
              <NavLink>Technologies</NavLink>
            </Link>
          </li>        
          <li>
            <Link href="#about">
              <NavLink>About</NavLink>
            </Link>
          </li>        
        </Div2>
          <Div3>
            <SocialIcons href="https://github.com/jackuson14">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/jackson-lee-92ba20185/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/jackson_lzc/">
              <AiFillInstagram size="3rem"/>
            </SocialIcons>
          </Div3>
        </Container>
      </OuterCont>
      </>
  );
}
export default Header;
