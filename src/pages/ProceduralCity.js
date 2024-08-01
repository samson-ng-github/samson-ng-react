export default function ProceduralCity() {
  return (
    <div className="page">
      <header>Procedural City</header>
      <div className="main">
        <div className="screenshot">
          <img src="./assets/screenshots/procedural-city-1.png" />
          <img src="./assets/screenshots/procedural-city-2.png" />
          <img src="./assets/screenshots/procedural-city-3.png" />
        </div>
        <div className="mpu-text-block">
          <p>
            This is the major project in the MSc Computer Games course. The
            chosen topic for our team of five is a procedurally generated
            landscape. Different areas are designated to each of the group
            member. For the first milestone, I was responsible for the
            buildings. The techniques used are as followings. The teammate who
            is responsible for subdividing the road will pass me an array of
            four vertices, each indicating a quadrilateral building slot. I then
            use an algorithm to generate a facade on each side of the
            quadrilateral using a random height. First I subdivided the facade
            into floors in proportion to its height. There are three types of
            floor: top floor, ground floor and ordinary floor. They all look
            slightly different. Next, I subdivided each floor into rooms in
            proportion to the facade's width. Finally, each room is subdivided
            into smaller details such as the embossed cornice, the debossed
            window and the ordinary wall. Each section is then textured
            accordingly. The dimension of all details such as widths and heights
            of each types of floors, cornices and windows are stored in an
            external text file.
          </p>
          <p>
            In the process there a few technical challenges. For example, since
            the height of each building is random, an algorithm is needed to
            determine how many floors to be rendered. If the height is small,
            some types of floors might not be rendered. Otherwise, the floors
            might overlap, causing undesired effects. Besides, each facade is at
            first drawn at the origin and then transported to the right place.
            Making sure the translation and rotation are correct also demanded
            considerable effort.
          </p>
        </div>
      </div>
    </div>
  );
}
