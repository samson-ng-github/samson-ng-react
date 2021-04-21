var canvas; //Will be linked to the canvas in our index.html page
var stage; //Is the equivalent of stage in AS3 and we'll add 'children' to it

var bg; //The background graphic
var correct_panel; //The winning popup
var correct_msg1;
var correct_msg2;
var correct_container;
var wrong; //The losing popup


//preloader
var preloader;
var totalLoaded = 0;

var answer_panel_width;
var answer_panel_height;
var answer;
var correct_answers = [];
var correct_answer_found = false;

var clue_list = [];
var current_clue;
var click_enabled = true;

var score = 0; //The main player score
var display_score;
var already_win = false;

function Main()
{
	/* Link Canvas */
	
	canvas = document.getElementById('PongStage');
  	stage = new Stage(canvas);
  		
  	stage.mouseEventsEnabled = true;
  	
  	





  	preloader = new PreloadJS();
    preloader.onProgress = handleProgress;
    preloader.onComplete = handleComplete;
    preloader.onFileLoad = handleFileLoad;
    preloader.loadManifest(manifest);

	/* Ticker */
	
	Ticker.setFPS(30);
	Ticker.addListener(stage);
}

function handleProgress(event)
{
	//use event.loaded to get the percentage of the loading
}

function handleComplete(event) {
         
}

function handleFileLoad(event) {

            
switch(event.type)
{
	case PreloadJS.IMAGE:
	//image loaded
	var img = new Image();
    img.src = event.src;
    img.onload = handleLoadComplete;
    window[event.id] = new Bitmap(img);
	window[event.id].x = event.data.x;
	window[event.id].y = event.data.y;
	window[event.id].width = event.result.width;
	window[event.id].height = event.result.height;
	window[event.id].name = event.id;
	if (event.data.answers) {
		window[event.id].answers = event.data.answers;
		clue_list.push(window[event.id]);
	}
	break;

	case PreloadJS.SOUND:
	//sound loaded
	handleLoadComplete();
	break;
	}
}

 function handleLoadComplete(event) 
 {

	totalLoaded++;
	
	if(manifest.length==totalLoaded)
	{
		setupStage();
	}
 }


// Add Title View Function

function setupStage()
{
	stage.addChild(bg);
	
	for (i = 0; i < clue_list.length; i++) { 
		stage.addChild(clue_list[i]);
		if (clue_list[i].answers) clue_list[i].onPress = showForm;
	}
	
	stage.addChild(tally, wrong);
	
	display_score = new Text(score + " / " + clue_list.length, '18px AvenirBlack', '#ffffff');
	display_score.textAlign = "center";
	display_score.x = 894;
	display_score.y = 39;
	stage.addChild(display_score);
	
    correct_container = new Container();
    correct_container.x = 248;
	correct_container.y = 179 - 640;
    correct_container.addChild(correct_panel);
	
	correct_msg1 = new Text("", '26px AvenirBlack', '#ffffff');
	correct_msg1.textAlign = "center";
	correct_msg1.x = 230;
	correct_msg1.y = 122;
	correct_container.addChild(correct_msg1);
	
	correct_msg2 = new Text("", '15px AvenirBlack', '#ffffff');
	correct_msg2.textAlign = "center";
	correct_msg2.x = 230;
	correct_msg2.y = 238;
	correct_container.addChild(correct_msg2);
	
	stage.addChild(correct_container);
	
	stage.update();
	
    find_answer_panel_size();

}

function showForm(e)
{
	if (click_enabled) {
		
		correct_answer_found = false;
		
		var pos_x = e.target.x + e.target.width/2 - answer_panel_width/2;
		var pos_y = e.target.y + e.target.height/2 - answer_panel_height/2;
		
		if (pos_x < 20) pos_x = 20;
		else if (pos_x > 794) pos_x = 794;
		
		if (pos_y < 20) pos_y = 20;
		else if (pos_y > 524) pos_y = 524;
		
		document.getElementById('answer_panel').style.left = pos_x.toString() + 'px';
		document.getElementById('answer_panel').style.top = pos_y.toString() + 'px';
		document.getElementById('answer_panel').style.visibility = 'visible';
		
		document.getElementById('input').value = "";
		document.getElementById('answer_panel').style.backgroundImage = "url('../assets/textfield_bg.png')";
		
		correct_answers = e.target.answers;
		current_clue = window[e.target.name];
		//console.log(e);
	}
}


function hideForm()
{
	
	answer = document.getElementById('input').value.toLowerCase();
	
	for (var i = 0; i < correct_answers.length; i++) {
		
		console.log(answer + " " + correct_answers[i]);
		if (answer.replace(/\s/g,'') === correct_answers[i].replace(/\s/g,'')) {
			correct_answer_found = true;
			congrats();
			break;
		}
		
	}
	
	if (!correct_answer_found) document.getElementById('answer_panel').style.backgroundImage = "url('../assets/incorrect_bg.png')";
	//popup('wrong');
	
}

function congrats()
{
	click_enabled = false;
	close_panel();
	
	
	
	correct_msg1.text = "\'" + answer.toUpperCase() + "\' IS";
	if ((clue_list.length - score - 1) === 0) already_win = true;
	
	if (already_win) correct_msg2.text = "YOU WIN!";
	else if ((clue_list.length - score - 1) === 1) correct_msg2.text = "1 MORE CLUE TO FIND";
	else correct_msg2.text = (clue_list.length - score - 1) + " MORE CLUES TO FIND";
	
	if (!already_win) Tween.get(correct_container)
		 .to({y: 179}, 500)
	     .wait(3000)
		 .to({y: 179 + 640}, 500)
		 .to({y: 179 - 640})
	     .call(function(){
			click_enabled = true;
		    score ++;
		    display_score.text = score + " / " + clue_list.length;
		    current_clue.mouseEnabled = false;
			//Tween.get(current_clue).to({alpha:0}, 2000);
		  })
	     ;
	else Tween.get(correct_container)
		 .to({y: 179}, 500)
	     .call(function(){
			click_enabled = true;
		    score ++;
		    display_score.text = score + " / " + clue_list.length;
		    current_clue.mouseEnabled = false;
			//Tween.get(current_clue).to({alpha:0}, 2000);
		  })
	     ;
	
}

function submit_answer(e){
    if(e.keyCode === 13)hideForm();
}

function close_panel() {
	document.getElementById('answer_panel').style.visibility = 'hidden';
	document.getElementById('input').value = "";
	document.getElementById('answer_panel').style.backgroundImage = "url('../assets/textfield_bg.png')";
}

function find_answer_panel_size() {
	answer_panel_width = document.getElementById('answer_panel').offsetWidth;
    answer_panel_height = document.getElementById('answer_panel').offsetHeight;
}