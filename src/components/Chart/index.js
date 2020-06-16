import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Chart = () => {
  return <div>Chart</div>;
};

const mapStateToProps = ({ news }) => ({
  news
});

const mapDispatchToProps = (dispatch) => ({
  getNews: () => dispatch(getNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
