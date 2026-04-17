import Header from "@/components/Header";

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

              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Category</p>
                  <div className="space-y-1 text-sm">
                    <p>All</p>
                    <p>Electronics</p>
                    <p>Clothing</p>
                    <p>Home</p>
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-2">Price</p>
                  <div className="h-2 bg-gray-300 rounded"></div>
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

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-gray-100 h-40 rounded"></div>
                <div className="bg-gray-100 h-40 rounded"></div>
                <div className="bg-gray-100 h-40 rounded"></div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}