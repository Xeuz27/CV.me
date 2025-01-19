export const cleanHtml = (string) => {
  return string.replace(/<\/?[^>]+(>|$)/g, '');
};
