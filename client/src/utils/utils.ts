export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    month: 'long', 
    year: 'numeric' 
  };
  return date.toLocaleDateString('ru-RU', options);
}