import { cache } from "react";

export async function generateMetadata({ params }) {
  const paramData = await params;
  const { slug } = paramData;
  const data = await getEvent(slug);
  return {
    title: data.data.name,
    description: data.data.short_desc,
    openGraph: {
      title: data.data.name,
      description: data.data.short_desc,
      url: "https://326concepts.com/",
      images: [
        {
          url: data.data.thumbnail_url,
          secureUrl: data.data.thumbnail_url,
          width: 1200,
          height: 630,
          alt: "Preview image for 326 Concepts",
        },
      ],
      type: "website",
      siteName: "326 Concepts",
    },
  };
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

const getEvent = cache(async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN}/api/get-event-detail/${slug}`,
    {
      method: "GET",
    }
  );
  return res.json();
});
