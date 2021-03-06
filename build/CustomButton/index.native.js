import * as React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Banner } from 'react-native-paper';
import VideoPlayer from 'react-native-video-player';
var ButtonNative = function (props) {
    var _a = React.useState(true), visible = _a[0], setVisible = _a[1];
    var handlePress = function () {
        setVisible(false);
        props.hideBanner ? props.hideBanner() : null;
    };
    var handleDismiss = function () {
        // setVisible(false);
        props.dismiss ? props.dismiss() : null;
    };
    return (React.createElement(View, null,
        React.createElement(Banner, { style: { borderColor: 'black', justifyContent: 'space-between' }, visible: visible, actions: [
                {
                    label: 'Dont show me this again',
                    onPress: function () { return handlePress(); },
                },
                {
                    label: 'Dismiss',
                    onPress: function () { return handleDismiss(); },
                },
            ] },
            React.createElement(View, null,
                props.video && React.createElement(VideoPlayer, { video: { uri: props.video }, videoWidth: 1600, videoHeight: 900, thumbnail: { uri: 'https://i.picsum.photos/id/866/1600/900.jpg' } }),
                props.image && React.createElement(Image, { style: { width: 100, height: 100 }, resizeMode: 'stretch', source: { uri: props.image } }),
                props.message && React.createElement(Text, null, props.message),
                props.link && React.createElement(Text, { style: { color: '#237aff', textDecorationLine: 'underline' }, onPress: function () { return Linking.openURL(props.link); } }, props.link)))));
};
export default ButtonNative;
//# sourceMappingURL=index.native.js.map