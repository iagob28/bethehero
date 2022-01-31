import styled from "styled-components";
import enter from "../assets/img/enter.png";
import back from "../assets/img/back.png";

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

export const LinkTitle = styled.a`
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

export const ReturnTitle = styled(LinkTitle)`
  ::before {
    content: url(${back});
  }
`;