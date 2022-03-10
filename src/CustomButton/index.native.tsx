import * as React from 'react';
import { Banner } from 'react-native-paper';

interface Iprops {
  hideBanner?: () => void;
  message?: string;
}
const ButtonNative : React.FunctionComponent<Iprops> = (props) => {
    const [visible, setVisible] = React.useState(true);
    
    const handlePress = () => {
      props.hideBanner ? props.hideBanner() : null
    }

    return (
        <Banner
        style={{borderColor: 'black'}}
        visible={visible}
        actions={[
          {
            label: 'Dont show me this again',
            onPress: () => handlePress(),
          },
          {
            label: 'Dismiss',
            onPress: () => setVisible(false),
          },
        ]}
       >
        {props.message ? props.message : 'No message to show'}
      </Banner>
    )
}

export default ButtonNative;