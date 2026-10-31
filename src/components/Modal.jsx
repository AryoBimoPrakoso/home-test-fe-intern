import { useEffect } from "react"

export default function Modal({ user, onClose }) {
    useEffect(() => {
        if (!user) return;
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [user, onClose]);

    if (!user) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={onClose}
        >
            <div
                className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-4 flex items-start justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-neutral-800">{user.name}</h2>
                        <p className="text-xs text-neutral-400">@{user.username}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-neutral-400 transition-colors hover:text-neutral-800"
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>

                <dl className="space-y-3 text-sm">
                    <div>
                        <dt className="text-neutral-400">Email</dt>
                        <dd className="text-neutral-800">{user.email}</dd>
                    </div>
                    <div>
                        <dt className="text-neutral-400">Phone</dt>
                        <dd className="text-neutral-800">{user.phone}</dd>
                    </div>
                    <div>
                        <dt className="text-neutral-400">Website</dt>
                        <dd className="text-neutral-800">{user.website}</dd>
                    </div>
                    <div>
                        <dt className="text-neutral-400">Address</dt>
                        <dd className="text-neutral-800">
                            {user.address?.street}, {user.address?.suite}, {user.address?.city} {user.address?.zipcode}
                        </dd>
                    </div>
                    <div>
                        <dt className="text-neutral-400">Company</dt>
                        <dd className="text-neutral-800">{user.company?.name}</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}
