//TODO сделать рефакторинг названий переменных в стиле JS

const scene1 = new THREE.Scene();
scene1.background = new THREE.Color(0xAFEEEE);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.outerWidth, window.outerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 20;

const light = new THREE.PointLight(0xffffff, 1, 0, 2);
light.position.set(0, 0, 20);
scene1.add(light);

const framesPeriodMs = 1000 / 60;




var scriptElement = document.getElementById('diceScript');
var diceNumberOfEdges = scriptElement.getAttribute('data-dice');
console.log('Значение dice:', diceNumberOfEdges);


const dice4Edges= [
    [0, 0, 0],
    [116.03, 0, 0],
    [-30, -111.76857974275183, 0],
    [-30, 108.18565338667775, 0],
]

const dice6Edges = [
    [0, 0, 0], //1
    [-90, 0, 0], //2
    [0, -90, 0], //3
    [180, -90, 0], //4
    [90, 0, 0], //5
    [0, 180, 180], //6
]

const dice8Edges = [
    [0, 0, 0],
    [-162.00000000000003, 292.1476505132566, 0],
    [129.99999999999997, 120, -76.1360210275478],
    [69.99999999999994, -9.999999999999995, -176.99999999999997],
    [-170.99999999999997, 0, 10],
    [-72, -247.99999999999997, -70],
    [-9.999999999999995, -78.00000000000001, -50],
    [69.99999999999994, -181.99999999999997, 0]
];

const dice10Edges = [
    [0, 0, 0],
    [-200, -60, -70],
    [60, -150, 20],
    [-112, -198, -20],
    [60, 138, -20],
    [-82, -152, 20],
    [0, -60, -40],
    [-176, 10, -10],
    [-10, 48, 50],
    [-26, 134, -130]
];

const dice12Edges = [
    [0, 0, 0],
    [50, -10, 105.86924708563118],
    [-114.00000000000001, 0, 30],
    [60, 0, -168.58693253533198],
    [50, 10, -30],
    [79.99999999999999, -8.000000000000004, -100],
    [60, -180, 70],
    [50, 172.26647401572078, 152.49999999999997],
    [70, -185.99999999999997, 0],
    [50, 0, 40],
    [-128.31119943788453, 0, 96.11676389357408],
    [162.00000000000003, 0, 0]
];

const dice20Edges = [
    [0, 0, 180],
    [-140, 0, 240],
    [-100, 212.26350359024324, 10],
    [79.99999999999997, -216.00000000000006, -12.000000000000002],
    [72, 30, 50],
    [79.99999999999997, -513.9460445648365, -114.0276817853665],
    [32, 0, -236],
    [229.99999999999997, 0, 0],
    [72, 33.99999999999999, -60.00000000000001],
    [251.39999999999995, -40.00000000000001, -60.00000000000001],
    [69.99999999999994, -30.000000000000004, -50.00000000000001],
    [257.99999999999994, 30, -70],
    [50, 0, 0],
    [231.99999999999994, 0, -242.99999999999997],
    [-54, -20, -92],
    [120, 50, 50],
    [58, 30, 170],
    [244.79999999999995, -40.00000000000001, 178.18181057586977],
    [49.99999999999999, 0, -120],
    [180, 0, -187.49999999999997]
];



switch (diceNumberOfEdges) {
    case "4":
        diceCoordinatesToEdge = dice4Edges;
        break;
    case "6":
        diceCoordinatesToEdge = dice6Edges;
        break;
    case "8":
        diceCoordinatesToEdge = dice8Edges;
        break;
    case "10":
        diceCoordinatesToEdge = dice10Edges;
        break;
    case "12":
        diceCoordinatesToEdge = dice12Edges;
        break;
    case "20":
        diceCoordinatesToEdge = dice20Edges;
        break;
    default:
        diceCoordinatesToEdge = dice6Edges;
}



const loader = new THREE.GLTFLoader();

