
function Setup() {
	game = new Scene()

	thePlayer = new Player(game, "rpg_sprite_walk.png", 192, 128, 100, 100)

	game.start()
}

function update() {
	game.clear()
	thePlayer.Update()
}