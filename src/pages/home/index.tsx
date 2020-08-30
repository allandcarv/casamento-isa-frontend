import React, { useRef } from 'react';

import { StyledMain, Container } from './styles';

import Header from '../../components/header';

const Home: React.FC = () => {
  const containerRefs: React.RefObject<HTMLElement>[] = [];

  const inicioRef = useRef<HTMLElement>(null);
  containerRefs.push(inicioRef);

  return (
    <>
      <Header containerRefs={containerRefs} />
      <StyledMain>
        <Container>
          <section id="inicio" ref={inicioRef}>
            <i />
            <h1>Leonardo & Isabelle</h1>
            <p>23 de janeiro de 2021</p>
          </section>
          <section id="os-noivos">
            <h1>Os noivos</h1>
          </section>
        </Container>
      </StyledMain>
    </>
  );
};

export default Home;
