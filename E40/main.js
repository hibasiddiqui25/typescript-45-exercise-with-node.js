function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions and creating 3 variable with diffrent values 
var album1 = make_album("Hamza", "Album title 1");
var album2 = make_album("Usman", "Album title 2");
// calling a make_album function with thhird parameter
var album3 = make_album("Khalil", "Album title 3", 10);
// printing  value of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
