// Создаем сцену
var scene = new THREE.Scene();

// Создаем камеру
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Создаем рендерер
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Загружаем FBX модель
var loader = new THREE.FBXLoader();
loader.load('path/to/your/model.fbx', function (fbx) {
    fbx.scale.set(0.1, 0.1, 0.1); // Масштабируем модель, если это необходимо
    scene.add(fbx); // Добавляем модель в сцену
});

// Основной цикл рендеринга
function animate() {
    requestAnimationFrame(animate);

    // Рендерим сцену с камеры
    renderer.render(scene, camera);
}

// Вызываем основной цикл рендеринга
animate();
