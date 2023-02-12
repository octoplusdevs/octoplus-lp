import styled, { css } from "styled-components";

interface ButtonSecundary{
    ButtonSecundary: boolean,
}

export const Wrapper = styled.button<ButtonSecundary>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: 0.4px solid #BFBFBF;
  padding: 1.4rem 2.4rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  cursor: pointer;
  transition: filter 0.3s;
  .ArrowForward{
    color: #000;
   }
  &:hover{
    filter: brightness(0.9);
  }
  ${props=> props.ButtonSecundary && css`
    background-color: #000;
    color: #fff;
    &:hover{
      filter: brightness(0.9);
    }
    .arrow-right{
        color: #fff;
    }
 `}
`