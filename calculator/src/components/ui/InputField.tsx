import React from 'react';
import '../../index.css';

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  unit: string;
  placeholder?: string;
  helpText?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  unit,
  placeholder,
  helpText,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="number"
          name={name}
          id={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          className="block w-full pr-16 sm:text-sm rounded-md border-gray-300 focus:ring-green-500 focus:border-green-500"
          placeholder={placeholder}
          min="0"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">{unit}</span>
        </div>
      </div>
      {helpText && (
        <p className="mt-1 text-sm text-gray-500">{helpText}</p>
      )}
    </div>
  );
};

export default InputField;