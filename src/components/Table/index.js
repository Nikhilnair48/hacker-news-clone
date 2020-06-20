import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import { TableContainer, TableHeader, TableBody } from "./styles.js";
import { upVote, hideStory } from "../../actions";
import upvote from "../../icons/upvote.gif";
import moment from "moment";

const Table = ({ stories, votedStories, hideReducer, upVote, hideStory }) => {
  console.log("stories");
  console.log(stories);

  const renderBody = () => {
    if (stories && stories.hits) {
      return stories.hits.map((story) => {
        return (
          <tr key={story.objectID}>
            <td>{story.num_comments || 0}</td>
            <td>{story.points || 0}</td>
            <td onClick={() => upVote(story.objectID)}>
              <a>
                <img src={upvote} />
              </a>
            </td>
            <td>
              <span target="_blank" href={story.url}>
                {story.title}
              </span>
              <span>
                <a>
                  &nbsp; (
                  {story.url
                    ? story.url.replace("https://", "").split("/")[0]
                    : "news.ycombinator.com"}
                  )&nbsp; by &nbsp;
                </a>
              </span>
              <span>{story.author} &nbsp;</span>
              <span>{moment(story.created_at).fromNow()}</span>
              <a onClick={() => hideStory(story.objectID)}> [hide]</a>
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

const mapStateToProps = ({ stories, votedStories, hideReducer }) => ({
  stories,
  votedStories,
  hideReducer
});

const mapDispatchToProps = (dispatch) => ({
  upVote: (storyId) => dispatch(upVote(storyId)),
  hideStory: (storyId) => dispatch(hideStory(storyId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
