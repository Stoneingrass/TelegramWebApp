//TODO сделать рефакторинг названий переменных в стиле JS

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x808080);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.outerWidth, window.outerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 20;

const light = new THREE.PointLight(0xffffff, 1, 0, 2);
light.position.set(0, 0, 20);
scene.add(light);


const framesPeriodMs = 1000 / 60;
const dices = ["dice4", "dice6", "dice8", "dice10", "dice11", "dice20", "dice100"]

const dice6values = [
    [0, 0, 0], //1
    [-90, 0, 0], //2
    [0, -90, 0], //3
    [180, -90, 0], //4
    [90, 0, 0], //5
    [0, 180, 180], //6
]


const loader = new THREE.GLTFLoader();

loader.load('assets/dice4.glb', function (gltf) {
    gltf.scene.name = "dice4";
    scene.add(gltf.scene);
    scene.getObjectByName("dice4").visible = false;
    scene.getObjectByName("dice4").scale.set(120, 120, 120)
});
loader.load('assets/dice6.glb', function (gltf) {
    gltf.scene.name = "dice6";
    scene.add(gltf.scene);
    scene.getObjectByName("dice6").visible = false;
    scene.getObjectByName("dice6").scale.set(100, 100, 100)
});
loader.load('assets/dice20.glb', function (gltf) {
    gltf.scene.name = "dice20";
    scene.add(gltf.scene);
    scene.getObjectByName("dice20").visible = false;
    scene.getObjectByName("dice20").scale.set(100, 100, 100)
});


window.onload = function () {

    document.body.addEventListener('click', () => {
        if (scene.getObjectByName("dice6").visible === true) {
            rollDice("dice6")
        } else {
            scene.getObjectByName("dice6").visible = true;
        }
    });

    //test
    document.body.addEventListener('keydown', (event) => {
        if (event.code === "KeyQ") {
            rotateDice("dice6",
                90, 0, 0,
                1000, 1000, 1000)
        }
        if (event.code === "KeyW") {
            rotateDice("dice6",
                0, 90, 0,
                1000, 1000, 1000)
        }
        if (event.code === "KeyE") {
            rotateDice("dice6",
                0, 0, 90,
                1000, 1000, 1000)
        }
        if (event.code === "KeyA") {
            rotateDice("dice6",
                -90, 0, 0,
                1000, 1000, 1000)
        }
        if (event.code === "KeyS") {
            rotateDice("dice6",
                0, -90, 0,
                1000, 1000, 1000)
        }
        if (event.code === "KeyD") {
            rotateDice("dice6",
                0, 0, -90,
                1000, 1000, 1000)
        }
        if (event.code === "Digit1") {
            setDiceValue("dice6", 1)
        }
        if (event.code === "Digit2") {
            setDiceValue("dice6", 2)
        }
        if (event.code === "Digit3") {
            setDiceValue("dice6", 3)
        }
        if (event.code === "Digit4") {
            setDiceValue("dice6", 4)
        }
        if (event.code === "Digit5") {
            setDiceValue("dice6", 5)
        }
        if (event.code === "Digit6") {
            setDiceValue("dice6", 6)
        }
    });

    animate()
}


function animate() {
    requestAnimationFrame(animate);


    renderer.render(scene, camera);
}


