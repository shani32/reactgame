import { NearestFilter, TextureLoader } from "three";
import { wood, tree, stone, ground, groundGrass } from "./images";

const woodTexture = new TextureLoader().load(wood);
const treeTexture = new TextureLoader().load(tree);
const stoneTexture = new TextureLoader().load(stone);
const groundTexture = new TextureLoader().load(ground);
const groundGrassTexture = new TextureLoader().load(groundGrass);

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
