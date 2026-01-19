'use client';

import { logout } from "@/app/lib/actions/auth";

export default function LogoutButton() {
    return (
        <button 
            onClick={async () => {
                await logout();
                window.location.reload();
            }}
            className="text-[#F5E8D8] hover:text-[#FF4500] transition-colors duration-300"
        >
            Logout
        </button>
    );
}
