// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrowdFunding{
  address public owner;
  uint public balances;

struct projectStat{
uint totalProjects;
uint totalBacking;
uint totalCollection;
}

struct donarInfo{
  address owner;
  uint contribution;
}

struct projectInfo{
  uint id;
  address owner;
  string title;
  string description;
  string imageUrl;
}

function createProject(
  string memory title,
  string memory description,
  string memory imageUrl
  //uint cost
  )public view returns(bool) {
  require(bytes(title).length > 0,"Title can't be empty");
  require(bytes(description).length > 0,"Description can't be empty");

  require(bytes(imageUrl).length > 0,"Image can't be empty");
  projectInfo memory project;
  project.owner = msg.sender;
  project.title =title;
  project.description= description;
  project.imageUrl= imageUrl; 
  
  return true;
}
}
