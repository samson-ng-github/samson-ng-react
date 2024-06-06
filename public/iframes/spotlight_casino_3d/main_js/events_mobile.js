
var onDocumentTouchDown = function(event) {

	if ( event.touches.length == 1 ) {
		

		event.preventDefault();
		mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
		targetRotationOnMouseDown = targetRotation;
		
		
		
		var vector = new THREE.Vector3( ( event.pageX / window.innerWidth ) * 2 - 1, - ( event.pageY / window.innerHeight ) * 2 + 1, 0.5 );
		projector.unprojectVector( vector, camera );
		var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
		var intersects = raycaster.intersectObjects( group.children );
	
	
		if ( intersects.length > 0 && INTERSECTED != intersects[ 0 ].object && current_hotspot_index != intersects[ 0 ].object.index) {

				show_panel( intersects[ 0 ].object );

		} else if (clickable) {
			
			INTERSECTED = null;
			hide_tags();
			
		} else if (!clickable) {
		
			INTERSECTED = null;
			clickable_later = true;
		
		}

	}

};

function onDocumentTouchMove( event ) {

	if ( event.touches.length == 1 ) {

		event.preventDefault();
		mouseX = event.touches[ 0 ].pageX - windowHalfX;
		targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;
		

	}

}

function hide_tags() {
	
	//document.getElementById('panel').classList.toggle('appear', false);
	keep_moving = true;
	
		
	new TWEEN.Tween( hotspots[current_hotspot_index].material )
		.to( { rotation : 0}, 500 )
		.easing( TWEEN.Easing.Quartic.Out )
		.start();
		
	current_hotspot_index = -1;
	
}


function show_panel( object ) {

	TWEEN.removeAll();
	
	camera_angle %= (2*Math.PI);
	group.rotation.y %= (2*Math.PI);

	new TWEEN.Tween( group.rotation )
		.to( { y: object.angle * Math.PI / 180 - camera_angle + Math.PI / 8}, 2000 )
		.easing( TWEEN.Easing.Elastic.Out )
		.onStart(function() {
			clickable = false;
			camera_tracks = false;
			})
		.onComplete(function() {
			clickable = true;
			targetRotation = group.rotation.y;
			if (clickable_later) {
				hide_tags();
				clickable_later = false;
				}
			})
		.start();

	for (var i = 0; i < tags.length; i ++) {
		tags[i].element.style.opacity = 0;
		hotspots[i].material.rotation = 0;
	}
	
	new TWEEN.Tween( tags[object.index].element.style )
		.to( { opacity : 1 }, 2000 )
		.easing( TWEEN.Easing.Elastic.Out )
		.start();
	
	new TWEEN.Tween( hotspots[object.index].material )
		.to( { rotation : Math.PI * 1.75}, 2000 )
		.easing( TWEEN.Easing.Elastic.Out )
		.start();
	
	//document.getElementById('panel').classList.toggle('appear', true);
	//document.getElementById('name').textContent = tags[object.index].element.getElementsByClassName("name")[0].textContent;
	//document.getElementById('description').textContent = tags[object.index].element.getElementsByClassName("description")[0].textContent;
	
	current_hotspot_index = object.index;
	keep_moving = false;
	

}