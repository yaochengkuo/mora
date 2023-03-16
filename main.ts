input.onButtonPressed(Button.A, function () {
    if (我出拳 == 0) {
        我出拳 = 1
        radio.sendValue("a", 1)
        basic.showLeds(`
            # # # # #
            . . # . #
            . . # . #
            . # . . #
            # . . # #
            `)
    }
})
function 設定初值 () {
    basic.showArrow(ArrowNames.East)
    你出拳 = 0
    我出拳 = 0
}
function 比輸贏 () {
	
}
input.onButtonPressed(Button.AB, function () {
    if (我出拳 == 0) {
        我出拳 = 3
        basic.showLeds(`
            # # # # #
            . . # . .
            . # # . .
            # . # # .
            . . # . .
            `)
        radio.sendValue("a", 3)
    }
})
input.onButtonPressed(Button.B, function () {
    if (我出拳 == 0) {
        我出拳 = 2
        basic.showLeds(`
            # # # # #
            . . # . .
            . # . # #
            # . # . #
            . . # # #
            `)
        radio.sendValue("a", 2)
    }
})
radio.onReceivedValue(function (name, value) {
    你出拳 = 0
    while (我出拳 == 0) {
        basic.showString("？")
    }
    basic.pause(1000)
    比輸贏()
    basic.pause(3000)
    設定初值()
})
let 你出拳 = 0
let 我出拳 = 0
radio.setGroup(69)
設定初值()
