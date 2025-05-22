import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { AUOTCOMPLETEOPTIONS } from '../constants/constants';

const AutoCompleteComponent: React.FC = () => {

    const [query, setQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const filteredOptions = AUOTCOMPLETEOPTIONS.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (label: string) => {
        setQuery(label);
        setShowDropdown(false);
    };
    return (
        <>
            <div className="w-full max-w-sm mx-auto mt-10 relative">
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
                    placeholder="Start typing..."
                />

                <AnimatePresence>
                    {showDropdown && filteredOptions.length > 0 && (
                        <motion.ul
                            className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                        >
                            {filteredOptions.map((option) => (
                                <li
                                    key={option.id}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSelect(option.label)}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}

export default AutoCompleteComponent;