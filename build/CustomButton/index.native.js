import * as React from 'react';
import { Banner } from 'react-native-paper';
var ButtonNative = function (props) {
    var _a = React.useState(true), visible = _a[0], setVisible = _a[1];
    return (React.createElement(Banner, { style: { borderColor: 'black' }, visible: visible, actions: [
            {
                label: 'Dont show me this again',
                onPress: function () {
                    props.hideBanner ? props.hideBanner() : null;
                    setVisible(false);
                },
            },
            {
                label: 'Dismiss',
                onPress: function () { return setVisible(false); },
            },
        ] }, props.message ? props.message : 'No message to show'));
};
export default ButtonNative;
//# sourceMappingURL=index.native.js.map