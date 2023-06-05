import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Track} from 'react-native-track-player';

type SongInfoProps = PropsWithChildren<{
  track: Track | null | undefined;
}>;

const AudioInfo = ({track}: SongInfoProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{track?.title}</Text>
        <Text style={styles.name}>{track?.artist}</Text>
      </View>
    </View>
  );
};

export default AudioInfo;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  name: {
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
  },
});
