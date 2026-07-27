export function formatDate(input: string | Date, locale: 'ca' | 'it'): string {
  const date = input instanceof Date ? input : new Date(input)
  const parts = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  }).formatToParts(date)
  const get = (type: string) => parts.find(part => part.type === type)?.value ?? ''
  return `${get('day')} ${get('month')} ${get('year')}`
}
