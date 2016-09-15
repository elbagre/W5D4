function Cat (name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`;
};

buddy = new Cat("Buddy", "Greg");
pal = new Cat("Pal", "Greg");
guy = new Cat("Guy", "Greg");

console.log(buddy.cuteStatement());
console.log(guy.cuteStatement());
console.log(pal.cuteStatement());


Cat.prototype.cuteStatement = function () {
  return `Everyone loves ${this.name}`;
};

console.log(buddy.cuteStatement());
console.log(guy.cuteStatement());
console.log(pal.cuteStatement());

Cat.prototype.meow = function () {
  return `${this.name} is meowing, they're meowing!!!`;
};

buddy.meow = function () {
  return `${this.name} meowed so loud, they died.`;
};

console.log(buddy.meow());
console.log(guy.meow());
