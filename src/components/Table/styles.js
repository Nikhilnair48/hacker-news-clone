import styled from "styled-components";

const TableContainer = styled.table`
  width: 100%;
  max-width: 100%;
`;
const TableHeader = styled.thead`
  font-family: Verdana, Geneva, sans-serif;
  font-size: 10pt;
  color: #f4f3ec;
  background-color: #fa6621;
  padding: 5px;
  text-align: left;
  > th:nth-child(-n + 3) {
    width: 6%;
  }
  > th:nth-child(4) {
    width: 80%;
  }
`;

const TableBody = styled.tbody`
  font-family: Verdana, Geneva, sans-serif;
  font-size: 10pt;
  color: black;
  > tr:nth-child(even) {
    background-color: #e5e5df;
  }
  > tr:nth-child(odd) {
    background-color: #f6f6f0;
  }
  > tr > td:nth-child(-n + 3) {
    text-align: center;
  }
  > tr > td > a {
    color: black;
    text-decoration: none;
  }
  > tr > td > a > img {
    width: 15%;
  }
  > tr > td > span:not(:first-child) {
    font-size: 8pt;
  }
  > tr > td > span:nth-child(2n):not(:first-child) {
    color: #828282;
  }
`;

export { TableBody, TableContainer, TableHeader };
