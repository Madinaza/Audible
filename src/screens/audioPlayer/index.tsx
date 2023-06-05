import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  Track,
} from 'react-native-track-player';
import AudioSlider from '../../components/AudioSlider';
import ControlCenter from '../../components/ControlCenter';
import AudioInfo from '../../components/AudIoInfo';

const AudioPlayer = () => {
  const [track, setTrack] = useState<Track | null>();

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    switch (event.type) {
      case Event.PlaybackActiveTrackChanged:
        const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
        setTrack(playingTrack);
        console.log(playingTrack);
        break;
    }
  });

  return (
    <View style={styles.container}>
      {/* <FlatList
        horizontal
        data={playListData}
        keyExtractor={song => song.id.toString()}
      /> */}
      <AudioInfo track={track}></AudioInfo>
      <AudioSlider />
      <ControlCenter />
    </View>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
});
