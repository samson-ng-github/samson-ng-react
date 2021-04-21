var canvas; //Will be linked to the canvas in our index.html page
var stage; //Is the equivalent of stage in AS3 and we'll add 'children' to it
var is_mobile;

var bg; //The background graphic
var title;
var correct_panel; //The winning popup
var correct_msg1;
var correct_msg2;
var info_container;
var correct_container;

var original_width = 1366;
var original_height = 911;
var canvas_ratio = 1366 / 911;
var screen_ratio;
var canvas_scale = 1;

var preloader;
var totalLoaded = 0;
var loader_bg;

var answer_panel_width;
var answer_panel_height;
var answer;
var correct_answers = [];
var correct_answer_found = false;

var images = [];
var clue_list = [];
var current_clue;
var click_enabled = false;

var score = 0; //The main player score
var display_score;
var already_win = false;

var preload;

function Main() {
  testExp = new RegExp(
    "Android|webOS|iPhone|iPad|" +
      "BlackBerry|Windows Phone|" +
      "Opera Mini|IEMobile|Mobile",
    "i"
  );

  if (testExp.test(navigator.userAgent)) is_mobile = true;
  else is_mobile = false;

  //console.log("is_mobile " + is_mobile);

  stage = new createjs.Stage("stage");

  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);

  preload = new createjs.LoadQueue();
  preload.addEventListener("fileload", handleFileComplete);
  preload.loadManifest([
    {
      id: "loader_bg",
      src: "assets/interface/loader.png",
      data: { x: 525, y: 297 },
    },
  ]);

  //if (!is_mobile) window.addEventListener("resize", resize);
  //resize();
}

function handleFileComplete(event) {
  var image = new createjs.Bitmap(event.result);
  image.x = event.item.data.x;
  image.y = event.item.data.y;
  stage.addChild(image);
  stage.update();

  setup_loader();
  preload.removeEventListener("fileload", handleFileComplete);
  preload.addEventListener("fileload", handleFileLoad);
  createjs.Sound.alternateExtensions = ["mp3"];
  preload.installPlugin(createjs.Sound);
  preload.loadManifest(manifest);
}

function handleFileLoad(event) {
  images[event.item.id] = new createjs.Bitmap(event.result);
  images[event.item.id].x = event.item.x;
  images[event.item.id].y = event.item.y;
  images[event.item.id].width = event.result.width;
  images[event.item.id].height = event.result.height;
  images[event.item.id].name = event.item.id;

  if (event.item.answers) {
    images[event.item.id].answers = event.item.answers;
    clue_list.push(images[event.item.id]);
  }

  totalLoaded++;
  //console.log(totalLoaded);
}

// Add Title View Function

function setupStage() {
  stage.addChild(images["bg"]);

  for (i = 0; i < clue_list.length; i++) {
    stage.addChild(clue_list[i]);
    clue_list[i].addEventListener("click", showForm);
  }

  stage.addChild(images["foreground"]);
  stage.addChild(images["title"]);
  stage.addChild(images["tally"]);
  stage.addChild(images["info"]);

  display_score = new createjs.Text(
    score + " / " + clue_list.length,
    "24px AvenirBlack",
    "#ffffff"
  );
  display_score.textAlign = "center";
  display_score.x = 894 + 386 - 44;
  display_score.y = 39 - 18 + 2 + 6;
  stage.addChild(display_score);

  info_container = new createjs.Container();
  info_container.x = 353; // - 1366;
  info_container.y = 206 + 911;
  info_container.addChild(images["info_panel"]);
  info_container.addChild(images["info_ok"]);
  //info_container.alpha = 0;
  stage.addChild(info_container);

  images["info"].addEventListener("click", showInfo);
  images["info_ok"].addEventListener("click", hideInfo);

  correct_container = new createjs.Container();
  correct_container.x = 355;
  correct_container.y = 254 - 911;
  correct_container.addChild(images["correct_panel"]);

  correct_msg1 = new createjs.Text("", "38px AvenirBlack", "#ffffff");
  correct_msg1.textAlign = "center";
  correct_msg1.x = 328;
  correct_msg1.y = 122 - 26 + 42;
  correct_container.addChild(correct_msg1);

  correct_msg2 = new createjs.Text("", "22px AvenirBlack", "#ffffff");
  correct_msg2.textAlign = "center";
  correct_msg2.x = 328;
  correct_msg2.y = 238 - 15 + 94;
  correct_container.addChild(correct_msg2);

  stage.addChild(correct_container);

  stage.update();
  createjs.Sound.play("bg_music", { loop: -1 });
  createjs.Sound.play("swoosh_sound");

  find_answer_panel_size();

  createjs.Tween.get(images["title"])
    .to({ y: 71 }, 500)
    .wait(2000)
    .call(function () {
      createjs.Sound.play("swoosh");
      createjs.Tween.get(info_container).to({ y: 206 }, 500);
    });
}

