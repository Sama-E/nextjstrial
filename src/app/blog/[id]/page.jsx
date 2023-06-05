import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

//Get one post from DB

// async function getData(id) {
//   const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     return notFound()
//   }

//   return res.json();
// }

//Make metadata for one post

// export async function generateMetadata({ params }) {

//   const post = await getData(params.id)
//   return {
//     title: post.title,
//     description: post.desc,
//   };
// }

const BlogPost = () => {
  //Get one post
// const BlogPost = async ({ params }) => {
//   const data = await getData(params.id);

  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.info}>

        {/* <h1 className={styles.title}>{data.title}</h1> */}
        <h1 className={styles.title}>Something</h1>

        <p className={styles.desc}>
          {/* {data.desc} */}
          Something
        </p>
        <div className={styles.author}>
          <Image
            // src={data.img}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
          />
          {/* <span className={styles.username}>{data.username}</span> */}
          <span className={styles.username}>Someone</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          // src={data.img}
          src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
          alt=""
          fill={true}
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
        {/* {data.content} */}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?
      </p>
    </div>
  </div>
  )
}

export default BlogPost;