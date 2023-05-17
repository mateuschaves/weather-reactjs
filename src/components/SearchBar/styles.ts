import styled from "styled-components";

export const SearchBarContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 30rem;
  
  input {
    border: none;
    outline: none;
    flex: 1;
    padding: 5px 10px;
    font-size: 14px;
  }
`;