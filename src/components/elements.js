import styled from "styled-components";
import enter from "../assets/img/enter.png";
import back from "../assets/img/back.png";

export const TextInput = styled.input`
  border: 1.5px solid #dcdce6;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 18px;
  background: #ffffff;
  margin-top: 40px;

  padding-left: 8px;

  :focus::placeholder {
    transition: all 0.5s;
    transform: translateY(-20px);
    left: 8px;
    font-size: 10px;
  }
  ::placeholder {
    color: #a8a8b3;
    position: relative;
    left: 24px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  text-align: left;
  margin-top: 40px;
`;

export const SecondTitle = styled.h2`
  font-weight: 700;
  font-size: 14px;
  text-align: left;
  background: transparent;
`;
export const MinorTitle = styled.a`
  font-weight: 700;
  font-size: 18px;
  margin-top: 40px;

  ::before {
    margin-right: 19px;
    content: url(${enter});
  }
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ReturnTitle = styled(MinorTitle)`
  ::before {
    content: url(${back});
  }
`;

export const Description = styled.p`
  font-weight: 400;
  fot-size: 18px;
  margin-top: 40px;
  color: #737380;
  background: transparent;
`;

export const InputButton = styled.button`
  background: #e02041;
  border-radius: 8px;
  border: none;
  color: #f0f0f5;
  transition: all 1s;
  margin-top: 16px;
  :hover {
    filter: opacity(0.8);
    cursor: pointer;
  }
  :active {
    border: 1px solid #a51930;
  }
`;

export const OffButton = styled.button`
  background: transparent;
  width: 60px;
  height: 60px;
  border: 1px solid #dcdce5;
  border-radius: 8px;
  margin: 16px 0 0 8px;
  transition: box-shadow 0.3s;

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px #13131a32;
  }
  :active {
    border: 3px solid #e02041;
  }
`;
