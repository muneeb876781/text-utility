import React, {useState} from 'react'

export default function About(props) {

    return (
        <div className="container" style = {{color: props.mode==="light"?"black":"white"}}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style = {{color: props.mode==="light"?"black":"white", backgroundColor: props.mode==="light"?"white":"#842743"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About me:
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show"   aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style = {{color: props.mode==="light"?"black":"white", backgroundColor: props.mode==="light"?"white":"#842743"}}>
                            <strong>MY NAME IS MUNEEB AHMED</strong> I am a web developer and currently gaining my experience in the mern stack. basicaly i am learning nodejs expressjs mongoDB and react based website
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style = {{color: props.mode==="light"?"black":"white", backgroundColor: props.mode==="light"?"white":"#842743"}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            About website
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse"  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style = {{color: props.mode==="light"?"black":"white", backgroundColor: props.mode==="light"?"white":"#842743"}}>
                            <strong>This is a text utility website</strong> this website will provide you the utilities for your text to be more efficient anda a good stuff:-)
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style = {{color: props.mode==="light"?"black":"white", backgroundColor: props.mode==="light"?"white":"#842743"}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            About the build
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse"  aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style = {{color: props.mode==="light"?"black":"white", backgroundColor: props.mode==="light"?"white":"#842743"}}>
                            <strong>This website is basicaly build in REACT </strong> this app is basically build in react js so it is very fast you don't have to face loading issues and all that stuff
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
