import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
} from "@react-pdf/renderer";
import { ShoppingCart } from '../../types';
import { formatPrice ,sumCartPrices} from '../../utils'

interface Props {
    cart: ShoppingCart
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        margin: 60
    },
    title: { 
        marginBottom: '25px',
        textDecoration:'underline'
    },
    productView: {
        marginTop: 40

    },
    itemList: {
        marginTop: 20,
        flexDirection: 'column'
    },
    itemDescription: {
        fontSize: '12pt',
        flexDirection: 'row',
        marginBottom: '10px'

    },
    itemName: {
        width: 250
    },
    itemAmount: { width: 50 },
    itemPriceSum: { width: 200 },
    subTotal: {
        width: '80%',
        paddingTop: 10,
        borderTop: '3px',
        flexDirection:'row'

    }

});

const PurchaseInvoice = ({ cart }: Props) => {

    const getFormattedSubTotal = (unitPrice: number, amount: number): string => {
        const sum = unitPrice * amount

        return formatPrice(sum)
    }

    const getCartSubTotal = () => {
        const cartSubtotal = sumCartPrices(cart)
        return formatPrice(cartSubtotal)
    }

    return (
        <Document  >
            <Page style={styles.page}>
                <View style={styles.title}>
                    <Text>Comprovante</Text>
                </View>
                <View style={styles.productView}>
                    <Text>Produtos</Text>

                    <View style={styles.itemList} >
                        {cart.map((item, index) => (
                            <View style={styles.itemDescription}>
                                <Text style={styles.itemName}>Nome: {item.fruit.name}</Text>
                                <Text style={styles.itemAmount}>Qte: {item.amount}</Text>
                                <Text style={styles.itemPriceSum}>Preço total: {getFormattedSubTotal(item.fruit.unitPrice, item.amount)}</Text>
                            </View>
                        ))}
                    </View>

                </View>
                <View style={styles.subTotal}>
                    
                    <Text>Subtotal: {getCartSubTotal()}</Text>
                </View>
            </Page>
        </Document>
    )
}

export default PurchaseInvoice
