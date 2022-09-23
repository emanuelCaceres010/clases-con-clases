class Banda {
    members: string[];
    albums: object[];
    constructor(members: string[], albums: object[]){
        this.members = members;
        this.albums = albums;
    };
};
//le indicamos al constructor que albums tiene que recibir el tipo de dato object[], o sea, cualquier array de objetos. Esa es la única condición.

//Ahora, imaginemos que queremos ser más específicxs. En lugar de indicarle a albums que tiene que recibir un object[], podemos decirle que espere recibir otra clase, a la que le vamos a definir ciertas características.

//Veamos el ejemplo:

class Album {
    title: string;
    songs: string[];
    constructor(title, songs:string[]){
        this.title = title;
        this.songs = songs;
    };
};



class Banda2 {
    members: string[];
    albums: object[];
    constructor(members: string[], albums: Album[]){
        this.members = members;
        this.albums = albums;
    };
};

//function main(){
    const unAlbum= new Album ("album 1",[]);

    const unaBanda= new Banda2(["ema"], [unAlbum, unAlbum, unAlbum]);
    console.log(unaBanda.albums);
    console.log("un cambio");
//}

//main();
