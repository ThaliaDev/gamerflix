import styled from "styled-components";

const Button = styled.button`
    color: white;
    //border: 1px solid orangered;
    border-image: linear-gradient(to right, blue , orangered);
    border-image-slice: 1;
    background:black;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    }
    &:hover,
    &:focus {
        opacity: .5;
    }
`;// styled.a (tag que a gente passou, ou seja, a de link) | As crases são tagged template string
  // uma propriedade do JS. | o &(antes, .ButtonLink) em baixo, serve para referenciar o botão.

  export default Button;