import Link from 'next/link'
import Image from 'next/image'
import { getAllBlogPosts, getAllTags } from '@/lib/markdown'

export default function Blog() {
  const posts = getAllBlogPosts()
  const tags = getAllTags()

  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-[#6a0dad]">Blog</h1>
      
      {posts.length === 0 ? (
        <article className="bg-white p-8 rounded-lg border-4 border-[#6a0dad] shadow-[8px_8px_0px_0px_#4a0a8d] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#4a0a8d] transition-all">
          <h2 className="text-3xl font-bold text-[#6a0dad] mb-4">Coming Soon</h2>
          <p className="text-lg text-[#ff1493] mb-6">
            I'm working on some exciting content. Stay tuned for my first blog post!
          </p>
          <button className="px-6 py-3 bg-[#6a0dad] text-white rounded-lg border-2 border-[#4a0a8d] shadow-[4px_4px_0px_0px_#4a0a8d] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#4a0a8d] hover:bg-[#ff1493] transition-all">
            Subscribe for Updates
          </button>
        </article>
      ) : (
        <>
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#6a0dad] text-white rounded-full text-sm border-2 border-[#4a0a8d] shadow-[4px_4px_0px_0px_#4a0a8d] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#4a0a8d] hover:bg-[#ff1493] transition-all cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="grid gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white p-8 rounded-lg border-4 border-[#6a0dad] shadow-[8px_8px_0px_0px_#4a0a8d] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#4a0a8d] transition-all">
                {post.image && (
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden border-2 border-[#6a0dad] shadow-[4px_4px_0px_0px_#4a0a8d]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <Link href={`/blog/${post.id}`}>
                  <h2 className="text-3xl font-bold text-[#6a0dad] mb-4 hover:text-[#ff1493] transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-lg text-[#ff1493] mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#6a0dad]/10 text-[#6a0dad] rounded-full text-sm border border-[#6a0dad] shadow-[2px_2px_0px_0px_#4a0a8d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[#6a0dad]">{post.date}</p>
              </article>
            ))}
          </div>
        </>
      )}
    </div>
  )
} 