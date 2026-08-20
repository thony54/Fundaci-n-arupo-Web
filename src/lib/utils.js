import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merge Tailwind classes safely (used by Magic UI components).
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
