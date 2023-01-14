import { NearestFilter, TextureLoader } from "three";
import { woodI, treeI, stoneI, groundI, groundGrassI } from "./images";

const woodTexture = new TextureLoader().load(woodI);
const treeTexture = new TextureLoader().load(treeI);
const stoneTexture = new TextureLoader().load(stoneI);
const groundTexture = new TextureLoader().load(groundI);
const groundGrassTexture = new TextureLoader().load(groundGrassI);

woodTexture.magFilter = NearestFilter;
treeTexture.magFilter = NearestFilter;
stoneTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundGrassTexture.magFilter = NearestFilter;

export {
  woodTexture,
  treeTexture,
  stoneTexture,
  groundTexture,
  groundGrassTexture,
};
