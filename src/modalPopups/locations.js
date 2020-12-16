import durotarArt from "../locationCards/Orgrimmar/durotar.jpg";
import orgSounds from "../locationCards/Orgrimmar/org.mp3";
import orc2 from "../locationCards/Orgrimmar/orc.png";
import orc1 from "../locationCards/Orgrimmar/orc3.png";
import city from "../locationCards/Orgrimmar/gates.gif";
// Thunderbluff Resources
import tbSounds from "../locationCards/tb/thebluff.mp3";
import tauren1 from "../locationCards/tb/t2.png";
import tauren2 from "../locationCards/tb/tauren.png";
import tbbg from "../locationCards/tb/tbbg.jpg";
import tb from "../locationCards/tb/tbluff.gif";
// Ashenvale
import forestbg from "../locationCards/ashenvale/magic2.jpg";
//import forest from "../ashenvale/forestgif.gif";
import forest from "../locationCards/ashenvale/magicAlt.jpg";
import nelf1 from "../locationCards/ashenvale/n2.png";
import nelf2 from "../locationCards/ashenvale/nelf.png";
import magicForest from "../locationCards/ashenvale/magic.mp3";
// Stormmwind
import stormwindGates from "../locationCards/stormwind/gates2.gif";
import stormwindBg from "../locationCards/stormwind/stormwindBg.jpg";
import human from "../locationCards/stormwind/human.gif";
import banner from "../locationCards/stormwind/banner.png";
import entrance from "../locationCards/stormwind/entrance.mp3";
// IronForge
import ironforgeBg from "../locationCards/ironforge/ironforge.jpg";
import ironforgeInside from "../locationCards/ironforge/ironforgeInside.jpg";
import dwarf2 from "../locationCards/ironforge/dw2.png";
import dwarf1 from "../locationCards/ironforge/dwarf.gif";
import ironEntrance from "../locationCards/ironforge/ironentrance.mp3";
// undercity
import undercityBg from "../locationCards/undercity/undercitybg21.jpg";
import undercard from "../locationCards/undercity/undercard.jpg";
import forsaken from "../locationCards/undercity/sylv.png";
import forsaken2 from "../locationCards/undercity/forasken2.gif";
import undercityEntrance from "../locationCards/undercity/undercity.mp3";
//teldrassil
import telbg from "../locationCards/teldrassil/telbg.png";
import telcard from "../locationCards/teldrassil/telcard1.jpg";
import tel1 from "../locationCards/teldrassil/tel2.png";
import telEntrance from "../locationCards/teldrassil/tel.mp3";
// Travel Avatar
// thumbnails
import wooggy from "../locationCards/Orgrimmar/woogy.gif";
import diablo from "../locationCards/Orgrimmar/diablo.gif";
import starindas from "../locationCards/Orgrimmar/starindas.png";
import rimeria from "../locationCards/Orgrimmar/rimeria.png";
// crossraods
import barrensBg from "../locationCards/crossroads/barrensbg.png";
import crosscard from "../locationCards/crossroads/crossraodsCard.jpg";
import troll from "../locationCards/crossroads/troll.gif";
import quill from "../locationCards/crossroads/quill.png";
import bones from "../locationCards/crossroads/bones.mp3";
// Ratchet
import ratbgBg from "../locationCards/ratchet/ratchetbg.jpg";
import ratcard from "../locationCards/ratchet/ratchetCard.jpg";
import pirate from "../locationCards/ratchet/pirate.png";
import pirate2 from "../locationCards/ratchet/pirate2.png";
import stv1 from "../locationCards/ratchet/stv1.mp3";
//STV
import stvbg from "../locationCards/stv/stvbg.jpg";
import stvcard from "../locationCards/stv/stvcard.jpg";
// ZA
import zabg from "../locationCards/za/zabg.gif";
import zamusic from "../locationCards/za/zamusic.mp3";
import zacard from "../locationCards/za/zacard.jpg";