function showForm(e) {
  if (click_enabled) {
    createjs.Sound.play("answer_panel");

    correct_answer_found = false;

    var pos_x =
      (e.target.x + e.target.width / 2) * canvas_scale - answer_panel_width / 2;
    var pos_y =
      (e.target.y + e.target.height / 2) * canvas_scale -
      answer_panel_height / 2;

    if (pos_x < 20) pos_x = 20;
    else if (pos_x > stage.canvas.width - 20 - answer_panel_width)
      pos_x = stage.canvas.width - 20 - answer_panel_width;

    if (pos_y < 20) pos_y = 20;
    else if (pos_y > stage.canvas.height - 20 - answer_panel_height)
      pos_y = stage.canvas.height - 20 - answer_panel_height;

    document.getElementById("answer_panel").style.left =
      pos_x.toString() + "px";
    document.getElementById("answer_panel").style.top = pos_y.toString() + "px";
    document.getElementById("answer_panel").style.visibility = "visible";

    document.getElementById("input").value = "";
    document.getElementById("answer_panel").style.backgroundImage =
      "url('assets/interface/textfield_bg.png')";

    correct_answers = e.target.answers;
    current_clue = images[e.target.name];
  }
}

function hideForm() {
  answer = document.getElementById("input").value.toLowerCase();

  for (var i = 0; i < correct_answers.length; i++) {
    //console.log(answer + " " + correct_answers[i]);
    if (answer.replace(/\s/g, "") === correct_answers[i].replace(/\s/g, "")) {
      correct_answer_found = true;
      congrats();
      break;
    }
  }

  if (!correct_answer_found) {
    createjs.Sound.play("wrong_sound");
    document.getElementById("answer_panel").style.backgroundImage =
      "url('assets/interface/incorrect_bg.png')";
  }
}

function showInfo() {
  if (click_enabled) {
    createjs.Sound.play("answer_panel");
    click_enabled = false;
    createjs.Tween.get(info_container).to({ y: 206 }, 500);
  }
}

function hideInfo() {
  createjs.Sound.play("answer_panel");
  click_enabled = true;
  createjs.Tween.get(info_container)
    .to({ y: 206 - 911 }, 500)
    .to({ y: 206 + 911 });
}

function congrats() {
  click_enabled = false;
  close_panel();

  correct_msg1.text = "'" + correct_answers[0].toUpperCase() + "' IS";
  //if ((clue_list.length - score - 1) === 0) already_win = true;
  if (clue_list.length - score - 1 === 0) {
    already_win = true;
    createjs.Sound.play("win_sound");
  } else createjs.Sound.play("correct_sound");

  if (already_win) correct_msg2.text = "YOU WIN!";
  else if (clue_list.length - score - 1 === 1)
    correct_msg2.text = "1 MORE CLUE TO FIND";
  else correct_msg2.text = clue_list.length - score - 1 + " MORE CLUES TO FIND";

  if (!already_win)
    createjs.Tween.get(correct_container)
      .to({ y: 254 }, 500)
      .wait(2000)
      .to({ y: 254 + 911 }, 500)
      .to({ y: 254 - 911 })
      .call(function () {
        click_enabled = true;
        score++;
        display_score.text = score + " / " + clue_list.length;
        current_clue.mouseEnabled = false;
        //Tween.get(current_clue).to({alpha:0}, 2000);
      });
  else
    createjs.Tween.get(correct_container)
      .to({ y: 254 }, 500)
      .call(function () {
        score++;
        display_score.text = score + " / " + clue_list.length;
        current_clue.mouseEnabled = false;
        //Tween.get(current_clue).to({alpha:0}, 2000);
      });
}

function submit_answer(e) {
  if (e.keyCode === 13) hideForm();
}

function close_panel() {
  document.getElementById("answer_panel").style.visibility = "hidden";
  document.getElementById("input").value = "";
  document.getElementById("answer_panel").style.backgroundImage =
    "url('assets/interface/textfield_bg.png')";
}

function find_answer_panel_size() {
  answer_panel_width = document.getElementById("answer_panel").offsetWidth;
  answer_panel_height = document.getElementById("answer_panel").offsetHeight;
}

function resize() {
  screen_ratio = window.innerWidth / window.innerHeight;

  /*if ((window.innerWidth >= stage.canvas.width) && (window.innerHeight >= stage.canvas.height)) {
	  stage.canvas.width = original_width;
  	  stage.canvas.height = original_height;
	  canvas_scale = 1;
	} else*/

  if (screen_ratio > canvas_ratio) {
    stage.canvas.height = window.innerHeight;
    stage.canvas.width =
      (stage.canvas.height * original_width) / original_height;
    canvas_scale = window.innerHeight / original_height;
  } else {
    stage.canvas.width = window.innerWidth;
    stage.canvas.height =
      (stage.canvas.width * original_height) / original_width;
    canvas_scale = window.innerWidth / original_width;
  }

  //console.log(canvas_scale);
  stage.scaleX = stage.scaleY = canvas_scale;
  //document.getElementById("container").style.width = stage.canvas.width + "px";
  //document.getElementById("container").style.height =
  stage.canvas.height + "px";
}
