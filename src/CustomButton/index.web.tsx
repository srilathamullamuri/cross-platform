import * as React from 'react';
import { Banner } from 'react-native-paper';
import {View, Text, Image, Linking} from 'react-native';


interface Iprops {
  hideBanner?: () => void;
  dismiss?: () => void;
  message?: string;
  image?: string;
  link?: string;
  video?: string;
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
        style={{borderColor: 'black', justifyContent: 'space-between'}}
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
          {props.video && <iframe
          width={200}
          src={props.video}
          // type="video/mp4"
        />}
          {props.image && <Image style = {{ width: 100, height: 100 }} resizeMode={'stretch'} source={{uri: props.image}} />}
          {props.message && <Text>{props.message}</Text>}
          {props.link && <Text style={{color: '#237aff', textDecorationLine: 'underline'}} onPress={() => Linking.openURL(props.link)}>{props.link}</Text>}
        </View>
      </Banner>
      </View>
    )
}

export default ButtonWeb;