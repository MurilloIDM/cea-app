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
      margin: 24
    },

    personalEmail: {
        fontSize: 18,
        marginTop: 10,
        fontFamily: "Montserrat-ExtraBold",
    },
    
    labelPass:{
      fontFamily: "Montserrat-Bold",
      fontSize: 14,
      margin:24,
      marginBottom: 0
    },
    
    form: {
      width: "90%",
      alignSelf: "center",
      overflow: "scroll",
      borderWidth: 1,
      padding: 0,
      //margin: 0,
    },

    input :{
      width: "85%",
    },

    eyeo: {
        textAlign: "right",
        position: "absolute",
        top: 35,
        right: 10,
        display: "flex",
        alignItems: "center",
        color: "#000",
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
        marginBottom: 10,
        marginRight: 18,
    },

  });
  
  export default styles;
  