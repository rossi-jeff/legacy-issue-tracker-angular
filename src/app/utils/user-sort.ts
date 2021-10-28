export const userSort = (a: any, b: any): number => {
  if (a.Name.Last && b.Name.Last) {
    if (a.Name.Last.toLowerCase() > b.Name.Last.toLowerCase()) return 1;
    if (a.Name.Last.toLowerCase() < b.Name.Last.toLowerCase()) return -1;
  }
  if (a.Name.First && b.Name.First) {
    if (a.Name.First.toLowerCase() > b.Name.First.toLowerCase()) return 1;
    if (a.Name.First.toLowerCase() < b.Name.First.toLowerCase()) return -1;
  }
  return 0;
};
