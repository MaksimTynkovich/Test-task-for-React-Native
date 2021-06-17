import {
    Modal, Dimensions, TouchableWithoutFeedback,
    StyleSheet, View, Text, FlatList, Button, TextInput, TouchableOpacity
} from "react-native";
import React from 'react'


const deviceHeight = Dimensions.get("window").height
export class BottomPopup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    show = () => {
        this.setState({ show: true })
    }

    close = () => {
        this.setState({ show: false })
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{ flex: 1, width: '100%' }} />
        if (!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '100%' }}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    renderTitle = () => {
        return (
            <View>
                <Text style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: '500',
                    marginTop: 46,
                    marginStart: 20,
                }}>
                    Email
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder={"Your email"}
                    onChangeText={(text1) => this.setState({ text1 })}
                    value={this.state.text1}
                />
                <Text style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: '500',
                    marginTop: 28,
                    marginStart: 20,
                }}>
                    Password
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder={"Enter your password"}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <TouchableOpacity style={[styles.btn_container , styles.btn_login_container]}>
                    <Text style={[styles.btn, styles.login]}>login/signup</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn_container, {marginTop: 26,}, styles.btn_signup_container]}>
                    <Text style={[styles.btn, styles.login, {fontSize: 16}]}>Signup</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderContent = () => {
        const { data } = this.props
        return (
            <View>
                <FlatList
                    style={{ marginBottom: 20 }}
                    showVerticalScrollIndicator={false}
                    data={data}
                    renderItem={this.renderItem}
                    extraData={data}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={this.renderSeparator}
                    contentContainerStyle={{
                        paddingBottom: 40
                    }}
                />
            </View>
        )
    }

    renderItem = ({ item }) => {
        return (
            <View>
                <Text>Demo</Text>
            </View>
        )
    }

    renderSeparator = () => (
        <View
            style={{
                opacity: 0.1,
                backgroundColor: 'red',
                height: 1
            }}
        />
    )

    render() {
        let { show } = this.state
        const { onTouchOutside, title } = this.props

        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: '#000000AA',
                    justifyContent: 'flex-end'
                }}
                >
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor: "#FFFFFF",
                        width: '100%',
                        borderTopRightRadius: 40,
                        borderTopLeftRadius: 40,
                        paddingHorizontal: 10,
                        height: deviceHeight * 0.87,
                    }}>

                        {this.renderTitle()}
                        {this.renderContent()}
                    </View>

                </View>

            </Modal>
        )
    }
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        marginStart: 20,
        marginTop: 12,
    },
    btn_container: { 
        marginStart: 10,
        marginTop: 28,
        height: 64,
        width: 335,
        borderRadius: 25,
        backgroundColor: "#fff", 
        alignItems: 'center',
        justifyContent: 'center' 
      },
      btn: {
        fontSize: 24,
        textTransform: "uppercase",
        fontWeight: "bold",
      },
      login: {
        color: "#fff"
      },
      btn_login_container: {
        backgroundColor: "#2AB009"
      },
      btn_signup_container: {
          marginStart: 135,
          width: 83,
          height: 32,
          fontSize: 16,
          fontWeight: "600",
          backgroundColor: "#ED0B34", 
      },
});