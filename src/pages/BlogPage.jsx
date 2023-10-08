import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import BlogDetails from '../components/BlogDetails';
import BlogLayout from '../components/BlogLayout';

export default function BlogPage() {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }

  }, [location.pathname]);
  return (
    <BlogLayout>
      <div className='w-11/12 h-full max-w-[670px] flex flex-col justify-start gap-5'>
        <button className='rounded-md border-2 px-4 w-min py-1' onClick={() => navigation(-1)}>
          Back
        </button>
        {
          loading ? (<div>Loading Your Blog!...</div>) :
            blog ? (<div className='flex flex-col gap-5'>
              <BlogDetails post={blog} />
              <h2 className='font-bold text-2xl'>Related Blogs</h2>
              {
                relatedBlogs.map((post) => (<div key={post.id}>
                  <BlogDetails post={post} />
                </div>))
              }
            </div>) : (<p>No blog found</p>)
        }
      </div>
    </BlogLayout>
  )
}
