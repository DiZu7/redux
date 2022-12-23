import React from 'react';
import '../index.scss';
import Options from './Options';
import SelectedOptions from './SelectedOptions';
import AvailableOptions from './AvailableOptions';

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOptions title="Available option" />
      <SelectedOptions title="Selected option" />
    </div>
  );
};

export default TransferList;
