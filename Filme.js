class Filme{
    constructor(title,year,genre,director,duration){
        this.title  = title;
        this.year   = year;
        this.genre = genre;
        this.director = director;
        this.cast = [];
        this.duration = director;
    }

    reproduce(){
        console.log("Reproduzindo...");
    }

    pause(){
        console.log("Pausado ||");
    }

    advance(){
        console.log("Avançar >>");
    }

    close(){
        console.log("Fechar X");
    }


    Record(){
        console.log("Título: " + this.title);
        console.log("Ano: " + this.year);
        console.log("Gênero: " + this.genre);
        this.reproduce();
        this.advance();
    }
}

var vingadores = new Filme("Vingadores",2022,"Ação","José","2h");
vingadores.Record();
