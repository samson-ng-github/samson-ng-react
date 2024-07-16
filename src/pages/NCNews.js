export default function NCNews() {
  return (
    <div className="page">
      <header>NC News</header>
      <div className="main">
        <div className="mpu-text-block">
          <p>
            This is a full stack development project I executed during my
            studies at the Northcoders software development bootcamp. This is a
            CRUD (create, read, update and delete) website that emulates a news
            article article website similar to BBC. Please launch the
            application by clicking the buttons below.
          </p>
          <p>
            It is made up of both a front end and a back end part. The back end
            part is a PSQL database accessible with an Express Rest API server.
            In the database there are four relational tables: articles,
            comments, topics and users. You can interact with the database and
            retrieve the data using various API endpoints. For example you can
            retrieve the whole list or a single item from the four tables, get
            all the comments that belong to one article, topic or user, post new
            items to the tables, as well as update or delete existing items. You
            can also sort and filter the lists with a number of parameters.
          </p>
          <p>
            The front end side is built with React and provides the users with a
            brower interface to perform the above actions. On the home page, you
            will see a list of articles. You can filter them by topics, sort by
            date posted, vote counts, comment counts and title in ascending or
            descending order. In the article's page you can give likes or
            dislikes to the article, read other people's comments, like or
            dislike other people's comment, post your own comments or delete
            them if you want. You will see messages indicating when loading is
            in process or when errors have occurred.
          </p>
          <a href="https://apps.samson-ng.com/nc-news/" target="_blank">
            <button>Front end</button>
          </a>
          <a href="https://be-nc-news-v1e2.onrender.com/api/" target="_blank">
            <button>Back end</button>
          </a>
          <a
            href="https://github.com/samson-ng-github/be-nc-news"
            target="_blank"
          >
            <button>GitHub repo</button>
          </a>
        </div>
        <div className="mpu-block">
          <a href="https://apps.samson-ng.com/nc-news/" target="_blank">
            <img src="./assets/thumbnails/nc_news.jpg" alt="Samson Ng" />
          </a>
        </div>
      </div>
    </div>
  );
}
