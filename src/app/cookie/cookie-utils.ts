export function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2 && typeof parts[1] === 'string') {
      return parts[1].split(';').shift() || null;
    }
    return null;
  }