import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MainLayout from '../layout/MainLayout';

export default function About() {
  return (
    <MainLayout icon={false} bgcolor=''>
         <div className='aboutPage'>
         <div className="about_top"> 
         <div className="circle_design"></div>
             <div className="left">
                 <div className="wrap">
                 <div className="title">
                     <span></span>
                     <p>About Us</p>
                 </div>
                 <h1>
                     Built for Saas and E-commerce
                 </h1>
                 </div>

             </div>
             <div className="right">
               
                <p>Our tools are easy to setup and use with a user
                    friendly dashboard that enables you to setup, launch, automate
                    and manage multi-affiliate campaigns in 5 minutes.
                </p>
             </div>
         </div>
         <section className="maverick">
             <h1>Maverick was developed because just like you, we needed a product that could give us good value</h1>
             <div className="maverick_bottom">
                 <div className="left">
                     <h1><span></span> Why Us?</h1>
                     <p>We pride ourselves in our ability to innovate and create world-class
                         tools that provide reliable and efficient touchpoints between advertisers
                         and affiliates
                     </p>
                    
                 </div>
                 <div className="right">
                 <h1><span></span> Growth with you</h1>

                 <p className="text">
                     leveraging the best technology,we have developed an all-in-one affiliate marketing tracking software, a genius tool to help you track, automate and optimise your influencer campaigns, all from one dashboard
                 </p>
                 <p className="text">
                     Our teams of experts are constant brainstorming, testing and developing new solutions with only one thing in mind - your business growth. Your success is our success and by giving you the tools you need to scale, we grow as well
                 </p>
                 </div>
             </div>
         </section>
         <div className="bottom_question">
                <div className="left">
                <h2>Got a Question?</h2>
                <p>see how metricks can help your business grow with best affiliate marketing tracking software</p>
                <div className="indicator_contact">
                     <p>Contact us</p>
                    <ArrowForwardIcon className="forward"/>
                </div>
                </div>
                <div className="right">
                    <div className="box"></div>
                </div>
               
        </div>
    </div>
    </MainLayout>
  )
}
