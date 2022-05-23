import React, {useState} from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer({icon=true}) {
    const iconData = [
        {
            name:YouTubeIcon,
            id:1
        },
        {
            name:FacebookIcon,
            id:2
        },
        {
            name:LinkedInIcon,
            id:3
        },
        {
            name:InstagramIcon,
            id:4
        },
        {
            name:TwitterIcon,
            id:5
        }
    ]
    const [hovered, setHovered] = useState(1)
    return (
        <footer className='footer'>
            {
                icon &&   <div className="circle"></div>
            }
            <div className="footer_wrapper">
            <ul className="socials">
                {
                 iconData.map((icon)=> <li key={icon.id} className={hovered === icon.id ? 'hovered':''} onMouseOver={()=>setHovered(icon.id)}>
                        {
                            <icon.name/>
                        }
                         </li>
                    )
                }
                    
                </ul>
                <ul className="terms_privacy">
                    <li>Terms of services</li>
                    <li>Privacy policy</li>
                </ul>
                <p className="copyright">
                    copyright 2021 @ peddle Technology. All right Reserved
                </p>
            </div>
                
            </footer>
    )
}
