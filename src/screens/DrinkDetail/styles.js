import { StyleSheet } from 'react-native';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.mainAppColor,
    },
    detailContainer: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
        backgroundColor: colors.mainAppColor,
        padding: 20,
    },
    cardContainer: {
        flex: 1, 
        flexDirection: 'column',
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        }
    },
    imageContainer: {
        flex: 1, 
        flexDirection: 'column',
        width: "100%",
        height: 250,
        marginBottom: 15,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 5
    },
    ingredient: {
        fontSize: 15,
        color: colors.defaultTextColor,
        marginBottom: 4,
    },
    instructionsTitle: {
        fontSize: 15,
        color: colors.defaultTextColor,
        marginTop: 10,
        marginBottom: 10,
    },
    instructions: {
        fontSize: 15,
        color: colors.defaultTextColor,
    }
});

export default styles;
