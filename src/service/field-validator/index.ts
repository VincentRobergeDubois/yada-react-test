import * as Lodash from "lodash";

export const required = (value: string): string | false => {
  return Lodash.isEmpty(value) && "Champ requis";
};
