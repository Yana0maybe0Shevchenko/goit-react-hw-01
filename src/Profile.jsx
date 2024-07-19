export default Profile;


const Profile = (name,tag,location,image, stats) => {
    return (
        <div className="profile"> 
            <div className="profile-elements">
               <img src={image} alt="User avatar" className="user-avatar"/>
               <p className="name">{name}</p>
               <p className="tag">{tag}</p>
               <p className="location">{location}</p>
            </div>

            <ul className="stats">
               <li>
                  <span className="stats-item-name">Followers</span>
                  <span className="stats-item-description">{stats.followers}</span>
                </li>
               <li>
                  <span className="stats-item-name">Views</span>
                  <span className="stats-item-description">{stats.views}</span>
                </li>
               <li>
                  <span className="stats-item-name">Likes</span>
                  <span className="stats-item-description">{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}