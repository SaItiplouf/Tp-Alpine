import IAccessoire from "./accessoire.model";
import IColor from "./color.model";
import IEquipment from "./equipment.model";
import IRim from "./rim.model";
import IVersion from "./version.model";

export default interface ICar {
  version: IVersion
  couleurs: IColor
  jantes: IRim;
  scellerie: {
    name: string;
    picture: string;
    price: number;
  };
  pictures: Array<string>;
  equipements: {
    [key: string]: IEquipment[]
  };
  accessoires: {
    [key: string]: IAccessoire[]
  };
}