let nftCollection = [];
function MINTNFT(name, company, power, speed, level) {
    let nft = {
        name: name,
        company:company,
        power: power,
        speed: speed,
        level: level
    };
    nftCollection.push(nft);
}
function LISTNFTs() {
     console.log("Welcome to Shivam's NFT Collection Game!");
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("\n____________ENTRY NFT CARD ___________________\n");
        console.log("Name: " + nftCollection[i].name);
        console.log("company: " + nftCollection[i].company);
        console.log("Power: " + nftCollection[i].power);
        console.log("Speed: " + nftCollection[i].speed);
        console.log("Level: " + nftCollection[i].level);
        console.log("____________///////////// _____________________");
    }
}
function getTotalNFTCount() {
    console.log("Total NFTs Minted so Far: " + nftCollection.length);

}
MINTNFT("TATA PUNCH ", "Electric", 120, 195, 2);
MINTNFT("HONDA", "DISEAL",130 , 196, 1);
MINTNFT("MAHINDRA", "PETROL", 175, 200, 1);
MINTNFT("HYDROPOWER", "HYDROGEN", 140, 180, 1);
LISTNFTs();
getTotalNFTCount();
