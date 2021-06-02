import { useState } from 'react';

// A simple hook that encapsulates some dropdown logic
export default function useDropdown() {
    const [showDropdown, toggleDropdown] = useState(false);
    const toggle = () => toggleDropdown(!showDropdown);
  
    return [showDropdown, toggle];
}
