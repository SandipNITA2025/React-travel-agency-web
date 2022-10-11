import React from 'react'
import styled from 'styled-components';

const Button = ({text}) => {
  return (
    <Btn>{text}</Btn>
  )
}

export default Button;

const Btn= styled.button`
    padding: 1rem 2rem ;
    background: var(--primary-color);
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
`;