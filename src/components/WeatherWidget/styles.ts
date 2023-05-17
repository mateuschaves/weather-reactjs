import styled from "styled-components";

export const WidgetContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 15px;
  border-radius: 5px;
`;

export const WidgetText = styled.p`
  display: flex;
  align-items: center;
  margin: 0 0 8px 0;
  svg {
    margin-right: 12px;
  }
`;