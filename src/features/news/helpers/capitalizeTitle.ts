export const capitalizeTitle = (title: string) => {
  return title
    .split(" ")
    .map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(" ");
};
