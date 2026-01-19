'use client';

import { ReactNode } from 'react';

interface ConfirmPopupProps {
  isOpen: boolean;
  title: string;
  message: string | ReactNode;
  buttonText: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDangerous?: boolean;
}

export default function ConfirmPopup({
  isOpen,
  title,
  message,
  buttonText,
  onConfirm,
  onCancel,
  isDangerous = false,
}: ConfirmPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="bg-[#1C1C1C] border-2 border-[#FF6F61] rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl"
        style={{
          boxShadow: '0 0 30px rgba(255, 111, 97, 0.3)',
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-[#F5E8D8]">{title}</h2>

        <div className="mb-6 text-[#F5E8D8] text-base leading-relaxed">
          {message}
        </div>

        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            style={{
              backgroundColor: 'transparent',
              color: '#F5E8D8',
              border: '2px solid #F5E8D8',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FF6F61';
              e.currentTarget.style.borderColor = '#FF6F61';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#F5E8D8';
            }}
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            style={{
              backgroundColor: isDangerous ? '#FF6F61' : '#DAA520',
              color: isDangerous ? '#1C1C1C' : '#1C1C1C',
              border: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FF4500';
              e.currentTarget.style.color = isDangerous ? '#1C1C1C' : '#F5E8D8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isDangerous ? '#FF6F61' : '#DAA520';
              e.currentTarget.style.color = isDangerous ? '#1C1C1C' : '#1C1C1C';
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
