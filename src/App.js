import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getNews } from "./actions";

import logo from "./logo.svg";
import { Container, Pagination } from "./App.styles.js";
import Table from "./components/Table";
import Chart from "./components/Chart";

const App = ({ getNews }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const fetchNews = async () => {
    console.log("in fetchNews");
    const data = await getNews(pageNumber);
    console.log(data);
    console.log("leaving fetchNews");
  };

  useEffect(() => {
    console.log("in useeffect");
    fetchNews();
  }, [pageNumber]);

  return (
    <Container>
      <Table
        nextPage={() => setPageNumber(pageNumber - 1)}
        previousPage={() => setPageNumber(pageNumber + 1)}
      />
      <Pagination>
        <a onClick={() => setPageNumber(pageNumber - 1)}>Previous</a>
        <span> | </span>
        <a onClick={() => setPageNumber(pageNumber + 1)}>Next</a>
      </Pagination>
      <Chart />
    </Container>
  );
};

const mapStateToProps = ({ news }) => ({
  news
});

const mapDispatchToProps = (dispatch) => ({
  getNews: (pageNumber) => dispatch(getNews(pageNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
