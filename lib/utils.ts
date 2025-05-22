import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

/**
 * Filters out undefined values from an object
 * @param obj The object to filter
 * @returns A new object with only defined values
 */
export function filterDefinedValues<T extends object>(
	obj: Partial<T>,
): Partial<T> {
	return Object.fromEntries(
		Object.entries(obj).filter(([_, value]) => value !== undefined),
	) as Partial<T>
}