import { useState } from 'react';
import './Post.css';
import Button from '../../Shared/Button';
import PostComments from './PostComments';

function Post({
    owner,
    date,
    content,
    likes,
    dislikes,
    updatePost,
    _id
}) {
    const [isCommentsVisible, setIsCommentsVisible] = useState(false);

    // avatar = avatar ? avatar : 'https://s.clipartkey.com/mpngs/s/112-1124283_profile-profile-clipart.png';

    const toggleIsCommentsVisible = () => {
        setIsCommentsVisible((oldState) => !oldState);
    };

    return (
        <>
            <article className="post-wraper">
                <header className="post-header">
                    <div className="post-header-image">
                        <img src={owner.avatar} alt="https://s.clipartkey.com/mpngs/s/112-1124283_profile-profile-clipart.png" />
                    </div>
                    <div className="post-header-username-date-wrapper">
                        <h3 className="post-header-username">{owner.username}</h3>
                        <p className="post-header-date">{new Date(date).toLocaleString()}</p>
                    </div>
                    <p className="post-header-content">{content}</p>
                </header>
                <footer className="post-footer">
                    <Button view="success" newClassName="post-footer-like" onClick={() => updatePost(_id, { likes })}>{`Like ${likes}`}</Button>
                    <Button
                        view={isCommentsVisible ? "round-top gray" : "round-top blue"}
                        newClassName="post-footer-see-comments"
                        onClick={toggleIsCommentsVisible}
                    >
                        {isCommentsVisible ? 'Hide comments' : 'See comments'}
                    </Button>
                    <Button view="negative" newClassName="post-footer-dislike" onClick={() => updatePost(_id, { dislikes })}>{`${dislikes} Dislike`}</Button>
                </footer>
            </article>

            {isCommentsVisible && <PostComments toggleIsCommentsVisible={toggleIsCommentsVisible} />}
        </>
    )
}

export default Post;