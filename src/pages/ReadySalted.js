export default function ReadySalted() {
  return (
    <div className="page">
      <header>Ready Salted</header>
      <div className="main">
        <div className="mpu-block" style={{ height: 650 }}>
          <iframe
            className="iframe-border"
            src="https://player.vimeo.com/video/982832966?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="300"
            height="650"
            title="Ready Salted"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style={{ backgroundColor: 'black' }}
          />
        </div>
        <div className="mpu-text-block">
          <p>
            Ready Salted is a 3D mobile game app, built using React Native and
            React 3 Fiber, created in two weeks as the final major project of
            the Northcoders software development bootcamp. Six types of
            ingredients fall from the sky. You have to catch the correct
            ingredient by moving the bag on the grid. A maximum of five
            ingredients, either right or wrong, can be stored in the bag. To
            score points, you have to wait for the hand, which comes down once
            in a while, to empty your bag. Only then you will score once point
            for each correct ingredient.
          </p>
          <a
            href="https://github.com/samson-ng-github/ready-salted-mobile"
            target="_blank"
          >
            <button>GitHub repo</button>
          </a>
        </div>
      </div>
    </div>
  );
}
