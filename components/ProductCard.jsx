export default function ProductCard() {
    return (
        <div className="bg-white rounded-lg shadow p-4">

            {/* Image Part */}
            <div className="h-40 bg-gray-100 rounded mb-3"></div>

            {/* Product Title */}
            <h3 className="text-sm font-medium mb-1">
                Product Name
            </h3>

            {/* Price */}
            <p className="font-semibold mb-3">$99</p>

            {/* Add To Cart Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Add to Cart
            </button>

        </div>
    )
}