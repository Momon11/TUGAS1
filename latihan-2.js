class Enemys {
  constructor(name) {
    this.name = name;
    this.speed = 2;
    this.attack = 5;
    this.health = 100;
    this.defend = 2;
  }

  attackEnemy() {
    console.log('Enemy attack! Attack = 5');
  }

  walk() {
    console.log('Enemy walk, speed = 2');
  }

  dash() {
    console.log('Enemy dash, speed = 5');
  }

  getInformation() {
    console.log(`${this.name} memiliki speed=${this.speed}, attack=${this.attack}, health=${this.health}, dan defend=${this.defend}`);
  }
}


const naruto = new Enemys('Naruto');
naruto.walk();
naruto.attackEnemy();
naruto.dash();
naruto.getInformation();
