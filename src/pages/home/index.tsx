import React, { useEffect, useRef, useMemo, useContext } from 'react';

import { StyledMain, LoadingContainer } from './styles';

import { LoadingContext } from '../../context/LoadingContext';

import Header from '../../components/header';
import Loading from '../../components/loading';
import SectionBanner from './section-banner';
import SectionVamosCasar from './section-vamoscasar';
import SectionOsNoivos from './section-osnoivos';
import SectionAlbuns from './section-albuns';
import SectionInstagram from './section-instagram';
import SectionMensagens from './section-mensagens';
import SectionPresenca from './section-presenca';
import SectionPresentes from './section-presentes';
import SectionLocal from './section-local';
import SectionFornecedores from './section-fornecedores';

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

  const { loading } = useContext(LoadingContext);

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
        {loading && (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        )}
        <SectionBanner forwardedRef={inicioRef} />

        <SectionVamosCasar forwardedRef={vamosCasarRef} />

        <SectionOsNoivos forwardedRef={osNoivosRef} />

        <SectionAlbuns forwardedRef={albumRef} />

        <SectionInstagram forwardedRef={instagramRef} />

        <SectionMensagens forwardedRef={mensagensRef} />

        <SectionPresenca forwardedRef={presencaRef} />

        <SectionPresentes forwardedRef={presentesRef} />

        <SectionLocal forwardedRef={localRef} />

        <SectionFornecedores forwardedRef={fornecedoresRef} />
      </StyledMain>
    </>
  );
};

export default Home;
