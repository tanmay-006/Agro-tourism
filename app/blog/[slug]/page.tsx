import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:px-10">
      <div className="text-center mb-8">
        <p className="text-xs uppercase tracking-widest text-[#2c3f16] font-semibold">{post.displayCategory || post.category}</p>
        <h1 className="mt-3 font-serif-display text-4xl md:text-5xl text-[#2c3f16] leading-tight font-bold">{post.title}</h1>
      </div>
      
      <div className="relative h-[250px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-md bg-[#f7f3ec] mb-10">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
      </div>
      
      <div className="text-lg font-serif-display text-[#2c3f16] leading-relaxed italic mb-8 border-l-4 border-[#2c3f16] pl-6">
        {post.excerpt}
      </div>
      
      <div className="prose prose-slate max-w-none text-[#48624a] leading-relaxed space-y-6 font-light">
        {post.content.split("\n\n").map((paragraph, index) => {
          const trimmed = paragraph.trim();
          if (!trimmed) return null;
          if (trimmed.startsWith("# ")) {
            return (
              <h1 key={index} className="font-serif-display text-3xl text-[#2c3f16] mt-8 mb-4 font-bold border-b border-[#e2dbc9] pb-2">
                {trimmed.replace("# ", "")}
              </h1>
            );
          }
          if (trimmed.startsWith("## ")) {
            return (
              <h2 key={index} className="font-serif-display text-2xl text-[#2c3f16] mt-8 mb-4 font-semibold">
                {trimmed.replace("## ", "")}
              </h2>
            );
          }
          if (trimmed.startsWith("- ")) {
            return (
              <ul key={index} className="list-disc pl-6 space-y-2 mt-4 text-sm md:text-base">
                {trimmed.split("\n").map((li, i) => (
                  <li key={i}>{li.replace("- ", "")}</li>
                ))}
              </ul>
            );
          }
          return <p key={index} className="text-sm md:text-base">{trimmed.replace(/\*\*/g, "")}</p>;
        })}
      </div>
      
      <div className="mt-16 pt-8 border-t border-[#e2dbc9] text-center">
        <Link href="/blog" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#2c3f16] hover:text-[#2c3f16] transition duration-300">
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}
