export const calculateTimeDifferenceInMinutes = (date: Date) => {
  const now = new Date().getTime();
  const givenDate = date.getTime();
  const timeDifference = Math.floor((now - givenDate) / 60000);

  return timeDifference;
};
