import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
export default function Blogs() {
  const { loading, posts } = useContext(AppContext);
  return (
    <section className="w-11/12 h-screen max-w-[670px] py-5 flex flex-col gap-7 my-20">
      {
        loading ? (<Spinner />) : (
          posts.length === 0 ? (<div>No Posts Found</div>) : (
            posts.map((post) => (<div key={post.id}>
              <p className="font-bold text-base">
                {post.title}
              </p>
              <p className="text-xs">
                By <span className="italic"> {post.author}</span> on <span className="font-bold underline"> {post.category} </span>
              </p>
              <p className="text-xs mt-1">
                Posted on {post.date}
              </p>
              <p className="text-sm mt-3">
                {post.content}
              </p>
              <div className="flex gap-1">
                {post.tags.map((tag, index) => (
                  <span key={index} className=" mt-1 text-blue-700 underline text-[10px] font-bold">{`#${tag}`}</span>
                ))}
              </div>
            </div>))
          )
        )
      }
    </section>
  );
}
