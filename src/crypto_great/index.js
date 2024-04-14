import Web3 from 'web3';
import { ethers } from 'ethers';
const provider = new ethers.providers.JsonRpcProvider('https://rpc-evm-sidechain.xrpl.org/');

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

const contractAddress = "0x1A6796B0c164bBFDD6D3bE81f1FBC5faF3314280";
const contract = new ethers.Contract(contractAddress, loanlisting_contractABI, provider);

const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
};

const loadBlockchainData = async () => {
  const web3 = window.web3
  // Load account
  const accounts = await web3.eth.getAccounts()
  this.setState({ account: accounts[0] })
  const networkId = await web3.eth.net.getId()
  const networkData = Marketplace.networks[networkId]
  if(networkData) {
    const marketplace = web3.eth.Contract(loanlisting_contractABI, networkData.address)
    console.log(marketplace)
  } else {
    window.alert('Marketplace contract not deployed to detected network.')
  }
};

const createProduct = () => {
    const load = async () => {
      await loadWeb3();
      await loadBlockchainData();
    };

    load();
  }