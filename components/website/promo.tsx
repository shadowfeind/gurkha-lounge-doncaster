import { Tag } from "lucide-react";

export const PromoSection = () => {
  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Tag className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">
                    Special Offers
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-amber-600 font-bold">10%</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Dine-in Discount
                      </h4>
                      <p className="text-gray-600">
                        Enjoy 10% off on all food items when you dine in with
                        us.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-amber-600 font-bold">10%</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Collection Discount
                      </h4>
                      <p className="text-gray-600">
                        Get 10% off on collection orders over £15.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block w-px h-40 bg-gray-200"></div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Taste the Authentic
                </h3>
                <p className="text-gray-600 mb-6">
                  Experience the rich flavors of Nepal and India with our
                  special offers.
                </p>
                <a
                  href="/menu"
                  className="inline-block px-6 py-3 bg-amber-300 text-black font-medium rounded-full hover:bg-amber-600 transition-colors"
                >
                  View Our Menu +
                </a>
              </div>
            </div>
          </div>

          <div className="h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
