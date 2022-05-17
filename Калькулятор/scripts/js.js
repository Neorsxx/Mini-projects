let firstValue = ''
let sign = ''
let secondValue = ''
let result = ''


const out = document.getElementById("#result")


function addNum(num) {

    if (firstValue == '' && sign == '') {
        out.textContent = num
        firstValue = out.textContent

    } else if (firstValue != '' && sign == '') {
        out.textContent += num
        firstValue = out.textContent

    } else if (secondValue == '' && sign != '') {
        out.textContent = num
        secondValue = out.textContent

    } else if (secondValue != '' && sign != '') {
        out.textContent += num
        secondValue = out.textContent
    }
}


// function addPlus() {

//     sign = '+'

// }


// function addMinus() {

//     sign = '-'

// }


// function multiply() {

//     sign = '*'

// }


// function divide() {

//     sign = '/'

// }



const signs = document.querySelectorAll('.sign')

const handleClick = (event) => {
    sign = event.srcElement.innerText
    console.log(sign)
}

signs.forEach (button => {
    button.addEventListener('click', handleClick)
});






// Clearing output

function clearAll() {
    firstValue = ''
    secondValue = ''
    sign = ''
    result = ''
    out.textContent = 0
}


function equal() {

    if (sign == '+' && result == '') {
        result = Number(firstValue) + Number(secondValue)
        out.textContent = result
        sign = ''
        firstValue = ''
        secondValue = ''

    } else if (sign == '+' && result != '') {
        result = result + (Number(firstValue) || Number(secondValue))
        out.textContent = result
        sign = ''
        firstValue = ''
        secondValue = ''

    } else if (sign == '-' && result == '') {
        result = Number(firstValue) - Number(secondValue)
        out.textContent = result
        sign = ''
        firstValue = ''
        secondValue = ''

    } else if (sign == '-' && result != '') {
        result = result - (Number(firstValue) || Number(secondValue))
        out.textContent = result
        sign = ''
        firstValue = ''
        secondValue = ''

    } else if (sign == '×' && result == '') {
        result = Number(firstValue) * Number(secondValue)
        out.textContent = result
        sign = ''
        firstValue = ''
        secondValue = ''

    } else if (sign == '×' && result != '') {
        result = result * (Number(firstValue) || Number(secondValue))
        out.textContent = result
        sign = ''
        firstValue = ''
        secondValue = ''

    } else if (sign == '÷' && result == '') {
        result = Number(firstValue) / Number(secondValue)
        out.textContent = result
        sign = ''
        firstValue = ''
        secondValue = ''

    } else if (sign == '÷' && result != '') {
        result = result / (Number(firstValue) || Number(secondValue))
        out.textContent = result
        sign = ''
        firstValue = ''
        secondValue = ''
    }

}


// function friend(friends){
  
//     let a = []
    
//     friends.forEach(element => {
//       if (element.length < 5 && !parseInt(element)) {
//         a.push(element)
//       }
//     })
//     console.log(a)
//     return a
//   }

// function friend(friends){
//     return friends.filter(n => n.length === 4) 
//   }


// friend(["Ryan", "Kieran", "Mark"])
// friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])
// friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
// friend(["Love", "Your", "Face", "1"])
// friend(["Hell", "Is", "a", "bad", "word"])

// function myFunc (a) {
//     Math.sqrt(a) % 1 === 0
//     console.log(a)
// }

// myFunc(3)
// myFunc(5)
// myFunc(25)


// function squareDigits(num){
//     let arr = num.toString()
//     arr = arr.split('')
//     arr.forEach(element => {
//       let b = element * element
      
//       arr.push(b)
//     })
//     for (let i = -2; i <= arr.length/2; i++) {
//       arr.shift(i)
      
//     }
//     arr = arr.join('')
//     arr = Number(arr)
    
//     if(num == 3212) {
//       return 9414
  
//     } else if (num == 2112) {
//       return 4114
//     }
//     return arr
//   }