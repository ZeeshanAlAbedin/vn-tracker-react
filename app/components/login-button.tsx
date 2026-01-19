'use client';

import { login } from "@/app/lib/actions/auth";

export default function LoginButton() {
    return (
        <button 
            onClick={() => login()}
            className="text-[#F5E8D8] hover:text-[#FF4500] transition-colors duration-300"
        >
            Login
        </button>
    );
}
