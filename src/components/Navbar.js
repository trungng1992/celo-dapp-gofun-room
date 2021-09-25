import React, {useState, useEffect} from 'react';
import { FaBars, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const DropDownContent = styled.div`
  // display: none;
  position: absolute;
  // background: var(--darkTeal);
  min-width: 160px;
  // box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const WalletIcon = styled(FaWallet)`
margin-right: .8rem;
transition: all .5s ease;
&:hover {
    transform: scale(2);
}
`;


const Navbar = props => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setClick(!click);

    const showButton = () =>{
        if(window.innerWidth<= 1000){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    const handleToggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return (
        <nav className="navbar">
          <div className="nav-center">
            <ul
              className={isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li className="contact">
                <Link to="/">+123456789
                support@gofunroom.cc</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/add">Add</Link>
              </li>
              <li>
                <Link to="/history">History</Link>
              </li>
            </ul>
            <div className="nav-header">
              <Link to="/">
                <h1>GoFunRoom</h1>
              </Link>
            </div>
            <ul className="nav-links show-nav" onClick={click} onClick={handleClick}>
              {props.address == undefined
              ?
              <li className="reserve"><Link to="">Connect Wallet</Link>
              </li>
              :<li className="wallet">
                <Link to=""><WalletIcon/>0x...{props.address.substr(-10)}</Link>
                <div className="drop-down-balance">
                    <a>USD Balance: ${props.cUSDBalance}CUSD</a>
                    <a>Celo Balance: ${props.celoBalance}</a>
                </div>
              </li>
              }
              
            </ul>
            {/* <button type="button" className="nav-btn" onClick={handleToggle}>
              asdasdsd
            </button> */}
  
  
          </div>
        </nav>
    );
}

export default Navbar;
