function Display (x: number, y: number, Text: string) {
    if (y == 2) {
        Y = 0
        X = x + 20
    } else if (y == 3) {
        Y = 1
        X = x + 20
    } else {
        Y = y
        X = x
    }
    I2C_LCD1602.ShowString(Text, X, Y)
}
let X = 0
let Y = 0
I2C_LCD1602.LcdInit(39)
basic.forever(function () {
	
})
