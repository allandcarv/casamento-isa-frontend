import React, { useState, useEffect, RefObject } from 'react';
import Swiper from 'react-id-swiper';

import axios from '../../../services/axios';

import { StyledSection } from './styles';
import LoadingElement from '../../../components/loading';

interface ISectionInstagram {
  forwardedRef: RefObject<HTMLElement>;
}

interface IPhotos {
  media_url: string; //eslint-disable-line
  permalink: string;
}

const SectionInstagram: React.FC<ISectionInstagram> = ({ forwardedRef }) => {
  const [photos, setPhotos] = useState<IPhotos[]>([]);
  const [loading, setLoading] = useState(true);

  const swiperOptions = {
    spaceBetween: 10,
    slidesPerView: 1,
    observer: true,
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  useEffect(() => {
    async function loadSlides() {
      const response = await axios.get('photos');

      setPhotos(response.data);
      setLoading(false);
    }

    loadSlides();
  }, []);

  return (
    <StyledSection id="instagram" ref={forwardedRef}>
      <h1>Nossa Hashtag</h1>

      {loading && <LoadingElement />}

      {!loading && (
        <>
          <p>
            A Hashtag oficial do nosso casamento é #CasamentoBelinhaELeo. As
            fotos que são postadas no Instagram com esta Hashtag serão exibidas
            neste espaço, e com sua ajuda ficará incrível.
          </p>

          <div>
            <Swiper {...swiperOptions}>
              {photos.map(photo => (
                <div key={photo.media_url}>
                  <img src={photo.media_url} alt="" />
                </div>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </StyledSection>
  );
};

export default SectionInstagram;
