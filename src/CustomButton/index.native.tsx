import * as React from 'react';
import {View, Text, Image} from 'react-native';
import { Banner } from 'react-native-paper';

interface Iprops {
  hideBanner?: () => void;
  dismiss?: () => void;
  message?: string;
}
const ButtonNative : React.FunctionComponent<Iprops> = (props) => {
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
        {/* <WebView
          style={{height: 100}}
          source={{html: '<h1>This is a static HTML source!</h1>'}}
        /> */}
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
        <View>
          <Image style = {{ width: 100, height: 100 }} resizeMode={'stretch'} defaultSource={{uri :  'https://sso.vconsultnetwork.com/omniweb/images/logo.png'}} source={{uri: 'https://sso.vconsultnetwork.com/omniweb/images/logo.png'}} />
          <Text>There was a problem processing a transaction on your credit card.</Text>
        </View>
         </Banner> 
      
      </View>
    )
}

export default ButtonNative;