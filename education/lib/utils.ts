import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatIndianCurrency = (amount: string, duration: number): string => {
   
    const input = amount;
    const n = input.replace(/[^\d]/g, "");

    console.log(amount);
    console.log(n);

    const d = duration || 1;
    if (!n) return '-';

    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(Number(n)/d);
};
