import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  //   min-height: 400px;
  padding: 40px 20px;
  width: 400px;
  background-color: #e4eaef;
  border-radius: 9px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 250px;
  padding: 10px 20px;
  color: #000000;
  background: #efefef;
  border-radius: 9px;
  border: 1px solid #efefef;

  :hover,
  :focus {
    border: 1px solid #000000;
  }
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 12px;
  margin-top: 24px;
  padding: 12px 24px;
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
