export function getTimeUntilMidnightGMT() {
  const now = new Date();
  const utcNow = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0);
  const midnightGMT = new Date(utcNow.getTime() + 24 * 60 * 60 * 1000);
  
  const timeDifference = midnightGMT.getTime() - now.getTime();
  const hours = Math.floor(timeDifference / (60 * 60 * 1000));
  const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);
  
  return { hours, minutes, seconds };
}
