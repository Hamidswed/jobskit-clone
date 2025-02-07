export function capitalizeFirstLetter(name: string): string {
  if (!name) return name;
  return name.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
}
