// Wrathgate
import gate from "../locationCards/wrathgate/wrathgate.jpg";
import wrath from "../locationCards/wrathgate/wrath.mp3";
// Gurubashi
import gurubashi from "../locationCards/gurubashi/gurubashi.gif";
import stv from "../locationCards/gurubashi/stv.mp3";
import stvbg from "../locationCards/stv/stvbg.jpg";
// thumbnails
import wooggy from "../locationCards/Orgrimmar/woogy.gif";
import diablo from "../locationCards/Orgrimmar/diablo.gif";
import starindas from "../locationCards/Orgrimmar/starindas.png";
import rimeria from "../locationCards/Orgrimmar/rimeria.png";
import syl from "../locationCards/undercity/syl.mp3";
import scar from "../locationCards/undercity/sc.webp";
import cull from "../locationCards/undercity/maxresdefault.gif";
import flood from "../locationCards/undercity/flood.mp3";
import tocbg from "../locationCards/toc/tocbg.jpg";
import tocmusic from "../locationCards/toc/toc.mp3";
import tbcbg from "../assets/tbc.jpg";

const battlesArr = [
  {
    battleName: "Through the Dark Portal",
    battleBg: tbcbg,
    battleCardImg: "",
    battleSounds: "",
    battleDescription:
      "Going through the Dark Portal transports heroes to World of Warcrafts first expansion: The Burning Crusade. Here you battle Illidan Stormrage on the Shattered remains of the planet Draenor.",
    cardColor: "#330033",
    posTop: 55,
    posLeft: 83,
    cardVid: "https://www.youtube.com/embed/IBHL_-biMrQ",
    avatar_name: "Starindas",
    avatar_description:
      "The first of my characters to venture through and do battle in this expansion.",
    avatar_img: starindas,
  },
  {
    battleName: "The Fall of the Lich king",
    battleBg: gate,
    battleCardImg: false,
    battleSounds: tocmusic,
    battleDescription:
      "One of the greatest fantasy characters, Arthas the Lich King finally fell due to the combined efforts of Horde and Alliance heroes.",
    cardColor: "#2F4F4F",
    posTop: 7,
    posLeft: 44,
    cardVid: "https://www.youtube.com/embed/qAIrj_Vqdfc",
    avatar_name: "Wooggy",
    avatar_description:
      "Battled half way to the Frozen Throne only to be cruelly pulled away by real world obligations.",
    avatar_img: wooggy,
  },
  {
    battleName: "Trial of the Crusader",
    battleBg: tocbg,
    battleCardImg: false,
    battleSounds: tocmusic,
    battleDescription:
      "At the frozen roof of the world the pinnacle of my raiding career was reached. Here I battled beasts and heroes of the Alliance in the crusade against the Lich King.",
    cardColor: "#c19a6b",
    posTop: 4,
    posLeft: 49,
    cardVid: "https://www.youtube.com/embed/q2ktWXdeh4Y",
    avatar_name: "Wooggy",
    avatar_description:
      "Led groups of adventurers against the foul beasts of Northrend.",
    avatar_img: wooggy,
  },
  // Wrathgate
  {
    battleName: "Battle Of the Wrathgate",
    battleBg: gate,
    battleCardImg: false,
    battleSounds: wrath,
    battleDescription:
      "The Infamous battle of the Wrathgate. Rest in Peace Highlord Bolvar and Saufang the Younger. A gritty experience for any to survive.",
    cardColor: "#2F4F4F",
    posTop: 10,
    posLeft: 50,
    cardVid: "https://www.youtube.com/embed/LwngFEIg8Kw",
    avatar_name: "Wooggy",
    avatar_description: "Fought with honour for the horde.",
    avatar_img: wooggy,
  },
  {
    battleName: "The Gurubashi Arena",
    battleBg: stvbg,
    battleCardImg: gurubashi,
    battleSounds: stv,
    battleDescription:
      "As the rules of a PvE world are no players from opposing factions may attack each other without prior warning, peace is common. Unfortunately entering the Gurubashi Arena forgoes such rules. Bloodshed between Horde and Alliance quickly entails.",
    cardColor: "#719964",
    posTop: 57,
    posLeft: 73,
    cardVid: "",
    avatar_name: "Starindas",
    avatar_description: "Mercilessly attacked by Horde savages",
    avatar_img: starindas,
  },
  {
    battleName: "The Culling of Strathholme",
    battleBg: cull,
    battleCardImg: "",
    battleSounds: flood,
    battleDescription:
      "Attempting to halt the plague of Lordareon prince Arthas commits genocide on Stratholme. This series of events took place before the time period of World of Warcraft but is relived by going back in time with the help of the Bronze Dragons.",
    cardColor: "#324873",
    posTop: 22,
    posLeft: 83,
    cardVid: "https://www.youtube.com/embed/Ie7M4WeC8nA",
    avatar_name: "Rimeria",
    avatar_description: "A paladin learns of his brother's mistake",
    avatar_img: rimeria,
  },
  {
    battleName: "The Path of the Damned",
    battleBg: scar,
    battleCardImg: "",
    battleSounds: syl,
    battleDescription:
      "The High Elves face the fury of Arthas's undead army. Lady Sylvannas fights bravely but falls and is risen as a slave of undeath. Years later returning her necklace will result in the events being recounted in song.",
    cardColor: "#2F4F4F",
    posTop: 18,
    posLeft: 85,
    cardVid: "https://www.youtube.com/embed/yAdXwEz5NTI",
    avatar_name: "Diablo Spawn",
    avatar_description: "Shed tears at The Queen's song",
    avatar_img: diablo,
  },
];
export default battlesArr;
