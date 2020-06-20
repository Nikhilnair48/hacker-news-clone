import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getNews } from "./actions";
import { Container, Pagination } from "./App.styles.js";
import Table from "./components/Table";
import PlotChart from "./components/Chart";
import { useParams } from "react-router-dom";
import { Redirect, Link } from "react-router-dom";

import logo from "./logo.svg";

const App = ({ getNews }) => {
  const urlParams = useParams();
  const [pageNumber, setPageNumber] = useState(0);

  const fetchNews = async () => {
    console.log("in fetchNews");
    const data = await getNews(pageNumber);
    console.log(data);
    console.log("leaving fetchNews");
  };

  useEffect(() => {
    console.log("in url param effect");
    console.log(urlParams);
    if (urlParams.pageNumber && parseInt(urlParams.pageNumber) !== pageNumber) {
      const pageNum = parseInt(urlParams.pageNumber);
      console.log("setting to " + pageNum);
      setPageNumber(pageNum);
    } else {
      setPageNumber(0);
    }
  }, [urlParams]);

  useEffect(() => {
    console.log("in useeffect");
    fetchNews();
  }, [pageNumber]);

  return (
    <Container>
      <Table />
      <Pagination>
        <Link to={"/" + (pageNumber === 1 ? "" : parseInt(pageNumber - 1))}>
          Previous
        </Link>
        <span> | </span>
        <Link to={"/" + parseInt(pageNumber + 1)}>Next</Link>
      </Pagination>
      <PlotChart />
    </Container>
  );
};

const mapStateToProps = ({ stories }) => ({
  stories
});

const mapDispatchToProps = (dispatch) => ({
  getNews: (pageNumber) => dispatch(getNews(pageNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
