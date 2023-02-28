function circle_area(radius) {
    if (radius < 0) {
        return('Error: Radius is less than 0')
    } else {
        return ('Area of a circle with the radius ' + radius + ' is ' +
 3.14*radius**2)
    }
}

function even_odd(x) {
    if (x % 2 == 0) {
        return('Number ' + x + ' is even.')
    } else {
        return('Number ' + x + ' is odd.')
    }
}

function greetings(name) {
    if (name.length > 0) {
        return('Hi, ' + name)
    } else {
        return("Hi! What is your name?")
    }
}

console.log(circle_area(15.73848560785286))
console.log(even_odd(95))
console.log(greetings('Adai'))