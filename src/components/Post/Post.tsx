import React, { useRef, useState } from "react";
import styles from "./Post.module.scss";
import { Link, useParams } from "react-router-dom";
import { galeryImages, posts } from "../../utils/consts";
import LocatePanel from "../UI/LocatePahel/LocatePanel";
import Comment from "../UI/Comment/Comment";
import GreyButton from "../UI/Buttons/GreyButton/GreyButton";
import Modal from "../UI/Modal/Modal";

import HorizontalSlider from "../UI/Slider/HorizontalSlider/HorizontalSlider";
import ModalComment from "../UI/Reviews/ModalComment";

const Post = () => {
  const postId = useParams().postId;
  const post = posts.find((post) => String(post.id) === postId);
  const [activeModalReview, setActiveModalReview] = useState(false);
  const [activeModalGallery, setActiveModalGallery] = useState(false);
  const commentRef = useRef<HTMLDivElement>(null);

  const scrollToElement = () => {
    commentRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <LocatePanel />
      <div className={styles.wrapper}>
        <div className={styles.post}>
          <img className={styles.postImg} src={post?.img} alt="" />
          <div className={styles.postDate}>
            <h4 className={styles.date}>{post?.date}</h4>
            <h4
              onClick={() => scrollToElement()}
              className={styles.commentsNum}
            >{`Комментарии ${post?.comments.length} `}</h4>
          </div>
          <div className={styles.text}>
            {post?.text.split("/n").map((parth, index) => (
              <p key={index} className={styles.textParth}>
                {parth}
              </p>
            ))}
          </div>
          <hr />
          {post?.comments.length && post?.comments.length > 0 ? (
            <div className={styles.comments}>
              <h4 ref={commentRef} className={styles.headerComments}>
                {`Комментарии ${post?.comments.length}`}
              </h4>
              {post?.comments &&
                post.comments.map((comment, index) => (
                  <Comment key={index} {...comment} />
                ))}
            </div>
          ) : (
            <h4 ref={commentRef} className={styles.headerCommentsCenter}>
              {`Комментариев пока нет`}
            </h4>
          )}
          <div className={styles.commentBtn}>
            <GreyButton
              onClick={() => setActiveModalReview(true)}
              text="Оставить комментарий"
            />
            <Modal
              activeModal={activeModalReview}
              setActiveModal={setActiveModalReview}
            >
              <ModalComment />
            </Modal>
          </div>
        </div>
        <div className={styles.rightPanel}>
          <div className={styles.resent}>
            <h4 className={styles.rightPanelHeader}>Недавние</h4>
            <div className={styles.resentPost}>
              <Link className={styles.resentHeader} to={`/blog/${posts[1].id}`}>
                <img src={posts[1].img} alt="" />
                {posts[1].name}
              </Link>
              <div className={styles.resentDate}>
                <p className={styles.date}>{posts[1].date}</p>
                <p className={styles.commentsNum}>
                  Комментарии {posts[1].comments.length}
                </p>
              </div>
            </div>
            <div className={styles.resentPost}>
              <Link className={styles.resentHeader} to={`/blog/${posts[2].id}`}>
                <img src={posts[2].img} alt="" />
                {posts[2].name}
              </Link>
              <div className={styles.resentDate}>
                <p className={styles.date}>{posts[2].date}</p>
                <p className={styles.commentsNum}>
                  Комментарии {posts[2].comments.length}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.resent}>
            <h4 className={styles.rightPanelHeader}>Галерея</h4>
            <div className={styles.galeryImages}>
              {galeryImages.map((img, index) => (
                <img
                  key={index}
                  src={img.img}
                  alt=""
                  onClick={() => {
                    setActiveModalGallery(true);
                  }}
                />
              ))}
            </div>
            <Modal
              activeModal={activeModalGallery}
              setActiveModal={setActiveModalGallery}
            >
              <HorizontalSlider images={galeryImages} />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
