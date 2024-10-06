import { ArrowRight, Mail, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  const featuredProducts = [
    { name: 'Summer Dress', price: 59.99, imageUrl: '/images/p1.png' },
    { name: 'Casual Jeans', price: 49.99, imageUrl: '/images/p2.png' },
    { name: 'Elegant Blouse', price: 39.99, imageUrl: '/images/p3.png' },
    { name: 'Classic T-Shirt', price: 24.99, imageUrl: '/images/p4.png' }
  ];

  return (
    <>
      {/* <ThreeItemGrid />
      <Carousel />
      <Footer /> */}
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="bg-blue-600 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Welcome to FashionHub</h1>
            <p className="mb-8 text-xl">Discover the latest trends in fashion</p>
            <Link href="/">
              <button className="mx-auto flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 transition duration-300 hover:bg-gray-100">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">Featured Products</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product, index) => (
                <FeaturedProduct key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Subscribe to Our Newsletter</h2>
              <p className="mb-6 text-gray-600">
                Stay updated with our latest collections and exclusive offers!
              </p>
              <form className="flex flex-col gap-4 md:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-white transition duration-300 hover:bg-blue-700"
                >
                  Subscribe
                  <Mail className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const FeaturedProduct = ({
  name,
  price,
  imageUrl
}: {
  name: string;
  price: number;
  imageUrl: string;
}) => (
  <div className="rounded-lg bg-white p-4 shadow-md">
    <div className="relative mb-4 h-48 w-full">
      <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" className="rounded" />
    </div>
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-gray-600">${price}</p>
    <button className="mt-2 flex w-full items-center justify-center rounded bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-700">
      Add to Cart
      <ShoppingBag className="ml-2 h-4 w-4" />
    </button>
  </div>
);
