import "./write.css"

export default function Write() {
  return (
    <div className="write">
    <img className="writeimg" 
    src="./images/home.jpg" alt="write example" />
        <form action="#" className="writeform">
            <div className="writeformgroup">
                <label htmlFor="fileinput" className="writeicon">
                <i class="fa-solid fa-file-image"></i>
                </label>
                <input type="file" id="fileinput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeinput" autoFocus={true} />
            </div>
                <div className="writeformgroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeinput writetext" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button className="writesubmit">
                    Publish
                </button>
        </form>
    </div>
  )
}
