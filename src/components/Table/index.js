import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import { TableContainer, TableHeader, TableBody } from "./styles.js";
import { upVote } from "../../actions";
import upvote from "../../icons/upvote.gif";
import moment from "moment";

const Table = ({ news, upVote }) => {
  console.log("news");
  console.log(news);

  const hideRow = (storyId) => {
    console.log(storyId);
  };

  const renderBody = () => {
    if (news && news.hits) {
      return news.hits.map((newsItem) => {
        return (
          <tr key={newsItem.parent_id}>
            <td>{newsItem.num_comments || 0}</td>
            <td>{newsItem.points || 0}</td>
            <td onClick={() => upVote(newsItem.story_id)}>
              <a>
                <img src={upvote} />
              </a>
            </td>
            <td>
              <span target="_blank" href={newsItem.url}>
                {newsItem.title}
              </span>
              <span>
                <a>
                  &nbsp; (
                  {newsItem.url
                    ? newsItem.url.replace("https://", "").split("/")[0]
                    : "news.ycombinator.com"}
                  )&nbsp; by &nbsp;
                </a>
              </span>
              <span>{newsItem.author} &nbsp;</span>
              <span>{moment(newsItem.created_at).fromNow()}</span>
              <span onClick={() => hideRow(newsItem.story_id)}> [hide]</span>
            </td>
          </tr>
        );
      });
    }
    // else {
    //   return <div>Loading...</div>;
    // }
  };

  return (
    <TableContainer>
      <TableHeader>
        <tr>
          <th>Comments</th>
          <th>Vote Count</th>
          <th>UpVote</th>
          <th>News Details</th>
        </tr>
      </TableHeader>
      <TableBody>{renderBody()}</TableBody>
    </TableContainer>
  );
};

const mapStateToProps = ({ news }) => ({
  news
});

const mapDispatchToProps = (dispatch) => ({
  upVote: (storyId) => dispatch(upVote(storyId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
