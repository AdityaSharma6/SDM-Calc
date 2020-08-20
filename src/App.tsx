import React from 'react';

import ItemComponent from './ItemComponent/ItemComponent';
import { DiscountType } from './store/schema';

var dummyData = {
  id: 1,
  name: 'Aditya',
  originalPrice: 10,
  discountedPrice: 5,
  discountValue: 0,
  discountType: DiscountType.flat,
  applicableForEmployeeDiscount: true,
  applicableForBonusPoints: true,
};

function App() {
  return (
    <ItemComponent
      id={dummyData.id}
      name={dummyData.name}
      originalPrice={dummyData.originalPrice}
      discountValue={dummyData.discountedPrice}
      discountType={dummyData.discountType}
      applicableForBonusPoints={dummyData.applicableForBonusPoints}
      applicableForEmployeeDiscount={dummyData.applicableForEmployeeDiscount}
    />
  );
}

export default App;
