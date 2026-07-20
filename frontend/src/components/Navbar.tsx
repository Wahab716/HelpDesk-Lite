function Navbar() {
    return (
        <header className="border-b border-slate-200 bg-white">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <div>
                    <p className="text-lg font-bold text-slate-900">HelpDesk Lite</p>
                    <p className="text-sm text-slate-500">IT Support DashBoard</p>
                </div>

                <div className="flex gap-4 text-sm font-medium text-slate-600">
                    <a href="#" className="hover:text-blue-600">
                        Dashboard
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        Tickets
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        Login
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;