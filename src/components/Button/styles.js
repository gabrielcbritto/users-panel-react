import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 120px;

  background: ${props => props.backPage ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
  border-radius: 14px;

  border: ${props=> props.backPage ? '1px solid #ffffff' : 'none'};

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;

  color: #ffffff;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: ${props => props.backPage && 'rotateY(180deg)'};
  }
`;