import React from 'react'
import sang from '../../assets/images/sang.png';

const ProductoIndividual = (props) => {
    const {producto} = props

    const styles = {
        divContainerColCenter:{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FCEBDB",
            width: "20em",
            height: "200px",
            color: "black",
            fontWeight: "bold",
            textTransform: "uppercase",
        },
        divContainerFlex: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
        },
        divSecColCenter:{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#EEF3F8",
            width: "4.25em",
            height: "7em",
        },
        imgStyle:{
            width: "50px",
            height: "50px",
        },
        row:{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1em",
        },
        textScondary:{
            fontSize: "9px"
        },
    }
  return (
    <>
        <div style={styles.divContainerColCenter}>
            <div>{producto.nombre}</div>
            <div style={styles.row}>
                <img src={sang} style={styles.imgStyle} alt="" />
                <div style={styles.divContainerFlex}>
                    <div style={styles.divSecColCenter}><p style={styles.textScondary}>PRECIO:</p>{producto.precio}</div>
                    <div style={styles.divSecColCenter}><p style={styles.textScondary}>COSTO:</p>{producto.costo}</div>
                    <div style={styles.divSecColCenter}><p style={styles.textScondary}>SUGERIDO:</p>{producto.sugerido}</div>
                </div>
            </div>
            <p style={styles.textScondary}>Ganancia actual: {producto.ganancia}</p>
        </div>
    </>
  )
}

export default ProductoIndividual