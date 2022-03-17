import * as React from 'react';
import { Banner } from 'react-native-paper';
import {View, Text, Image} from 'react-native';


interface Iprops {
  hideBanner?: () => void;
  dismiss?: () => void;
  message?: string;
  image?: string;
  link?: string;
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
          {props.image && <Image style = {{ width: 100, height: 100 }} resizeMode={'stretch'} source={{uri: props.image}} />}
          {props.message && <Text>{props.message}</Text>}
          {props.link && <Text onPress={() => Linking.openURL(props.link)}>{props.link}</Text>}
        </View>
      </Banner>
      </View>
    )
}

export default ButtonWeb;