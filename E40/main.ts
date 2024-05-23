function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title:album_title,
    };

    if (tracks !== undefined){
album.tracks = tracks;
    }

    return album;
}

// calling three functions and creating 3 variable with diffrent values 

let album1 = make_album("Hamza", "Album title 1");
let album2 = make_album("Usman", "Album title 2");

// calling a make_album function with thhird parameter
let album3 = make_album("Khalil", "Album title 3", 10)

// printing  value of our object created my function

console.log(album1);
console.log(album2);
console.log(album3);