loader.load('assets/dice'+diceNumberOfEdges+'.glb', function (gltf) {
    gltf.scene.name = "dice"+diceNumberOfEdges;
    scene1.add(gltf.scene);
    scene1.getObjectByName("dice"+diceNumberOfEdges).visible = false;
    scene1.getObjectByName("dice"+diceNumberOfEdges).scale.set(120, 120, 120)

    scene1.getObjectByName("dice"+diceNumberOfEdges).rotation.x = diceCoordinatesToEdge[0][0] / 180 * Math.PI;
    scene1.getObjectByName("dice"+diceNumberOfEdges).rotation.y = diceCoordinatesToEdge[0][1] / 180 * Math.PI;
    scene1.getObjectByName("dice"+diceNumberOfEdges).rotation.z = diceCoordinatesToEdge[0][2] / 180 * Math.PI;
});


window.onload = function () {

    //make visible
    document.body.addEventListener('click', () => {
        if (scene1.getObjectByName("dice"+diceNumberOfEdges).visible === true) {
            rollDice("dice"+diceNumberOfEdges, diceCoordinatesToEdge.length)
        } else {
            scene1.getObjectByName("dice"+diceNumberOfEdges).visible = true;
        }
    });

    //test
    document.body.addEventListener('keydown', (event) => {
        console.log(scene1.getObjectByName("dice"+diceNumberOfEdges).rotation);

        //rotate
        if (event.code === "KeyQ") {
            rotateDice("dice"+diceNumberOfEdges,
                10, 0, 0,
                1000, 1000, 1000)
        }
        if (event.code === "KeyW") {
            rotateDice("dice"+diceNumberOfEdges,
                0, 10, 0,
                1000, 1000, 1000)
        }
        if (event.code === "KeyE") {
            rotateDice("dice"+diceNumberOfEdges,
                0, 0, 10,
                1000, 1000, 1000)
        }
        if (event.code === "KeyA") {
            rotateDice("dice"+diceNumberOfEdges,
                -10, 0, 0,
                1000, 1000, 1000)
        }
        if (event.code === "KeyS") {
            rotateDice("dice"+diceNumberOfEdges,
                0, -10, 0,
                1000, 1000, 1000)
        }
        if (event.code === "KeyD") {
            rotateDice("dice"+diceNumberOfEdges,
                0, 0, -10,
                1000, 1000, 1000)
        }

        //set edge number
        for (let i = 0; i < diceCoordinatesToEdge.length; i++) {
            if (event.code === "Digit" + (i + 1)) {
                setDiceValue("dice"+diceNumberOfEdges, i + 1)
            }
        }
    });

    animate()
}


function animate() {
    requestAnimationFrame(animate);


    renderer.render(scene1, camera);
}


