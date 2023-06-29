import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  width: 120px;

  padding: 20px 20px;

  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.04);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
`;

export const ContactName = styled.p`
  display: flex;
  align-items: center;
  gap: 14px;

  margin: 0;
  font-weight: 500;
`;

export const ContactNumber = styled.p`
  display: flex;
  align-items: center;
  gap: 14px;

  margin: 0;
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 12px;
  margin-top: 24px;
  padding: 12px 24px;
  margin-left: auto;
  margin-right: auto;
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
