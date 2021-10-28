export const projectSort = (a: any, b: any): number => {
  if (a.Name && b.Name) {
    if (a.Name.toLowerCase() > b.Name.toLowerCase()) return 1;
    if (a.Name.toLowerCase() < b.Name.toLowerCase()) return -1;
  }
  return 0;
};
