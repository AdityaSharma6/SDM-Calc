import React from 'react';
import { observer } from 'mobx-react-lite';
import './App.css';
import ItemComponent from './ItemComponent/ItemComponent';
import { ADD_ITEM } from './actions';
import { DiscountType, ItemADT } from './store/schema';
import { getStore } from './store/store';

var dummyData: ItemADT = {
  key: 1,
  id: 1,
  name: 'Aditya',
  originalPrice: 10,
  discountedPrice: 5,
  discountValue: 0,
  discountType: DiscountType.flat,
  applicableForEmployeeDiscount: true,
  applicableForBonusPoints: true,
};

export default observer(function App() {
  const receiptToRender = getStore().receipt.map(item => (
    <ItemComponent
      id={item.id}
      key={item.key}
      name={item.name}
      originalPrice={item.originalPrice}
      discountValue={item.discountValue}
      discountedPrice={item.discountedPrice}
      discountType={item.discountType}
      applicableForBonusPoints={item.applicableForBonusPoints}
      applicableForEmployeeDiscount={item.applicableForEmployeeDiscount}
    />
  ));

  const onClickAddItem = (event?: any) => {
    event.preventDefault();
    let data = dummyData;
    data.id = getStore().receipt.length;
    data.key = getStore().receipt.length;
    data.name = data.name + getStore().receipt.length;
    ADD_ITEM(data);
  };

  return (
    <div className={'rootComponentContainer'}>
      <div className={'rootComponentHeader'}>
        <button onClick={onClickAddItem}>Add New Item</button>
      </div>
      <div className={'rootComponentBody'}>{receiptToRender}</div>
      <div className={'rootComponentFooter'}></div>
    </div>
  );
});
