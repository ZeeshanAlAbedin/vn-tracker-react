'use client';

import { useState } from 'react';

export default function signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;
        
        // Update form data
        const updatedFormData = {
            ...formData,
            [name]: value,
        };
        setFormData(updatedFormData);

        // Real-time validation
        const newErrors = { ...errors };

        if (name === 'username') {
            if (value && value.length < 3) {
                newErrors.username = 'Username must be at least 3 characters long';
            } else {
                newErrors.username = '';
            }
        }

        if (name === 'email') {
            if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                newErrors.email = 'Please enter a valid email address';
            } else {
                newErrors.email = '';
            }
        }

        if (name === 'password') {
            if (value && value.length < 6) {
                newErrors.password = 'Password must be at least 6 characters long';
            } else {
                newErrors.password = '';
            }
        }

        if (name === 'confirmPassword') {
            if (value && value !== updatedFormData.password) {
                newErrors.confirmPassword = 'Passwords do not match';
            } else {
                newErrors.confirmPassword = '';
            }
        }

        setErrors(newErrors);
    };

    
    return (
        <div className="max-h-screen bg-[#1C1C1C] flex items-center justify-center px-4 py-30">
            <div className="w-full max-w-md overflow-y-auto max-h-screen">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-[#FF6F61] mb-2">VN-Tracker</h1>
                    <p className="text-[#F5E8D8] opacity-75">Please register to continue</p>
                </div>

                    {/* Signup form */}
                    <form className="space-y-5 mb-6" >
                        <div>
                            <label htmlFor="username" className="block text-[#F5E8D8] font-medium mb-2">
                                Username
                            </label>
                             <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                value={formData.username}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 bg-[#2A2A2A] border-2 rounded text-[#F5E8D8] placeholder-[#F5E8D8] placeholder-opacity-50 focus:outline-none transition-colors ${
                                    errors.username ? 'border-[#FF4500]' : 'border-[#FF6F61] focus:border-[#DAA520]'
                                }`}
                            />
                            {errors.username && (
                                <p className="text-[#FF4500] text-sm mt-1">{errors.username}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-[#F5E8D8] font-medium mb-2">
                                Email
                            </label>
                             <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 bg-[#2A2A2A] border-2 rounded text-[#F5E8D8] placeholder-[#F5E8D8] placeholder-opacity-50 focus:outline-none transition-colors ${
                                    errors.email ? 'border-[#FF4500]' : 'border-[#FF6F61] focus:border-[#DAA520]'
                                }`}
                            />
                            {errors.email && (
                                <p className="text-[#FF4500] text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-[#F5E8D8] font-medium mb-2">
                                Password
                            </label>
                             <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 bg-[#2A2A2A] border-2 rounded text-[#F5E8D8] placeholder-[#F5E8D8] placeholder-opacity-50 focus:outline-none transition-colors ${
                                    errors.password ? 'border-[#FF4500]' : 'border-[#FF6F61] focus:border-[#DAA520]'
                                }`}
                            />
                            {errors.password && (
                                <p className="text-[#FF4500] text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                         <div>
                            <label htmlFor="confirmPassword" className="block text-[#F5E8D8] font-medium mb-2">
                                Re-enter Password
                            </label>
                             <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Enter your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 bg-[#2A2A2A] border-2 rounded text-[#F5E8D8] placeholder-[#F5E8D8] placeholder-opacity-50 focus:outline-none transition-colors ${
                                    errors.confirmPassword ? 'border-[#FF4500]' : 'border-[#FF6F61] focus:border-[#DAA520]'
                                }`}
                            />
                            {errors.confirmPassword && (
                                <p className="text-[#FF4500] text-sm mt-1">{errors.confirmPassword}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#FF6F61] hover:bg-[#FF4500] text-[#1C1C1C] font-bold py-2 px-4 rounded transition-colors duration-300 mt-6"
                            >Register</button>
                    </form>

                    <div className="text-center mb-8">
                    <p className="text-[#F5E8D8]">
                        Already have an account?{' '}
                        <a
                            href="/login"
                            className="text-[#DAA520] hover:text-[#FF4500] font-semibold transition-colors duration-300"
                        >
                            Login here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}