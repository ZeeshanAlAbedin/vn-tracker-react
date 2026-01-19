'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import ConfirmPopup from '@/app/components/confirm-popup';
import Checkbox from '@/app/components/checkbox';
import SiteNameHeading from '@/app/components/appname-heading';

export default function onboarding() {
    const router = useRouter();
    const { data: session } = useSession();
    const [showPopup, setShowPopup] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    useEffect(() => {
        if (!session?.user) {
            setShowPopup(true);
        }
    }, [session]);
 
    return (
        <>
            <ConfirmPopup
                isOpen={showPopup}
                title="Session Required"
                message="You need to be logged in to access the onboarding page."
                buttonText="OK"
                onConfirm={() => router.push('/')}
                onCancel={() => router.push('/')}
            />
            <div className="max-h-screen bg-[#1C1C1C] flex items-center justify-center px-4 py-30">
            <div className="w-full max-w-md overflow-y-auto max-h-screen">
                {/* Header */}
                <div className="text-center mb-8">
                    <SiteNameHeading />
                    <p className="text-[#F5E8D8] opacity-75">Please add additional information for first time login</p>
                </div>

                {/* Avatar Placeholder */}
                <div className="flex justify-center mb-8">
                    <div>
                        <span className="text-[#FF6F61] text-4xl">
                            <img src={session?.user?.image || ''} className="w-24 h-24 rounded-full bg-[#2A2A2A] border-2 border-[#FF6F61] flex items-center justify-center" />    
                        </span>
                    </div>
                </div>

                    {/* Signup form */}
                    <form className="space-y-5 mb-6" >
                        <div>
                            <label htmlFor="displayname" className="block text-[#F5E8D8] font-medium mb-2">
                                Display Name
                            </label>
                             <input
                                type="text"
                                id="displayname"
                                name="displayname"
                                className={`w-full px-4 py-2 bg-[#2A2A2A] border-2 rounded text-[#F5E8D8] placeholder-[#F5E8D8] placeholder-opacity-50 focus:outline-none transition-colors'border-[#FF6F61] focus:border-[#DAA520]'
                                }`}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-[#F5E8D8] font-medium mb-2">
                                Email
                            </label>
                             <input
                                type="text"
                                id="email"
                                name="email" disabled
                                value={session?.user?.email || ''}
                                className={`w-full px-4 py-2 bg-[#2A2A2A] border-2 rounded text-[#F5E8D8] placeholder-[#F5E8D8] placeholder-opacity-50 focus:outline-none transition-colors'border-[#FF6F61] focus:border-[#DAA520]'
                                }`}
                            />
                        </div>

                        <Checkbox 
                            id="tac"
                            label="I agree to the Terms and Conditions"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}/> 

                        <button
                            type="submit"
                            disabled={!isChecked}
                            className="w-full font-bold py-2 px-4 rounded transition-colors duration-300 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                                backgroundColor: isChecked ? '#FF6F61' : '#2A2A2A',
                                color: '#1C1C1C',
                            }}
                            onMouseEnter={(e) => {
                                if (isChecked) {
                                    e.currentTarget.style.backgroundColor = '#FF4500';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (isChecked) {
                                    e.currentTarget.style.backgroundColor = '#FF6F61';
                                }
                            }}
                            >Confirm
                        </button>
                    </form>

            </div>
            </div>
        </>
    );
}