# Tokenized Voting System

A full-stack decentralized application for tokenized voting built on Ethereum. This project allows users to create proposals, vote on them using tokens, and view voting results in a transparent manner.

## Overview

This repository contains a complete implementation of a tokenized voting system with:

- Smart contracts for voting and token management
- Frontend application for user interaction
- Backend services for data processing

## Features

- Create and manage voting proposals
- Token-based voting system (1 token = 1 vote)
- Secure and transparent voting process
- Real-time voting results
- User-friendly interface

## Technology Stack

- **Blockchain**: Ethereum, Solidity
- **Frontend**: React.js
- **Backend**: Node.js
- **Smart Contract Development**: Hardhat
- **Testing**: Chai, Mocha

## Project Structure

- `/contracts`: Solidity smart contracts
- `/frontend`: React-based user interface
- `/scripts`: Deployment and utility scripts
- `/test`: Smart contract tests

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- MetaMask or another Ethereum wallet

### Installation

1. Clone the repository:

```bash
git clone https://github.com/alfonsotech/full-stack-tokenized-voting-encode4.git
cd full-stack-tokenized-voting-encode4
```

2. Install dependencies:

```bash
npm install
```

3. Compile the smart contracts:

```bash
npx hardhat compile
```

4. Deploy to a local network:

```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

5. Start the frontend:

```bash
cd frontend
npm install
npm start
```

## Usage

1. Connect your wallet to the application
2. Acquire voting tokens
3. Browse active proposals
4. Cast your votes
5. View results in real-time

## Testing

Run the test suite:

```bash
npx hardhat test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- Encode Club for inspiration and support
- Ethereum community for resources and tools
