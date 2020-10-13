namespace SpriteKind {
    export const star = SpriteKind.create()
    export const minimap = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (!(Imposter_chance)) {
            controller.moveSprite(Red, 0, 0)
            timer.after(10000, function () {
                controller.moveSprite(Red, 100, 100)
            })
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (Imposter_chance) {
            tiles.placeOnRandomTile(Red, myTiles.tile3)
            pause(100)
        }
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
        game.showLongText("IMPOSTER", DialogLayout.Center)
        Red.y += 25
        dead2()
    }
})
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
let star: Sprite = null
let Red: Sprite = null
let Imposter_chance = false
let dead = 0
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
tiles.setTilemap(tiles.createTilemap(hex`500032000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003040503000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030301010303000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003010101010300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000301010101030000000000000000000000000000000000000303000000000000000000000000000000000000030303030303030303030000000000000000000000000000000000000000000000000000030101010103000000000000000000000000000000000303010103030000000000000000000000000000030301010101010101010103000000000000000000000000000000000000000000000000000003010101010300000000000000000000000000000003010101010101030300000000000000000000000303010101010101010101010303000000000000000000000000000000000000000000000000000301010101030000000000000000000000000000030101060101060101010303000000000000000003030101010101010101010101010300000000000000000000000000000000000000000000000000030302020303000000000000000000000000000301010101010101010102030103000000000000030303010101010101010101010101010300000000000000000000000000000000000000000000000000030303030000000000000000000000000003030106010101010106010303010103000000000303010301010101010101010101010101030000000000000000000000000000000000000000000000000000000000000000000000000000000000000302010101010101010101030101010103000003030101030101010101010101010101010103030000000000000000000000000000000000000000000000000000000000000000000000000000000003030101010601010601010103010101010303030301010103010101010101010101010101010103000000000000000000000000000000000000000000000000000000000000000000000000000000000303010101010101010101010301010101030101010101010303010101010101010101010101010300000000000000000000000000000000000000000000000000000000000000000000000000000003030301010101010101010101030101010101010101010101010301010101010101010101010101030000000000000000000000000000000000000000000000000000000000000000000000000000030303030301010101070101010303010101010301010101010101030101010101010101010101010103000000000000000000000000000000000000000000000000000000000000000000000000000303030303030301010101010101030101010101030101010101010103010101010101010101010101010103000000000000000000000000000000000000000000000000000000000000000000000003030303030303030301010101020303010103030303010101010101010301010101010101010101010101010300000000000000000000000000000000000000000000000000000000000000000003030808080808080303030301010303030101010302010101010101010101030101010101010101010101010101030000000000000000000000000000000000000000000000000000000303030303030808010101010101080303010101010101010101030101010101010101010303010101010101010101010101010101030000000000000000000000000000000000000000000000000000030101010101010101010101010101010101010101010101010103030101010101010103030101010101010101010101010101010103000000000000000000000000000000000000000000000000000003030808080808080801010101010103030101010a0101010101010303030303030303030101010101010101010101010101010101030000000000000000000000000000000000000000000000000000000303010101010101010808080808030101010a000a010101010101010101010101010101010101010101010101010101010101010103000000000000000000000000000000000000000000000000000000030808080808080203030303030301010a0000000a010101010101010101010101010101010101010101010101010101010101010300000000000000000000000000000000000000000000000000000003030303030303030301010101010109000000000001010101010101010101010101010101010101010101010101010101010101030000000000000000000000000000000000000000000000000000000003010101010101010101010101010101000000010101010101010101010101010101010101010101010101010101010101010103000000000000000000000000000000000000000000000000000000000301010101010101010101010101010101000101010101010101010101010101010101010101010101010101010101010101010300000000000000000000000000000000000000000000000000000000030301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103000000000000000000000000000000000000000000000000000000000000030101010101010101010101010101010101010303030303010101010101010101010101010101010101010101010101010300000000000000000000000000000000000000000000000000000000000003020101010103010101010101010101010303030300000303010101010101010101010101010101010101010101010101030000000000000000000000000000000000000000000000000000000000000303030303030301010101010103030303030000030000030003030101010101010101010101010101010101010101010300000000000000000000000000000000000000000000000000000000000000030101010101010101010101030301030303000303030303000003010101010101010101010101010101010101010101030000000000000000000000000000000000000000000000000000000000000303010101010101010101010303010103000303020202030300000301010101010101010101010101010101010101010103000000000000000000000000000000000000000000000000000000000000030101010101010303030303030101010303030301010102030303030101010101010101010101010101010101010101010300000000000000000000000000000000000000000000000000000000000003010101010101010101010101010103030003020101010203000003010101010101010101010101010101010101010101030000000000000000000000000000000000000000000000000000000000000301010101010101010101010101010300030302010101010303000301010101010101010101010101010101010101010103000000000000000000000000000000000000000000000000000000000000030301010101010101010101010102030303020101010101020303030101010101010101010101010101010101010101030300000000000000000000000000000000000000000000000000000000000000030101010101010101010101010300000302010101010103030003010101010101010101010101010101010101010103000000000000000000000000000000000000000000000000000000000000000003020101010101010101010103030000030101010101030300000003010101010101010101010101010101010101030300000000000000000000000000000000000000000000000000000000000000000303010101010101010101030300000003030101030303000000000301010101010101010101010101010101010303000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303000000000003030303000000000000030303010101010101010101010101010303030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    ................................................................................
    ................................................................................
    ................................................................................
    ....2222........................................................................
    ...22..22.......................................................................
    ...2....2.......................................................................
    ...2....2..................22..................2222222222.......................
    ...2....2................22..22..............22.........2.......................
    ...2....2...............2......22...........22..........22......................
    ...2....2..............2..2..2...22........22............2......................
    ...22..22.............2..........2.2......222.............2.....................
    ....2222.............22.2.....2.22..2....22.2.............2.....................
    .....................2..........2....2..22..2.............22....................
    ....................22...2..2...2....2222...2..............2....................
    ....................22..........2....2......22.............2....................
    ...................222..........2............2.............2....................
    ..................22222........22....2.......2.............2....................
    .................2222222.......2.....2.......2..............2...................
    ................222222222.....22..2222.......2..............2...................
    ..............22......2222..222...2..........2..............2...................
    ........222222.........22.........2.........22...............2..................
    ........2.........................22.......22................2..................
    ........22.............22..........222222222.................2..................
    .........22............2....2.................................2.................
    ..........2.......222222...222................................2.................
    ..........222222222.......22.22...............................2.................
    ...........2...............222................................2.................
    ...........2................2.................................2.................
    ...........22................................................2..................
    ............2..................22222.........................2..................
    ............2.....2..........2222..22........................2..................
    ............2222222......22222..2..2.22.....................2...................
    ............2...........22.222.22222..2.....................2...................
    ...........22..........22..2.22...22..2.....................2...................
    ...........2......222222...2222....2222.....................2...................
    ...........2..............22.2.....2..2.....................2...................
    ...........2..............2.22.....22.2.....................2...................
    ...........22.............222.......222....................22...................
    ............2............2..2......22.2....................2....................
    ............2...........22..2.....22...2..................22....................
    ............22.........22...22..222....2.................22.....................
    .............22222222222.....2222......222.............222......................
    .........................................222222222222222........................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile8,myTiles.tile9,myTiles.tile2,myTiles.tile7,myTiles.tile10], TileScale.Sixteen))
scene.cameraFollowSprite(Red)
info.startCountdown(1)
game.onUpdate(function () {
	
})
game.onUpdateInterval(100, function () {
    star = sprites.create(img`
        1 
        `, SpriteKind.star)
    star.setPosition(randint(0, scene.screenWidth()), 0)
    star.z = 0
    star.setVelocity(0, 20)
    star.setFlag(SpriteFlag.DestroyOnWall, true)
    star.setFlag(SpriteFlag.RelativeToCamera, true)
    star.setFlag(SpriteFlag.AutoDestroy, true)
})
