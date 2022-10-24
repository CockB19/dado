input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    establecer_numero_para = 0
    establecer_numero_para = randint(1, 6)
    if (establecer_numero_para == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (establecer_numero_para == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (establecer_numero_para == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    }
    if (establecer_numero_para == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    }
    if (establecer_numero_para == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
    if (establecer_numero_para == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
})
let establecer_numero_para = 0
establecer_numero_para = randint(1, 6)
