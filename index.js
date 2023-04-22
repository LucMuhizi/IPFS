const Moralis = require("moralis").default;
const fs = require("fs");
require("dotenv").config();

const fileUploads = [
    {
        path: "kakashi.jpg",
        content: fs.readFileSync("./kakashi.jpg", {encoding: "base64"})
    }
  ]

  async function uploadToIpfs(){

    await Moralis.start({
        apiKey: process.env.MORALIS_KEY
    })

    const res = await Moralis.EvmApi.ipfs.uploadFolder({
        abi: fileUploads
    })

    console.log(res.result)

}

uploadToIpfs();