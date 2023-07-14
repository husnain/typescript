function make_album(artist: string = '', album: string = '', tracks: number = 0): object {
    return {
        artist: artist,
        album: album,
        tracks: tracks
    }
}

console.log(make_album('The Beatles', 'Abbey Road', 17));
console.log(make_album('The Beatles', 'Abbey Road'));
console.log(make_album('The Beatles'));