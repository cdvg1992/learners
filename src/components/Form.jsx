import React from 'react'

function Form() {
    return (
        <div>
            <form>
                <div className='container'>
                    <label>Username : </label>
                    <input type="text" placeholder="Enter Username" name="username" required />
                    <label>Password : </label>
                    <input type="password" placeholder="Enter Password" name="password" required/>

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