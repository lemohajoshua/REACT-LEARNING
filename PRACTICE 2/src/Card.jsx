import profilePic from './assets/Generated Image September 16, 2025 - 2_14AM 2.png'

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="" />
            <h2>Joeck</h2>
            <p>I'm a Web Developer</p>
        </div>
    )
}
export default Card