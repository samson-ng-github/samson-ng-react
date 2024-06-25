/* Grab the Canvas and Drawing Context
var canvas = document.getElementById('c');
var ctx = canvas.getContext('2d');
var img = document.createElement('IMG');
img.src = "assets/textures/scale.png";
var angle = -Math.PI;
var alpha = 1;*/

var camera, cameraOrtho, scene, projector, renderer, render2;

var scale, dial, real_progress, real_progress2;

var group, tags, hotspots, george;

var current_hotspot_index = undefined;

var status,
  button_status = 'coin';

var targetRotation, targetRotationOnMouseDown, mouseX, mouseXOnMouseDown;

var INTERSECTED;

var windowHalfX = window.innerWidth / 2,
  windowHalfY = window.innerHeight / 2;

var clickable, clickable_later, keep_moving, camera_tracks;

var then, now, delta;

var camera_angle, camera_distance, camera_speed;

load_data(button_status);

function init_buttons() {
  if (is_mobile == false)
    for (var i = 0; i < document.getElementsByTagName('BUTTON').length; i++) {
      var button = document.getElementsByTagName('BUTTON')[i];

      button.addEventListener(
        'click',
        function (event) {
          if (button_status != this.id) {
            clear_data();
            load_data(this.id);
            button_status = this.id;
          }
        },
        false
      );
    }
  else
    for (var i = 0; i < document.getElementsByTagName('BUTTON').length; i++) {
      var button = document.getElementsByTagName('BUTTON')[i];

      button.addEventListener(
        'touchstart',
        function (event) {
          if (button_status != this.id) {
            clear_data();
            load_data(this.id);
            button_status = this.id;
          }
        },
        false
      );
    }
}

