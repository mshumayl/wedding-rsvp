import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function delay(ms: number): Promise<void> {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export function toTitleCase(str: string) {
  return str.replace(/\b\w/g, function(match) {
    return match.toUpperCase();
  });
}

export function toSentenceCase(str: string) {
  return str.replace(/^.|\.\s*\w/g, function(match) {
    return match.toUpperCase();
  });
}

export function calculateRelativeTime(targetDate: Date): string {
  const currentDate = new Date();

  const targetDateUTC8 = new Date(targetDate.getTime() + (targetDate.getTimezoneOffset() + 480) * 60 * 1000);

  const timeDifference = currentDate.getTime() - targetDateUTC8.getTime();
  const seconds = Math.floor(timeDifference / 1000);

  if (seconds < 60) {
    return `${seconds} saat lepas`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minit lepas`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} jam lepas`;
  }

  const days = Math.floor(hours / 24);
  if (days < 7) {
    return `${days} hari lepas`;
  }

  // If more than a week, format and display the date directly
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: 'long', day: 'numeric' };
  return targetDate.toLocaleDateString(undefined, options);
}
