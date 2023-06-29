import styled from '@emotion/styled';

export const UserNav = styled.div`
  display: flex;
  margin-left: auto;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
  margin-right: 32px;
`;

export const UserName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: right;
  color: #000000;
`;

export const UserEmail = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: right;
  color: #8f8f8f;
`;

export const LogOutBtn = styled.button`
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
