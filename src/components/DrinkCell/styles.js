import { StyleSheet } from 'react-native';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
    cellContainer: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#FFF",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15,
        height: 160,
        borderRadius: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        }
    },
    labels: {
        flex: 1, 
        flexDirection: 'column',
        padding: 10
    },
    imageContainer: {
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'flex-end', 
        width: 110,
        height: 130,
        padding: 15
    },
    image: {
        width: 110,
        height: 130,
        borderRadius: 5
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.defaultTextColor,
        marginBottom: 10,
    },
    ingredient: {
        fontSize: 14,
        color: colors.defaultTextColor,
    },
    moreIngredients: {
        fontSize: 13,
        color: colors.defaultTextColor,
        marginTop: 5,
    }
});

export default styles;
