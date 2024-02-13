// Write a JavaScript program that creates a class called 'Animal' with properties for species 
// and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' 
// that inherits from the 'Animal' class and adds an additional property for color. Override the 
// make sound method to include the dog's color. Create an instance of the 'Dog' class and make it 
// make its sound.

class Animal{
   constructor(species,sound){
    this.species=species
    this.sound=sound

   }
   makeanimalsound(){
    console.log("spiecie is ",this.species)
    console.log("sound like",this.sound)
   }
}
class Dog extends Animal{
    constructor(species,sound,color){
     super(species,sound)
     this.color=color
    }
    makeanimalsound(){
        super.makeanimalsound()
        console.log("color is ",this.color)
    }
}

let obj=new Dog("dog","bark","yellow")