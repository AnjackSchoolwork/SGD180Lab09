class Entity {

	constructor(scene, image_file, width, height, x_pos, y_pos) {
		this.sprite = new Sprite(scene, image_file, width, height)
		this.sprite.setPosition(x_pos, y_pos)
		this.sprite.setSpeed(0)

	}

	Update() {

	}
}

class Player extends Entity {

	constructor() {
		super(...arguments)

		this.sprite.loadAnimation(192, 128, 24, 32)
		this.sprite.generateAnimationCycles()
		this.sprite.renameCycles(new Array("down", "up", "left", "right"))
		this.sprite.setAnimationSpeed(300)

		this.sprite.pauseAnimation()
		this.sprite.setCurrentCycle("down")

		this.y_mov = 0
		this.x_mov = 0
	}

	Update() {
		super.Update()

		this.sprite.setSpeed(5)
		this.sprite.playAnimation()
		
		this.setMoveState()

		if (this.x_mov < 0) {
			this.sprite.setMoveAngle(270)
			this.sprite.setCurrentCycle("left")
		}
		else if (this.x_mov > 0) {
			this.sprite.setMoveAngle(90)
			this.sprite.setCurrentCycle("right")
		}
		else if (this.y_mov < 0) {
			this.sprite.setMoveAngle(0)
			this.sprite.setCurrentCycle("up")
		}
		else if (this.y_mov > 0) {
			this.sprite.setMoveAngle(180)
			this.sprite.setCurrentCycle("down")
		}
		else {
			this.sprite.setSpeed(0)
			this.sprite.pauseAnimation()
		}

		this.sprite.update()
	}

	setMoveState() {

		this.x_mov = 0
		this.y_mov = 0


		if (keysDown[K_LEFT]) {
			if (this.x_mov > -1) {
				this.x_mov--
			}
		}
		if (keysDown[K_RIGHT]) {
			if (this.x_mov < 1) {
				this.x_mov++
			}
		}
		if (keysDown[K_UP]) {
			if (this.y_mov > -1) {
				this.y_mov--
			}
		}
		if (keysDown[K_DOWN]) {
			if (this.y_mov < 1) {
				this.y_mov++
			}
		}

	}

}