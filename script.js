const reels = [
  {
    username: "iamprerna",
    likeCount: 12800,
    isLiked: false,
    commentCount: 342,
    caption: "Sunset vibes ✨🌅",
    video: "./reels/video4.mp4",
    userProfile: "https://i.pravatar.cc/150?img=1",
    shareCount: 120,
    isFollowed: true
  },
  {
    username: "techguru",
    likeCount: 45200,
    isLiked: true,
    commentCount: 980,
    caption: "This JavaScript trick will blow your mind 🤯",
    video: "./reels/video2.mp4",
    userProfile: "https://i.pravatar.cc/150?img=2",
    shareCount: 610,
    isFollowed: false
  },
  {
    username: "foodielife",
    likeCount: 7800,
    isLiked: false,
    commentCount: 155,
    caption: "Best pasta recipe ever 🍝🔥",
    video: "./reels/video3.mp4",
    userProfile: "https://i.pravatar.cc/150?img=3",
    shareCount: 90,
    isFollowed: false
  },
  {
    username: "travelwithme",
    likeCount: 21200,
    isLiked: true,
    commentCount: 650,
    caption: "Winter in Kashmir ❄️❤️",
    video: "./reels/video1.mp4",
    userProfile: "https://i.pravatar.cc/150?img=4",
    shareCount: 330,
    isFollowed: true
  },
  {
    username: "fitnessfreak",
    likeCount: 15800,
    isLiked: false,
    commentCount: 298,
    caption: "Leg day 🔥🏋️",
    video: "./reels/video5.mp4",
    userProfile: "https://i.pravatar.cc/150?img=5",
    shareCount: 200,
    isFollowed: false
  },
  {
    username: "dancequeen",
    likeCount: 54000,
    isLiked: true,
    commentCount: 1400,
    caption: "Try this choreography 💃🔥",
    video: "./reels/video6.mp4",
    userProfile: "https://i.pravatar.cc/150?img=6",
    shareCount: 890,
    isFollowed: true
  },
  {
    username: "petlover",
    likeCount: 9500,
    isLiked: false,
    commentCount: 230,
    caption: "My dog learns a new trick 🐶✨",
    video: "./reels/video7.mp4",
    userProfile: "https://i.pravatar.cc/150?img=7",
    shareCount: 110,
    isFollowed: false
  },
  {
    username: "coderboy",
    likeCount: 36700,
    isLiked: true,
    commentCount: 720,
    caption: "React beginners must know this! ⚛️🔥",
    video: "./reels/video8.mp4",
    userProfile: "https://i.pravatar.cc/150?img=8",
    shareCount: 500,
    isFollowed: true
  },
  {
    username: "fashion_diaries",
    likeCount: 17500,
    isLiked: false,
    commentCount: 410,
    caption: "Outfit inspo for this weekend ✨👗",
    video: "./reels/video9.mp4",
    userProfile: "https://i.pravatar.cc/150?img=9",
    shareCount: 260,
    isFollowed: false
  },
  {
    username: "gamingworld",
    likeCount: 62000,
    isLiked: true,
    commentCount: 2100,
    caption: "Insane clutch moment 🎮🔥",
    video: "./reels/video10.mp4",
    userProfile: "https://i.pravatar.cc/150?img=10",
    shareCount: 950,
    isFollowed: true
  }
];


var sum = ''
reels.forEach(function(elem){
    sum = sum + ` <div class="reel">
                   <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                         <h3>${elem.caption}</h3>
                    </div>
                   <div class="right">
                    <div class="like">
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

var allReels = document.querySelector('.all-reels')


allReels.innerHTML = sum