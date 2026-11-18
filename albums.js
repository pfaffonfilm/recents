// first = most recent, i.e big banner; ohers smaller tiles underneath.
// so !!!rmber to put newest addition at the top!!!
//To add an album later, copy one block, change the details, and upload its photos. 
const albums = [
  {
    id: "recents",              // used in the link, no spaces
    label: "recents",   // text shown on the tile
    title: "halloween '26",
    folder: "pics/",           // folder the photos are in
    start: 66960002,           // first number (without leading zeros)
    end: 66960035,             // last number
    digits: 12,                 // total digits in the filename (000066960002 = 12)
    cover: 66960027
  },
  {
    id: "halloween '26",
    title: "halloween '26",
    folder: "pics/",     // change to your real folder name
    start: 66960002,                  // change to your real numbers
    end: 66960032,
    digits: 12                  
  },
  {
    id: "album_y",
    title: "occasion_y",
    folder: "occasion_y/",
    start: 1,
    end: 20,
    digits: 2
  }
];

// helper used by both pages: builds the file path for photo number n
function photoPath(album, n) {
  return album.folder + String(n).padStart(album.digits, "0") + ".jpg";
}
