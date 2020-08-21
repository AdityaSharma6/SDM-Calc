export enum DiscountType {
  percent,
  flat,
  combination,
}

export interface ItemADT {
  key: number;
  id: number;
  name: string;
  description?: string;
  originalPrice: number;
  discountedPrice: number;
  discountValue: number;
  discountType: DiscountType;
  applicableForEmployeeDiscount: boolean;
  applicableForBonusPoints: boolean;
}

export interface StoreSchema {
  isEmployee: boolean;
  isBonusPointsAvailable: boolean;
  bonusPointsValue?: number;
  receipt: ItemADT[];
  totalOriginalPrice: number;
  totalStoreDiscount: number; // Savings from only the store discount (not employee, bonus points etc...)
  totalEmployeeDiscount: number; // Savings from only the employee discount
  totalPointsGenerated: number;
  totalPointsDiscount: number;
  totalOverallDiscount: number;
}
