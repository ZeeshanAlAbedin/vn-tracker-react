'use client';

import { logout } from "@/app/lib/actions/auth";

export default function LogoutButton() {
    return (
        <button 
            onClick={async () => {
                await logout();
                window.location.reload();
            }} 
        >
            Logout
        </button>
    );
}
