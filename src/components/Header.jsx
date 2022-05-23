import AppleIcon from '@mui/icons-material/Apple';
import {Link, useNavigate} from 'react-router-dom'
export default function Header({bg="#287bff", col="#fff",iconColor="#fff", paraColor="#fff", handleClicked}) {
   const navigate = useNavigate();
   function handleNavigate(){
    navigate('/')
   }
    return (
        <header>
        <div className="logo" style={{"--iconColor":iconColor}} onClick={handleNavigate}>
            <AppleIcon className="icon"/>
            <p style={{"--paraColor":paraColor}}>Metricks</p>
        </div>
        <nav>
            <ul className="navigation" style={{"--bg":bg,"--col":col}}>
                <li className="list_item">
                    <Link to='/about'>About us</Link>
                </li>
                <li className="list_item">
                <Link to='/blog'>Blog</Link>
                </li>
                <li className="list_item" onClick={handleClicked}>Contact Us</li>
            </ul>
        </nav>
       </header>
    )
}
