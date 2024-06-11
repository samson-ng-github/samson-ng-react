export default function LaucherTemplate() {
  return (
    <div className="page">
      <header>NC News</header>
      <div className="main">
        <div className="mpu-text-block">
          <p>
            This is a backend development project I executed during my studies
            at the Northcoders software developmemt bootcamp. Please launch the
            API by clicking the button below. It is a database for a news
            article article website similar to BBC. In the database there are
            four tables: articles, comments, topics and users. You can interact
            with the database and retrieve the data using various API endpoints.
            For example you can retrieve the whole list or a single item from
            the four tables, get all the comments that belong to one article,
            topic or user, post new items to the tables, as well as update or
            delete existing items. You can also sort and filter the lists with a
            number of parameters.
          </p>
          <a href="https://be-nc-news-v1e2.onrender.com/api/" target="_blank">
            <button>Launch</button>
          </a>
          <a
            href="https://github.com/samson-ng-github/be-nc-news"
            target="_blank"
          >
            <button>GitHub repo</button>
          </a>
        </div>
        <div className="mpu-block">
          <img src="./assets/thumbnails/nc_news.jpg" alt="Samson Ng" />
        </div>
      </div>
    </div>
  );
}
