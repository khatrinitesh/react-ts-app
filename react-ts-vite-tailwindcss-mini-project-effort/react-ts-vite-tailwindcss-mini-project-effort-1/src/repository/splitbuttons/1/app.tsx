import React from 'react'

const CustomApp = () => {
  return (
    <>
        <SplitButton/>
    </>
  )
}

export default CustomApp

interface SplitButtonProps {
    primaryActionLabel: string;
    primaryActionHandler: () => void;
    secondaryActionLabel: string;
    secondaryActionHandler: () => void;
  }

  const SplitButton: React.FC<SplitButtonProps> = ({
    primaryActionLabel,
    primaryActionHandler,
    secondaryActionLabel,
    secondaryActionHandler,
  }) => {
    return (
      <div className="inline-flex rounded-md shadow">
        {/* Primary action button */}
        <button
          onClick={primaryActionHandler}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-l-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {primaryActionLabel}
        </button>
        {/* Secondary action button */}
        <button
          onClick={secondaryActionHandler}
          className="-ml-px inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {secondaryActionLabel}
        </button>
      </div>
    );
  };
  