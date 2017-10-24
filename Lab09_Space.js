
function Setup() {
	game = new Scene()
	game.setBG("black")

	entity_list = []

	entity_list.push(new Player(game, "ship.png", 25, 25, 400, 200, 1))
	entity_list.push(new Planet(game, "planet.png", 50, 50, 400, 300, 1000))

	game.start()
}

function update() {
	game.clear()
	for (var index in entity_list) {
		entity_list[index].Update(entity_list)
	}

}


