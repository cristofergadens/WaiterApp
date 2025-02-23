import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;
  display: flex;
  gap: 32px;
`;

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  flex: 1;

  > header {
    padding: 8px;
    display: flex;
    gap: 8px;
    font-size: 14px;
    align-items: center;
    justify-content: center;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  button {
    background-color: white;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;
    height: 128px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    & + button {
      margin-top: 24px;
    }

    strong {
      font-weight: 500;
    }

    span {
      color: #666;
      font-size: 14px;
    }
  }
`;
