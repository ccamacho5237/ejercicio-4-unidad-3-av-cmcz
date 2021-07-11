radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(años)
    basic.showNumber(lobos)
    basic.showNumber(venpobdef)
})
input.onButtonPressed(Button.A, function () {
    while (venados > 0) {
        años += años + 1
        venpobdef += venados
        while (venpobdef > 0) {
            azar = randint(0, 100)
            if (azar > 0 && azar <= 18) {
                venados += venados + 1
            } else if (azar > 18 && azar <= 75) {
                venados += venados - 1
            } else {
                venpobdef += venpobdef - 1
                basic.showNumber(venpobdef)
            }
        }
    }
    basic.showNumber(años)
})
let azar = 0
let venpobdef = 0
let venados = 0
let años = 0
let lobos = 0
radio.setGroup(1)
lobos = 3
años = 0
venados = 200
