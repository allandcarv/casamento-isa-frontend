import { createGlobalStyle } from 'styled-components';

import LoraFont from '../assets/fonts/Lora-VariableFont_wght.ttf';
import MarvelousSansOtf from '../assets/fonts/Marvelous-Sans-Demo.otf';
import MarvelousSansWoff from '../assets/fonts/Marvelous-Sans-Demo.woff';
import MarvelousScriptOtf from '../assets/fonts/Marvelous-Script-Demo.otf';
import MarvelousScriptWoff from '../assets/fonts/Marvelous-Script-Demo.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'Lora';
    src: local('Lora'),
         url(${LoraFont}) format('truetype');
  }

  @font-face {
    font-family: 'MarvelousSans';
    src: local('MarvelousSans'),
         url(${MarvelousSansOtf}) format('opentype'),
         url(${MarvelousSansWoff}) format('woff');
  }

  @font-face {
    font-family: 'MarvelousScript';
    src: local('MarvelousScript'),
         url(${MarvelousScriptOtf}) format('opentype'),
         url(${MarvelousScriptWoff}) format('woff');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: #EEE5E8;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
  }
`;
