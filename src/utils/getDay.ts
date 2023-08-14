const today = new Date();

export const getDate = (date: string) => {
  const [year, month, day] = date.split('T')[0].split('-').map(Number);
  return { year, month, day };
};

export const getExpireTime = (date: string) => {
  const expireTime = new Date(date);
  const differenceTime = expireTime.getTime() - today.getTime();

  const differenceTimeDay = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
  const differenceTimeHour = Math.floor((differenceTime / (1000 * 60 * 60)) % 24);
  const differenceTimeMinute = Math.floor((differenceTime / (1000 * 60)) % 60);

  return {
    day: differenceTimeDay,
    hour: differenceTimeHour,
    minute: differenceTimeMinute,
  };
};
