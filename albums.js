// first = most recent, i.e big banner; ohers smaller tiles underneath.
// so !!!rmber to put newest addition at the top!!!
//To add an album later, copy one block, change the details, and upload its photos. 
const albums = [
  {
    id: "faves",              // used in the link, no spaces
    label: "faves",   // text shown on the tile
    title: "highlights",
    folder: "pics/",           // folder the photos are in
    photos: [66960007, 66960014, 66960023, 66960019, 66960020, 66960022, 66960025, 66960028, 66960029],
    digits: 12,                 // total digits in the filename (000066960002 = 12)
    cover: 66960027
  },
  {
    id: "nov",
    title: "nov",
    folder: "pics/",
    start: 66960033,
    end: 66960035,
    digits: 12
  },
  {
    id: "halloween",
    title: "halloween",
    folder: "pics/",     // change to your real folder name
    start: 66960002,                  // change to your real numbers
    end: 66960032,
    digits: 12,
    cover: 66960029
  },
  {
    id: "archive",
    title: "archive",
    folder: "pics/archive/",
    start: 1,
    end: 406,
    digits: 4,
    cover: 7
  }
];

// helper used by both pages: builds the file path for photo number n
function photoPath(album, n) {
  return album.folder + String(n).padStart(album.digits, "0") + ".jpg";
}
