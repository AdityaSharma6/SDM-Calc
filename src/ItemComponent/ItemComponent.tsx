import React from 'react';
import { observer } from 'mobx-react-lite';
import { DEL_ITEM } from '../actions';
import './ItemComponent.scss';
import { ItemADT } from '../store/schema';
import { getStore } from '../store/store';

export default observer(function ItemComponent(props: ItemADT) {
  const onClickRemoveItem = (event: any) => {
    event.preventDefault();
    DEL_ITEM(props.id);
  };

  return (
    <div className={'itemComponentContainer'}>
      {props.name}
      <button onClick={onClickRemoveItem}>Remove Item</button>
    </div>
  );
});
