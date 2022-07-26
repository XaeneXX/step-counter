let number = 0
input.onButtonPressed(Button.B, function () {
    number = 0
})
input.onGesture(Gesture.Shake, function () {
    number += 1
})
basic.forever(function () {
    basic.showNumber(number)
    led.stopAnimation()
})
