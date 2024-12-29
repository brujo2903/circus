/**
 * Extracts a section of text from content based on a section header
 * @param content The full text content to extract from
 * @param section The section header to look for
 * @returns The extracted section text, trimmed
 */
export function extractSection(content: string, section: string): string {
  const regex = new RegExp(`${section}:([^\\n]*(?:\\n(?!\\n|[A-Z])[^\\n]*)*)`);
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}