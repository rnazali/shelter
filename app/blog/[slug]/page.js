export default async function Page({params}) {
  const {slug} = await params;
  const {default: Post} = await import(`@/contents/draft/${slug}.mdx`);

  return <Post/>
}

export function generateStaticParams() {
  return [
    {
      slug: "content-1",
    },
    {
      slug: "content-2",
    },
  ]
}

export const dynamicParams = false;