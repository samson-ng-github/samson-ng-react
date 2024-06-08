const web = 'Web application';
const webColor = '#131a3f';
const banner = 'JavaScript banner';
const bannerColor = '#60134d';
const billboard = 'Digital billboard';
const billboardColor = '#0f3b00';

// const installation = 'Installation art';
// const installationColor = '#440101';
// const miniGame = 'Mini Game';
// const webColor = '#60134d';
// const threeJS = 'Three.js';
// const webColor = '#60134d';
// const pencilDrawing = "Pencil Drawing";
// const pencilDrawingColor = "#252525";

const webProjects = [
  {
    type: 'React (Frontend)',
    name: 'Van Gogh Printshop',
    slug: 'van_gogh_printshop',
    color: webColor,
    src: './iframes/meta1',
    external: 'https://van-gogh-printshop.samson-ng.com/',
  },
  {
    type: 'PSQL + Express',
    name: 'NC News',
    slug: 'nc_news',
    color: webColor,
    src: './iframes/meta1',
    external: 'https://be-nc-news-v1e2.onrender.com/api/',
  },
  {
    type: 'React',
    name: 'Credit Card Validator',
    slug: 'credit_card_validator',
    color: webColor,
    src: './iframes/meta1',
    external:
      'https://github.com/samson-ng-github/luhn-algorithm-credit-card-form',
  },
  {
    type: 'Three.js',
    name: 'Spotlight Casino 3D',
    slug: 'spotlight_casino_3d',
    color: webColor,
    src: './iframes/spotlight_casino_3d',
    size: { width: 1000, height: 800 },
    text: "This Three.js project is part of the website for Spotlight Casino. It tells the story of Keith Taft, a professional con man and the four wearable gadgets he invented to cheat in casinos in the 1980's. Each gadget rotates in 3D and can be spun by dragging the mouse. Click on the hotspots to know more about each gadgets.",
  },
  {
    type: 'JavaScript mini-game',
    name: 'Tusker',
    slug: 'tusker',
    color: webColor,
    src: './iframes/tusker',
    size: { width: 1366, height: 911 },
    text: 'This is game commissioned by Tusker, a car benefit company. 50 clues lie hidden in the picture, each suggests a car brand. Click and enter the answer to win.',
  },
  {
    type: 'JavaScript mini-game',
    name: 'Organix',
    slug: 'organix',
    color: webColor,
    src: './iframes/organix',
    size: { width: 1000, height: 800 },
    text: 'Control the bag to catch the nutritious peas and corns. Avoid the evil sugar.',
  },
  {
    type: 'JavaScript mini-game',
    name: 'Phantom Football',
    slug: 'phantom_football',
    color: webColor,
    src: './iframes/phantom_football',
    size: { width: 298, height: 248 },
    text: 'A new take on the classic Pong game. Control the goal keeper with the left and right keys.',
  },
  {
    type: 'Three.js',
    name: 'Snowfall 3D',
    slug: 'snowfall_3d',
    color: webColor,
    src: './iframes/snowfall_3d',
    size: { width: 1000, height: 800 },
    text: 'This is a particle system generated using Three.js. The 5000 particles of snow fall freely under gravity. To make it look more natural, I have had the gravity randomised by Perlin noise, a combination of eight wave curves, each of which has double the frequency and half the amplitude than the previous curve.',
  },
];

