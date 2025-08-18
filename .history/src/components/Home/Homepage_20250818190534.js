import videoHomepage from '../../assets/video-homepage.mp4'
const HomePage=(props)=>{
    return (
        <div className="homepage-container">
            <video width="500px" height="500px">
            <source
            src={videoHomepage}
            type="video/mp4"
            />
            </video>
          
        </div>
    )
}
export default HomePage;