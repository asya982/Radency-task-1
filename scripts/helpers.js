export const publishDate = () => {
  const currentDate = new Date();
  const creationDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  return creationDate;
};

export const findDates = (inputText) => {
  const dates = [];
  return dates;
};
