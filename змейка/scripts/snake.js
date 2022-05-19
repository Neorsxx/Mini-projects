const canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');

const config = {
    sizeCell: 20,
    gameSpeed: 10
}

const snake = {
    x: 240,
    y: 240,
    snakeBox: [],
    maxSize: 1
}

let apple = {
    x: 0,
    y: 0,
    sizeApple: 20,
    exist: false
}

let motion = {
    r: 1,
    l: 0,
    u: 0,
    d: 0
}

let gameStart = false

window.onload = drawField();


function drawField() {
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, 500, 500)
}


function startGame() {

    const score = document.querySelector('.score__counter')
    score.textContent = snake.maxSize * 10

    if (gameStart == true) {

        let gameLoop = setInterval(drawSnake, 1000 / 15)

        function drawSnake() {


            // В массив вносится каждый координат пройденного квадрата
            snake.snakeBox.unshift([snake.x, snake.y])

            // Закрашиваем после змейки черными квадаратами поля, если больше размера змеи
            for (let i = snake.maxSize; i < snake.snakeBox.length; i++) {
                ctx.fillStyle = "#000"
                ctx.fillRect(snake.snakeBox[i][0], snake.snakeBox[i][1], 20, 20)
            }

            // При столкновении со стеной змейка появится с противоположной стороны
            if (snake.x == 480 && motion.r == 1) {
                snake.x = -20
            }

            if (snake.x == 0 && motion.l == 1) {
                snake.x = 500
            }

            if (snake.y == 480 && motion.d == 1) {
                snake.y = -20
            }

            if (snake.y == 0 && motion.u == 1) {
                snake.y = 500
            }

            // Движение змейки
            if (motion.r == 1) {
                snake.x += config.sizeCell
            }

            if (motion.l == 1) {
                snake.x -= config.sizeCell
            }

            if (motion.u == 1) {
                snake.y -= config.sizeCell
            }

            if (motion.d == 1) {
                snake.y += config.sizeCell
            }


            // Кушаем яблоко
            for (let j = 0; j < snake.snakeBox.length; j++) {

                if (apple.x == snake.snakeBox[j][0] && apple.y == snake.snakeBox[j][1]) {
                    apple.exist = false
                    snake.maxSize++;
                }

                if (!apple.exist) {
                    randomNumber(0, 500, 20);
                    drawApple();
                }
            }

            // Проверка на соприкосновение головы с хвостом и конец игры
            for (let k = 1; k < snake.snakeBox.length; k++) {

                if (snake.snakeBox[0][0] == snake.snakeBox[k][0] && snake.snakeBox[0][1] == snake.snakeBox[k][1]) {
                    clearInterval(gameLoop)
                    snake.snakeBox = []
                    snake.maxSize = 1
                    snake.x = 240
                    snake.y = 240
                    gameStart = false
                    apple.exist = false
                    drawField()
                }

            }

            // Отрисовка змеи
            for (let i = 0; i < snake.maxSize; i++) {
                ctx.fillStyle = "#050"
                ctx.fillRect(snake.snakeBox[i][0], snake.snakeBox[i][1], 20, 20)
            }

            // Обрезаем массив согласно максимальному размеру змейки
            snake.snakeBox.length = snake.maxSize

            score.textContent = (snake.maxSize - 1) * 10
            console.log(snake.maxSize)

        }

        randomNumber(0, 500, 20);

        // Получение случайного числа от 0 до 500 для каждой координаты яблока
        function randomNumber(min, max, num) {
            apple.x = Math.floor(Math.floor(Math.random() * (max - min + 1) + min) / num) * num
            apple.y = Math.floor(Math.floor(Math.random() * (max - min + 1) + min) / num) * num
        }

        // Отрисовка яблока
        function drawApple() {
            ctx.fillStyle = "#b84646"
            ctx.fillRect(apple.x, apple.y, 20, 20)
            apple.exist = true
        }

    }

    document.addEventListener('keydown', function (e) {

        console.log(e)

        if (e.key = 'w') {
        }
    
        if (e.code == 'ArrowRight' && motion.l == 0) {
            motion.r = 1
            motion.l = 0
            motion.u = 0
            motion.d = 0
        }
    
        if (e.code == 'ArrowLeft' && motion.r == 0) {
            motion.r = 0
            motion.l = 1
            motion.u = 0
            motion.d = 0
        }
    
        if (e.code == 'ArrowUp' && motion.d == 0) {
            motion.r = 0
            motion.l = 0
            motion.u = 1
            motion.d = 0
        }
    
        if (e.code == 'ArrowDown' && motion.u == 0) {
            motion.r = 0
            motion.l = 0
            motion.u = 0
            motion.d = 1
        }
    
    })
    
}


// Слушаем кнопки
document.addEventListener('keydown', function (e) {

    if (e.isTrusted && !gameStart) {
        gameStart = true
        startGame();
    }

})