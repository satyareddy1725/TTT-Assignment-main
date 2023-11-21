import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

const Posts = ()=>{
    return(
        <div className="all-posts">
            <div className="post-num">
                <p className="No-post mt-[6%] sm:ml-[25%]">134 Posts</p>
            </div>
            <p className="border"></p>
            <div className="list-posts">

                <div className="posts">
                    <h1 className="heading"><span>A Changing World Order</span> <span className='thumbs-up'><ThumbUpAltOutlinedIcon className='thumb' /></span></h1>
                    <p className="description">The world is Changing at a feverish pace. Freinds, colleagues and everyone engaged in knowledge work are beginning to sense this, including...</p>
                    <p className="author"><span className="text-blue-400">musing</span> by anugosalia <span className="read-time">August 2 . 2 min Read . 102 Views</span></p>
                </div>

                <div className="posts">
                    <h1 className="heading">Indian v/s Australia<span className='thumbs-up'><ThumbUpAltOutlinedIcon className='thumb' /></span></h1>
                    <p className="description">Think about it - this cricket was akin to therapy. Laying our childhood trauma up top, working it slowly and surely over two m...</p>
                    <p className="author"><span className="text-blue-400">thought</span> by anugosalia <span className="read-time">January 21 . 1 min Read . 156 Views</span></p>
                </div>
                
                <div className="posts">
                    <h1 className="heading">Write To Build<span className='thumbs-up'><ThumbUpAltOutlinedIcon className='thumb' /></span></h1>
                    <p className="description">Writing is the first step to create: - storie - products - companies</p>
                    <p className="author"><span className="text-blue-400">thought</span> by anugosalia <span className="read-time">November 18 . 1 min Read . 228 Views</span></p>
                </div>
            </div>
        </div>
    )
}

export default Posts;