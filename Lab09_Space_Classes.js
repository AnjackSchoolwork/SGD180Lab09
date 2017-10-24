class Entity {

	constructor(scene, image_file, image_width, image_height, x_pos, y_pos, new_mass) {
		this.sprite = new Sprite(scene, image_file, image_height, image_width)
		this.sprite.setSpeed(0)
		this.sprite.setBoundAction(CONTINUE)
		this.sprite.setPosition(x_pos, y_pos)

		this.mass = new_mass

	}



	Update() {
		this.sprite.update()
	}

}

class Player extends Entity {

	constructor() {
		super(...arguments)

		this.sprite.setSpeed(3)
		this.sprite.setBoundAction(CONTINUE)
		
	}

	Update() {
		if (keysDown[K_LEFT]) {
			this.sprite.changeImgAngleBy(-5)
		}
		if (keysDown[K_RIGHT]) {
			this.sprite.changeImgAngleBy(5)
		}
		if (keysDown[K_UP]) {
			this.sprite.addVector(this.sprite.getImgAngle(), .1)
		}
		if (keysDown[K_SPACE]) {
			this.fireMissile()
		}


		super.Update()
	}

	fireMissile() {
		var missile = new Missile(game, "missile.png", 20, 30, this.sprite.x, this.sprite.y, 0)
		entity_list.push(missile)
		missile.sprite.setAngle(this.sprite.getImgAngle())
		missile.Fire()
	}

}

class Planet extends Entity {

	Update(entity_list) {
		super.Update(entity_list)
		for (var index in entity_list) {
			var that = entity_list[index]
			if (that != this) {
				var distance = that.sprite.distanceTo(this.sprite)
				var angle = this.sprite.angleTo(that.sprite)
				var force = (this.mass * that.mass) / (distance * distance)
				that.sprite.addVector(angle, force)
			}
		}
	}

}

class Missile extends Entity {

	constructor() {
		super(...arguments)
		this.sprite.hide()
	}

	Fire() {
		this.sprite.show()
		this.sprite.setSpeed(15)
		this.sprite.setBoundAction(DIE)
	}
}