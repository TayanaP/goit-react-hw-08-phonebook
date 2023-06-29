import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  width: 190px;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  display: block;
  padding: 4px 8px;
  margin-top: 4px;
  border-radius: 4px;
  outline: none;
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 12px;
  margin-top: 24px;
  padding: 12px 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 9px;
  border: 1px solid #efefef;
  cursor: pointer;
  background-color: #bfd0df;

  :hover,
  :focus {
    color: #000000;
    background-color: rgba(250, 187, 24, 0.1);
    border: 1px solid #000000;
  }
`;
