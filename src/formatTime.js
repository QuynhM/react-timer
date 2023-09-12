export const formatTime = (time) => {
  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = Math.floor(time / 60);
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const hours = Math.floor(minutes / 60);
  const getHours = `0${hours % 60}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
