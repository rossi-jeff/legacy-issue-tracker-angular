export const buildHeaders = (session: any = {}): any => {
  let headers: any = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  if (session.Token) {
    headers.Authorization = `Bearer ${session.Token}`;
  }
  return headers;
};
