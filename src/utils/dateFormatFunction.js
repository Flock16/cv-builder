export const formatDate = (date) => {
  const [year, month] = date.split("-");
  return `${month}-${year}`;
};
