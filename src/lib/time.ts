import { format, parseISO } from "date-fns"

export function formatDate(date: string): string {
    return format(parseISO(date), "MMMM dd, yyyy")
}

export function sortByDate<T extends { date: string }>(items: T[]): T[] {
    return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
