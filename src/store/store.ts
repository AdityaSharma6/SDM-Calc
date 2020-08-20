import { StoreSchema } from './schema';
import { createStore } from 'satcheljs';

export const Store: StoreSchema = {
  isEmployee: false,
  isBonusPointsAvailable: false,
  bonusPointsValue: 0,
  receipt: [],
  totalOriginalPrice: 0,
  totalStoreDiscount: 0,
  totalEmployeeDiscount: 0,
  totalPointsGenerated: 0,
  totalPointsDiscount: 0,
  totalOverallDiscount: 0,
};

export const getStore = createStore<StoreSchema>('RootStore', Store);
