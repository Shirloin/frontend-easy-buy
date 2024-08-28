export function formatNumber(value: number): string {
    return value.toLocaleString('de-DE');
}

export function formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}