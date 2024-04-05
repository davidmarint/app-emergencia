import React, { useEffect, useState } from 'react';
import { db } from './firebase'; // Importa la instancia de Firestore
import {collection, addDoc, getDocs, doc, setDoct} from 'firebase/firestore';

const ScreenMostrarDatos = () => {
    const [lista, setLista] = useState([]);
    useEffect(() => {
    const obtenerDatos = async () => {
        try {
        const querySnapshot = await getDocs (collection (db, 'cuadrante'))
        const lista=[]
        querySnapshot.forEach((doc)=>{ 
            const { nombre, numero, imagen, descripcion}= doc.data()
            lista.push({ 
            id:doc.id,
            nombre,
            numero,
            imagen,
            descripcion,
            })
        })
            setLista(lista) 
        } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
    };
    obtenerDatos();
    //console.log(lista);
    }, []); 
    return lista;
};

export default ScreenMostrarDatos;