function load_data(button_status) {
  var model_texture_path,
    model_path,
    model_rotat_adjust,
    model_trans_adjust,
    model_scale,
    model_rotation_speed;
  var bg_text_path, bg_text_path_w, bg_text_path_h, bg_color;
  var hotspot_path, hotspot_text, hotspot_position;

  hotspot_position = [
    new THREE.Vector3(0.123, -0.028, -0.005),
    new THREE.Vector3(0.135, 0.102, -0.053),
    new THREE.Vector3(-0.03, 0.063, -0.428),
    new THREE.Vector3(-0.108, 0.08, -0.021),
    new THREE.Vector3(-0.36, -0.117, 0.483),
  ];

  /*if (button_status == "shoe") {
		
		model_texture_path = "assets/obj/shoe/shoeVRayCompleteMap0000.jpg";
		model_path = "assets/obj/shoe/shoe.obj";
		model_rotat_adjust = new THREE.Vector3 (-Math.PI*0.5, 0 ,0);
		model_trans_adjust = new THREE.Vector3 (-27, -38, -32);
		model_scale = 5;
		model_rotation_speed = 0.0005;
	
		hotspot_path = "assets/textures/sprite_green.png";
		hotspot_text = [
			"Sole", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.",
			"Heel", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.",
			"Tongue", "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa.",
			"Collar", "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects."
		];
			
		hotspot_position = [
			new THREE.Vector3 (-0.371,  0.169,  0.348),
			new THREE.Vector3 ( 0.086, -0.129, -0.153),
			new THREE.Vector3 ( 0.314, -0.124,  0.278),
			new THREE.Vector3 ( 0.388,  0.154,  0.039),
			new THREE.Vector3 ( 0.315,  0.168,  0.480)
		];	
		
	}*/

  if (button_status == 'glasses') {
    model_texture_path = 'assets/obj/glasses/glassesUVW.jpg';
    model_path = 'assets/obj/glasses/glasses.obj';
    model_rotat_adjust = new THREE.Vector3(-Math.PI * 0.5, 0, 0);
    model_trans_adjust = new THREE.Vector3(0, 0, 0);
    model_scale = 1.75;
    model_rotation_speed = 0.0005 * 0.7;

    hotspot_path = 'assets/textures/sprite_green.png';
    hotspot_text = [
      'Featured 2,000 hand-soldered joints, had 1,000 bytes (1kb) of memory and 16-bit processing power.',
      'Was 10 times faster than standard microcomputers on the market at that time, performing 200,000 calculations per second.',
      "8-hour sessions would require around 10,000 toe movements, which would often lead to painful calluses on Keith's toes.",
      'Card counting at the time wasn’t officially illegal, nor were computers.',
      'After his initial winning streak, Keith lost the lot, plus another couple of thousand dollars for good measure.',
    ];

    bg_text_path = 'assets/textures/george.png';
    bg_text_path_w = 700;
    bg_text_path_h = 255;
    bg_color = 0xff8b6c;
  }
  if (button_status == 'coin') {
    model_texture_path = 'assets/obj/coin/coinVRayCompleteMap.jpg';
    model_path = 'assets/obj/coin/coin.obj';
    model_rotat_adjust = new THREE.Vector3(Math.PI * 0.4, 0, Math.PI * 0.5);
    model_trans_adjust = new THREE.Vector3(12.5, 95, -31);
    model_scale = 3.5;
    model_rotation_speed = 0.0005 * 0.7;

    hotspot_path = 'assets/textures/sprite_yellow.png';
    hotspot_text = [
      'The players had to shuffle into the Casino already wired together in small groups of 2 and 3, the hair thin wires frequently broke before they reached the table.',
      'Once the wires were all in place, no-one at the table could leave to eat or go to the bathroom.',
      'The team spent up to 8 hours at the Blackjack table, and one occasion one of them turned white and slide down his chair, exhausted.',
      'To avoid suspicion, the 7 men pretended to be old school friends.',
      'Bets had to be kept small to avoid suspicion.',
    ];

    bg_text_path = 'assets/textures/seven_up.png';
    bg_text_path_w = 550;
    bg_text_path_h = 407;
    bg_color = 0x1b262b;
  }
  if (button_status == 'platform') {
    model_texture_path = 'assets/obj/platform/platformVRayCompleteMap.jpg';
    model_path = 'assets/obj/platform/platform.obj';
    model_rotat_adjust = new THREE.Vector3(-Math.PI * 0.5, 0, 0);
    model_trans_adjust = new THREE.Vector3(-7.5, -50, -10);
    model_scale = 4.6;
    model_rotation_speed = 0.0005 * 0.7;

    hotspot_path = 'assets/textures/sprite_green.png';
    hotspot_text = [
      'The shoes were custom made by a cobbler in San Francisco, they cost $1,200 per pair.',
      'The shoes plugged into the wall to recharge, just like your smart phone.',
      'The foot tapper communicated over thirty primitive commands that the card players had to learn by heart.',
      'Keith was concerned that anyone with access to the computers could steal their designs, so all the computer boards were sealed in epoxy to discourage their reverse engineering.',
      'Spooked by several close shaves, Keith developed a one-man iteration of the shoes that housed everything including David, and used infra red rather than wires (The new shoes were so complex and fragile that they failed to ever work reliably).',
    ];

    bg_text_path = 'assets/textures/magic_shoes.png';
    bg_text_path_w = 550;
    bg_text_path_h = 417;
    bg_color = 0x1f2a3a;
  }
  if (button_status == 'buckle') {
    model_texture_path = 'assets/obj/buckle/buckleUVW.jpg';
    model_path = 'assets/obj/buckle/buckle.obj';
    model_rotat_adjust = new THREE.Vector3(0, Math.PI * 0.5, 0);
    model_trans_adjust = new THREE.Vector3(0, 0, 0);
    model_scale = 45;
    model_rotation_speed = 0.00035;

    hotspot_path = 'assets/textures/sprite_fresh.png';
    hotspot_text = [
      'Keith had to hitch his Levis up so that belt buckle was level with the table.',
      'Keith and his son Marty expanded the memory of their basic micro computer by 20 times to store the amount of data contained in a picture.',
      'A second iteration of the Belt-Buckle camera used the latest Sony CCD imaging chip which was 15 times more sensitive and could better handle the low light of smoky Casinos.',
    ];

    bg_text_path = 'assets/textures/belly_telly.png';
    bg_text_path_w = 450;
    bg_text_path_h = 431;
    bg_color = 0x96ac6f;

    hotspot_position = [
      new THREE.Vector3(0.123, -0.028, -0.005),
      //new THREE.Vector3 ( 0.135,  0.102, -0.053),
      new THREE.Vector3(-0.03, 0.063, -0.428),
      //new THREE.Vector3 (-0.108,  0.080, -0.021),
      new THREE.Vector3(-0.36, -0.117, 0.483),
    ];
  }

  init(
    model_texture_path,
    model_path,
    model_rotat_adjust,
    model_trans_adjust,
    model_scale,
    model_rotation_speed,
    hotspot_path,
    hotspot_text,
    hotspot_position,
    bg_text_path,
    bg_text_path_w,
    bg_text_path_h,
    bg_color
  );
  animate();
}

