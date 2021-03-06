import React, { RefObject } from 'react';
import { differenceInCalendarDays } from 'date-fns';

import { StyledSection } from './styles';
import Banner1 from '../../../assets/images/banner1.svg';

interface ISectionBanner {
  forwardedRef: RefObject<HTMLElement>;
}

const Banner: React.FC<ISectionBanner> = ({ forwardedRef }) => {
  const daysLeft = differenceInCalendarDays(new Date(2021, 1, 23), new Date());

  return (
    <StyledSection id="inicio" ref={forwardedRef}>
      <img src={Banner1} alt="Casamento Isabelle e Leonardo" />
      <h1 className="main_title">
        Leonardo
        <span>&</span>
        Isabelle
      </h1>
      <p>23 de janeiro de 2021</p>

      <div className="counter">
        <p>
          Faltam
          <strong>{daysLeft}</strong>
          dias para a nossa festa!
        </p>
      </div>
    </StyledSection>
  );
};

export default Banner;
