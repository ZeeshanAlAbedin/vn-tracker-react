'use client';

import { InputHTMLAttributes, useRef } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Checkbox({
  label,
  error,
  id,
  className = '',
  ...props
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCheckboxClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            ref={inputRef}
            type="checkbox"
            id={id}
            className="sr-only peer"
            {...props}
          />
          {/* Custom checkbox */}
          <div
            onClick={handleCheckboxClick}
            className="w-5 h-5 rounded border-2 border-[#FF6F61] cursor-pointer transition-all duration-200 flex items-center justify-center peer-checked:bg-[#FF6F61] peer-checked:border-[#FF6F61] peer-disabled:opacity-50 peer-disabled:cursor-not-allowed hover:border-[#FF4500] peer-checked:hover:bg-[#FF4500]"
            style={{
              backgroundColor: props.checked ? '#FF6F61' : 'transparent',
            }}
          >
            {/* Checkmark */}
            {props.checked && (
              <svg
                className="w-3 h-3 text-[#1C1C1C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        </div>

        {label && (
          <label
            htmlFor={id}
            className="text-[#F5E8D8] cursor-pointer select-none peer-disabled:opacity-50 peer-disabled:cursor-not-allowed font-medium"
          >
            {label}
          </label>
        )}
      </div>

      {error && <span className="text-[#FF6F61] text-sm">{error}</span>}
    </div>
  );
}
