class Dado{
    constructor(){
        this.faces = 0;
    }

    Rolar(){
        console.log("Resultado do dado: " + this.GetRandomIntInclusive(1,this.faces));
    }

    GetRandomIntInclusive(min, max)  {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}

var d6 = new Dado(6);
d6.Rolar();