input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 5)
let sprite2 = game.createSprite(2, 0)
let hp = 3
basic.forever(function () {
    if (hp == 0) {
        for (let index = 0; index < 4; index++) {
            music.playMelody("A G F A F D F D ", 120)
            music.playMelody("C5 A C5 B F A D C ", 120)
        }
        game.gameOver()
    }
})
basic.forever(function () {
    if (sprite.isTouching(sprite2)) {
        hp += -1
        sprite.set(LedSpriteProperty.Y, 5)
    }
})
