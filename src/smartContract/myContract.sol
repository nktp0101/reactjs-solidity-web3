pragma solidity ^0.8.0;


contract myContract {
    string public fullName;

    function setFullName(string memory _fullName) public{
        fullName = _fullName;
    }

    function getFullName() public view returns (string memory){
        return fullName;
    }
}


