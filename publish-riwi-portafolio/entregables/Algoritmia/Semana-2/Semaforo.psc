Algoritmo Semaforo
    Definir unidades Como Entero

    Escribir "Cuantas unidades hay?"
    Leer unidades

    Si unidades < 0 Entonces
        Escribir "Cantidad no valida"
    SiNo
        Si unidades = 0 Entonces
            Escribir "Rojo: inventario agotado"
        SiNo
            Si unidades <= 10 Entonces
                Escribir "Amarillo: hay pocas unidades"
            SiNo
                Escribir "Verde: inventario suficiente"
            FinSi
        FinSi
    FinSi
FinAlgoritmo
