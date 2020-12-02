import durotarArt from "./Orgrimmar/durotar.jpg";
import orgSounds from "./Orgrimmar/org.mp3";
import orc2 from "./Orgrimmar/orc.png";
import orc1 from "./Orgrimmar/orc3.png";
import city from "./Orgrimmar/gates.gif";
// Thunderbluff Resources
import tbSounds from "./tb/thebluff.mp3";
import tauren1 from "./tb/t2.png";
import tauren2 from "./tb/tauren.png";
import tbbg from "./tb/tbbg.jpg";
import tb from "./tb/tbluff.gif";
// battle imports
import battleSound from "./wrathgate/wrath.mp3";
// Ashenvale
import forestbg from "./ashenvale/magic2.jpg";
//import forest from "./ashenvale/forestgif.gif";
import forest from "./ashenvale/magicAlt.jpg";
import nelf1 from "./ashenvale/n2.png";
import nelf2 from "./ashenvale/nelf.png";
import magicForest from "./ashenvale/magic.mp3";
// Stormmwind
import stormwindGates from "./stormwind/gates2.gif";
import stormwindBg from "./stormwind/stormwindBg.jpg";
import human from "./stormwind/human.gif";
import banner from "./stormwind/banner.png";
import entrance from "./stormwind/entrance.mp3";
// IronForge
import ironforgeBg from "./ironforge/ironforge.jpg";
import ironforgeInside from "./ironforge/ironforgeInside.jpg";
import dwarf2 from "./ironforge/dw2.png";
import dwarf1 from "./ironforge/dwarf.png";
import ironEntrance from "./ironforge/ironentrance.mp3";
// undercity
import undercityBg from "./undercity/undercitybg2.jpg";
import undercard from "./undercity/undercard.jpg";
import forsaken from "./undercity/sylv.png";
import forsaken2 from "./undercity/forasken2.gif";
import undercityEntrance from "./undercity/undercity.mp3";
//teldrassil
import telbg from "./teldrassil/telbg.png";
import telcard from "./teldrassil/telcard1.jpg";
import tel1 from "./teldrassil/tel2.png";
//import tel2 from "./teldrassil/tel1.gif";
import telEntrance from "./teldrassil/tel.mp3";
// Travel Avatars
// thumbnails
import wooggy from "./Orgrimmar/woogy.gif";
import diablo from "./Orgrimmar/diablo.gif";
// Object with Modal props:
// background image
// card header image
// music
// residentimg1
//residentimg2
// comment section -> internal API request, filter other card responses => display comments
// avatars of toons (name,image,description of visit)
// location on page (wrapper div) {string : absolute, top: num, left: num}
// notCity Boolean
// cityName
// card color -> hexstring
// faction "Horde" : alliance

const locations_arr = [
  {
    city_name: "Orgrimmar",
    description:
      "Orgimmar, The savage home of the orcs. The first major city I visited in Azeroth and one of my favorites.",
    not_city: false,
    background_img: durotarArt,
    card_header_img: city,
    card_color: "#FFD6AE",
    city_music: orgSounds,
    resident_img_1: orc1,
    resident_img_2: orc2,
    avatar_img_1: wooggy,
    avatar_img_2: diablo,
    avatar_name_1: "Wooggy",
    avatar_name_2: "Diablo Spawn",
    avatar_description_1: "A common hangout at higher levels.",
    avatar_description_2: "Explored at level 1.",
    top_pos: 29,
    left_pos: 30,
    faction: "Horde",
  },
];
export default locations_arr;
