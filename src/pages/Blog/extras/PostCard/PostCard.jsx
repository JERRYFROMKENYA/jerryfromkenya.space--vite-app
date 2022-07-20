import './postcard.css'

export default function PostCard() {
  return (
    <div className='post'>
    <img src="/images/img-5.jpg" alt="Post Img" className="postImg" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Cat 1</span>
            <span className="postCat">Cat 2</span>
        </div>
        <span className="postTitle">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
        <span className="postDate">
        1 hour ago
        </span>

    </div>
    <p className='postDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Quidem eos eveniet architecto corporis sed earum, at exercitationem recusandae possimus quisquam similique,
      molestiae officiis rem asperiores natus libero! Ipsa,
      eaque animi!
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Quidem eos eveniet architecto corporis sed earum, at exercitationem recusandae possimus quisquam similique,
      molestiae officiis rem asperiores natus libero! Ipsa,
      eaque animi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam ea expedita vo</p>

    </div>
  )
}