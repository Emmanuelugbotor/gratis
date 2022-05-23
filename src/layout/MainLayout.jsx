import Footer from "../components/Footer";
import Header from "../components/Header";
import {useState} from 'react';
import {useLocation} from 'react-router-dom'
import Contact from "../components/Contact";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function MainLayout({children, icon, paraColor,iconColor,bg,col,background}) {
  const location = useLocation();
  const [active, setActive] = useState(false)
  function handleClicked(){
      setActive(!active);
  }
    return (
    <div className={location?.pathname === '/'? "after main_layout":'main_layout'} style={background && {background:background}}>
        <main className={active ? 'act':''}>
        <Header bg={bg} col={col} paraColor={paraColor} iconColor={iconColor}  handleClicked={handleClicked}/>
        {
            children
        }
        <Footer icon={icon}/>
        </main>
        {
            active && <div className="handler" onClick={()=>setActive(!active)}>
                <ArrowForwardIcon/>
            </div>
        }
         {
            active && <Contact/>
         }
    </div>
  )
}