const bannerProjects = [
  {
    type: banner,
    name: 'Metaverse 1',
    slug: 'meta1',
    color: bannerColor,
    src: './iframes/meta1',
  },
  {
    type: banner,
    name: 'Metaverse 2',
    slug: 'meta2',
    color: bannerColor,
    src: './iframes/meta2',
  },
  {
    type: banner,
    name: 'Instagram',
    slug: 'ig_ywb',
    color: bannerColor,
    src: './iframes/ig_ywb',
  },
  {
    type: banner,
    name: 'Fitbit: Seasonal',
    slug: 'fitbit_seasonal',
    color: bannerColor,
    src: './iframes/fitbit_seasonal',
  },
  {
    type: banner,
    name: 'Fitbit: Sense',
    slug: 'fitbit_sense',
    color: bannerColor,
    src: './iframes/fitbit_sense',
  },
  {
    type: banner,
    name: 'Fitbit: Back to School',
    slug: 'fitbit_backtoschool',
    color: bannerColor,
    src: './iframes/fitbit_backtoschool',
  },
  {
    type: banner,
    name: 'Oracle',
    slug: 'oracle',
    color: bannerColor,
    src: './iframes/oracle',
  },
  {
    type: banner,
    name: 'Facebook',
    slug: 'facebook',
    color: bannerColor,
    src: './iframes/facebook',
  },
  {
    type: banner,
    name: 'Fifa: Champion Rise',
    slug: 'fifa',
    color: bannerColor,
    src: './iframes/fifa',
  },
  {
    type: banner,
    name: 'EE',
    slug: 'ee',
    color: bannerColor,
    src: './iframes/ee',
  },
  {
    type: banner,
    name: 'BT Business',
    slug: 'btb',
    color: bannerColor,
    src: './iframes/btb',
  },
  {
    type: banner,
    name: 'Sky Box Sets',
    slug: 'sky',
    color: bannerColor,
    src: './iframes/sky',
  },
  {
    type: banner,
    name: 'British Gas',
    slug: 'british_gas',
    src: './iframes/british_gas',
    color: bannerColor,
    size: { width: 960, height: 378 },
  },
];

const billboardProjects = [
  {
    type: billboard,
    name: 'Metaverse 3',
    slug: 'Meta3',
    color: billboardColor,
    src: './iframes/Meta1',
  },
  {
    type: billboard,
    name: 'Metaverse 4',
    slug: 'Meta4',
    color: billboardColor,
    src: './iframes/Meta2',
  },
  {
    type: billboard,
    name: 'Meta: Europe',
    slug: 'meta_eu',
    color: billboardColor,
    src: './iframes/meta_eu',
  },
];

/*{
    type: pencilDrawing,
    name: "Adrian the Bodybuilder",
    slug: "adrian",
    color: pencilDrawingColor,
    src: "./assets/drawings/adrian.jpg",
    size: { width: 750, height: 500 },
    text: "I don’t only programme, I draw too! Meet my ex-colleague Adrian, a talented filmmaker and hairy bodybuilder. This is for his leaving card. It was drawn with two types of pencils, a 4B to achieve the extra dark areas and a mechanical pencil for the extra fine details.",
  },
  {
    type: pencilDrawing,
    name: "Ronan the Groom",
    slug: "ronan",
    color: pencilDrawingColor,
    src: "./assets/drawings/ronan.jpg",
    size: { width: 750, height: 500 },
    text: "My good friend Ronan is going to tie the knot. This portrait is the gift of his big day. He is an Irishman so he is supposed to be wearing an Irish kilt. However, I ran out of time before the wedding so I have only managed his face and shoulder.",
  },
  {
    type: installation,
    name: 'A Touch of Me',
    slug: 'a_touch_of_me',
    color: installationColor,
    src: 'https://player.vimeo.com/video/62381952?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    size: { width: 640, height: 360 },
    text: 'This is a competition to design the bottle for L’Artisan Parfumeur’s new emotion-themed perfume. My solution to the brief is inspired by the sense of touch. It makes use of a simple but rather unexplored technology. An integrated circuit is built in in the bottle with touch sensitive ink extension to the surface of the bottle. Touching the ink will make the perfume name glow in the dark. This project has won a Notable in the Core77 Design Awards, Korea.',
  },
  {
    type: installation,
    name: 'Heartbeat in a Bottle',
    slug: 'heartbeat_in_a_bottle',
    color: installationColor,
    src: 'https://player.vimeo.com/video/57176402?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    size: { width: 656, height: 360 },
    text: 'This is another solution to L’Artisan Parfumeur’s competition to design the bottle for their new emotion-themed perfume. The graphics projected onto the bottle is a representation of my real time emotion. A pulse sensor is connected to an Arduino and an Max MSP uses the data to generate the graphics.',
  },
  {
    type: banner,
    name: 'Philadelphia',
    slug: 'philadelphia',
    color: bannerColor,
    src: './iframes/philadelphia',
  },*/

export { webProjects, bannerProjects, billboardProjects };
