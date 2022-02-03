import styled from "styled-components";

export const TextInput = styled.input`
  border: 1.5px solid #dcdce6;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 18px;
  background: #ffffff;
  margin-top: 8px;
  height: 60px;
  width: 448px;

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

export const DescriptionInput = styled(TextInput)`
  height: 175px;
  :focus::placeholder {
    transform: translateY(-70px);
  }
`;

export const Description = styled.p`
  font-weight: 400;
  fot-size: 18px;
  margin-top: 40px;
  color: #737380;
  background: transparent;
  flex-wrap: wrap;
`;