//diceName - the dice; rotatePeriodMs - time spend 1 full rotating; angle (degrees)
function rotateDice(diceName,
                    xAngle, yAngle, zAngle,
                    xRotatePeriodMs, yRotatePeriodMs, zRotatePeriodMs) {
    //scene6.getObjectByName(diceName).visible=true;
    xAngle = 2 * Math.PI / 360 * xAngle;
    yAngle = 2 * Math.PI / 360 * yAngle;
    zAngle = 2 * Math.PI / 360 * zAngle;


    const startXAngle = scene1.getObjectByName(diceName).rotation.x;
    const startYAngle = scene1.getObjectByName(diceName).rotation.y;
    const startZAngle = scene1.getObjectByName(diceName).rotation.z;

    const rotateInterval = setInterval(rotate, framesPeriodMs);

    function rotate() {
        let isEnded = true;

        if (xAngle > 0 && scene1.getObjectByName(diceName).rotation.x < startXAngle + xAngle) {
            isEnded = false;
            let tempXAngle = scene1.getObjectByName(diceName).rotation.x + Math.PI * 2 * framesPeriodMs / xRotatePeriodMs;
            scene1.getObjectByName(diceName).rotation.x = Math.min(tempXAngle, startXAngle + xAngle)
        }
        if (yAngle > 0 && scene1.getObjectByName(diceName).rotation.y < startYAngle + yAngle) {
            isEnded = false;
            let tempYAngle = scene1.getObjectByName(diceName).rotation.y + Math.PI * 2 * framesPeriodMs / yRotatePeriodMs;
            scene1.getObjectByName(diceName).rotation.y = Math.min(tempYAngle, startYAngle + yAngle)
        }
        if (zAngle > 0 && scene1.getObjectByName(diceName).rotation.z < startZAngle + zAngle) {
            isEnded = false;
            let tempZAngle = scene1.getObjectByName(diceName).rotation.z + Math.PI * 2 * framesPeriodMs / zRotatePeriodMs;
            scene1.getObjectByName(diceName).rotation.z = Math.min(tempZAngle, startZAngle + zAngle)
        }
        if (xAngle < 0 && scene1.getObjectByName(diceName).rotation.x > startXAngle + xAngle) {
            isEnded = false;
            let tempXAngle = scene1.getObjectByName(diceName).rotation.x - Math.PI * 2 * framesPeriodMs / xRotatePeriodMs;
            scene1.getObjectByName(diceName).rotation.x = Math.max(tempXAngle, startXAngle + xAngle)
        }
        if (yAngle < 0 && scene1.getObjectByName(diceName).rotation.y > startYAngle + yAngle) {
            isEnded = false;
            let tempYAngle = scene1.getObjectByName(diceName).rotation.y - Math.PI * 2 * framesPeriodMs / yRotatePeriodMs;
            scene1.getObjectByName(diceName).rotation.y = Math.max(tempYAngle, startYAngle + yAngle)
        }
        if (zAngle < 0 && scene1.getObjectByName(diceName).rotation.z > startZAngle + zAngle) {
            isEnded = false;
            let tempZAngle = scene1.getObjectByName(diceName).rotation.z - Math.PI * 2 * framesPeriodMs / zRotatePeriodMs;
            scene1.getObjectByName(diceName).rotation.z = Math.max(tempZAngle, startZAngle + zAngle)
        }
        if (isEnded) {
            clearInterval(rotateInterval);
        }
    }
}

function moveDice(diceName, time) {
    scene1.getObjectByName(diceName).position.z = 0;
    let t = 0;

    const moveInterval = setInterval(function () {
        if (scene1.getObjectByName(diceName).position.z >= 0) {
            scene1.getObjectByName(diceName).position.z = (-Math.pow(t / framesPeriodMs, 2) + 3 * t / framesPeriodMs) * 5;
        } else {
            scene1.getObjectByName(diceName).position.z = 0;
            clearInterval(moveInterval)
        }
        console.log(scene1.getObjectByName(diceName).position.z)

        // const k = 1/5;
        //
        // let xChange=(Math.random()-0.5) * 2 * k;
        // let yChange=(Math.random()-0.5) * 2 * k;
        //
        // let xMax = 3;
        // let yMax = 3;
        //
        // if (scene6.getObjectByName(diceName).position.x > -xMax && scene6.getObjectByName(diceName).position.x < xMax) {
        //     scene6.getObjectByName(diceName).position.x += xChange;
        // }
        // else if (scene6.getObjectByName(diceName).position.x < -xMax) {
        //     scene6.getObjectByName(diceName).position.x += Math.abs(xChange);
        // }
        // else if (scene6.getObjectByName(diceName).position.x > xMax) {
        //     scene6.getObjectByName(diceName).position.x -= Math.abs(xChange);
        // }
        //
        //
        // if (scene6.getObjectByName(diceName).position.y > -yMax && scene6.getObjectByName(diceName).position.y < yMax) {
        //     scene6.getObjectByName(diceName).position.y += yChange;
        // }
        // else if (scene6.getObjectByName(diceName).position.y < -yMax) {
        //     scene6.getObjectByName(diceName).position.y += Math.abs(yChange);
        // }
        // else if (scene6.getObjectByName(diceName).position.x > yMax) {
        //     scene6.getObjectByName(diceName).position.y -= Math.abs(yChange);
        // }
        //

        t++;
        if (t * framesPeriodMs * 2 >= time) {
            clearInterval(moveInterval)
        }
    }, framesPeriodMs * 2);
}

