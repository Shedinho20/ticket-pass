export const getDate = (time: number) => {
  const _date = time * 1000;

  const date = new Date(_date).toDateString();
  const hour = new Date(_date).getUTCHours();
  const min = new Date(_date).getUTCMinutes();

  return `${date} ${hour}:${min} UTC`;
};
