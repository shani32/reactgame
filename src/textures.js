import { TextureLoader } from "three";
import { wood, tree, stone, ground, groundGrass } from "./images";

const woodTexture = new TextureLoader().load(wood);
const treeTexture = new TextureLoader().load(tree);
const stoneTexture = new TextureLoader().load(stone);
const groundTexture = new TextureLoader().load(ground);
const groundGrassTexture = new TextureLoader().load(groundGrass);

export {
  woodTexture,
  treeTexture,
  stoneTexture,
  groundTexture,
  groundGrassTexture,
};
