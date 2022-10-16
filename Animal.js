class Animal{
    constructor(nome, idade, preco){
        this.nome  = nome;
        this.idade = idade;
        this.preco = preco; 
    }

    checarEstoque(){
        return 10;
    }   
}

class Cachorro extends Animal{
  
}

var dog =  new Cachorro("Dogão",5,500);
console.log(dog.checarEstoque());