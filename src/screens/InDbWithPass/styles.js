import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      backgroundColor: "#BFB372"
    },

    logo: {
      width: 300, 
      alignSelf: "center"
    },

    title: {
      marginBottom: 50,
      width: "100%",
      fontSize: 24,
      fontFamily: "Montserrat-ExtraBold",
      textAlign: "center"
    },

    description: {
      fontSize: 16,
      color: "#000",
      width: "100%",
      marginBottom: 0,
      fontFamily: "Montserrat-ExtraBold",
      textAlign: "center"
    },

    emailChecked:{
      fontFamily: "Montserrat-SemiBold",
      textAlign: "left",
      marginTop: 24,
      marginLeft: 24,
      fontSize: 16,   
    },

    personalEmail: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 24,
        marginBottom: 24,
        fontFamily: "Montserrat-ExtraBold",
    },
    
    labelPass:{
      fontFamily: "Montserrat-Bold",
      fontSize: 14,
      margin:24,
      marginBottom: 0,
      width: "90%"
    },
    
    form: {
      width: "90%",
      alignSelf: "center",
      overflow: "scroll",
      padding: 0
    },

    container2 :{
      position:"relative",
      width: "100%",
    },

    icon: {
      position:"absolute",
      width:'15%',
      height:50,
      justifyContent: 'center',
      alignItems: 'center',
      top: 35,
      right: 0,
    },

    buttonSubscribe: {
      borderColor: "red",
      fontFamily: "Montserrat-Bold",
      textAlign: "center", 
    },

    forgot: {
      fontSize: 14,
      fontFamily: "Montserrat-SemiBold",
      textAlign: "right",
      marginBottom: 30,
      marginRight: 18,
    },

  });
  
  export default styles;
  