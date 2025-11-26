const reels = [
  {
    isMuted : true,
    username: "iamprerna",
    likeCount: 12800,
    isLiked: false,
    commentCount: 342,
    caption: "Sunset vibes ✨🌅",
    video: "./reels/video11.mp4",
    userProfile: "https://i.pravatar.cc/150?img=1",
    shareCount: 120,
    isFollowed: true
  },
  {
    isMuted : true,
    username: "techguru",
    likeCount: 45200,
    isLiked: true,
    commentCount: 980,
    caption: "travelling day😊🚉",
    video: "./reels/video12.mp4",
    userProfile: "https://i.pravatar.cc/150?img=2",
    shareCount: 610,
    isFollowed: false
  },
  {
    isMuted : true,
    username: "foodielife",
    likeCount: 7800,
    isLiked: false,
    commentCount: 155,
    caption: "cute rabbit🐰😘",
    video: "./reels/video13.mp4",
    userProfile: "https://i.pravatar.cc/150?img=3",
    shareCount: 90,
    isFollowed: false
  },
  {
    isMuted : true,
    username: "travelwithme",
    likeCount: 21200,
    isLiked: true,
    commentCount: 650,
    caption: "Winter in Kashmir ❄️❤️",
    video: "./reels/video14.mp4",
    userProfile: "https://i.pravatar.cc/150?img=4",
    shareCount: 330,
    isFollowed: true
  },
  {
    isMuted : true,
    username: "fitnessfreak",
    likeCount: 15800,
    isLiked: false,
    commentCount: 298,
    caption: "Leg day 🔥🏋️",
    video: "./reels/video15.mp4",
    userProfile: "https://i.pravatar.cc/150?img=5",
    shareCount: 200,
    isFollowed: false
  },
  {
    isMuted : true,
    username: "dancequeen",
    likeCount: 54000,
    isLiked: true,
    commentCount: 1400,
    caption: "Try this choreography 💃🔥",
    video: "./reels/video16.mp4",
    userProfile: "https://i.pravatar.cc/150?img=6",
    shareCount: 890,
    isFollowed: true
  },
  {
    isMuted : true,
    username: "petlover",
    likeCount: 9500,
    isLiked: false,
    commentCount: 230,
    caption: "My dog learns a new trick 🐶✨",
    video: "./reels/video17.mp4",
    userProfile: "https://i.pravatar.cc/150?img=7",
    shareCount: 110,
    isFollowed: false
  },
  {
    isMuted : true,
    username: "💻SCS💻",
    likeCount: 36700,
    isLiked: true,
    commentCount: 720,
    caption: "You Can Now CHEAT in Meta Interviews.",
    video: "./reels/video18.mp4",
    userProfile: "https://i.pravatar.cc/150?img=8",
    shareCount: 500,
    isFollowed: true
  },
  {
    isMuted : true,
    username: "fashion_diaries",
    likeCount: 17500,
    isLiked: false,
    commentCount: 410,
    caption: "Outfit inspo for this weekend ✨👗",
    video: "./reels/video19.mp4",
    userProfile: "https://i.pravatar.cc/150?img=9",
    shareCount: 260,
    isFollowed: false
  },
  {
    isMuted : true,
    username: "gamingworld",
    likeCount: 62000,
    isLiked: true,
    commentCount: 2100,
    caption: "Insane clutch moment 🎮🔥",
    video: "./reels/video20.mp4",
    userProfile: "https://i.pravatar.cc/150?img=10",
    shareCount: 950,
    isFollowed: true
  }
];
var allReels = document.querySelector('.all-reels')

var isMuted = true


function addData(){
  var sum = ''
  reels.forEach(function(elem,idx){
    sum = sum + ` <div class="reel">
    
                   <video autoplay loop ${elem.isMuted?'muted':''} src="${elem.video}"></video>
                   <div class="mute" id=${idx}>
                   ${elem.isMuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}
                      
                  </div>
                   <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class='follow'>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                         <h3>${elem.caption}</h3>
                    </div>
                   <div class="right">
                    <div id=${idx} class="like">
                        <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                        <h6>${elem.likeCount}</h6>
                    </div>
                     <div class="comment">
                        <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                        <h6>${elem.commentCount}</h6>
                    </div>
                    <div class="share">
                        <h4 class="share-icon icon"><i class="ri-send-plane-2-line"></i></h4>
                        <h6>${elem.shareCount}</h6>
                    </div>
                     <div class="menu">
                        <h4 class="menu-icon icon"><i class="ri-more-2-line"></i></h4>
                        
                    </div>
                    
                   </div>
                </div>`
})

allReels.innerHTML = sum
}

addData()

allReels.addEventListener('click',function(dets){
 if(dets.target.className == 'like'){
   if(!reels[dets.target.id].isLiked){
    reels[dets.target.id].likeCount++
    reels[dets.target.id].isLiked = true
  }else{
    reels[dets.target.id].likeCount--
    reels[dets.target.id].isLiked = false
  }
  addData()
 }


 if(dets.target.className == 'follow'){
  if(!reels[dets.target.id].isFollowed){
    reels[dets.target.id].isFollowed = true
  }else{
    reels[dets.target.id].isFollowed = false
  }
  addData()
}


 if(dets.target.className == 'mute'){
  if(!reels[dets.target.id].isMuted){
    reels[dets.target.id].isMuted = true
  }else{
    reels[dets.target.id].isMuted = false
  }
  addData()
}

})