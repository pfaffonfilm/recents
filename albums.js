// first = most recent, i.e big banner; ohers smaller tiles underneath.
// so !!!rmber to put newest addition at the top!!!
//To add an album later, copy one block, change the details, and upload its photos. 
const albums = [
  {
    id: "faves",             
    label: "faves",  
    title: "faves",
    folder: "pics/",           
    photos: [66960007, 66960014, 66960023, 66960019, 66960020, 66960022, 66960025, 66960028, 66960029, "000017", "000025", "000082", "000091", "000096"],
    digits: 12,                 
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
    folder: "pics/",    
    start: 66960000,               
    end: 66960032,
    digits: 12,
    cover: 66960029
  },
  {
    id: "oct",
    title: "oct",
    folder: "pics/",    
    start: 1,               
    end: 90,
    digits: 6,
    cover: 30
  },
  {
    id: "'26",
    title: "'26",
    folder: "pics/",    
    start: 91,               
    end: 99,
    digits: 6,
    cover: 93
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
