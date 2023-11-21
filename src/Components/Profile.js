import Anuj from "../assets/Anuj.jpg"
import bg from "../assets/bg.jpg"
import diamond from "../assets/diamond.jpg"
import tick from "../assets/tick.jpg"

import StarBorderIcon from '@material-ui/icons/StarBorder';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const Profile = ()=>{
    return(
        <div className="profile">
            <img src={bg} />
            <div className="profile-details">
                
                <div className="mr-[10%]">
                    <img src={Anuj} className="profile-image" />
                </div>
                <div className="name-follower">
                    <div className="name">
                        <p className="user-name font-bold text-sm ml-[1%] sm:text-lg xs:text-lg">Anuj Gosalia</p>
                        <img src={diamond} className="side-image" />
                        <img src={tick} className="side-image" />
                    </div>
                    
                    <div className="followers">
                        <span className="details">
                            <p className="followers-details">6482</p>
                            <p className="font-medium text-sm">Followers</p>
                        </span>
                        <span className="details">
                            <p className="followers-details">245</p>
                            <p className="font-medium text-sm">Following</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="user-details">
                <p className="about">Co-founder & CEO at Terribly Tiny Tales</p>
                <p className="about text-blue-500">https://www.instagram.com/anujgosalia</p>
            </div>
            <div className="all-icons">
                <span><StarBorderIcon className="icon bg-blue-500 rounded-full" /> <span>125</span></span>
                <span><ThumbUpAltOutlinedIcon className="icon bg-yellow-500 rounded-full" /><span>12</span></span>
                <span><VisibilityOutlinedIcon className="icon bg-gray-500 rounded-full" /><span>57.8K</span></span>
                <span><FavoriteBorderOutlinedIcon className="icon bg-pink-600 rounded-full" /> <span>26.0K</span></span>
            </div>
        </div>
    )
}

export default Profile;