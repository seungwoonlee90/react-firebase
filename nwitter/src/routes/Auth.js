import React from 'react';

const Auth = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="submit" value="LogIn"/>
            </form>
            <div>
                <button>Continue with google</button>
            </div>
        </div>
    );
}
export default Auth;