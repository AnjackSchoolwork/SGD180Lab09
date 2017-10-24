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
		this.sprite.setAnimationSpeed(500)

		this.sprite.pauseAnimation()
		this.sprite.setCurrentCycle("down")
	}

	Update() {
		super.Update()
		if (keysDown[K_LEFT]) {
			this.sprite.setSpeed(1);
			this.sprite.playAnimation()
			this.sprite.setMoveAngle(270);
			this.sprite.setCurrentCycle("left");
		}
		if (keysDown[K_RIGHT]) {
			this.sprite.setSpeed(1);
			this.sprite.playAnimation()
			this.sprite.setMoveAngle(90);
			this.sprite.setCurrentCycle("right");
		}
		if (keysDown[K_UP]) {
			this.sprite.setSpeed(1);
			this.sprite.playAnimation()
			this.sprite.setMoveAngle(0);
			this.sprite.setCurrentCycle("up");
		}
		if (keysDown[K_DOWN]) {
			this.sprite.setSpeed(1);
			this.sprite.playAnimation()
			this.sprite.setMoveAngle(180);
			this.sprite.setCurrentCycle("down");
		}

		if (keysDown[K_SPACE]) {
			this.sprite.setSpeed(0);
			this.sprite.pauseAnimation();
			this.sprite.setCurrentCycle("down");
		}
		this.sprite.update()
	}

}