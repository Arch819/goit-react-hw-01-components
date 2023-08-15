import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 900px;

  margin: 0 auto;

  text-align: center;
  border-radius: 4px;
  box-shadow: 0 2px 2px 2px #aaa;
  border-spacing: 0;
  overflow: hidden;

  border-collapse: collapse;

  & thead {
    background: #00fff0;
    border-radius: 4px 4px 0 0;
  }
  & th,
  & td {
    border: 1px solid #eee;
    padding: 10px;
  }
  & th {
    color: #fff;
    text-transform: uppercase;
    font-size: 22px;
  }

  & td {
    color: #666;
    text-transform: capitalize;
  }

  & tr:nth-child(even) {
    background: #eee;
  }
`;
