import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
    const { isAuthenticated } = useAuth();

    return (
        <>
            <nav className="fixed flex w-full items-center justify-between gap-x-10 border-b bg-white px-8 py-4">
                <a className="font-serif text-3xl font-semibold text-primary" href="/">
                    comxmart
                </a>
                <input
                    className="w-full rounded-md px-3 py-1.5 ring-1 ring-gray-200 focus:ring-primary"
                    placeholder="Search..."
                    type="text"
                />
                <div className="flex gap-x-4">
                    {isAuthenticated ? (
                        <></>
                    ) : (
                        <>
                            <button className="text-center text-primary ring-1 ring-primary">
                                <h1>Register</h1>
                            </button>
                            <button className="bg-primary text-center text-white ring-1 ring-primary">
                                <h1>Login</h1>
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
}
