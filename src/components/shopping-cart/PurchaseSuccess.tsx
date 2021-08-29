import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../contexts/AuthState'
import { ShoppingContext } from '../../contexts/ShoppingState'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PurchaseInvoice from '../pdf-templates/PurchaseInvoice'
import Button from '../general-purposes/Button'


interface Props {
    className?: string

}

const PurchaseSuccess = ({ className }: Props) => {
    const { user } = useContext(AuthContext)
    const { shoppingCart } = useContext(ShoppingContext)
    return (
        <div className={className}>
            {user && shoppingCart &&
                <main>
                    <h1> Parabéns, {user.name}!</h1>
                    <h3>Obrigado por comprar com a gente! Seu pedido está sendo processado. Enquanto isso, baixe seu comprovante de compra clicando abaixo.</h3>
                    <Button>
                        <PDFDownloadLink
                            style={{ textDecoration: 'none' }}
                            document={<PurchaseInvoice cart={shoppingCart} />}
                            fileName="comprovante.pdf"
                        >
                            {({ loading }) => loading ? "carregando comprovante..." : "Baixar comprovante"}
                        </PDFDownloadLink>
                    </Button>
                </main>}
        </div>
    )
}

export default styled(PurchaseSuccess)`
    width:80%;
    background-color:#ddd;
    margin-top:5%;
    main {
        padding:5% 0;
        width:100%;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        text-align:center;
        gap:30px;
    }
`

