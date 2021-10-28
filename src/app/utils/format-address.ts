export interface Address {
  Address?: string;
  Suite?: string;
  City?: string;
  State?: string;
  Zip?: string;
}

export const FormatAddress = (address: Address): string => {
  let formatted = "";

  if (address) {
    if (address.Address) {
      formatted += address.Address;
    }

    if (address.Address && address.Suite) {
      formatted += ", ";
    }

    if (address.Suite) {
      formatted += `Suite: ${address.Suite}`;
    }

    if (
      (address.Address || address.Suite) &&
      (address.City || address.State || address.Zip)
    ) {
      formatted += ",";
    }

    if (address.City) {
      formatted += ` ${address.City}`;
    }

    if (address.State) {
      formatted += ` ${address.State}`;
    }

    if (address.Zip) {
      formatted += ` ${address.Zip}`;
    }
  }

  return formatted;
};
