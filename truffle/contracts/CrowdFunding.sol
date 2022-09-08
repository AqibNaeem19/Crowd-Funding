// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrowdFunding{
  address public owner;
  uint public projectTax;
  uint public projectCount;
  uint public balances;
  projectStat public stat;
  projectInfo[] projects;

mapping(address => projectInfo[]) projectsOf;
mapping(uint => donarInfo[]) backersOf;
mapping(uint => bool) public projectExist;
struct projectStat{
uint totalProjects;
uint totalBacking;
uint totalCollection;
}
enum projectStatus{
  open,
  approved,
  deleted,
  paidout,
  refund
}
struct donarInfo{
  address owner;
  uint contribution;
  uint timestamp;
  bool refund;
}

struct projectInfo{
  uint id;
  address owner;
  string title;
  string description;
  string imageUrl;
  uint timestamp;
  uint cost;
  uint raised;
  uint expiresAt;
  projectStatus status;
}

event Action (
    uint256 id,
    string actionType,
    address indexed executor,
    uint256 timestamp
);

modifier onlyOwner(){
  require(msg.sender == owner, "Owner only");
  _;
}constructor (uint tax )
{
  owner = msg.sender;
  projectTax = tax;
}

function createProject(
  string memory title,
  string memory description,
  string memory imageUrl,
  uint cost,
  uint expiresAt
  )public returns(bool) {
  require(bytes(title).length > 0,"Title can't be empty");
  require(bytes(description).length > 0,"Description can't be empty");

  require(bytes(imageUrl).length > 0,"Image can't be empty");
  projectInfo memory project;
  project.id = projectCount;
  project.owner = msg.sender;
  project.title =title;
  project.description= description;
  project.imageUrl= imageUrl;
  project.cost = cost;
  project.timestamp = block.timestamp;
  project.expiresAt = expiresAt;
  projects.push(project);
  projectsOf[msg.sender].push(project);
  stat.totalProjects += 1;
  emit Action(projectCount, "Project Created", msg.sender, block.timestamp);

  
  return true;
}

function updateProject(
    uint id,
    string memory title,
    string memory description,
    string memory imageURL,
    uint expiresAt
    ) public returns (bool) {
    require(msg.sender == projects[id].owner, "Unauthorized Entity");
    require(projectExist[id], "Project not found");
    require(bytes(title).length > 0, "Title cannot be empty");
    require(bytes(description).length > 0, "Description cannot be empty");
    require(bytes(imageURL).length > 0, "ImageURL cannot be empty");

    projects[id].title = title;
    projects[id].description = description;
    projects[id].imageUrl = imageURL;
    projects[id].expiresAt = expiresAt;

    emit Action (
        id,
        "PROJECT UPDATED",
        msg.sender,
        block.timestamp
    );
    return true;
}

function deleteProject(uint id) public returns (bool) {
    require(projectExist[id], "Project not found");
    require(projects[id].status == projectStatus.open, "Project no longer opened");
    require(
        msg.sender == projects[id].owner ||
        msg.sender == owner,
        "Unauthorized Entity"
    );

    projects[id].status = projectStatus.deleted;

    emit Action (
        id,
        "PROJECT DELETED",
        msg.sender,
        block.timestamp
    );
    return true;
}

}
