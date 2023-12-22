import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';

const Sign = () => {
    return <>
        <View>
            <TextInput
                style={UserSignUpStyle.UserTextInput}
                label="Email"
                mode="outlined"
                outlineColor="white"
                activeOutlineColor="white"
                // value={text}
                // onChangeText={text => setText(text)}
                left={<TextInput.Icon icon="email" />}
            />

            <TextInput
                style={UserSignUpStyle.UserTextInput}
                label="Password"
                mode="outlined"
                outlineColor="white"
                activeOutlineColor="white"
                // value={text}
                // onChangeText={text => setText(text)}
                left={<TextInput.Icon icon="eye" />}
            />
            <View>
                <TouchableOpacity
                    style={UserSignUpStyle.SignButton}
                // onPress={() => handleTabPress('Login')}
                >
                    <Text style={{ textAlign: 'center', fontWeight: "bold",color:"white" }}>
                        Signup
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
}

const UserSignUpStyle = StyleSheet.create({
    UserTextInput: {
        width: 270,
        alignSelf: "center",
        marginTop: 30,
        overflow: "hidden",
        borderTopRightRadius: 23,
        borderTopLeftRadius: 23,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    SignButton: {
        margin: 10,
        backgroundColor: "white",
        padding: 10,
        width: 230,
        height: 43,
        borderRadius: 20,
        alignSelf:"center",
        marginTop:30,
        backgroundColor:"black"
    }
})

export default Sign;