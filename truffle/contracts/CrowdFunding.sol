// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrowdFunding {
uint public name;

function setName (uint _name)  public{
  name=_name;
}  

function getName()  public view returns(uint){
  return name;
}  
}
