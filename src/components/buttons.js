import styled from "styled-components";

export const InputButton = styled.button`
  background: #e02041;
  border-radius: 8px;
  border: none;
  color: #f0f0f5;
  transition: all 1s;
  margin-top: 16px;
  height: 60px;
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

export const DeleteButton = styled.button`
  background: transparent;
  height: 20px;
  width: auto;
  border: none;
  border-radius: 8px;

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px #13131a32;
  }

  :active {
    background: #e02041;
  }
`;
