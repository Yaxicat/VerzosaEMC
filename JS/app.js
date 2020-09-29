let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera 
(50,
window.innerWidth / window.innerHeight,
0.1,
1000);

//front



//camera.position.x = -40.00;
//camera.position.y = 10;
//camera.position.z = -0.100;
//camera.rotation.y = -89.6;

//side


camera.position.x = -20.00;
camera.position.y = 10;
camera.position.z = -25;
camera.rotation.y = -90.6;

///


let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor( 0xF9B699, 0.90);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);


//base

let HousebaseGeometry = new THREE.BoxGeometry(18, 16, 10, 30);
let HousebaseMaterial = new THREE.MeshStandardMaterial({color: 0xC9B6B2});
let Housebase = new THREE.Mesh( HousebaseGeometry, HousebaseMaterial);
Housebase.position.x = 10;
Housebase.position.y = 8;
Housebase.position.z = 2.408;
scene.add(Housebase);

let floorGeometry = new THREE.BoxGeometry(30, 2, 10.5, 30);
let floorMaterial = new THREE.MeshStandardMaterial({color: 0xF0F0F0});
let floor = new THREE.Mesh( floorGeometry, floorMaterial);
floor.position.x = 6;
floor.position.y = 1;
floor.position.z = 2.408;
//floor.rotation.y = 4.55;
scene.add(floor);

//stairs

let foot1Geometry = new THREE.BoxGeometry(30, 1, 5, 1);
let foot1Material = new THREE.MeshStandardMaterial({color: 0xF0F0F0});
let foot1 = new THREE.Mesh( foot1Geometry, foot1Material);
foot1.position.x = 5;
foot1.position.y = 1;
foot1.position.z = 1;
//floor.rotation.y = 4.55;
scene.add(foot1);

let foot2Geometry = new THREE.BoxGeometry(30, 1, 5, 1);
let foot2Material = new THREE.MeshStandardMaterial({color: 0xF0F0F0});
let foot2 = new THREE.Mesh( foot2Geometry, foot2Material);
foot2.position.x = 4;
foot2.position.y = 0;
foot2.position.z = 1;
//floor.rotation.y = 4.55;
scene.add(foot2);

//roof

let roofGeometry = new THREE.BoxGeometry(22, 13, 1, 5);
let roofMaterial = new THREE.MeshStandardMaterial({color: 0x883A2A});
let roof = new THREE.Mesh( roofGeometry, roofMaterial);
roof.position.x = 10;
roof.position.y = 18;
roof.position.z = -1;
roof.rotation.x = 10;
scene.add(roof);

let roofoGeometry = new THREE.BoxGeometry(22, 13, 1, 5);
let roofoMaterial = new THREE.MeshStandardMaterial({color: 0x883A2A});
let roofo = new THREE.Mesh( roofoGeometry, roofoMaterial);
roofo.position.x = 10;
roofo.position.y = 18;
roofo.position.z = 6;
roofo.rotation.x = -10;
scene.add(roofo);

//under roof

let wall1Geometry = new THREE.BoxGeometry(1, 8, 4);
let wall1Material = new THREE.MeshPhongMaterial({color: 0xC9B6B2});
let wall1 = new THREE.Mesh(wall1Geometry, wall1Material);
//back and forth 1 closer, 10 farther
wall1.position.x = 1.55;
//up down, 1 down, 10 up
wall1.position.y = 18.40;
//1 left, 10 right
wall1.position.z = 1.5;
wall1.rotation.y = 25.10;
wall1.rotation.x = 10;
scene.add(wall1);

let wall2Geometry = new THREE.BoxGeometry(1, 7, 4);
let wall2Material = new THREE.MeshPhongMaterial({color: 0xC9B6B2});
let wall2 = new THREE.Mesh(wall2Geometry, wall2Material);
//back and forth 1 closer, 10 farther
wall2.position.x = 1.55;
//up down, 1 down, 10 up
wall2.position.y = 18.10;
//1 left, 10 right
wall2.position.z = 3.35;
wall2.rotation.x = -10;
scene.add(wall2);

//DOOR

let doorGeometry = new THREE.BoxGeometry(8, 9, 5, 10);
let doorMaterial = new THREE.MeshStandardMaterial({color: 0x883A2A});
let door = new THREE.Mesh( doorGeometry, doorMaterial);
door.position.x = 4.80;
door.position.y = 6;
door.position.z = 2.408;
//floor.rotation.y = 4.55;
scene.add(door);

//knob

let cyGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.6, 30);
let cyMaterial = new THREE.MeshStandardMaterial({color: 0xF1BC76});
let cy = new THREE.Mesh( cyGeometry, cyMaterial);
cy.position.x = 0.70;
cy.position.y = 5.90;
cy.position.z = 4;
cy.rotation.z = 14.1;
scene.add(cy);

let knobGeometry = new THREE.CylinderGeometry(0.2, 0.3, 0.4, 30);
let knobMaterial = new THREE.MeshStandardMaterial({color: 0xF1BC76});
let knob = new THREE.Mesh( knobGeometry, knobMaterial);
knob.position.x = 0.30;
knob.position.y = 5.90;
knob.position.z = 4;
knob.rotation.z = -14.1;
scene.add(knob);



//USE FOR NOTES






// SPOTLIGHT //
let spotLight = new THREE.SpotLight( 0xC48A25 );
spotLight.angle = 0.674;
spotLight.position.x = 3;
spotLight.position.y = 50;
spotLight.position.z = -1.337;
spotLight.castShadow = true;
scene.add(spotLight);

// POINTLIGHT //
let pointLight = new THREE.PointLight( 0xC48A25, 11.20, 1 ); 
pointLight.distance = 0.65;
pointLight.position.x = 0.08;
pointLight.position.y = 4.46;
pointLight.position.z = -1;
pointLight.castShadow = true;
scene.add(pointLight);

// AMBIANCE //
let ambience = new THREE.AmbientLight(0xF4A59B, 0.90);
ambience.position.set(-0.300, 10.041, 0);
scene.add(ambience);

let helper = new THREE.CameraHelper( spotLight.shadow.camera );
scene.add(helper);
renderer.render(scene, camera);

