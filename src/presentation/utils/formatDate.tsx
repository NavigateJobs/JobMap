// utils/formatDate.ts

/**
 * Format a date into a readable string
 * 
 * @param date - Date object, ISO string, or timestamp
 * @param locale - Language/region (default: "en-US")
 * @param options - Intl.DateTimeFormat options
 */
export const formatDate = (
  date: string | number | Date,
  locale: string = "en-US",
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  }
): string => {
  if (!date) return ""

  const d = typeof date === "string" || typeof date === "number" ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, options).format(d)
}
