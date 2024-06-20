export default function LaucherTemplate() {
  return (
    <div className="page">
      <header>Van Gogh Printshop</header>
      <div className="main">
        <div className="mpu-text-block">
          <p>
            As a devoted fan of Vincent van Gogh, I have created an imaginary
            e-commerce website that sells 77 of the artist's paintings. All of
            these paintings were painted in the last three months of his life,
            after he moved to the small town of Auvers-sur-Oise, just outside of
            Paris, up to the day he shot himself in the stomach in the summer of
            1890.
          </p>
          <p>
            Please launch the API by clicking the button below. You could search
            for a particular painting by name in the search bar on the left or
            filter the paintings by three categories: portraits, landscapes and
            still lives. Click the thumbnails to find out more about the
            paintings and order the prints in one of the four sizes available:
            original, half, quarter and postcard sizes. Go to the cart on the
            top right and you can see all the posters you have selected and the
            total price. All of the data are stored in useState and are passed
            around the components using React Redux Toolkit
          </p>
          <p>
            The website is built in React with Vite. At the moment, only the
            frontend part has been implemented. The backend side is to follow
            along with new features such as a login system as well as a map API
            that tells you the current locations of the paintings.
          </p>
          <a
            href="https://apps.samson-ng.com/van-gogh-printshop/"
            target="_blank"
          >
            <button>Launch</button>
          </a>
          <a
            href="https://github.com/samson-ng-github/van-gogh-printshop"
            target="_blank"
          >
            <button>GitHub repo</button>
          </a>
        </div>
        <div className="mpu-block">
          <img
            src="./assets/thumbnails/van_gogh_printshop.jpg"
            alt="Samson Ng"
          />
        </div>
      </div>
    </div>
  );
}
