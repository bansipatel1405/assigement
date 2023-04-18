import React, { useRef } from 'react';

function Ref(props) {
    let Useinput = useRef(null)
    const handle =()=>{
        console.log("claaed");
        console.log(Useinput.current);
        Useinput.current.value = "10000";
        Useinput.current.focus()


    }
    return (
       <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Use Ref Hook</h1>
                    <input type="text"ref={Useinput} />
                    <button onClick={handle}>click me</button>
                </div>
            </div>
        </div>
       </>
    );
}

export default Ref;