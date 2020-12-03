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
import dwarf1 from "./ironforge/dwarf.gif";
import ironEntrance from "./ironforge/ironentrance.mp3";
// undercity
import undercityBg from "./undercity/undercitybg21.jpg";
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
import starindas from "./Orgrimmar/starindas.png";
import rimeria from "./Orgrimmar/rimeria.png";

// crossraods
import barrensBg from "./crossroads/barrensbg.png";
import crosscard from "./crossroads/crossraodsCard.jpg";
import troll from "./crossroads/troll.gif";
import quill from "./crossroads/quill.png";
import bones from "./crossroads/bones.mp3";
// Ratchet
import ratbgBg from "./ratchet/ratchetbg.jpg";
import ratcard from "./ratchet/ratchetCard.jpg";
import pirate from "./ratchet/pirate.png";
import pirate2 from "./ratchet/pirate2.png";
import stv1 from "./ratchet/stv1.mp3";
//STV
import stvbg from "./stv/stvbg.jpg";
import stvcard from "./stv/stvcard.jpg";

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
  // Stranglethorn Vale/Booty BAy
  // Ratchet
  {
    city_name: "Stranglethorn Vale/Booty Bay",
    description:
      "The mid-high level jungle questing area. Strangely accessible by low levels via Ratchet. The Goblin city 'Booty Bay' in the South had a unique faction neutral auction house.",
    not_city: true,
    background_img: stvbg,
    card_header_img: stvcard,
    card_color: "#ccffb3",
    city_music: stv1,
    resident_img_1: pirate,
    resident_img_2: pirate2,
    avatar_img_1: wooggy,
    avatar_img_2: starindas,
    avatar_name_1: "Wooggy",
    avatar_name_2: "Starindas",
    avatar_description_1: "Fought in the Gurubashi arena.",
    avatar_description_2: "Sent items via auction house to Horde toons.",
    top_pos: 54,
    left_pos: 84,
    faction: "Horde",
  },
  {
    city_name: "Ratchet",
    description:
      "Near the Crossroads lies the Goblin town of Ratchet. A special place as low level heroes may jump the ship here to Booty Bay in curiosity. This action will rarely end well.",
    not_city: true,
    background_img: ratbgBg,
    card_header_img: ratcard,
    card_color: "#FFD6AE",
    city_music: stv1,
    resident_img_1: pirate,
    resident_img_2: pirate2,
    avatar_img_1: wooggy,
    avatar_img_2: diablo,
    avatar_name_1: "Wooggy",
    avatar_name_2: "Diablo Spawn",
    avatar_description_1: "Took the ship to Booty Bay often.",
    avatar_description_2: "First settlement spotted from starting zone.",
    top_pos: 36,
    left_pos: 29,
    faction: "Horde",
  },

  // daCrossroads
  {
    city_name: "The Crossroads",
    description:
      "In the center of the Barrens lies the Crossroads. A hub for intermediate Horde heroes and a common point of attack for high level Alliance enemies.",
    not_city: true,
    background_img: barrensBg,
    card_header_img: crosscard,
    card_color: "#FFD6AE",
    city_music: bones,
    resident_img_1: troll,
    resident_img_2: quill,
    avatar_img_1: wooggy,
    avatar_img_2: diablo,
    avatar_name_1: "Wooggy",
    avatar_name_2: "Diablo Spawn",
    avatar_description_1: "Location for finding tanking jobs.",
    avatar_description_2: "Major quest hub. Battled local Quillboar",
    top_pos: 34,
    left_pos: 25,
    faction: "Horde",
  },

  // Org
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
  //Thunder Bluff
  {
    city_name: "Thunder Bluff",
    description:
      "Thunder Bluff. High above the serene plains of Mulgore lies this beautiful city. Calm, tribal themes and music make this my favorite city in Azeroth.",
    not_city: false,
    background_img: tbbg,
    card_header_img: tb,
    card_color: "#ccffb3",
    city_music: tbSounds,
    resident_img_1: tauren1,
    resident_img_2: tauren2,
    avatar_img_1: wooggy,
    avatar_img_2: diablo,
    avatar_name_1: "Wooggy",
    avatar_name_2: "Diablo Spawn",
    avatar_description_1: "Born in nearby Mulgore.",
    avatar_description_2: "A refuge from the nearby Barrens chat.",
    top_pos: 36,
    left_pos: 20,
    faction: "Horde",
  },
  // Ashenvale
  {
    city_name: "Ashenvale Forest",
    description:
      "The magical forest of Ashenvale. Words cannot describe the wonder of entering the deep groves for the first time. A dangerous place for recent graduates of the Barrens.",
    not_city: true,
    background_img: forestbg,
    card_header_img: forest,
    card_color: "#acccfb",
    city_music: magicForest,
    resident_img_1: nelf1,
    resident_img_2: nelf2,
    avatar_img_1: starindas,
    avatar_img_2: diablo,
    avatar_name_1: "Starindas",
    avatar_name_2: "Diablo Spawn",
    avatar_description_1: "Explored in search of a pet to tame.",
    avatar_description_2: "Fought a predatory cat on arrival. Lost.",
    top_pos: 27,
    left_pos: 25,
    faction: "Alliance",
  },
  // Stormwind
  {
    city_name: "Stormwind",
    description:
      "The capital city of the Alliance. A Majestic city seated in the foothills above GoldShire. Deep feelings of awe greet you as you enter the gates.",
    not_city: false,
    background_img: stormwindBg,
    card_header_img: stormwindGates,
    card_color: "#324873",
    city_music: entrance,
    resident_img_1: human,
    resident_img_2: banner,
    avatar_img_1: starindas,
    avatar_img_2: rimeria,
    avatar_name_1: "Starindas",
    avatar_name_2: "Rimeria",
    avatar_description_1: "Migrated from Teldrassil to level with friends",
    avatar_description_2: "Followed Starindas and the Light here.",
    top_pos: 46,
    left_pos: 83,
    faction: "Alliance",
  },
  // Ironforge
  {
    city_name: "Ironforge",
    description:
      " The great capital of the Dwarves. Located deep beneath a mountain it was very visually appealing. During the Burning Crusade most high level players would loiter here to duel outside or in one of the glitched areas in the city.",
    not_city: false,
    background_img: ironforgeBg,
    card_header_img: ironforgeInside,
    card_color: "#87898C",
    city_music: ironEntrance,
    resident_img_1: dwarf1,
    resident_img_2: dwarf2,
    avatar_img_1: starindas,
    avatar_img_2: rimeria,
    avatar_name_1: "Starindas",
    avatar_name_2: "Rimeria",
    avatar_description_1: "High level hangout and dueling arena.",
    avatar_description_2: "Arrived later, left due to its low population.",
    top_pos: 37,
    left_pos: 87,
    faction: "Alliance",
  },
  // Undercity
  {
    city_name: " The Undercity",
    description:
      "Deep under the ruins of Lordaeron lies the forsaken capital Undercity. Bizarre experiments and undead creatures found here bring less terror than getting stuck in a small tunnel as a Tauren.",
    not_city: true,
    background_img: undercityBg,
    card_header_img: undercard,
    card_color: "#2F4F4F",
    city_music: undercityEntrance,
    resident_img_1: forsaken,
    resident_img_2: forsaken2,
    avatar_img_1: wooggy,
    avatar_img_2: diablo,
    avatar_name_1: "Wooggy",
    avatar_name_2: "Diablo",
    avatar_description_1: "Avoided mostly. Big body so got stuck easily.",
    avatar_description_2: "Often took the zepplin from Durotar for visits.",
    top_pos: 21,
    left_pos: 84,
    faction: "Horde",
  },
  // Teldrassil
  {
    city_name: " Teldrassil",
    description:
      "Teldrassil is an island and great tree off Kalimdor's northern coast.It was the home of the night elves and a stunning testament to the power of their magic.",
    not_city: true,
    background_img: telbg,
    card_header_img: telcard,
    card_color: "#acccfb",
    city_music: telEntrance,
    resident_img_1: tel1,
    resident_img_2: nelf2,
    avatar_img_1: starindas,
    avatar_img_2: diablo,
    avatar_name_1: "Starindas",
    avatar_name_2: "Diablo",
    avatar_description_1: "Place of birth. Completed early training.",
    avatar_description_2: "Once swam here from Darkshore. Drowned.",
    top_pos: 10,
    left_pos: 15,
    faction: "Alliance",
  },
];
export default locations_arr;
