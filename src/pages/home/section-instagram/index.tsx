import React, { useState, useEffect, RefObject } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; //eslint-disable-line

import axios from '../../../services/axios';

import { StyledSection, Container } from './styles';

interface ISectionInstagram {
  forwardedRef: RefObject<HTMLElement>;
}

interface IInstagram {
  user: string;
  photo: string;
}

const SectionInstagram: React.FC<ISectionInstagram> = ({ forwardedRef }) => {
  const [slides, setSlides] = useState<IInstagram[]>([]);

  useEffect(() => {
    async function loadSlides() {
      const response = await axios.get('hashtags');

      setSlides(response.data);
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
            lazyLoad: 'nearby',
            breakpoints: {
              768: {
                gap: '1rem',
              },
            },
          }}
        >
          {slides.map(slide => (
            <SplideSlide key={slide.photo}>
              <img data-splide-lazy={slide.photo} alt={slide.user} />
              <strong>{`@${slide.user}`}</strong>
            </SplideSlide>
          ))}
        </Splide>
      </Container>
    </StyledSection>
  );
};

export default SectionInstagram;
