import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  

  text-align: center;
  color: white;

  gap: 16px;
  padding: 16px 24px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 20px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 7px rgba(255, 255, 255, 0.3);

  &:hover,
  &:focus {
    color: white;
    background-color: black;
    cursor: pointer;
  }`