function clear_data() {
  var container = document.getElementById('container1');
  container.removeChild(container.firstChild);
  container = document.getElementById('container2');
  container.removeChild(container.firstChild);
  document.getElementById('container1');
}

function init(
  model_texture_path,
  model_path,
  model_rotat_adjust,
  model_trans_adjust,
  model_scale,
  model_rotation_speed,
  hotspot_path,
  hotspot_text,
  hotspot_position,
  bg_text_path,
  bg_text_path_w,
  bg_text_path_h,
  bg_color
) {
  init_buttons();

  // variables
  status = 'preloading_preloader';
  targetRotation = 0;
  targetRotationOnMouseDown = 0;
  mouseX = 0;
  mouseXOnMouseDown = 0;
  camera_tracks = true;
  clickable = true;
  clickable_later = false;
  keep_moving = true;
  tags = [];
  hotspots = [];
  camera_distance = 1500;
  camera_angle = 0;
  camera_speed = model_rotation_speed;
  num = 0;
  then = Date.now();
  current_hotspot_index = -1;

  // scene
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xdddddd, 1500, 3000);
  sceneOrtho = new THREE.Scene();
  projector = new THREE.Projector();

  // prelooader;
  preloader();

  //camera
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  //camera.position.y = 2000;
  cameraOrtho = new THREE.OrthographicCamera(
    -window.innerWidth / 2,
    window.innerWidth / 2,
    window.innerHeight / 2,
    -window.innerHeight / 2,
    1,
    10
  );
  cameraOrtho.position.z = 10;

  // lighting
  ambient = new THREE.AmbientLight(0xffffff);
  scene.add(ambient);
  directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(-300, 0, 0).normalize();
  //scene.add( directionalLight );

  // loading manager
  var manager = new THREE.LoadingManager();

  manager.onProgress = function (item, loaded, total) {
    //real_progress = (loaded/total);
    real_progress = Math.PI / 2 - (loaded / total) * Math.PI;
    real_progress2 = -Math.PI + (loaded / total) * Math.PI;
  };

  // hotspots
  group = new THREE.Object3D();
  scene.add(group);
  group.position.y = -3000;

  //george

  var george_map = new THREE.Texture();

  var loader = new THREE.ImageLoader(manager);
  loader.load(bg_text_path, function (image) {
    george_map.image = image;
    george_map.needsUpdate = true;
  });

  var material = new THREE.SpriteMaterial({ map: george_map });

  george = new THREE.Sprite(material);
  george.position.set(0, -3000, 500);
  george.scale.set(bg_text_path_w * 4, bg_text_path_h * 4, 1.0);
  scene.add(george);

  var sprite_map = new THREE.Texture();

  loader = new THREE.ImageLoader(manager);
  loader.load(hotspot_path, function (image) {
    sprite_map.image = image;
    sprite_map.needsUpdate = true;
  });

  for (var a = 0; a < hotspot_text.length; a++) {
    var material = new THREE.SpriteMaterial({
      map: sprite_map,
      color: 0xffffff,
      fog: true,
    });

    var x = Math.random() - 0.5;
    var y = Math.random() * 0.25 - 0.125;
    var z = Math.random() - 0.5;

    var sprite = new THREE.Sprite(material);
    sprite.position.set(
      hotspot_position[a].x,
      hotspot_position[a].y,
      hotspot_position[a].z
    );
    //sprite.position.set( x, y, z );

    sprite.position.normalize();
    sprite.position.multiplyScalar(550);
    sprite.scale.set(15 * 5.5, 15 * 5.5, 1.0);
    sprite.index = a;
    sprite.angle =
      (Math.atan2(sprite.position.z, sprite.position.x) * 180) / Math.PI;

    group.add(sprite);
    hotspots.push(sprite);

    var box = document.createElement('div');
    box.className = 'box';
    box.style.opacity = 0;

    /*var name = document.createElement( 'div' );
		name.className = 'name';
		name.textContent = hotspot_text[ (a*2) ];
		box.appendChild( name );*/

    var description = document.createElement('div');
    description.className = 'description';
    description.textContent = hotspot_text[a];
    box.appendChild(description);

    var number = document.createElement('div');
    number.className = 'number';
    number.textContent = '0' + (a + 1);
    box.appendChild(number);

    var dash = document.createElement('div');
    dash.className = 'dash';
    //dash.style.backgroundColor = "black";
    //dash.style.backgroundImage = "url(assets/textures/dash_fresh.png)";
    description.appendChild(dash);

    var object = new THREE.CSS3DObject(box);
    object.position.set(
      sprite.position.x,
      sprite.position.y,
      sprite.position.z
    );

    group.add(object);
    tags.push(object);
  }

  // model texture
  var texture = new THREE.Texture();
  var loader = new THREE.ImageLoader(manager);
  loader.load(model_texture_path, function (image) {
    texture.image = image;
    texture.needsUpdate = true;
  });

  // model
  loader = new THREE.OBJLoader(manager);
  loader.load(model_path, function (object) {
    object.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        child.material.map = texture;
        child.material.side = THREE.DoubleSide;
      }
    });

    object.scale.set(model_scale, model_scale, model_scale);
    object.rotation.set(
      model_rotat_adjust.x,
      model_rotat_adjust.y,
      model_rotat_adjust.z
    );
    object.position.set(
      model_trans_adjust.x * model_scale,
      model_trans_adjust.y * model_scale,
      model_trans_adjust.z * model_scale
    );
    group.add(object);
  });

  // renderer

  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(bg_color);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  document.getElementById('container2').appendChild(renderer.domElement);

  renderer2 = new THREE.CSS3DRenderer();
  renderer2.setSize(window.innerWidth, window.innerHeight);
  renderer2.domElement.style.position = 'absolute';
  document.getElementById('container1').appendChild(renderer2.domElement);

  // events

  if (is_mobile == false) {
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousedown', onDocumentMouseDown, false);
  } else {
    document.addEventListener('touchstart', onDocumentTouchDown, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);
  }
}

