import React from 'react';
import ReactDOM from 'react-dom/client';


// Define the SchoolAdm component
function SchoolAdm() {
    return (
        <div>
            <form>
                <label htmlFor="firstname">First name: </label>
                <input type="text" name="firstname" required />
                <br />
                <label htmlFor="lastname">Last name: </label>
                <input type="text" name="lastname" required />
                <br />
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" required />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" required />
                <br />
                <input type="submit" value="Login!" />
            </form>
        </div>
    );
}


export default SchoolAdm;