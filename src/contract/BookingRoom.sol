pragma solidity >=0.7.0 <0.9.0;

interface IERC20Token {
    function transfer(address, uint256) external returns (bool);
    function approve(address, uint256) external returns (bool);
    function transferFrom(address, address, uint256) external returns (bool);
    function totalSupply() external view returns (uint256);
    function balanceOf(address) external view returns (uint256);
    function allowance(address, address) external view returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}


contract BookRoom {

    struct Room {
        address payable ownerRoomAddress;
        address renterAddress;
        string nameRoom;
        string[] imageURL;
        string description;
        string services;
        string location;
        string category;
        uint capacity;
        uint size;
        uint price;
        bool isBooking;
        uint256 dayAvailable;
    }
    
    uint256 roomLength = 0;
    address internal cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;

    // owner room address
    address ownerAddress;
    
    // map slice for Room
    mapping (uint => Room) internal rooms;
    
    // check owner of room
    modifier isAdmin(){
        require(msg.sender == ownerAddress, "You are not an admin");
        _;
    }

    modifier isRenterRoom(uint _index) {
        require(msg.sender == rooms[_index].renterAddress, "You are not a renter");
        _;
    }
    
    modifier isOwnerRoom(uint _index) {
        require(msg.sender == rooms[_index].ownerRoomAddress, "You are not a onwer room");
        _;
    }
    // constructor
    constructor() {
        ownerAddress = msg.sender;
    }
    
    function addRoom(
        string memory _nameRoom,
        string memory _imageRoom,
        string memory _description,
        string memory _location,
        string memory _services,
        string memory _category,
        uint _size,
        uint _price,
        uint _capacity,
        uint _serving
    ) public {
        
        require(_price > 0, "Please enter a valid price");
        
        rooms[roomLength] = Room(
            payable(msg.sender),
            address(0),
            _nameRoom,
            _imageRoom,
            _description,
            _services,
            _location,
            _category,
            _capacity,
            _size,
            _price,
            false,
            block.timestamp
        );
        
        roomLength++;
    }
    
    function getInformationRoom(unit _index) public view returns (
        address payable,
        string memory,
        string[] memory,
        string memory,
        string memory,
        string memory,
        bool,
        uint,
        uint,
        uint
    ) {
        return {
            rooms[_index].owner,
            rooms[_index].nameRoom,
            rooms[_index].urlImage,
            rooms[_index].description,
            rooms[_index].services,
            rooms[_index].location,
            rooms[_index].category,
            rooms[_index].isBooking,
            rooms[_index].capacity,
            rooms[_index].size,
            rooms[_index].price
        }
    }


    function rentRoom(unit _index) public payable{
        require(
          IERC20Token(cUsdTokenAddress).transferFrom(
            msg.sender,
            products[_index].owner,
            products[_index].price
          ),
          "Transfer failed."
        );
        rooms[_index].isBooking = true;
        rooms[_index].renterAddress = msg.sender;
    }

    function getRoomBookingLength() public view returns (uint) {
        return roomLength;
    }
}