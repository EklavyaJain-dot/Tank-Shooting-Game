
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
canvas = createCanvas(800,800);
engine = Engine.create();
world = engine.World;
ground = new Ground(200,height,400,20);
tanker = new Tanker(80,780,50,50);
canonball = new CanonBall();
shootball = new ShootBall();
}

function draw() {
    background(0);
    Engine.update(engine);
    ground.display();
    tanker.display();
    shootball.display();
    canonball.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}