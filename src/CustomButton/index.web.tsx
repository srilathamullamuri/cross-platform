import * as React from 'react';
import { Banner } from 'react-native-paper';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';

interface Iprops {
  hideBanner?: () => void;
  dismiss?: () => void;
  message?: string;
}
const ButtonWeb : React.FunctionComponent<Iprops> = (props) => {
    const [visible, setVisible] = React.useState(true);

    const handlePress = () => {
      setVisible(false);
      props.hideBanner ? props.hideBanner() : null
    }

    const handleDismiss = () => {
      // setVisible(false);
      props.dismiss ? props.dismiss() : null
    }


    return (
      <View>
      <WebView
        source={{html: '<h1>This is a static HTML source!</h1>'}}
      />
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
            onPress: () => handleDismiss(),
          },
        ]}
       >
        {props.message ? props.message : 'No message to show'}
      </Banner>
      </View>
    )
}

export default ButtonWeb;