function preloader() {
  THREE.ImageUtils.loadTexture(
    'assets/textures/scale.png',
    undefined,
    function (texture) {
      var material = new THREE.SpriteMaterial({ map: texture });
      var width = material.map.image.width;
      var height = material.map.image.height;
      scale = new THREE.Sprite(material);
      scale.scale.set(width, height, 1);
      sceneOrtho.add(scale);
      scale.position.set(0, 0, 1); // center
      if (status == 'dial_loaded') status = 'preloading_model';
      else status = 'scale_loaded';
    }
  );

  THREE.ImageUtils.loadTexture(
    'assets/textures/dial.png',
    undefined,
    function (texture) {
      var material = new THREE.SpriteMaterial({ map: texture });
      var width = material.map.image.width;
      var height = material.map.image.height;
      dial = new THREE.Sprite(material);
      dial.scale.set(width, height, 1);
      sceneOrtho.add(dial);
      dial.position.set(0, 0, 1); // center
      dial.material.rotation = Math.PI / 2;
      if (status == 'scale_loaded') status = 'preloading_model';
      else status = 'dial_loaded';
    }
  );
}

function render() {
  if (status == 'preloading_model') {
    dial.material.rotation += (real_progress - dial.material.rotation) * 0.1;
    //angle += (real_progress2 - angle) * 0.1;

    if (dial.material.rotation == real_progress && real_progress > -Math.PI / 2)
      dial.material.rotation -= 0.1;

    if (dial.material.rotation <= -Math.PI / 2 + 0.01) {
      status = 'model_emerges';
      dial.material.rotation = -Math.PI / 2;
      //angle = 0;
    }
    /*var angle2 = Math.floor(angle/(Math.PI/10))*(Math.PI/10);
		console.log(angle/Math.PI);
				
		ctx.save();
		ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );	
    	ctx.beginPath();
    	ctx.moveTo(200, 200);
    	ctx.arc(200, 200, 200, -Math.PI, angle2, false);
    	ctx.closePath();
    	ctx.clip();
		ctx.drawImage(img, 0, 0);
    	ctx.restore();*/
  }

  if (status == 'model_emerges') {
    dial.material.opacity -= 0.05;
    scale.material.opacity -= 0.05;

    /*ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );
    	ctx.globalAlpha = alpha;
    	ctx.drawImage(img, 0, 0);
    	alpha -= 0.05;
    	*/

    if (scale.material.opacity <= 0) {
      status = 'ready';
      sceneOrtho.remove(dial);
      sceneOrtho.remove(scale);

      /*ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );
    		ctx.globalAlpha = 0;
    		ctx.drawImage(img, 0, 0);*/

      new TWEEN.Tween(group.position)
        .to({ y: 0 }, 2500)
        .easing(TWEEN.Easing.Elastic.Out)
        .start();

      new TWEEN.Tween(george.position)
        .to({ y: 0 }, 2500)
        .easing(TWEEN.Easing.Elastic.Out)
        .start();
    }
  }

  now = Date.now();
  delta = (now - then) * camera_speed;
  then = now;

  if (camera_tracks) {
    camera.position.x = Math.cos(camera_angle) * camera_distance;
    //camera.position.y = Math.sin(camera_angle) * camera_distance;
    camera.position.z = Math.sin(camera_angle) * camera_distance;

    george.position.x = Math.cos(camera_angle + Math.PI) * camera_distance;
    george.position.z = Math.sin(camera_angle + Math.PI) * camera_distance;
    camera_angle += delta;

    for (var i = 0; i < tags.length; i++)
      if (tags[i].element.style.opacity > 0.05)
        tags[i].element.style.opacity -= 0.05;
      else if (tags[i].element.style.opacity <= 0.05)
        tags[i].element.style.opacity = 0;
  }

  if (clickable) {
    group.rotation.y += (targetRotation - group.rotation.y) * 0.05;
    if ((targetRotation - group.rotation.y) * 0.05 < 0.01 && keep_moving)
      camera_tracks = true;
  }

  for (var i = 0; i < tags.length; i++)
    tags[i].rotation.y = Math.PI / 2 - camera_angle - group.rotation.y;
  camera.lookAt(
    new THREE.Vector3(scene.position.x, camera.position.y, scene.position.z)
  );

  renderer.clear();
  renderer.render(scene, camera);
  renderer.clearDepth();
  renderer.render(sceneOrtho, cameraOrtho);
  renderer2.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
  render();
}
