import videoHomepage from '../../assets/video-homepage.mp4'
const HomePage=(props)=>{
    return (
        <div className="homepage-container">
            <source
            src={videoHomepage}
            type="video/mp4"
            />
        </div>
    )
}
export default HomePage;