const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";
const merkleTree = new MerkleTree(niceList);

async function main() {
  //Input name in front of command e.g node client/index "Norman Block"
  const name = process.argv[2];
  const index = niceList.indexOf(name);
  const proof = merkleTree.getProof(index);
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name,
    proof,
  });
  console.log({ gift });
}
main();
