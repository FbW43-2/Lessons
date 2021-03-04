//import Cryptr from "cryptr";
const Cryptr = require('cryptr');

const cryptr = new Cryptr("FBW43-2");

const encryptedWord = cryptr.encrypt('some word');

console.log(encryptedWord);

const originalWord = cryptr.decrypt("3d0292928935828b831b2b001a5be0beb714b9376163a2197494b9ecb1fc2a94968aac0752c1ee214ef9b74913b56b7be839a1fddb3c8bd2c062c7becf7e11b2ce3eaa8372a75ee83948e5226280a53d85d74e138b335571b60705a7c9a565629bd13bacfba09f03eb");
console.log(originalWord);


