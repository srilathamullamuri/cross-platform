import * as React from 'react';
import { Banner } from 'react-native-paper';

const ButtonNative : React.FunctionComponent = () => {
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
    )
}

export default ButtonNative;