# Sample Hardhat Project
This is a simple starter project that demonstrates the basics of working with Hardhat, a development environment for compiling, deploying, testing, and debugging Ethereum smart contracts.

The project includes:
1. A sample smart contract (Lock.sol)
2. A test for that contract
3. A Hardhat Ignition module to handle deployment

## 🛠 Tech Stack
1. Solidity
2. Hardhat
3. Hardhat Ignition

## 🚀 Getting Started
Clone the project:
```bash
git clone https://github.com/yourusername/sample-hardhat-project.git
cd sample-hardhat-project
```

Install dependencies:
```bash
npm install
```

## 🧪 Try These Tasks
Show available Hardhat tasks:
```bash
npx hardhat help
```

Run tests:
```bash
npx hardhat test
```

Run tests and report gas usage:
```bash
REPORT_GAS=true npx hardhat test
```

Start a local Hardhat network node:
```bash
npx hardhat node
```

Deploy contract using Ignition:
```bash
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

## 📁 Project Structure
```bash
contracts/
  Lock.sol

test/
  Lock.js

ignition/
  modules/
    Lock.js

hardhat.config.js
```

## 🪪 License
MIT

