input.onButtonPressed(Button.A, function () {
    if (我 == 0) {
        我 = 1
        basic.showLeds(`
            # # # # #
            . . # . #
            . . # . #
            . # . . #
            # . . # #
            `)
        for (let index = 0; index < 20; index++) {
            radio.sendValue(x, 1)
            basic.pause(100)
        }
    }
    if (我 == 999) {
        x = "a"
        我 = 0
    }
})
function 設定初值 () {
    我 = 0
    b = 0
    c = 0
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
function 比輸贏 () {
	
}
input.onButtonPressed(Button.AB, function () {
    if (我 == 0) {
        我 = 3
        basic.showLeds(`
            # # # # #
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            `)
        for (let index = 0; index < 20; index++) {
            radio.sendValue(x, 3)
            basic.pause(100)
        }
        if (我 == 999) {
            x = "c"
            我 = 0
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (我 == 0) {
        我 = 2
        basic.showLeds(`
            # # # # #
            . . # . .
            . # . # #
            # . # . #
            . . # # #
            `)
        for (let index = 0; index < 20; index++) {
            radio.sendValue(x, 2)
            basic.pause(100)
        }
        if (我 == 999) {
            x = "b"
            我 = 0
        }
    }
})
radio.onReceivedValue(function (name, value) {
    if (x == "a") {
        if (name == "b") {
        	
        }
    }
})
let c = 0
let b = 0
let x = ""
let 我 = 0
設定初值()
radio.setTransmitPower(7)
radio.setGroup(69)
我 = 999
