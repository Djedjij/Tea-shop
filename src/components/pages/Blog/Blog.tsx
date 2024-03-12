import React, { useState } from "react";
import styles from "./Blog.module.scss";
import LocatePanel from "../../UI/LocatePahel/LocatePanel";
import { posts } from "../../../utils/consts";
import GreenButton from "../../UI/Buttons/GreenButton/GreenButton";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const renderPostsForCurrentPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const postsForCurrentPage = posts.slice(startIndex, endIndex);

    return (
      <CSSTransition
        timeout={300}
        classNames={{
          enter: styles.postsEnter,
          enterActive: styles.postsEnterActive,
          exit: styles.postsExit,
          exitActive: styles.postsExitActive,
        }}
      >
        <div>
          {postsForCurrentPage.map((post) => (
            <div key={post.id} className={styles.post}>
              <Link className={styles.header} to={`/blog/${post.id}`}>
                {post.name}
              </Link>
              <div className={styles.postDate}>
                <h4 className={styles.date}>{post.date}</h4>
                <h4
                  className={styles.comments}
                >{`${post.comments.length} Комментариев`}</h4>
              </div>
              <img src={post.img} alt="" />
              <div className={styles.postDescription}>
                <p className={styles.description}>{post.description}</p>
                <GreenButton text="Подробнее" link={`/blog/${post.id}`} />
              </div>
            </div>
          ))}
        </div>
      </CSSTransition>
    );
  };

  const paginateButtons = () => {
    const countPages = Math.ceil(posts.length / itemsPerPage);
    const buttonCount: number[] = [];

    for (let i = 0; i < countPages; i++) {
      buttonCount.push(i + 1);
    }
    return (
      buttonCount.length !== 1 && (
        <div>
          {buttonCount.map((buttonNum: number, index: number) => (
            <button
              className={
                buttonNum === currentPage
                  ? styles.paginateActiveButton
                  : styles.paginateButton
              }
              disabled={buttonNum === currentPage}
              key={index}
              onClick={() => {
                setCurrentPage(buttonNum);
              }}
            >
              {buttonNum}
            </button>
          ))}
        </div>
      )
    );
  };

  return (
    <div>
      <LocatePanel />
      <div className={styles.wrapper}>
        {renderPostsForCurrentPage()}
        {
          <div className={styles.paginate}>
            <button
              className={
                currentPage === 1
                  ? styles.notActiveButton
                  : styles.paginateArrowButtonLeft
              }
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            ></button>
            {paginateButtons()}
            <button
              disabled={posts.length - currentPage * itemsPerPage <= 0}
              className={
                posts.length - currentPage * itemsPerPage <= 0
                  ? styles.notActiveButton
                  : styles.paginateArrowButtonRight
              }
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            ></button>
          </div>
        }
      </div>
    </div>
  );
};

export default Blog;