const locations_arr = [
  {
    city_name: "Zul'Aman",
    description:
      "Tucked away in between the Arathi Highlands and the High Elven kingdoms lies the ancient home of the forest trolls. Stay away from the voodoo.",
    not_city: true,
    background_img: zabg,
    card_header_img: zacard,
    card_color: "#2F4F4F",
    city_music: zamusic,
    resident_img_1: troll,
    resident_img_2: tauren1,
    avatar_img_1: wooggy,
    avatar_img_2: starindas,
    avatar_name_1: "Wooggy",
    avatar_name_2: "Starindas",
    avatar_description_1:
      "Took on the spirit of the bear and battled the savage trolls for the Horde.",
    avatar_description_2:
      "A major raiding location. Topped many damage meters here.",
    top_pos: 17,
    left_pos: 98,
    faction: "Horde",
    rating: [1, 1, 1],
  },
  {
    city_name: "Stranglethorn Vale",
    description:
      "The mid-high level jungle questing area. Strangely accessible by low levels via Ratchet. The Goblin city 'Booty Bay' in the South had a unique faction neutral auction house.",
    not_city: true,
    background_img: stvbg,
    card_header_img: stvcard,
    card_color: "#228B22",
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
    rating: [1, 1, 1],
  },
  {
    city_name: "Ratchet",
    description:
      "Near the Crossroads lies the Goblin town of Ratchet. A special place as low level heroes may jump the ship here to Booty Bay in curiosity. This action will rarely end well.",
    not_city: true,
    background_img: ratbgBg,
    card_header_img: ratcard,
    card_color: "#F4A460",
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
    rating: [1],
  },
  // daCrossroads
  {
    city_name: "The Crossroads",
    description:
      "In the center of the Barrens lies the Crossroads. A hub for intermediate Horde heroes and a common point of attack for high level Alliance enemies.",
    not_city: true,
    background_img: barrensBg,
    card_header_img: crosscard,
    card_color: "#F4A460",
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
    rating: [1, 1, 1, 1],
  },

  // Org
  {
    city_name: "Orgrimmar",
    description:
      "Orgimmar, The savage home of the orcs. The first major city I visited in Azeroth and one of my favorites.",
    not_city: false,
    background_img: durotarArt,
    card_header_img: city,
    card_color: "#F4A460",
    city_music: orgSounds,
    resident_img_1: orc1,
    resident_img_2: orc2,
    avatar_img_1: wooggy,
    avatar_img_2: diablo,
    avatar_name_1: "Wooggy",
    avatar_name_2: "Diablo Spawn",
    avatar_description_1:
      "A common hangout at higher levels. A great place to find pick up groups in need of a tank.",
    avatar_description_2:
      "Explored at level 1. The first city in Azeroth I saw. Amazing experience.",
    top_pos: 29,
    left_pos: 30,
    faction: "Horde",
    rating: [1, 1, 1],
  },
  //Thunder Bluff
  {
    city_name: "Thunder Bluff",
    description:
      "Thunder Bluff. High above the serene plains of Mulgore lies this beautiful city. Calm, tribal themes and music make this my favorite city in Azeroth.",
    not_city: false,
    background_img: tbbg,
    card_header_img: tb,
    card_color: "#228B22",
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
    rating: [1, 1, 1, 1],
  },
  // Ashenvale
  {
    city_name: "Ashenvale Forest",
    description:
      "The magical forest of Ashenvale. Words cannot describe the wonder of entering the deep groves for the first time. A dangerous place for recent graduates of the Barrens.",
    not_city: true,
    background_img: forestbg,
    card_header_img: forest,
    card_color: "#324873",
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
    rating: [1, 1, 1],
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
    avatar_description_1:
      "Migrated from Teldrassil to level with real life friends.",
    avatar_description_2:
      "Followed Starindas and the guidance of the Light here.",
    top_pos: 46,
    left_pos: 83,
    faction: "Alliance",
    rating: [1, 1, 1],
  },
  // Ironforge
  {
    city_name: "Ironforge",
    description:
      " The great capital of the Dwarves. Located deep beneath a mountain it was very visually appealing. During the Burning Crusade most high level players would loiter here to duel outside or in one of the glitched areas in the city.",
    not_city: false,
    background_img: ironforgeBg,
    card_header_img: ironforgeInside,
    card_color: "#2F4F4F",
    city_music: ironEntrance,
    resident_img_1: dwarf1,
    resident_img_2: dwarf2,
    avatar_img_1: starindas,
    avatar_img_2: rimeria,
    avatar_name_1: "Starindas",
    avatar_name_2: "Rimeria",
    avatar_description_1: "High level hangout and dueling arena.",
    avatar_description_2:
      "Arrived later, left due to its low population in later years.",
    top_pos: 37,
    left_pos: 87,
    faction: "Alliance",
    rating: [1],
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
    avatar_description_1:
      "Avoided mostly. Big body so got stuck in the small tunnels easily.",
    avatar_description_2:
      "Often took the zepplin from Durotar for visits. Enjoyed the general gothic atmosphere",
    top_pos: 21,
    left_pos: 84,
    faction: "Horde",
    rating: [1],
  },
  // Teldrassil
  {
    city_name: " Teldrassil",
    description:
      "Teldrassil is an island and great tree off Kalimdor's northern coast.It was the home of the night elves and a testament to the power of their magic.",
    not_city: true,
    background_img: telbg,
    card_header_img: telcard,
    card_color: "#324873",
    city_music: telEntrance,
    resident_img_1: tel1,
    resident_img_2: nelf2,
    avatar_img_1: starindas,
    avatar_img_2: diablo,
    avatar_name_1: "Starindas",
    avatar_name_2: "Diablo Spawn",
    avatar_description_1:
      "Place of birth. Completed early training. Failed to find a suitable pet here.",
    avatar_description_2: "Once swam here from Darkshore. Drowned.",
    top_pos: 10,
    left_pos: 15,
    faction: "Alliance",
    rating: [1, 1],
  },
];
export default locations_arr;
