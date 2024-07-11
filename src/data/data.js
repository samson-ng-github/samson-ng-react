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
    type: 'React Native, React Three Fiber',
    name: 'Ready Salted',
    slug: 'ready_salted',
    color: webColor,
  },
  {
    type: 'React',
    name: 'Van Gogh Printshop',
    slug: 'van_gogh_printshop',
    color: webColor,
  },
  {
    type: 'React, Express, PSQL',
    name: 'NC News',
    slug: 'nc_news',
    color: webColor,
  },
  {
    type: 'React',
    name: 'Credit Card Validator',
    slug: 'credit_card_validator',
    color: webColor,
    src: './iframes/credit_card_validator',
    size: { width: 700, height: 600 },
    text: 'Please do not enter real credit card details.\n\nThis is a practice project to build a credit card form using React. After entering the details, the credit card number will be checked if it is valid using the Luhn Algoritm. That is to say if you add up all the even digits times two plus all the odd digits together and the answer is a multiple of 10. This is provisionally a valid credit card number.\n\nApart from this other details will also be checked. The card holder\'s name can only accept alphabets, spaces and hyphens. The CVV can only accept three numbers. Upon clicking "Submit", there will be a message on top to tell you if the valiation has been successful. You will also know which field has been successful by its color code and icon. Once valiation has passed, the card details will be saved and displayed below the form. You can keep adding new keeps and delete old cards.',
  },
  {
    type: 'Three.js',
    name: 'Spotlight Casino 3D',
    slug: 'spotlight_casino_3d',
    color: webColor,
    src: './iframes/spotlight_casino_3d',
    size: { width: 1000, height: 800 },
    text: "This Three.js project is commissioned by Spotlight Casino as part of their website which tells the story of Keith Taft, a professional con artist and the four wearable gadgets he invented to cheat in casinos in the 1980's. Each gadget rotates in 3D and can be spun by dragging the mouse. Click on the hotspots to know more about each gadgets.",
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
  {
    type: 'UI Programming',
    name: 'Evil Genius',
    slug: 'evil-genius',
    color: webColor,
    src: './iframes/evil-genius',
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
    slug: 'meta3',
    color: billboardColor,
    src: './iframes/meta3',
  },
  {
    type: billboard,
    name: 'Metaverse 4',
    slug: 'meta4',
    color: billboardColor,
    src: './iframes/meta2',
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
