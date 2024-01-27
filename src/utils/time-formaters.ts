export const remainingTime = (time: string) => {
  const now = new Date().getTime();
  const end = new Date(time).getTime();
  const difference = end - now;

  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const formatTime = (time: number) => String(time).padStart(2, '0');

  return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
};
