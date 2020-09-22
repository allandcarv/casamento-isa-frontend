import React, { useEffect, useRef, useMemo } from 'react';

import { StyledMain, Container } from './styles';

import Header from '../../components/header';
import SectionBanner from './section-banner';
import SectionVamosCasar from './section-vamoscasar';
import SectionOsNoivos from './section-osnoivos';
import SectionInstagram from './section-instagram';

const Home: React.FC = () => {
  const containerRefs: React.RefObject<HTMLElement>[] = useMemo(() => [], []);

  const inicioRef = useRef<HTMLElement>(null);
  containerRefs.push(inicioRef);

  const vamosCasarRef = useRef<HTMLElement>(null);
  containerRefs.push(vamosCasarRef);

  const osNoivosRef = useRef<HTMLElement>(null);
  containerRefs.push(osNoivosRef);

  const albumRef = useRef<HTMLElement>(null);
  containerRefs.push(albumRef);

  const instagramRef = useRef<HTMLElement>(null);
  containerRefs.push(instagramRef);

  const mensagensRef = useRef<HTMLElement>(null);
  containerRefs.push(mensagensRef);

  const presencaRef = useRef<HTMLElement>(null);
  containerRefs.push(presencaRef);

  const presentesRef = useRef<HTMLElement>(null);
  containerRefs.push(presentesRef);

  const localRef = useRef<HTMLElement>(null);
  containerRefs.push(localRef);

  const fornecedoresRef = useRef<HTMLElement>(null);
  containerRefs.push(fornecedoresRef);

  useEffect(() => {
    function hashed() {
      if (window.location.hash) {
        const ref = containerRefs.find(
          r => `#${r.current?.getAttribute('id')}` === window.location.hash,
        );

        return ref?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      return null;
    }

    hashed();
  }, [containerRefs]);

  return (
    <>
      <Header containerRefs={containerRefs} />
      <StyledMain>
        <Container>
          <SectionBanner forwardedRef={inicioRef} />
          <SectionVamosCasar forwardedRef={vamosCasarRef} />
          <SectionOsNoivos forwardedRef={osNoivosRef} />
          <section id="album" ref={albumRef}>
            <h1>Álbum</h1>
          </section>
          <SectionInstagram forwardedRef={instagramRef} />
          <section id="mensagens" ref={mensagensRef}>
            <h1>Mensagens</h1>
          </section>
          <section id="presenca" ref={presencaRef}>
            <h1>Presença</h1>
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
