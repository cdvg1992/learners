import React from 'react'

function Form() {
    return (
        <div>
            <form>
                <div className='container'>
                    <br/>
                    <input type="text" id="username" placeholder='Username'></input>
                    <br /><br />
                    <input type="text" id="username" placeholder='Password'></input>
                    <br />
                    <br />
                    <button onClick={""}>Login</button>
                </div>

            </form>
        </div>
    )
}

export default Form

    // < form >
    // <div class="container">


    //     <button type="submit">Login</button>
    //     <input type="checkbox" checked="checked"> Remember me
    //         <button type="button" class="cancelbtn"> Cancel</button>
    //         Forgot <a href="#"> password? </a>
    // </div>
    //     </form >     