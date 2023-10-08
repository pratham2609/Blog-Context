import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";
export default function Blogs() {
  const { loading, posts } = useContext(AppContext);
  return (
    <section className={"w-11/12 max-w-[670px] flex flex-col h-full items-center justify-center gap-5 "}>
      {
        loading ? (<Spinner />) :
          posts.length === 0 ? (<div>No Posts Found</div>) : (
            posts.map((post) => (<BlogDetails key={post.id} post={post} />))
          )
      }
    </section>
  );
}
