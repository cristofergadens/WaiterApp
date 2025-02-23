import styled from "styled-components";

export const Container = styled.header`
  background-color: #d73035;
  height: 198px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    color: white;

    h1{
      font-size: 32px;
    }

    h2 {
      opacity: 0.9;
      font-size: 16px;
      font-weight: 400;
      margin-top: 6px;
    }

  }
`;
