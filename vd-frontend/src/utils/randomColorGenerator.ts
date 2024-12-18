/**
 * Generates a random hexadecimal color.
 * @returns {string} A random color in the format #RRGGBB
 */
export function generateRandomColor(): string {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  return `#${randomColor}`;
}

