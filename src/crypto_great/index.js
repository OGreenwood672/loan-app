import Web3 from 'web3';
import "@ethersproject/shims"
// import { ethers } from 'ethers';
// const provider = new ethers.providers.JsonRpcProvider('https://rpc-evm-sidechain.xrpl.org/');

const xrpl = require("xrpl");
const { decodeAccountID, encodeAccountID } = require("ripple-address-codec");
const ethersWallet = require("@ethersproject/wallet");
const ethersProvider = require("@ethersproject/providers");
const { BridgeDoorNative__factory } = require("@peersyst/xrp-evm-contracts");
const ethers = require("ethers");

import { private_key } from '../constants/me';
import "../constants/globals.js";

const loanlisting_contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address payable",
				"name": "wallet_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "set_date",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "about",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "amount",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "purchased",
				"type": "bool"
			}
		],
		"name": "ProductCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "loaner_wallet_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address payable",
				"name": "loanee_wallet_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "set_date",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "about",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "amount",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "purchased",
				"type": "bool"
			}
		],
		"name": "ProductPurchased",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_wallet_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_set_date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_about",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_amount",
				"type": "string"
			}
		],
		"name": "createProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "productCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "products",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "wallet_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "set_date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "about",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "amount",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "purchased",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "purchaseProduct",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
];

const ethersClient = new ethersProvider.JsonRpcProvider("https://rpc-evm-sidechain.xrpl.org");
const evmWallet = new ethersWallet.Wallet(
	"0x" + "503ffd0a8650b7ebac02051250501efd26a2c949d92df00f8e64b9209e00eaec",
	ethersClient
);

// Verify you have the right EVM wallet address
console.log("EVM Address:");
console.log(evmWallet.address);
const contractAddress = "0x502cA193D24F3CFA4F62dd17B555a11479Ba12Ca";
const signer = ethersClient.getSigner();
const contract = new ethers.Contract(contractAddress, loanlisting_contractABI, signer);


// const wallet = new ethers.Wallet(private_key);
// const walletConnected = wallet.connect(provider);
// const contractAddress = "0x502cA193D24F3CFA4F62dd17B555a11479Ba12Ca";
// const signer = provider.getSigner();
// const contract = new ethers.Contract(contractAddress, loanlisting_contractABI, signer);

export {
	contract,
}