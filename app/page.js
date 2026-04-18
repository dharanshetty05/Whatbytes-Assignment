import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/product";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-gray-100 min-h-screen py-8">
        <div className="flex flex-row gap-4 max-w-7xl mx-auto px-6">

          {/* Sidebar Component */}
          <aside className="w-1/4 bg-white shadow rounded-lg p-4">
            
            <div>
              <h2 className="text-lg font-semibold mb-4">Filters</h2>

              {/* Categories */}
              <div className="mb-6">
                <p className="font-medium mb-2">Category</p>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="category" defaultChecked />
                    All
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="category" defaultChecked />
                    Electronics
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="category" defaultChecked />
                    Clothing
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="category" defaultChecked />
                    Home
                  </label>
                </div>
              </div>

              <div>
                <p className="font-medium mb-2">Price</p>
                <input type="range" className="w-full"/>
                <div className="flex justify-between text-xs mt-1">
                  <span>0</span>
                  <span>1000</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Display Area */}
          <section className="w-3/4 bg-white shadow rounded-lg p-4">
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Product Listing
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}