import React, { useState, useEffect, RefObject } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; //eslint-disable-line

import axios from '../../../services/axios';

import { StyledSection, Container } from './styles';

interface ISectionInstagram {
  forwardedRef: RefObject<HTMLElement>;
}

interface IPhotos {
  media_url: string; //eslint-disable-line
  permalink: string;
}

const SectionInstagram: React.FC<ISectionInstagram> = ({ forwardedRef }) => {
  const [photos, setPhotos] = useState<IPhotos[]>([]);

  useEffect(() => {
    async function loadSlides() {
      const response = await axios.get('photos');

      setPhotos(response.data);
    }

    loadSlides();
  }, []);

  return (
    <StyledSection id="instagram" ref={forwardedRef}>
      <h1>#CasamentoBelinhaELeo</h1>
      <Container>
        <Splide
          options={{
            rewind: true,
            perPage: 1,
            focus: 'center',
            trimSpace: false,
            gap: '2rem',
            pagination: false,
            autoWidth: true,
            autoHeight: true,
            breakpoints: {
              768: {
                gap: '1rem',
              },
            },
          }}
        >
          {photos.map(photo => (
            <SplideSlide key={photo.media_url}>
              <img src={photo.media_url} alt="" />
            </SplideSlide>
          ))}
        </Splide>
      </Container>
    </StyledSection>
  );
};

export default SectionInstagram;
