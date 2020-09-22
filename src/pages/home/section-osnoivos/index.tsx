import React, { RefObject } from 'react';

import { StyledSection } from './styles';
import FlorImage from '../../../assets/images/flor.png';
import IsaPhoto from '../../../assets/images/isa.jpeg';
import LeoPhoto from '../../../assets/images/leo.jpeg';

interface ISectionOsNoivos {
  forwardedRef: RefObject<HTMLElement>;
}

const OsNoivos: React.FC<ISectionOsNoivos> = ({ forwardedRef }) => {
  return (
    <StyledSection id="os-noivos" ref={forwardedRef}>
      <h1>Os Noivos</h1>
      <div className="pictures">
        <div className="noivo">
          <span>Leonardo</span>
          <img src={LeoPhoto} alt="Leo" />
        </div>
        <div className="noiva">
          <img src={IsaPhoto} alt="Isa" />
          <span>Isabelle</span>
        </div>

        <img src={FlorImage} alt="Flores" />
      </div>
      <p>Nossa história começou bem antes de imaginarmos!</p>
      <p>
        Sim, pode parecer um clichê mas eu e Léo temos uma história que começou
        antes de nos conhecermos. Nossas famílias são amigas há muito tempo, os
        avós dele e meus pais trabalhavam juntos em Encontros de Casais com
        Cristo, é como se tudo começasse a ser escrito a partir daí.
      </p>
      <p>
        Embora nossas famílias fossem próximas, nós viemos ter contato somente
        na adolescência, algo mais formal e sem maiores pretensões. Quando nos
        reaproximamos, tempos depois, os laços de amizade foram se construindo,
        se fortalecendo, e o que vivemos desde então se transformou neste amor
        que cultivamos agora, e pelo qual somos imensamente gratos.
      </p>
      <p>
        E esse amor, que teve sua história iniciada tantos anos atrás, que foi
        aos poucos tomando forma, é tão imenso e importante para nós que
        transbordou e nos fez sonhar em formar uma família. Uma parte importante
        deste sonho começa agora. E não vemos a hora de compartilhá-la com
        vocês.
      </p>
    </StyledSection>
  );
};

export default OsNoivos;
