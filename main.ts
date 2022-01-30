let garbage: Buffer = null
basic.showIcon(IconNames.Heart)
radio.setGroup(97)
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
let idbleue = "0796AE8EA819"
let idblanche = "0E0096BF1E39"
pins.servoWritePin(AnalogPin.P16, 0)
let cmd = ""
basic.clearScreen()
basic.forever(function () {
    cmd = serial.readString()
    if (cmd != "") {
        basic.showIcon(IconNames.Yes)
    }
    if (cmd == idbleue) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        radio.sendString("1")
        pins.servoWritePin(AnalogPin.P16, 90)
        basic.pause(4600)
        pins.servoWritePin(AnalogPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.clearScreen()
        radio.sendString("3")
    } else if (cmd == idblanche) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.servoWritePin(AnalogPin.P16, 90)
        radio.sendString("2")
        basic.pause(4600)
        pins.servoWritePin(AnalogPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.clearScreen()
        radio.sendString("3")
    } else if (cmd != "") {
        pins.digitalWritePin(DigitalPin.P2, 1)
        radio.sendString("1")
        pins.servoWritePin(AnalogPin.P16, 90)
        basic.pause(4600)
        pins.servoWritePin(AnalogPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.clearScreen()
        radio.sendString("3")
    } else {
    	
    }
    garbage = serial.readBuffer(0)
    cmd = ""
})
