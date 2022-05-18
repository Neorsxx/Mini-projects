const gameField = document.getElementById('game__field')
const line = document.querySelectorAll('.line')
const px = document.querySelectorAll('.px')
let apple = document.createElement("div") // Создание дива

let gameStart = false

let snake = []
let snakeSize = 1

let positionX = 10
let positionY = 10

let applePositionX
let applePositionY

let randomPostionX
let randomPostionY

// Проверка стены

let wall = false

// Направление движения

let up = 0
let down = 0
let right = 1
let left = 0


// Скорость змейки 

let snakeSpeed = 1000 / 5

let loop = setInterval(gameLoop, snakeSpeed)

// Весь игровой процесс

function gameLoop() {

    getPositionsApple(20);

    // Движение

    if (up == 1 && gameStart) {
        positionX -= 1
        move();
    }

    if (down == 1 && gameStart) {
        positionX += 1
        move();
    }

    if (right == 1 && gameStart) {
        positionY += 1
        move();
    }

    if (left == 1 && gameStart) {
        positionY -= 1
        move();
    }

    function move() {

        if (line[positionY] == undefined && positionY >= 20) {
            wall = true
            positionY = 0
            wallCollision();
        }

        if (line[positionY] == undefined && positionY <= -1) {
            wall = true
            positionY = 19
            wallCollision();
        }

        if (line[positionY].children[positionX] == undefined && positionX <= -1) {
            wall = true
            positionX = 19
            wallCollision();
        }

        if (line[positionY].children[positionX] == undefined && positionX >= 20) {
            wall = true
            positionX = 0
            wallCollision();
        }

        // Проверка стены

        if (!wall) {
            snake.unshift(line[positionY].children[positionX])
            snake[0].classList.toggle('snake')
            snake[snakeSize].classList.toggle('snake')
            snake.pop()
        }

        // Создание яблока 

        if (gameField.attributes[2].nodeValue == 0) {
            apple.className = "apple"
            apple.appendChild(document.createTextNode(gameField.children[randomPostionX].children[randomPostionY].innerHTML))
            gameField.children[randomPostionX].children[randomPostionY].innerHTML = ''
            gameField.children[randomPostionX].children[randomPostionY].appendChild(apple)
            applePositionX = randomPostionX
            applePositionY = randomPostionY
            gameField.attributes[2].nodeValue = 1
        }   

        if (gameField.children[positionY].children[positionX].innerHTML == '<div class="apple"></div>') {
            snakeSize += 1
            gameField.children[applePositionX].children[applePositionY].removeChild(apple)
            gameField.attributes[2].nodeValue = 0
        }

    }


    // Получение рандомного числа для спавна яблок

    function getPositionsApple(number) {
        randomPostionX = Math.floor(Math.random() * number);
        randomPostionY = Math.floor(Math.random() * number);
    }


}


// Проверка столкновения со стеной

function wallCollision() {
    snake.unshift(line[positionY].children[positionX])
    snake[snakeSize].classList.toggle('snake')
    snake.pop()
    snake[0].classList.toggle('snake')
    wall = false
}

// Слушаем кнопки

document.addEventListener('keydown', function (event) {

    console.log(event)

    if (event.code == 'Enter') {
        console.log('Game Started')
        gameStart = true
        snake.unshift(line[positionY].children[positionX])
        snake[0].classList.toggle('snake')
    }

    if (event.code == 'Escape') {
        console.log('Game Stopped')
        clearInterval(loop)
        
    }

    if (event.code == 'ArrowRight' && gameStart == true) {
        up = 0
        down = 0
        right = 1
        left = 0
    }

    if (event.code == 'ArrowLeft' && gameStart == true) {
        up = 0
        down = 0
        right = 0
        left = 1
    }

    if (event.code == 'ArrowUp' && gameStart == true) {
        up = 1
        down = 0
        right = 0
        left = 0
    }

    if (event.code == 'ArrowDown' && gameStart == true) {
        up = 0
        down = 1
        right = 0
        left = 0
    }



});

