export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4">

            {/* Image Part */}
            <div className="h-40 flex items-center justify-center mb-3">
                <div className="h-32 w-32 bg-gray-100 rounded">
                    <img 
                        src="{product.image}" 
                        alt="product.title" 
                        className="h-32 object-contain" 
                    />
                </div>
            </div>

            {/* Product Title */}
            <h3 className="text-sm font-medium mb-1 text-gray-800">
                {product.title}
            </h3>

            {/* Price */}
            <p className="text-sm font-semibold text-gray-900 mb-3">
                ${product.price}
            </p>

            {/* Add To Cart Button */}
            <button className="w-full bg-blue-600 text-white text-sm  py-2 rounded-md hover:bg-blue-700 transition">
                Add to Cart
            </button>
        </div>
    )
}