import React from "react";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const newsFeedArray = [
  {
    title: "News 1",
    description:
      "Euismod nunc lorem est sit in amet odio vitae libero enim ipsum elit tincidunt a libero condimentum tincidunt condimentum atlorem sagittis nec in elit ipsum dolor consectetur sagittis laoreet viverra auctor odio id adipiscing",
  },
  {
    title: "News 2",
    description:
      "Curabitur amet libero nunc consectetur viverra vitae dolor laoreet sit in enim in dolor viverra odio dolor auctor nec euismod ipsum sit libero condimentum libero amet at id est vel nunc ipsum a enim adipiscing id est condimentum tincidunt tincidunt a consectetur euismod dolor sagittis elit libero lorem auctor atlorem laoreet elit curabitur vel adipiscing sagittis vitae nec id",
  },
];

export default function NewsFeed() {
  const handleClick = (news: any) => () => {
    console.log(news);
  };

  return (
    <div className="outer-container">
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {newsFeedArray.map((news) => (
          <>
            <div className="news-item" onClick={handleClick(news)}>
              <div>{news.title}</div>
              <div>{news.description}</div>
            </div>
          </>
        ))}
      </Masonry>
    </div>
  );
}
