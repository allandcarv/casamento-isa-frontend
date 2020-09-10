import React, { useEffect, useRef } from 'react';

import { StyledMain, Container } from './styles';

import Header from '../../components/header';
import SectionInstagram from './section-instagram';

const Home: React.FC = () => {
  const containerRefs: React.RefObject<HTMLElement>[] = [];

  const inicioRef = useRef<HTMLElement>(null);
  containerRefs.push(inicioRef);

  const osNoivosRef = useRef<HTMLElement>(null);
  containerRefs.push(osNoivosRef);

  const albunsRef = useRef<HTMLElement>(null);
  containerRefs.push(albunsRef);

  const instagramRef = useRef<HTMLElement>(null);
  containerRefs.push(instagramRef);

  const postItRef = useRef<HTMLElement>(null);
  containerRefs.push(postItRef);

  const padrinhosRef = useRef<HTMLElement>(null);
  containerRefs.push(padrinhosRef);

  const voceVaiRef = useRef<HTMLElement>(null);
  containerRefs.push(voceVaiRef);

  const presentesRef = useRef<HTMLElement>(null);
  containerRefs.push(presentesRef);

  const localRef = useRef<HTMLElement>(null);
  containerRefs.push(localRef);

  const fornecedoresRef = useRef<HTMLElement>(null);
  containerRefs.push(fornecedoresRef);

  useEffect(() => {
    if (window.location.hash) {
      containerRefs.forEach(ref => {
        if (
          ref.current &&
          `#${ref.current?.getAttribute('id')}` === window.location.hash
        ) {
          return ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }

        return null;
      });
    }
  }, [containerRefs]);

  return (
    <>
      <Header containerRefs={containerRefs} />
      <StyledMain>
        <Container>
          <section id="inicio" ref={inicioRef}>
            <i />
            <h1>
              Leonardo
              <span>&</span>
              Isabelle
            </h1>
            <p>23 de janeiro de 2021</p>
          </section>
          <section id="os-noivos" ref={osNoivosRef}>
            <h1>Os noivos</h1>
          </section>
          <section id="albuns" ref={albunsRef}>
            <h1>Álbuns</h1>
          </section>
          <SectionInstagram forwardedRef={instagramRef} />
          <section id="post-it" ref={postItRef}>
            <h1>Post-it</h1>
          </section>
          <section id="padrinhos" ref={padrinhosRef}>
            <h1>Padrinhos</h1>
          </section>
          <section id="voce-vai" ref={voceVaiRef}>
            <h1>Você vai?</h1>
          </section>
          <section id="presentes" ref={presentesRef}>
            <h1>Listas de Presentes</h1>
          </section>
          <section id="local" ref={localRef}>
            <h1>Localização</h1>
          </section>
          <section id="fornecedores" ref={fornecedoresRef}>
            <h1>Fornecedores</h1>
          </section>
        </Container>
      </StyledMain>
    </>
  );
};

export default Home;
