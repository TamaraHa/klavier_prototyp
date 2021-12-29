basic.showString("e")
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        music.playTone(330, music.beat(BeatFraction.Half))
        basic.pause(750)
    }
})
