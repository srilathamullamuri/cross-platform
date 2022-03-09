// @ts-nocheck
// import CustomButton from "./CustomButton/index";
// export { CustomButton }

import * as React from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

const CustomButton = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Fix it',
          onPress: () => setVisible(false),
        },
        {
          label: 'Learn more',
          onPress: () => setVisible(false),
        },
      ]}
     >
      There was a problem processing a transaction on your credit card.
    </Banner>
  );
};

export default CustomButton;