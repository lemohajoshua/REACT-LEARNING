
function UserGreeting(props) {

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;
    const loginRequest = <h2 className="login-request">Please login</h2>;

    return(props.isLoggedIn ? welcomeMessage : loginRequest);
}

export default UserGreeting