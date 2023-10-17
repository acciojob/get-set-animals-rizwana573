//complete this code
class Animal {
	Animal(species){
		this.species = species;
		get species(){
			return this.species;
		}
	}
	makeSound(sound){
		console.log(sound);
	}
}

class Dog extends Animal {
	let bark() = makeSound("woof");
}

class Cat extends Animal {
	let purr() = makeSound("purr");
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
