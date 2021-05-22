import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backButton: {
    position: 'absolute',
    width: 32,
    height: 32,

    backgroundColor: '#FF8D69',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 16,

    left: 30,
    top: 30,
  },

  text: {
    color: '#FFFFFF',
    marginBottom: 50,

    fontSize: 30,
    fontWeight: 'normal',
    letterSpacing: width * 0.002,
  },
});

export default styles;

// position: absolute;
// width: 209px;
// height: 35px;
// left: 75px;
// top: 564px;

// font-family: Nokora;
// font-style: normal;
// font-weight: normal;
// font-size: 30px;
// line-height: 40px;
// display: flex;
// align-items: center;
// letter-spacing: 0.02em;

// color: #FFFFFF;