function setDiceValue(diceName, value) {

    const trueDiceRotation = new THREE.Vector3(
        Math.ceil(scene1.getObjectByName(diceName).rotation.x % (2 * Math.PI) / (2 * Math.PI) * 360),
        Math.ceil(scene1.getObjectByName(diceName).rotation.y % (2 * Math.PI) / (2 * Math.PI) * 360),
        Math.ceil(scene1.getObjectByName(diceName).rotation.z % (2 * Math.PI) / (2 * Math.PI) * 360)
    );


    const trueDiceRotationRequired = new THREE.Vector3();
    const diceValueVector = new THREE.Vector3(diceCoordinatesToEdge[value - 1][0], diceCoordinatesToEdge[value - 1][1], diceCoordinatesToEdge[value - 1][2]);

    trueDiceRotationRequired.subVectors(diceValueVector, trueDiceRotation);

    const rotationValue = new THREE.Vector3(
        Math.floor(Math.random() * 2 + 2),
        Math.floor(Math.random() * 2 + 2),
        Math.floor(Math.random() * 2 + 2));

    const baseTime = 1500;

    const rotationTime = new THREE.Vector3(
        baseTime,
        (trueDiceRotationRequired.x + 360 * rotationValue.x) / 360 * (baseTime) / ((trueDiceRotationRequired.y + 360 * rotationValue.y) / 360),
        (trueDiceRotationRequired.x + 360 * rotationValue.x) / 360 * (baseTime) / ((trueDiceRotationRequired.z + 360 * rotationValue.z) / 360)
    );

    rotateDice(diceName,
        trueDiceRotationRequired.x + 360 * rotationValue.x,
        trueDiceRotationRequired.y + 360 * rotationValue.y,
        trueDiceRotationRequired.z + 360 * rotationValue.z,
        rotationTime.x, rotationTime.y, rotationTime.z);

    moveDice(diceName, Math.max(
        trueDiceRotationRequired.x + 360 * rotationValue.x) / 360 * (rotationTime.x),
        (trueDiceRotationRequired.y + 360 * rotationValue.y) / 360 * (rotationTime.y),
        (trueDiceRotationRequired.z + 360 * rotationValue.z) / 360 * (rotationTime.z),
        3000);
}


function rollDice(diceName, nEdges) {
    let diceValue = Math.floor(Math.random() * nEdges) % nEdges + 1;

    sendDiceData();

    console.log(nEdges + ":" + diceValue)

    setDiceValue(diceName, diceValue)
}

function sendDiceData() {
    // Telegram.WebApp.CloudStorage.setItem(1,"11");
    // window.Telegram.WebApp.switchInlineQuery();





        var dataToSend = {
        key1: "value1",
        key2: "value2"
    };

        // Опции запроса
        var requestOptions = {
        method: 'POST', // или 'GET', 'PUT', 'DELETE', и т.д.
        headers: {
        'Content-Type': 'application/json' // укажите тип контента, если отправляете JSON
        // Дополнительные заголовки, если необходимо
    },
        body: JSON.stringify(dataToSend) // преобразовываем данные в строку JSON
    };

        // URL сервера, куда отправляются данные
        var serverUrl = window.location.protocol + '//' + window.location.host;

        // Выполняем запрос с использованием Fetch API
        fetch(serverUrl, requestOptions)
        .then(response => {
        // Обрабатываем ответ от сервера
        if (!response.ok) {
        throw new Error('Ошибка HTTP: ' + response.status);
    }
        return response.json(); // или response.text(), в зависимости от формата ответа
    })
        .then(data => {
        // Обрабатываем данные от сервера
        console.log('Данные от сервера:', data);
    })
        .catch(error => {
        // Обрабатываем ошибки
        console.error('Ошибка при отправке запроса:', error);
    });
}