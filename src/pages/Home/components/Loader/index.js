import React, { useState } from 'react';
import { LoadingContainer, Content, ImageLoading } from './styles';
import { StatusBar, ActivityIndicator, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const Loader = () => {
  const [initLoad, setInitLoad] = useState(true);

  setTimeout(function () {
    setInitLoad(false);
  }, 8000);

  return (
    <>
      {initLoad && (
        <LoadingContainer visible={initLoad}>
          <StatusBar hidden={true} />
          <Video
            source={require('~/assets/bg_1.mp4')}
            style={styles.backgroundVideo}
            muted={true}
            repeat={true}
            resizeMode={'cover'}
            rate={1.0}
            ignoreSilentSwitch={'obey'}
          />

          {initLoad && (
            <Content>
              <ImageLoading
                source={require('~/assets/animations/splash-screen.gif')}
                style={{ width: 420, height: 50, marginBottom: 48 }}
              />
              <ActivityIndicator color='#80BEE2' size='large' />
            </Content>
          )}
        </LoadingContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
});

export default Loader;