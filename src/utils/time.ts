export const dateFromNow = (date: Date) => {
  const currentDate = new Date();

  if (
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear()
  ) {
    const hours = Math.floor(Math.abs(date.valueOf() - currentDate.valueOf()) / 36e5);

    if (hours === 0) {
      const minutes = Math.floor((Math.abs(date.valueOf() - currentDate.valueOf()) % 36e5) / 60000);
      return minutes < 1 ? 'Update!' : `${minutes} minutes ago.`;
    }

    return `${hours} hours ago.`;
  }

  if (date.getFullYear() === currentDate.getFullYear()) {
    return `${date.getMonth() + 1}/${(date.getDate() < 10 ? '0' : '') + date.getDate()}`;
  }

  return `${Math.abs(date.getFullYear() - currentDate.getFullYear())}years ago`;
};
