import { parseISO } from "date-fns";
import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item, dateReviver) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue] as const;
}

function dateReviver(_key: string, value: any) {
    if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
        return parseISO(value);
    }

    return value;
}