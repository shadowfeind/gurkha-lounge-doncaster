import Image from "next/image";

export const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Discover the authentic flavors and rich culinary heritage behind
            Gurkha Lounge
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Images */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/aloo.jpg"
                alt="Inside Gurkha Lounge Restaurant"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg overflow-hidden shadow-xl hidden md:block">
              <Image
                src="/images/biryani.jpg"
                alt="Traditional Nepalese Dish"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full overflow-hidden border-4 border-amber-500 shadow-xl hidden md:block">
              <Image
                src="/images/momo.jpg"
                alt="Spices"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-amber-500 rounded-full text-white text-sm font-medium mb-2">
              100% Authentic
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white">
              A Taste of the Himalayas in Every Dish
            </h3>

            <p className="text-gray-300">
              Gurkha Lounge was born from a passion to share the authentic
              flavors of Nepal and India with our community. Our journey began
              when our founder brought his family recipes from the foothills of
              the Himalayas to create a dining experience that honors tradition
              while embracing innovation.
            </p>

            <div className="border-l-4 border-amber-500 pl-4 italic text-amber-300">
              &ldquo;Our cuisine tells the story of our heritage – a beautiful
              blend of Nepalese and Indian culinary traditions that have been
              passed down through generations. &ldquo;
            </div>

            <p className="text-gray-300">
              Every dish at Gurkha Lounge is crafted with care using
              time-honored techniques and the freshest ingredients. Our spices
              are ground in-house daily, and our recipes maintain the perfect
              balance of flavors that make Himalayan cuisine so distinctive and
              beloved around the world.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400"
                  >
                    <path d="M12 3v18"></path>
                    <rect x="4" y="8" width="16" height="12" rx="2"></rect>
                    <path d="M2 20h20"></path>
                  </svg>
                </div>
                <span className="font-medium text-white">
                  Authentic Recipes
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <span className="font-medium text-white">
                  Fresh Ingredients
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400"
                  >
                    <path d="M8.56 2.9A7 7 0 0 1 19 9v4"></path>
                    <path d="M17 22H3c0-3.7 3-6.9 7-6.9 2.7 0 5 1.6 6 4"></path>
                    <path d="M19 17h4"></path>
                    <path d="M21 14v6"></path>
                  </svg>
                </div>
                <span className="font-medium text-white">Family Owned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Pattern Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="h-8 w-full max-w-md flex items-center justify-center">
            <div className="h-0.5 w-full bg-amber-700/30"></div>
            <div className="mx-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-amber-500"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="h-0.5 w-full bg-amber-700/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
