export function formatDate(date: string) {
    const ParseDate = new Date(Number(date));

    return ParseDate.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true
    });
}