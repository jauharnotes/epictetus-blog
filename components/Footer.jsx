import { useState, useEffect } from "react";

export default function Footer() {
    const [year, setYear] = useState('');

    useEffect(() => {
        const date = new Date();
        const getYear = date.getFullYear().toString();
        return setYear(prev => prev = getYear);
    }, []);
    

    return (
        <div className="flex justify-center text-tcontent pt-24 pb-11">
            <h1>Copyright (c) {year} - Design By Nauval</h1>
        </div>
    )
}