export const issueSort = (a: any, b: any): number => {
  if (a.SequenceNumber && b.SequenceNumber) {
    if (a.SequenceNumber.toLowerCase() > b.SequenceNumber.toLowerCase())
      return 1;
    if (a.SequenceNumber.toLowerCase() < b.SequenceNumber.toLowerCase())
      return -1;
  }
  return 0;
};
