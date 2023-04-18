import React, { useState } from 'react';

function Darkmode(props) {
    const[lightmode,setlightmode] = useState("enable Dark mode")

   const[Mystyle,setMystyle] = useState({
        color:"white",
        backgroundColor:"black"
    })
     const togglebtn =()=>{
        if(Mystyle.color == "white"){
            setMystyle({
                color:"black",
        backgroundColor:"white"
            })
            setlightmode("enable light mode")
        }
        else{
            setMystyle({
                color:"white",
        backgroundColor:"black"
            })
            setlightmode("enable dark mode")
        }
    }
    return (
        <>
            <h1 className='m-3'>About Us</h1>

        <div className="container p-3" style={Mystyle}>
            <div class="accordion" id="accordionExample" >
                <div class="accordion-item" style={Mystyle} >
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button"style={Mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div class="accordion-item" style={Mystyle}>
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed"style={Mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div class="accordion-item" style={Mystyle}>
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" style={Mystyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
        <button className="btn btn-primary m-5" onClick={togglebtn}>{lightmode}</button>

        </div>
        </>
    );
}

export default Darkmode;