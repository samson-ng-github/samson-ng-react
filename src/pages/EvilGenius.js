export default function EvilGenius() {
  return (
    <div className="page">
      <header>Evil Genius</header>
      <div className="main">
        <div className="screenshot">
          <img src="./assets/screenshots/evil-genius-1.jpg" alt="Samson Ng" />
          <img src="./assets/screenshots/evil-genius-2.jpg" alt="Samson Ng" />
          <img src="./assets/screenshots/evil-genius-3.jpg" alt="Samson Ng" />
          <img src="./assets/screenshots/evil-genius-4.jpg" alt="Samson Ng" />
        </div>
        <div className="mpu-text-block">
          <p>
            This was a four month project I did for Rebellion, a major game
            studios in the UK. I was responsible for coding the user interface
            as well as a number of new features in ActionScript for Evil Genius,
            an online game playable on Facebook. These are some of the main
            features I implemented.
          </p>
          <p>
            1. Marketplace: This is the place where the you can purchase items
            and put in your lair. You can search items by name or filter them by
            category.
          </p>
          <p>
            2. Blueprint of Evil: This is special series of 30 missions which
            renews every month. The user needs to complete one mission each day
            religiously for 30 days to earn the rewards.
          </p>
          <p>
            3. Board of Notoriety: Each week on Sunday if you have the highest
            score amongst your friends, you win the Board of Notoriety. You will
            be rewarded something special not found anywhere else.
          </p>
        </div>
      </div>
    </div>
  );
}
