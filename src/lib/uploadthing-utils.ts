/**
 * Ensures all UploadThing file URLs use the utfs.io domain
 * @param url The original file URL from UploadThing
 * @returns A normalized URL using utfs.io domain
 */
export const normalizeUploadUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);
    // If the URL already uses utfs.io, return as is
    if (urlObj.hostname.endsWith('utfs.io')) {
      return url;
    }
    
    // Extract the file key (last part of the path)
    const key = urlObj.pathname.split('/').pop();
    if (!key) return url;
    
    // Return the normalized URL with utfs.io domain
    return `https://utfs.io/f/${key}`;
  } catch (error) {
    console.error('Error normalizing upload URL:', error);
    return url; // Return original URL if there's an error
  }
};
