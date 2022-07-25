import * as THREE from 'three'

const scene = new THREE.Scene()


const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 2

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
})
renderer.setSize(window.innerWidth, window.innerHeight)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
})

const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100)
const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xF03A47, wireframe: true, });

const cube = new THREE.Mesh(geometry, material)
const torus = new THREE.Mesh(torusGeometry, torusMaterial)
scene.add(cube)
scene.add(torus)

cube.position.z += 1;

torus.position.z -= 50;
torus.position.x += 45;

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)

    torus.rotation.x += 0.01
    torus.rotation.y += 0.01

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    render()
}

function render() {
    renderer.render(scene, camera)
}

renderer.setClearColor(0x120D31)

animate()

function moveCamera(newPosition) {
    if (camera.position.x < newPosition) {
        while (camera.position.x < newPosition) {
            camera.position.x += 0.01
            render();
        }
    }
}

import barba from "../../node_modules/@barba/core/dist/barba.mjs";
import anime from "../../node_modules/animejs/lib/anime.es.js";

import './client.ts'

const swiper = document.getElementById("swiper");
const hero = document.getElementById("Hero");
const springConfig = "spring(1, 100, 100, 0)";

const colors = ["#75B9BE"];

const getRandomColor = () => {
    return colors[Math.round(Math.random() * (colors.length - 1))];
};

barba.init({
    sync: true,
    transitions: [
        {
            to:{
                namespace: "home"
            },
            name: "swipe to home",
            before({ data }) {
                swiper.style.left = "0";
            },
            leave({ current }) {
                const tl = anime.timeline({
                    duration: 800,
                    easing: springConfig,
                });

                tl.add({
                    targets: swiper,
                    left: 0,
                    scaleX: [0, 1],
                });

                tl.add(
                    {
                        targets: current.container,
                        opacity: 0,
                    },
                    0
                );
                return tl.finished;
            },
            enter(){
                camera.position.x = 0;
            },
            after({ next }) {
                const tl = anime.timeline({
                    duration: 800,
                    easing: springConfig,
                });

                tl.add({
                    targets: next.container,
                    opacity: [0, 1],
                });

                tl.add(
                    {
                        targets: swiper,
                        left: screen.width,
                        scaleX: [1, 0],
                    },
                    0
                );
                return tl.finished;

            },
        },
        {
            to:{
                namespace: "projects"
            },
            name: "swipe to projects",
            before({ data }) {
                swiper.style.left = "0";
            },
            leave({ current }) {
                const tl = anime.timeline({
                    duration: 800,
                    easing: springConfig,
                });

                tl.add({
                    targets: swiper,
                    left: 0,
                    scaleX: [0, 1],
                });

                tl.add(
                    {
                        targets: current.container,
                        opacity: 0,
                    },
                    0
                );
                return tl.finished;
            },
            enter(){
                camera.position.x = 1;
            },
            after({ next }) {
                const tl = anime.timeline({
                    duration: 800,
                    easing: springConfig,
                });

                tl.add({
                    targets: next.container,
                    opacity: [0, 1],
                });

                tl.add(
                    {
                        targets: swiper,
                        left: screen.width,
                        scaleX: [1, 0],
                    },
                    0
                );
                return tl.finished;

            },
        },
        {
            to:{
                namespace: "about"
            },
            name: "swipe to about",
            before({ data }) {
                swiper.style.left = "0";
            },
            leave({ current }) {
                const tl = anime.timeline({
                    duration: 800,
                    easing: springConfig,
                });

                tl.add({
                    targets: swiper,
                    left: 0,
                    scaleX: [0, 1],
                });

                tl.add(
                    {
                        targets: current.container,
                        opacity: 0,
                    },
                    0
                );
                return tl.finished;
            },
            enter(){
                camera.position.x = 3;
            },
            after({ next }) {
                const tl = anime.timeline({
                    duration: 800,
                    easing: springConfig,
                });

                tl.add({
                    targets: next.container,
                    opacity: [0, 1],
                });

                tl.add(
                    {
                        targets: swiper,
                        left: screen.width,
                        scaleX: [1, 0],
                    },
                    0
                );
                return tl.finished;

            },
        },
        {
            to:{
                namespace: "contact"
            },
            name: "swipe to contact",
            before({ data }) {
                swiper.style.left = "0";
            },
            leave({ current }) {
                const tl = anime.timeline({
                    duration: 800,
                    easing: springConfig,
                });

                tl.add({
                    targets: swiper,
                    left: 0,
                    scaleX: [0, 1],
                });

                tl.add(
                    {
                        targets: current.container,
                        opacity: 0,
                    },
                    0
                );
                return tl.finished;
            },
            enter(){
                camera.position.x = 6;
            },
            after({ next }) {
                const tl = anime.timeline({
                    duration: 800,
                    easing: springConfig,
                });

                tl.add({
                    targets: next.container,
                    opacity: [0, 1],
                });

                tl.add(
                    {
                        targets: swiper,
                        left: screen.width,
                        scaleX: [1, 0],
                    },
                    0
                );
                return tl.finished;

            },
        }
    ],
    preventRunning: true,
});
