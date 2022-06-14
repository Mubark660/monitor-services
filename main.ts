music.playMelody("- - - - - - - - ", 120)
led.plot(0, 0)
led.stopAnimation()
if (true) {
	
}
bluetooth.startMagnetometerService()
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
bluetooth.startTemperatureService()
basic.showString("MONITOR SERVICES")
