const main = async () => {
  
    const bankContractFactory = await hre.ethers.getContractFactory("Bank");
    const bankContract = await bankContractFactory.deploy();
    await bankContract.deployed();
  
    console.log("Bank address: ", bankContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();