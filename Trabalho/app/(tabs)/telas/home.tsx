import {View, ImageBackground, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useRouter} from 'expo-router';

export default function LocationHome() {
    const router = useRouter();

    return(
        <ImageBackground source={require('./img/homebg.png')} style={styles.background}>


        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: '100%',
        height: '100%',
    },
})