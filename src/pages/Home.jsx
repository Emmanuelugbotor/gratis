import MainLayout from '../layout/MainLayout';
export default function Home() {
    return (
        <MainLayout>
        <div className= "homepage">
        <div className="toggle_left">
            <section className="events">
                <span className="circle_design">

                </span>
                <span className="circle_design second">
                    
                </span>
                <div className="events_wrapper">
                <h1>something awesome is coming soon</h1>
                <p>Your all-in-one affiliate marketing tracking software track, automate and optimise your campaigns</p>
                <div className="countdown">
                    <ul>
                        <li>
                            <p>7</p>
                            <span>Days</span>
                        </li>
                        <li>
                            <p>24</p>
                            <span>Hours</span>
                        </li>
                        <li>
                            <p>54</p>
                            <span>Minutes</span>
                        </li>
                        <li>
                            <p>11</p>
                            <span>Seconds</span>
                        </li>
                    </ul>
                </div>
                <div className="input_wrapper">
                    <input type="text"  placeholder="First Name..."/>
                    <input type="text" placeholder="Last Name..."/>
                </div>
                <div className="subscribe">
                    <input type="search" name="" id="" placeholder='Enter email address'/>
                    <label htmlFor="">Join our Mailing list</label>
                </div>
                </div>
            </section>
        </div>
        </div>
        </MainLayout> 
    )
}
