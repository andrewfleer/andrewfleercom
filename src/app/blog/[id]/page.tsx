import { getBlogPost, getAllBlogPosts } from '@/lib/markdown'
import Link from 'next/link'
import Image from 'next/image'

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id)

  return (
    <article className="bg-white p-8 rounded-lg border-4 border-[#6a0dad] shadow-[8px_8px_0px_0px_#4a0a8d] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#4a0a8d] transition-all">
      {post.image && (
        <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden border-2 border-[#6a0dad] shadow-[4px_4px_0px_0px_#4a0a8d]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <h1 className="text-4xl font-bold text-[#6a0dad] mb-4">{post.title}</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-[#6a0dad]/10 text-[#6a0dad] rounded-full text-sm border border-[#6a0dad] shadow-[2px_2px_0px_0px_#4a0a8d]"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-[#ff1493] mb-8">{post.date}</p>
      <div 
        className="prose prose-lg max-w-none prose-headings:text-[#6a0dad] prose-a:text-[#ff1493] prose-strong:text-[#6a0dad]"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
      <div className="mt-8">
        <Link 
          href="/blog"
          className="inline-block px-6 py-3 bg-[#6a0dad] text-white rounded-lg border-2 border-[#4a0a8d] shadow-[4px_4px_0px_0px_#4a0a8d] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#4a0a8d] hover:bg-[#ff1493] transition-all"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  )
} 