import React from 'react';
import { observer } from 'mobx-react-lite';

import './ItemComponent.scss';
import { ItemADT } from '../store/schema';

export default observer(function ItemComponent(props: ItemADT) {
  return (
    <div>
      {props.name} {props.applicableForBonusPoints} {props.discountType}
    </div>
  );
});
