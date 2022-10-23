enum Pet { Cat, Dog, Rabbit }
console.log(Pet.Cat, Pet.Dog, Pet.Rabbit) // 0, 1, 2

let Tom: Pet = Pet.Cat;
console.log(Tom); // 0

Tom = Pet.Dog;
console.log(Tom); // 1
Tom = 12;
console.log(Tom); // 12 → 0, 1, 2以外の値も入ってしまう！！ 

enum Animal {
  Lion = 'lion',
  Monkey = 'monkey',
  Giraffe = 'giraffe',
}

let UenoZoo: Animal = Animal.Lion;
UenoZoo = 'mouse'; // Type "mouse" is not assignable to type 'Pet'.
UenoZoo = 'monkey'; // Type "monkey" is not assignable to type 'Pet'.
console.log(UenoZoo);