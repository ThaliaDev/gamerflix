import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://gamerflix.vercel.app/">
        <img src="https://i.imgur.com/7BNcriO.png" alt="Logo GamerFlix" width="150" height="50"/>
      </a>
      <p>
        Aplicação desenvolvida por {' '}
        <a href="https://vercel.com/thaliadev">
          Thalia Rodrigues
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
