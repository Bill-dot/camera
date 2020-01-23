import * as React from 'react'
import * as Permission from 'expo-permissions'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import { Camera } from 'expo-camera'

export default class DemoCamera extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back

        }
        

    }
    async componentDidMount() {
        const { status } = await Camera.requestPermissionsAsync();
        this.setState({ hasCameraPermission: status === 'granted' })
    }

    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync()
            console.log(photo)
        }
    }

    render() {
        const { hasCameraPermission } = this.state
        if (hasCameraPermission === null) {
            return <View></View>
        } else if (hasCameraPermission === false) {
            return <Text>we do not have Permission for the camera</Text>
        } else {
            return (
                <View style={styles.container}>
                    <Camera ref={ref => this.camera = ref}
                        style={styles.camera}
                        type={this.state.type}>
                        <View style={styles.container_2}>
                            <TouchableOpacity onPress={() => {
                                return this.setState({
                                    type: this.state.type === Camera.Constants.Type.back ?
                                        Camera.Constants.Type.front :
                                        Camera.Constants.Type.back
                                })
                            }}>
                                <Text>
                                    Flip
                                </Text>
                            </TouchableOpacity>
                            <Text onPress={ this.snap.bind(this)}
                                style={{ fontSize: 18, marginTop: 10, color: "white" }}>
                                capture
                            </Text>

                        </View>
                    </Camera>
                </View>)
        }
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },container_2:{
        alignItems:'flex-end',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    camera: {
        flex: 1,
        // justifyContent: 'center',
        padding: 8,
    }

})