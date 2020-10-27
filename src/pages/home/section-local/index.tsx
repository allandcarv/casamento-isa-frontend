import React, { RefObject } from 'react';
import { Map as LeaftletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import { StyledSection } from './styles';

interface ISectionLocal {
  forwardedRef: RefObject<HTMLElement>;
}

const Local: React.FC<ISectionLocal> = ({ forwardedRef }) => {
  return (
    <StyledSection id="local" ref={forwardedRef}>
      <h1>Localização</h1>
      <LeaftletMap center={[-7.122519, -34.86936]} zoom={16}>
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={[-7.122519, -34.86936]}>
          <Popup>
            <p>
              <a
                rel="noopener noreferrer"
                href="http://www.gracejos.com.br/"
                target="_blank"
              >
                Gracejos Recepções
              </a>
            </p>
            <p>Avenida Almirante Barroso, 1070</p>
            <p>Centro - João Pessoa / PB</p>
            <p>CEP: 58013-120</p>
            <p>
              Clique
              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/PEeVzEZc82a8QyB88"
                target="_blank"
                className="googlemaps_link"
              >
                aqui
              </a>
              para ver no Google Maps.
            </p>
          </Popup>
        </Marker>
      </LeaftletMap>
    </StyledSection>
  );
};

export default Local;
