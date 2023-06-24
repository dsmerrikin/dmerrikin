import BlogPost from "./BlogPost/BlogPost";
const Blog = () => {
  return (
    <section
      id='news'
      className='pt-[120px] pb-20 bg-[#f8f9ff]'
    >
      <div className='container'>
        <div className='flex flex-wrap mx-[-16px]'>
          <div className='w-full px-4'>
            <div className='max-w-[600px] mx-auto text-center mb-[50px]'>
              <span className='font-semibold text-lg text-primary block mb-2'>
                Recent Posts
              </span>
              <h2 className='font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5'>
                From The Blog
              </h2>
              <p className='font-medium text-lg text-body-color'>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap -mx-4'>
          <BlogPost />
        </div>
      </div>
    </section>
  );
};

export default Blog;
