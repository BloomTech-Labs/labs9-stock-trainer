import React from "react";
import { List, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Helpmain(props) {
  const { articles } = props;
  return (
    <List className="helpSearch" divided>
      {articles.map(e => (
        <List.Item key={e.title} className="searchItem">
          <Link to={e.link}>
            <Segment>
              <List.Header as="h2">{e.title}</List.Header>
              <div className="searchItemBody">{e.text}</div>
            </Segment>
          </Link>
        </List.Item>
      ))}
    </List>
  );
}

export default Helpmain;
