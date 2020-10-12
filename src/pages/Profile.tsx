import React from 'react';
import { StyleSheet, View, Text, Image, StatusBar } from 'react-native';
import { Icon, Card, Button, Block } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';

// import { Container } from './styles';

const Profile = ({ navigation }) => {

    // const { colors } = useTheme();

    // const theme = useTheme();
    // <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />

    return (
        <View style={styles.container}>


            <LinearGradient style={styles.gradient} colors={['#e8e8e8', '#bababa',]}>
                {/*<Card style={styles.cardUser}></Card>*/}
                <View>
                    <Image source={require('../assets/Images/avatar3.png')}
                        style={styles.imageSS} />
                </View>

                <Text style={styles.textNameUser}>Lex Steele</Text>
                <Text style={styles.designer}>Player Level 75</Text>


                <ScrollView>
                    <View style={{ justifyContent: 'space-around' }}>
                        <View style={styles.cards12}>
                            <Card style={styles.cards1}>
                                <LinearGradient
                                    style={styles.LinearGradient1}
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 0, y: 0 }}
                                    colors={['#6b6b6b', '#8c8c8c',]}>


                                    <Icon
                                        style={styles.icon1}
                                        name="users"
                                        family="Entypo"
                                        color={'#43bff9'}
                                        size={45}
                                    />

                                    <Text style={styles.textNr1}>250</Text>
                                    <Text style={styles.Followers}>Followers</Text>

                                </LinearGradient>
                            </Card>

                            <Card style={styles.cards2}>
                                <LinearGradient
                                    style={styles.LinearGradient2}
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 0, y: 0 }}
                                    colors={['#6b6b6b', '#8c8c8c',]}>


                                    <Icon
                                        style={styles.follow}
                                        name="user"
                                        family="Entypo"
                                        color={'#43bff9'}
                                        size={45}
                                    />
                                    <Text style={styles.textNr2}>480</Text>
                                    <Text style={styles.Following}>Following</Text>

                                </LinearGradient>
                            </Card>
                        </View>

                        <View style={styles.cards34}>
                            <Card style={styles.cards3}>
                                <LinearGradient
                                    style={styles.LinearGradient3}
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 0, y: 0 }}
                                    colors={['#6b6b6b', '#8c8c8c',]}>


                                    <Icon
                                        style={styles.group}
                                        name="group"
                                        family="MaterialCommunityIcons"
                                        color={'#43bff9'}
                                        size={45}
                                    />

                                    <Text style={styles.textNr3}>15</Text>
                                    <Text style={styles.Groups}>  Groups </Text>

                                </LinearGradient>
                            </Card>

                            <Card style={styles.cards4}>
                                <LinearGradient
                                    style={styles.LinearGradient4}
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 0, y: 0 }}
                                    colors={['#6b6b6b', '#8c8c8c',]}>


                                    <Icon
                                        style={styles.request}
                                        name="add-user"
                                        family="Entypo"
                                        color={'#43bff9'}
                                        size={45}
                                    />
                                    <Text style={styles.textNr4}>30</Text>
                                    <Text style={styles.Requests}>Requests</Text>

                                </LinearGradient>
                            </Card>
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.friendsView}>
                    <Button
                        size='small'
                        shadowless
                        color='#ff1212'
                        style={styles.friends}
                        onPress={() => this.props.navigation.navigate('Home')}>
                        Add Friend</Button>
                </View>

            </LinearGradient>
        </View>

    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // marginTop:'65%',

    },
    gradient: {
        flex: 1
    },
    cardUser: {
        borderColor: '#fff',
        padding: '15%',
        borderRadius: 450,
        marginLeft: '32%',
        marginRight: '32%',
        marginTop: '11%',
        marginBottom: '2%',
    },
    textNameUser: {
        fontSize: 29,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#5f5f5f',

    },
    designer: {
        color: '#3a3a3a',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '500',
        marginTop: '1%',

    },
    cards12: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    cards1: {
        // paddingBottom:'25%',

        paddingLeft: '16%',
        paddingRight: '16%',
        backgroundColor: 'transparent',
        borderColor: 'transparent',

    },

    cards2: {
        // paddingBottom:'25%',
        // marginTop:'-1%',

        paddingLeft: '16%',
        paddingRight: '16%',
        backgroundColor: 'transparent',
        borderColor: 'transparent',


    },
    cards34: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // marginTop:'12%'
    },
    cards3: {
        // paddingBottom:'35%',
        // marginTop:'2%',
        paddingLeft: '16%',
        paddingRight: '16%',
        backgroundColor: 'transparent',
        borderColor: 'transparent',

    },
    cards4: {
        // paddingTop:'20%',
        // marginTop:'2%',
        paddingLeft: '16%',
        paddingRight: '16%',
        backgroundColor: 'transparent',
        borderColor: 'transparent',

    },
    friendsView: {
        marginTop: '1%',
        paddingBottom: '5%'
    },
    friends: {
        borderRadius: 100,
        alignSelf: 'center',
        // marginTop:'4%',
    },
    imageSS: {
        alignSelf: 'center',
        marginTop: '20%',
        marginBottom: '5%',
        // height:'50%',
        // width:'25%',
        borderRadius: 50
    },
    icon1: {
        //   // marginTop:'-45%',
        alignSelf: 'center',
        paddingTop: '10%',


    },
    textNr1: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },
    Followers: {
        color: '#fff',
        alignSelf: 'center',
        paddingTop: '1%',
        paddingBottom: '-5%'
    },
    follow: {
        alignSelf: 'center',
        paddingTop: '10%'
    },
    textNr2: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },
    Following: {
        color: '#fff',
        alignSelf: 'center',
        paddingTop: '1%',
        paddingBottom: '-5%'
    },
    group: {
        alignSelf: 'center',
        paddingTop: '10%'
    },
    textNr3: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },
    Groups: {
        color: '#fff',
        alignSelf: 'center',
        paddingTop: '1%',
        paddingBottom: '5%'
    },
    request: {
        alignSelf: 'center',
        paddingTop: '10%'
    },
    textNr4: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },
    Requests: {
        color: '#fff',
        alignSelf: 'center',
        paddingTop: '1%',
        paddingBottom: '5%'
    },
    LinearGradient1: {
        borderRadius: 5,
        // padding:'5%',
        paddingLeft: '12%',
        paddingRight: '12%',
        paddingBottom: '15%',
        marginLeft: '-2%'

    },
    LinearGradient2: {
        borderRadius: 5,
        // padding:'5%',
        paddingLeft: '12%',
        paddingRight: '12%',
        paddingBottom: '15%',
        marginLeft: '-2%'

    },
    LinearGradient3: {
        borderRadius: 5,
        // padding:'5%',
        paddingLeft: '11%',
        paddingRight: '11%',
        paddingBottom: '5%',
        // marginBottom:'3%'
        marginLeft: '-2%'
    },
    LinearGradient4: {
        borderRadius: 5,
        // padding:'5%',
        paddingLeft: '11%',
        paddingRight: '11%',
        paddingBottom: '5%',
        marginLeft: '-2%'

    },
});

export default Profile;