

const gameFields = document.getElementById('game__field')

const line = document.querySelectorAll('.line')
const px = document.querySelectorAll('.px')

let apple = document.createElement("div")


// Проверка "Игра началась?"
let gameStart = false


// Координата X или .line
let positionX = 10


// Координата Y или .px
let positionY = 10


// Хранение всех ходов змейки
let playerPosition = []


// Текущий индекс головы
let indexOfArray = 0

// Размер змейки
let snakeSize = 1


// Проверка яблока
let checkApple = true


// Переменные для получения рандомных чисел
let randomPostionX
let randomPostionY


let playerLength = playerPosition.length




// Прослушивание нажатых кнопок

document.addEventListener('keydown', function (event) {

    // Получение рандомного числа от 0 до 20
    getPositionsApple(20);


        // Смещение координаты Y - 1 по нажатию ArrowUp

        if (event.code == 'ArrowUp' && gameStart) {
            positionY -= 1
            snakeMotion();
        }

        // Смещение координаты Y + 1 по нажатию ArrowDown

        if (event.code == 'ArrowDown' && gameStart) {
            positionY += 1
            snakeMotion();
        }

        // Смещение координаты X + 1 по нажатию ArrowRight

        if (event.code == 'ArrowRight' && gameStart) {
            positionX += 1
            snakeMotion();
        }

        // Смещение координаты X - 1 по нажатию ArrowLeft

        if (event.code == 'ArrowLeft' && gameStart) {
            positionX -= 1
            snakeMotion();
        }

    // На нажатие Enter старт игры

    if (event.code == 'Enter' && !gameStart) {
        startGame();
    }


    function snakeMotion() {

        // Движение змейки

        playerPosition.unshift(gameFields.children[positionX].children[positionY])
        playerPosition[0].classList.toggle('snake')
        playerPosition[snakeSize].classList.remove('snake')
        playerPosition.length = snakeSize

        // Проверка на яблоко

        if (playerPosition[0].children[0] == apple) {
            snakeSize += 1
            gameFields.children[positionX].children[positionY].removeChild(apple)
            checkApple = false
            gameFields.attributes[2].nodeValue = 1
        }

        // Спавн нового яблока

        if (gameFields.attributes[2].nodeValue == 1) {
            gameFields.attributes[2].nodeValue = 0
            apple.className = "apple"
            apple.appendChild(document.createTextNode(gameFields.children[randomPostionX].children[randomPostionY].innerHTML))
            gameFields.children[randomPostionX].children[randomPostionY].innerHTML = ''
            gameFields.children[randomPostionX].children[randomPostionY].appendChild(apple)
        }

        // Проверка конца игры 

        if ((playerPosition[0].classList == 'px snake') == false) {
            gameOver();
        }
    }

});

// Старт игры

function startGame() {

    // Изначальная позиция игрока
    playerPosition.unshift(gameFields.children[positionX].children[positionY])
    // Проверка начала игры
    gameStart = true
    // Окрашиваем змейку
    playerPosition[indexOfArray].classList.toggle('snake')
    // Спавн рандомного яблока в начале
    gameFields.attributes[2].nodeValue = 1

}


function getPositionsApple(number) {
    randomPostionX = Math.floor(Math.random() * number);
    randomPostionY = Math.floor(Math.random() * number);
}


// Game over


function gameOver() {

    for (let i = 0; i < line.length; i++) {

        line[i].classList.remove('snake')

        for (let j = 0; j < line.length; j++) {
            line[i].children[j].classList.remove('snake')
        }
    }

    // Обнуление
    gameStart = false
    positionX = 10
    positionY = 10
    indexOfArray = 0
    snakeSize = 1
    checkApple = true


}



console.log(gameFields)