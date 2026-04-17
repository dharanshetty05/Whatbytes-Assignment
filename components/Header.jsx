import { ShoppingCart, Search, User } from "lucide-react";

// <------------Header Component----------->
export default function Header() {
    return (
        <header className="w-full bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Left Side: Logo */}
                <div className="text-2xl font-bold">
                    Logo
                </div>

                {/* Center: Search Bar */}
                <div className="flex-1 mx-10">
                    <div className="flex items-center bg-blue-800 rounded-lg px-4 py-2">
                        <Search className="text-white/80 mr-2" size={18} />
                        <input 
                            type="text"
                            placeholder="Search for products..."
                            className="bg-transparent outline-none w-full text-white placeholder-white/70"
                        />
                    </div>
                </div>

                {/* Right Side: Cart + Profile*/}
                <div className="flex items-center gap-4">

                    {/* Cart Button */}
                    <button className="flex items-center gap-2 bg-blue-950 px-4 py-2 rounded-lg hover:bg-blue-900 transition">
                        <ShoppingCart size={18} />
                        Cart
                    </button>

                    {/* Profile */}
                    <User size={20} />
                </div>

            </div>
        </header>
    );
}