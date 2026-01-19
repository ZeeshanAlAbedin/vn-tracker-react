import SiteNameHeading from "@/app/components/appname-heading";
import { SignInButton } from "@/app/components/sign-in-button";

export default function signin() {
    return (
        <div className="max-h-screen bg-[#1C1C1C] flex items-center justify-center px-4 py-30">
            <div className="w-full max-w-md overflow-y-auto max-h-screen">
                {/* Header */}
                <div className="text-center mb-8">
                    <SiteNameHeading />
                    <h2 className="text-2xl font-semibold text-[#F5E8D8] mb-2">Welcome Back</h2>
                    <p className="text-[#F5E8D8] opacity-75">Please login to continue</p>
                </div>

                {/* Login Form */}
                <form className="space-y-5 mb-6">
                    {/* Username Input */}
                    <div>
                        <label htmlFor="username" className="block text-[#F5E8D8] font-medium mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            className="w-full px-4 py-2 bg-[#2A2A2A] border-2 border-[#FF6F61] rounded text-[#F5E8D8] placeholder-[#F5E8D8] placeholder-opacity-50 focus:outline-none focus:border-[#DAA520] transition-colors"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-[#F5E8D8] font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 bg-[#2A2A2A] border-2 border-[#FF6F61] rounded text-[#F5E8D8] placeholder-[#F5E8D8] placeholder-opacity-50 focus:outline-none focus:border-[#DAA520] transition-colors"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#FF6F61] hover:bg-[#FF4500] text-[#1C1C1C] font-bold py-2 px-4 rounded transition-colors duration-300 mt-6"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center mb-6">
                    <div className="flex-grow border-t border-[#FF6F61]"></div>
                    <span className="px-4 text-[#F5E8D8] opacity-75">or</span>
                    <div className="flex-grow border-t border-[#FF6F61]"></div>
                </div>

                {/* Google Login */}
                <SignInButton />

                {/* Register Link */}
                <div className="text-center mb-8">
                    <p className="text-[#F5E8D8]">
                        Don't have an account?{' '}
                        <a
                            href="/signup"
                            className="text-[#DAA520] hover:text-[#FF4500] font-semibold transition-colors duration-300"
                        >
                            Register here
                        </a>
                    </p>
                </div>

                {/* Footer Links */}
                <div className="flex justify-center gap-6 text-sm">
                    <a
                        href="/privacy"
                        className="text-[#F5E8D8] opacity-75 hover:text-[#DAA520] transition-colors duration-300"
                    >
                        Privacy Policy
                    </a>
                    <span className="text-[#F5E8D8] opacity-50">•</span>
                    <a
                        href="/terms"
                        className="text-[#F5E8D8] opacity-75 hover:text-[#DAA520] transition-colors duration-300"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
        </div>
    );
}