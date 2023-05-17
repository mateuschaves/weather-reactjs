import styled from "styled-components";

export const MapContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

export const MarkerContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  border: 2px solid red;
  border-radius: 50%;
  background-color: white;
`;
