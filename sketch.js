//Angle for rotation
let angle =0;
//Size of cubes
let w = 24;
//Magic Angle
let ma;

let maxD;

function setup() {
	
	createCanvas(400,400,WEBGL);
	//Magic angle
	ma=atan(1/sqrt(2));
	//honestly not sure
	maxD=dist(0,0,200,200);
}

function draw() {
	background(100);
	//Set Perspective
	ortho(-400,400,400,-400,0,750);
	//Implement Magic Angle
	rotateX(-ma);
	//Rotate to see multiple faces
	rotateY(QUARTER_PI);


	for (let z = 0; z<height;z+=w){
		for (let x =0; x< width; x+=w){
			push();
			//honestly not sure
			let d = dist(x,z,width/2,height/2);
			let offset=map(d,0,maxD,-PI,PI);
			//Implement spinning
			let a = angle+offset;
			//Cause the height of the boxes to fluctuate based on the sin function in a range between 50-300
			let h =floor(map(sin(a),-1,1,50,300));
			//Shift and Draw
			translate(x-width/2,0,z-height/2);
			normalMaterial();
			box(w-2,h,w-2);
			pop();
		}
	}
	//Increment angle for rotation
	angle -=0.075;
}
