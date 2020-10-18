namespace SpriteKind {
    export const star = SpriteKind.create()
    export const minimap = SpriteKind.create()
    export const Interact = SpriteKind.create()
    export const CPU = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (!(Imposter_chance)) {
            if (dead != 1) {
                s1 = textsprite.create("Computing...", 15, 1)
                s1.setBorder(1, 2, 3)
                s1.setOutline(1, 1)
                s1.setPosition(Red.right, Red.top)
                s1.setFlag(SpriteFlag.StayInScreen, true)
                s1.setFlag(SpriteFlag.RelativeToCamera, true)
                s1.z = 100
                controller.moveSprite(Red, 0, 0)
                Computerchange = sprites.create(img`
                    b b b b b c c c c c c b b b b b 
                    b b b d c c c c c c c b b b b b 
                    b d d d c 8 8 6 6 c c d d d d d 
                    b d d d c 8 8 8 6 c c d d d d d 
                    b d d d c 8 8 8 8 c c d d d d d 
                    b d e e c 8 8 8 8 c c e e e e e 
                    b e e e c c c c c c e e e e e e 
                    b e e e e e e e e e e e e e e e 
                    e e e e f f f f e e e e e e e e 
                    e e e f f f f f f e e e e e e e 
                    e e e e e e e e e e e e e e d e 
                    e d e d d d d d d d d d e e d e 
                    e d d d d d d d d d d d e e d d 
                    e b b b b b b b b b b b e e b b 
                    e b b d d d d d b b b b e e b b 
                    b d d d d d d d d d d d d d d d 
                    `, SpriteKind.Interact)
                tiles.placeOnTile(Computerchange, tiles.locationOfSprite(Red))
                timer.after(10000, function () {
                    controller.moveSprite(Red, 100, 100)
                    Computerchange.destroy(effects.rings, 500)
                    s1.destroy()
                    tiles.destroySpritesOfKind(SpriteKind.Interact)
                })
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (Imposter_chance) {
            if (dead != 1) {
                tiles.placeOnRandomTile(Red, myTiles.tile3)
                pause(100)
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Red, 0, 0)
    Mapsprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . 3 2 f f . . . . . . . 
        . . . . . 3 2 2 . . . . . . . . 
        . . . . . 3 2 2 . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.minimap)
    Mapsprite.setPosition(Red.x - scene.screenWidth(), Red.y - scene.screenHeight())
    Mapsprite.setFlag(SpriteFlag.StayInScreen, true)
    Mapsprite.setFlag(SpriteFlag.Ghost, true)
    Mapsprite.lifespan = 3000
    Mapsprite.z = 200
    myMinimap = minimap.minimap(MinimapScale.Sixteenth, 2, 0)
    minimap.includeSprite(myMinimap, Red, MinimapSpriteScale.Octuple)
    minimap.includeSprite(myMinimap, Dummy_1, MinimapSpriteScale.Octuple)
    minimap.includeSprite(myMinimap, Dummy_2, MinimapSpriteScale.Octuple)
    Mapsprite.setImage(minimap.getImage(minimap.minimap(MinimapScale.Sixteenth, 2, 0)))
    timer.after(3000, function () {
        controller.moveSprite(Red, 100, 100)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CPU, function (sprite, otherSprite) {
    if (Imposter_chance) {
        if (controller.A.isPressed()) {
            otherSprite.destroy(effects.fire, 60)
            Kills += 1
        }
    } else {
        if (controller.A.isPressed()) {
            otherSprite.say("Hello", 500)
        }
    }
})
info.onCountdownEnd(function () {
    Start_game()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile9, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            bd1ddddddddddddddddd1d3b
            b3113333333333333333113b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3133333333333333333133b
            b3113333333333333333113b
            bb33333333333333333333bb
            bccccccccccccccccccccccb
            cccccccccccccccccccccccc
            `)
        game.showLongText("Are you the IMPOSTER", DialogLayout.Center)
        if (Imposter_chance) {
            dead2()
            game.showLongText("You ARE the IMPOSTER", DialogLayout.Center)
        } else {
            Red.y += 25
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (!(Imposter_chance)) {
            if (dead != 1) {
                controller.moveSprite(Red, 0, 0)
                Red.startEffect(effects.fire, 8000)
                timer.after(10000, function () {
                    controller.moveSprite(Red, 100, 100)
                })
            }
        }
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Imposter += 1
    if (Imposter == 1) {
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            bd1ddddddddddddddddd1d3b
            b3113333333333333333113b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3133333333333333333133b
            b3113333333333333333113b
            bb33333333333333333333bb
            bccccccccccccccccccccccb
            cccccccccccccccccccccccc
            `)
        game.showLongText("IMPOSTER", DialogLayout.Center)
        Imposter_chance = Math.percentChance(100)
    }
    if (Imposter == 2) {
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            bd1ddddddddddddddddd1d3b
            b3113333333333333333113b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3133333333333333333133b
            b3113333333333333333113b
            bb33333333333333333333bb
            bccccccccccccccccccccccb
            cccccccccccccccccccccccc
            `)
        game.showLongText("CREW-MATE", DialogLayout.Center)
        Imposter_chance = Math.percentChance(0)
        Imposter = 0
    }
})
function Start_game () {
    Imposter_chance = Math.percentChance(15)
    Red.setPosition(448, 189)
    if (Imposter_chance) {
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            bd1ddddddddddddddddd1d3b
            b3113333333333333333113b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3133333333333333333133b
            b3113333333333333333113b
            bb33333333333333333333bb
            bccccccccccccccccccccccb
            cccccccccccccccccccccccc
            `)
        game.showLongText("IMPOSTER", DialogLayout.Center)
    } else {
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            3d33333333333333333333d3
            333333333333333333333333
            b3bddb333333333333bddb3b
            b3b33b333333333333b33b3b
            b3bbbb333333333333bbbb3b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3bddb333333333333bddb3b
            b3b33b333333333333b33b3b
            b3bbbb333333333333bbbb3b
            bb33333333333333333333bb
            bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbb
            `)
        game.showLongText("CREW-MATE", DialogLayout.Center)
    }
}
function dead2 () {
    dead = 1
    Imposter_chance = Math.percentChance(0)
    Red.setFlag(SpriteFlag.Ghost, true)
    Red.setImage(img`
        . . . . f f f f . . . . 
        . . . f 2 2 2 2 f . . . 
        . . f 2 2 2 2 2 2 f . . 
        f f f 2 2 2 f f f f f . 
        f 4 f 2 2 f b d d 1 1 f 
        f 4 f 2 2 f b b b d d f 
        f 4 f 2 2 2 f f f f f . 
        f 4 f 2 2 2 2 2 2 f . . 
        f 4 f 2 2 2 2 2 2 f . . 
        . f f 2 2 2 2 2 2 f . . 
        . f 2 2 2 2 2 2 2 f . . 
        . f 2 2 2 2 2 2 f f . . 
        . f 2 2 f 2 2 f f . . . 
        . f f f f 2 f f . . . . 
        . . . . f f f . . . . . 
        `)
    Red.setFlag(SpriteFlag.StayInScreen, true)
}
let star2: Sprite = null
let Imposter = 0
let myMinimap: minimap.Minimap = null
let Mapsprite: Sprite = null
let Computerchange: Sprite = null
let s1: TextSprite = null
let Dummy_2: Sprite = null
let Dummy_1: Sprite = null
let Red: Sprite = null
let Imposter_chance = false
let dead = 0
let Kills = 0
dead = 0
Imposter_chance = Math.percentChance(0)
Red = sprites.create(img`
    . . . . f f f . . . 
    . . . f 2 2 2 f . . 
    . . f 2 2 f f f f . 
    f f f 2 f b d 1 1 f 
    f 4 f 2 f b b d d f 
    f 4 f 2 2 f f f f . 
    f 4 f 2 2 2 2 f . . 
    f 4 f 2 2 2 2 f . . 
    f 4 f 2 2 2 2 f . . 
    f 4 f 2 2 2 2 f . . 
    . f f 2 f f 2 f . . 
    . . f 2 f f 2 f . . 
    . . f f . . f f . . 
    `, SpriteKind.Player)
controller.moveSprite(Red)
Red.z = 100
Red.setPosition(98, 124)
Dummy_1 = sprites.create(img`
    . . . . f f f . . . 
    . . . f 9 9 9 f . . 
    . . f 9 9 f f f f . 
    f f f 9 f b d 1 1 f 
    f d f 9 f b b d d f 
    f d f 9 9 f f f f . 
    f d f 9 9 9 9 f . . 
    f d f 9 9 9 9 f . . 
    f d f 9 9 9 9 f . . 
    f d f 9 9 9 9 f . . 
    . f f 9 f f 9 f . . 
    . . f 9 f f 9 f . . 
    . . f f . . f f . . 
    `, SpriteKind.CPU)
Dummy_1.setPosition(392, 248)
Dummy_1.say("Dummy 1")
Dummy_2 = sprites.create(img`
    . . . . f f f . . . 
    . . . f 4 4 4 f . . 
    . . f 4 4 f f f f . 
    f f f 4 f b d 1 1 f 
    f d f 4 f b b d d f 
    f d f 4 4 f f f f . 
    f d f 4 4 4 4 f . . 
    f d f 4 4 4 4 f . . 
    f d f 4 4 4 4 f . . 
    f d f 4 4 4 4 f . . 
    . f f 4 f f 4 f . . 
    . . f 4 f f 4 f . . 
    . . f f . . f f . . 
    `, SpriteKind.CPU)
Dummy_2.setPosition(424, 551)
Dummy_2.say("Dummy 2")
let Dummy_3 = sprites.create(img`
    . . . . f f f . . . 
    . . . f 8 8 8 f . . 
    . . f 8 8 f f f f . 
    f f f 8 f b d 1 1 f 
    f 6 f 8 f b b d d f 
    f 6 f 8 8 f f f f . 
    f 6 f 8 8 8 8 f . . 
    f 6 f 8 8 8 8 f . . 
    f 6 f 8 8 8 8 f . . 
    f 6 f 8 8 8 8 f . . 
    . f f 8 f f 8 f . . 
    . . f 8 f f 8 f . . 
    . . f f . . f f . . 
    `, SpriteKind.CPU)
Dummy_3.setPosition(631, 598)
Dummy_3.say("Dummy 3")
let Dummy_4 = sprites.create(img`
    . . . . f f f . . . 
    . . . f e e e f . . 
    . . f e e f f f f . 
    f f f e f b d 1 1 f 
    f b f e f b b d d f 
    f b f e e f f f f . 
    f b f e e e e f . . 
    f b f e e e e f . . 
    f b f e e e e f . . 
    f b f e e e e f . . 
    . f f e f f e f . . 
    . . f e f f e f . . 
    . . f f . . f f . . 
    `, SpriteKind.CPU)
Dummy_4.setPosition(808, 534)
Dummy_4.say("Dummy 4")
let Dummy_5 = sprites.create(img`
    . . . . f f f . . . 
    . . . f 7 7 7 f . . 
    . . f 7 7 f f f f . 
    f f f 7 f b d 1 1 f 
    f d f 7 f b b d d f 
    f d f 7 7 f f f f . 
    f d f 7 7 7 7 f . . 
    f d f 7 7 7 7 f . . 
    f d f 7 7 7 7 f . . 
    f d f 7 7 7 7 f . . 
    . f f 7 f f 7 f . . 
    . . f 7 f f 7 f . . 
    . . f f . . f f . . 
    `, SpriteKind.CPU)
Dummy_5.setPosition(843, 134)
Dummy_5.say("Dummy 5")
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff1fffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
tiles.setTilemap(tilemap`level_1`)
scene.cameraFollowSprite(Red)
info.startCountdown(15)
Red.setFlag(SpriteFlag.ShowPhysics, true)
game.onUpdate(function () {
    if (Kills == 4) {
        game.showLongText("You have killed all but one, and that is all you need...", DialogLayout.Center)
        game.over(true, effects.slash)
    }
})
game.onUpdateInterval(100, function () {
    star2 = sprites.create(img`
        1 
        `, SpriteKind.star)
    star2.setPosition(randint(0, scene.screenWidth()), 0)
    star2.z = 0
    star2.setVelocity(0, 20)
    star2.setFlag(SpriteFlag.DestroyOnWall, true)
    star2.setFlag(SpriteFlag.RelativeToCamera, true)
    star2.setFlag(SpriteFlag.AutoDestroy, true)
})
