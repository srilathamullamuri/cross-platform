import * as React from 'react';
import { View } from 'react-native';
import { Banner } from 'react-native-paper';
import { WebView } from 'react-native-webview';
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
        React.createElement(WebView, { style: { height: 100 }, source: { html: '<h1>This is a static HTML source!</h1>' } }),
        React.createElement(Banner, { style: { borderColor: 'black' }, visible: visible, actions: [
                {
                    label: 'Dont show me this again',
                    onPress: function () { return handlePress(); },
                },
                {
                    label: 'Dismiss',
                    onPress: function () { return handleDismiss(); },
                },
            ] }, props.message ? props.message : 'No message to show')));
};
export default ButtonNative;
//# sourceMappingURL=index.native.js.map