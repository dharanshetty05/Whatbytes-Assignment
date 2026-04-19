export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white mt-10">
            <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between">
                <div>
                    <h3 className="font-semibold mb-2">Filters</h3>
                    <p className="text-sm text-white/70">All Electronics</p>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">About Us</h3>
                    <p className="text-sm text-white/70">Contact</p>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <div className="flex gap-3 text-lg">
                        <span>🌐</span>
                        <span>🐦</span>
                        <span>📷</span>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-white/60 pb-4">
                © 2024 American
            </div>
        </footer>
    )
}