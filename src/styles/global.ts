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
  }

  body {
    background-color: #fffafc;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  header {
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fffafc;
  }

  main {
    flex: 1;
    margin-top: 60px;
  }

  footer {
    height: 40px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fffafc;
  }

  button {
    cursor: pointer;
  }
`;
