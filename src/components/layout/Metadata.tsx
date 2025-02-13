// app/components/Metadata.tsx
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  
  return {
    title: "Akavin Panichpongsapak | Portfolio",
    description: "Akavin Panichpongsapak is an entrepreneur specializing in e-commerce, digital marketing, and content creation. He has successfully launched multiple online businesses, including Venta Blocks and Luv Jewelry, generating over $1,000,000 in revenue. Explore his journey, skills, and achievements.",
    keywords:[
      "Akavin Panichpongsapak",
      "entrepreneur",
      "e-commerce",
      "Shopify expert",
      "digital marketing",
      "content creation",
      "TikTok affiliate marketing",
      "Venta Blocks",
      "Luv Jewelry",
      "online business",
      "Facebook Ads",
      "Shopify Milestone"
    ],
    authors: [{ name: "Akavin Panichpongsapak" }],
    metadataBase: new URL('http://localhost:3000'),
    icons: {
      icon:'/favicon.ico',
    },
    openGraph: {
      title: "Akavin Panichpongsapak | Entrepreneur & E-commerce Specialist",
      description: "Discover the entrepreneurship journey of Akavin Panichpongsapak, founder of Venta Blocks and Luv Jewelry. Learn about his e-commerce success, marketing strategies, and business growth.",
      siteName: 'My Portfolio | Akavin Panichpongsapak',
      images: [{
        url: "https://yourwebsite.com/images/akavin-profile.jpg",
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Akavin Panichpongsapak | Portfolio",
      description: "Explore the entrepreneurial journey of Akavin Panichpongsapak, a successful e-commerce business owner and digital marketer.",
      images: ["https://yourwebsite.com/images/akavin-profile.jpg"],
      site: "@yourtwitterhandle"
    },
  };
}