import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { Banner } from 'react-native-paper';
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
        React.createElement(Banner, { style: { borderColor: 'black' }, visible: visible, actions: [
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
                React.createElement(Image, { style: { width: 100, height: 100 }, resizeMode: 'stretch', source: { uri: 'https://sso.vconsultnetwork.com/omniweb/images/logo.png' } }),
                React.createElement(Text, null, "There was a problem processing a transaction on your credit card.")))));
};
export default ButtonNative;
//# sourceMappingURL=index.native.js.map