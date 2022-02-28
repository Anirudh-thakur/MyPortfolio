import me from "../profile.png"
import './intro.css';
const Intro = () => {
  return (
    <>
    <div className="i">
      <div className="i-left">
        <div className="i-leftWrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name"> Anirudh Thakur</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Machine Learning Enthusiast</div>
              <div className="i-title-item">Blogger</div>
          </div>
          </div>
          <div className="i-description">
              Hands-on, successful Software/Web Engineer with verifiable success leading teams in delivering appropriate technology solutions for web products.
              Currently pursuing my masters from University of Texas Dallas in Computer Science.
              
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">
          <div className="i-img">
              <img src={me} alt="profile image not loaded" />
              </div>
          
        </div>
      </div>
      </div>
      </>
  )
}

export default Intro