export default function SidebarFilters({
    category,
    setCategory,
    maxPrice,
    setMaxPrice,
}) {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Filters</h2>

            {/* Category */}
            <div className="mb-6">
                <p className="font-medium mb-2">Category</p>
                <div className="space-y-2 text-sm">

                    {["all", "electronics", "clothing", "home"].map((cat) => (
                        <label key={cat} className="flex items-center gap-2">
                            <input 
                                type="radio" 
                                name="category"
                                checked={category === cat}
                                onChange={() => setCategory(cat)}
                            />
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </label>
                    ))}
                </div>
            </div>

            {/* Price */}
            <div>
                <p className="font-medium mb-2">Max Price</p>
                <input 
                    type="range" 
                    min="0"
                    max="1000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))} 
                    className="w-full"
                />
                <p className="text-sm mt-1">Upto ${maxPrice}</p>
            </div>
        </div>
    );
}