module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    prefix: '',
    separator: ':',
    purge: [
        './src/**/*.vue',
        './src/**/*.jsx',
        './src/**/*.ts',
        './src/**/*.tsx',
    ],
    theme: {
        screens: {},
        borderWidth: {
            default: '1px',
            '0': '0',
            '2': '2px',
            '4': '4px',
        },
        extend: {
            colors: {
                cyan: '#9cdbff',
            },
            spacing: {
                px: '1px',
                '0': '0',
                '1': '1rpx',
                '2': '2rpx',
                '4': '2rpx',
                '6': '6rpx',
                '8': '8rpx',
                '10': '10rpx',
                '12': '12rpx',
                '14': '14rpx',
                '16': '16rpx',
                '18': '18rpx',
                '20': '20rpx',
                '22': '22rpx',
                '24': '24rpx',
                '26': '26rpx',
                '28': '28rpx',
                '30': '30rpx',
                '32': '32rpx',
                '34': '34rpx',
                '36': '36rpx',
                '38': '38rpx',
                '40': '40rpx',
                '42': '42rpx',
                '44': '44rpx',
                '46': '46rpx',
                '48': '48rpx',
                '50': '50rpx',
                '60': '60rpx',
                '56': '56rpx',
                '64': '64rpx',
                '70': '70rpx',
                '80': '80rpx',
                '90': '90rpx',
                '100': '100rpx',
                '120': '120rpx',
                '140': '140rpx',
                '160': '160rpx',
                '200': '200rpx',
                '260': '260rpx',
                '300': '300rpx',
                '350': '350rpx',
                '400': '400rpx',
                '500': '500rpx',
                '600': '600rpx',
                '700': '700rpx',
                '750': '750rpx',
            },
            // 还有特殊的我们就添加特定
            width: (theme) => ({
                auto: 'auto',
                ...theme('spacing'),
                '1_5': '20%',
                '2_5': '40%',
                '3_5': '60%',
                '4_5': '80%',
                '5_6': '83.333333%',
                '1_7': '14.285714%',
                '1_8': '12.5%',
                '1_9': '11.111111%',
                '1_10': '10%',
                '1_11': '9.090909%',
                '1_12': '8.333333%',
                '2_12': '16.666667%',
                '3_12': '25%',
                '4_12': '33.333333%',
                '5_12': '41.666667%',
                '6_12': '50%',
                '7_12': '58.333333%',
                '8_12': '66.666667%',
                '9_12': '75%',
                '10_12': '83.333333%',
                '11_12': '91.666667%',
                full: '100%',
                screen: '100vw',
            }),
            height: (theme) => ({
                auto: 'auto',
                ...theme('spacing'),
                full: '100%',
                screen: '100vh',
            }),
            inset: {
                '20': '20rpx',
                '-20': '-20rpx',
                '-10': '-10rpx',
            },
            margin: (theme) => {
                // 使用了 reduce 这个包 rpx 是能转换的暂时自己比变量添加
                return {
                    auto: 'auto',
                    ...theme('spacing'),
                    ...myNegative(theme('spacing')),
                }
            },
            letterSpacing: {
                tighter: '-1px',
                tight: '-0.5px',
                normal: '0',
                wide: '1rpx',
                wider: '2rpx',
                widest: '3rpx',
            },
            fontSize: {
                xs: '12rpx',
                sm: '14rpx',
                base: '16rpx',
                lg: '18rpx',
                xl: '20rpx',
                '2xl': '24rpx',
                '3xl': '30rpx',
                '4xl': '36rpx',
                '5xl': '48rpx',
                '6xl': '64rpx',
            },
            borderRadius: {
                none: '0',
                xs: '2rpx',
                sm: '4rpx',
                default: '6rpx',
                lg: '8rpx',
                xl: '10rpx',
                '2xl': '12rpx',
                '3xl': '14rpx',
                '4xl': '16rpx',
                '5xl': '20rpx',
                full: '9999px',
            },
            borderWidth: {
                default: '1rpx',
                '0': '0rpx',
                '2': '2rpx',
                '4': '4rpx',
                '8': '8rpx',
            },
            gradients: (theme) => ({
                // blue to other
                'blue-green': [
                    theme('colors.blue.500'),
                    theme('colors.green.500'),
                ],
                'blue-purple': [
                    theme('colors.blue.500'),
                    theme('colors.purple.500'),
                ],

                // green to other
                'green-blue': [
                    theme('colors.green.500'),
                    theme('colors.blue.500'),
                ],
                'green-red': [
                    theme('colors.green.500'),
                    theme('colors.red.500'),
                ],
                // purple to other
                'purple-blue': [
                    theme('colors.purple.500'),
                    theme('colors.blue.500'),
                ],
                'purple-orange': [
                    theme('colors.purple.500'),
                    theme('colors.orange.500'),
                ],
                'purple-yellow': [
                    theme('colors.purple.500'),
                    theme('colors.yellow.500'),
                ],
                // orange to other
                'orange-purple': [
                    theme('colors.orange.500'),
                    theme('colors.purple.500'),
                ],
                'orange-indigo': [
                    theme('colors.orange.500'),
                    theme('colors.indigo.500'),
                ],
                // red to other
                'red-purple': [
                    theme('colors.red.500'),
                    theme('colors.purple.500'),
                ],
                'red-green': [
                    theme('colors.red.500'),
                    theme('colors.green.500'),
                ],

                // teal to other
                'teal-red': [theme('colors.teal.500'), theme('colors.red.500')],

                // indigo to other
                'indigo-red': [
                    theme('colors.indigo.500'),
                    theme('colors.red.500'),
                ],

                // pink to other
                'pink-red': [theme('colors.pink.500'), theme('colors.red.500')],
                'pink-blue': [
                    theme('colors.pink.500'),
                    theme('colors.blue.500'),
                ],

                // yellow to other
                'yellow-indigo': [
                    theme('colors.yellow.500'),
                    theme('colors.indigo.500'),
                ],
            }),
            extend: {
                boxShadow: {
                    // display: '-3rpx -3rpx 10rpx 2rpx rgba(0,0,0,.3) inset, 0 0 0 6rpx rgba(255, 255, 255, .6) inset, 0 0 0 1rpx rgba(0,0,0,.5), 2rpx 2rpx 10rpx rgba(0,0,0,.6)'
                    display:
                        '-3rpx -3rpx 10rpx 2rpx rgba(0,0,0,.3) inset, 0 0 0 14rpx rgba(255, 255, 255, .6) inset, 0 0 0 1rpx rgba(0,0,0,.5), 2rpx 2rpx 10rpx rgba(0,0,0,.6)',
                },
                colors: {
                    tred: '#FF0000',
                    tgreen: '#00FF00',
                    tblue: '#0000FF',
                    hue0: '#FF0000',
                    hue30: '#FF7F00',
                    hue60: '#FFFF00',
                    hue90: '#7FFF00',
                    hue120: '#00FF00',
                    hue150: '#00FF7F',
                    hue180: '#00FFFF',
                    hue210: '#007FFF',
                    hue240: '#0000FF',
                    hue270: '#7F00FF',
                    hue300: '#FF00FF',
                    hue330: '#FF007F',
                },
            },
            lineHeight: (theme) => ({
                ...theme('spacing'),
                none: '1',
                tight: '1.25',
                snug: '1.375',
                normal: '1.5',
                relaxed: '1.625',
                loose: '2',
            }),
        },
    },
    variants: {
        accessibility: [],
        alignContent: [],
        alignItems: [],
        alignSelf: [],
        appearance: [],
        backgroundAttachment: [],
        backgroundColor: [],
        backgroundPosition: [],
        backgroundRepeat: [],
        backgroundSize: [],
        borderCollapse: [],
        borderColor: [],
        borderRadius: [],
        borderStyle: [],
        borderWidth: [],
        boxShadow: [],
        cursor: [],
        display: [],
        fill: [],
        flex: [],
        flexDirection: [],
        flexGrow: [],
        flexShrink: [],
        flexWrap: [],
        float: [],
        fontFamily: [],
        fontSize: [],
        fontSmoothing: [],
        fontStyle: [],
        fontWeight: [],
        height: [],
        inset: [],
        justifyContent: [],
        letterSpacing: [],
        lineHeight: [],
        listStylePosition: [],
        listStyleType: [],
        margin: [],
        maxHeight: [],
        maxWidth: [],
        minHeight: [],
        minWidth: [],
        objectFit: [],
        objectPosition: [],
        opacity: [],
        order: [],
        outline: [],
        overflow: [],
        padding: [],
        placeholderColor: [],
        pointerEvents: [],
        position: [],
        resize: [],
        stroke: [],
        tableLayout: [],
        textAlign: [],
        textColor: [],
        textDecoration: [],
        textTransform: [],
        userSelect: [],
        verticalAlign: [],
        visibility: [],
        whitespace: [],
        width: [],
        wordBreak: [],
        zIndex: [],
    },
    plugins: [],
}
function myNegative(obj) {
    let __obj = {}
    // 负值转换
    for (let key in obj) {
        if (key === 0 || key === '0') {
            __obj[`${key}`] = `${obj[key]}`
        } else {
            __obj[`-${key}`] = `-${obj[key]}`
        }
    }

    return __obj
}
