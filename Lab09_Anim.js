
function Setup() {
	game = new Scene()

	background = new Sprite(game, "background.jpg", 800, 600)
	background.setPosition(400, 300)
	background.setSpeed(0)
	thePlayer = new Player(game, "rpg_sprite_walk.png", 192, 128, 100, 100)

	game.start()
}

function update() {
	game.clear()
	background.update()
	thePlayer.Update()
}