//diceName - the dice; rotatePeriodMs - time spend 1 full rotating; angle (degrees)
function rotateDice(diceName,
                    xAngle, yAngle, zAngle,
                    xRotatePeriodMs, yRotatePeriodMs, zRotatePeriodMs) {
    //scene.getObjectByName(diceName).visible=true;
    xAngle = 2 * Math.PI / 360 * xAngle;
    yAngle = 2 * Math.PI / 360 * yAngle;
    zAngle = 2 * Math.PI / 360 * zAngle;


    const startXAngle = scene.getObjectByName(diceName).rotation.x;
    const startYAngle = scene.getObjectByName(diceName).rotation.y;
    const startZAngle = scene.getObjectByName(diceName).rotation.z;

    const rotateInterval = setInterval(rotate, framesPeriodMs);

    function rotate() {
        let isEnded = true;

        if (xAngle > 0 && scene.getObjectByName(diceName).rotation.x < startXAngle + xAngle) {
            isEnded = false;
            let tempXAngle = scene.getObjectByName(diceName).rotation.x + Math.PI * 2 * framesPeriodMs / xRotatePeriodMs;
            scene.getObjectByName(diceName).rotation.x = Math.min(tempXAngle, startXAngle + xAngle)
        }
        if (yAngle > 0 && scene.getObjectByName(diceName).rotation.y < startYAngle + yAngle) {
            isEnded = false;
            let tempYAngle = scene.getObjectByName(diceName).rotation.y + Math.PI * 2 * framesPeriodMs / yRotatePeriodMs;
            scene.getObjectByName(diceName).rotation.y = Math.min(tempYAngle, startYAngle + yAngle)
        }
        if (zAngle > 0 && scene.getObjectByName(diceName).rotation.z < startZAngle + zAngle) {
            isEnded = false;
            let tempZAngle = scene.getObjectByName(diceName).rotation.z + Math.PI * 2 * framesPeriodMs / zRotatePeriodMs;
            scene.getObjectByName(diceName).rotation.z = Math.min(tempZAngle, startZAngle + zAngle)
        }
        if (xAngle < 0 && scene.getObjectByName(diceName).rotation.x > startXAngle + xAngle) {
            isEnded = false;
            let tempXAngle = scene.getObjectByName(diceName).rotation.x - Math.PI * 2 * framesPeriodMs / xRotatePeriodMs;
            scene.getObjectByName(diceName).rotation.x = Math.max(tempXAngle, startXAngle + xAngle)
        }
        if (yAngle < 0 && scene.getObjectByName(diceName).rotation.y > startYAngle + yAngle) {
            isEnded = false;
            let tempYAngle = scene.getObjectByName(diceName).rotation.y - Math.PI * 2 * framesPeriodMs / yRotatePeriodMs;
            scene.getObjectByName(diceName).rotation.y = Math.max(tempYAngle, startYAngle + yAngle)
        }
        if (zAngle < 0 && scene.getObjectByName(diceName).rotation.z > startZAngle + zAngle) {
            isEnded = false;
            let tempZAngle = scene.getObjectByName(diceName).rotation.z - Math.PI * 2 * framesPeriodMs / zRotatePeriodMs;
            scene.getObjectByName(diceName).rotation.z = Math.max(tempZAngle, startZAngle + zAngle)
        }
        if (isEnded) {
            clearInterval(rotateInterval);
        }
    }
}

function moveDice(diceName, time) {
    scene.getObjectByName(diceName).position.z += 1;

    var t = 0;
    const moveInterval = setInterval(move, framesPeriodMs);

    function move() {


        t += framesPeriodMs;
        if (t >= time) {
            clearInterval(moveInterval)
        }
    }
}

function setDiceValue(diceName, value) {

    const trueDiceRotation = new THREE.Vector3(
        Math.ceil(scene.getObjectByName(diceName).rotation.x % (2 * Math.PI) / (2 * Math.PI) * 360),
        Math.ceil(scene.getObjectByName(diceName).rotation.y % (2 * Math.PI) / (2 * Math.PI) * 360),
        Math.ceil(scene.getObjectByName(diceName).rotation.z % (2 * Math.PI) / (2 * Math.PI) * 360)
    );


    const trueDiceRotationRequired = new THREE.Vector3();
    const diceValueVector = new THREE.Vector3(dice6values[value - 1][0], dice6values[value - 1][1], dice6values[value - 1][2]);

    trueDiceRotationRequired.subVectors(diceValueVector, trueDiceRotation);

    const rotationValue = new THREE.Vector3(
        Math.floor(Math.random() * 3 + 3),
        Math.floor(Math.random() * 3 + 3),
        Math.floor(Math.random() * 3 + 3));

    const rotationTime = new THREE.Vector3(
        1000 * 4 / rotationValue.x,
        1000 * 4 / rotationValue.y,
        1000 * 4 / rotationValue.z
    );


    rotateDice(diceName,
        trueDiceRotationRequired.x + 360 * rotationValue.x,
        trueDiceRotationRequired.y + 360 * rotationValue.y,
        trueDiceRotationRequired.z + 360 * rotationValue.z,
        rotationTime.x, rotationTime.y, rotationTime.z);

    moveDice(diceName, (trueDiceRotationRequired.x + 360 * rotationValue.x) / 360 * (rotationTime.x))
}


function rollDice(diceName) {
    let diceValue = Math.floor(Math.random() * 6) % 6 + 1;

    setDiceValue(diceName, diceValue)
}
