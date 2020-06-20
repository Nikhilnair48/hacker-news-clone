import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Chart } from "react-charts";

const PlotChart = ({ stories }) => {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data:
          stories && stories.hits
            ? stories.hits.map((story, index) => [story.objectID, story.points])
            : null
      }
    ],
    [stories]
  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" }
    ],
    []
  );
  return stories && stories.hits ? (
    <div
      style={{
        width: "100%",
        height: "300px"
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  ) : (
    "Loading"
  );
};

const mapStateToProps = ({ stories }) => ({
  stories
});

const mapDispatchToProps = (dispatch) => ({
  getNews: () => dispatch(getNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlotChart);
