Algoritmo Bisiesto
    Definir anio Como Entero

    Escribir "Ingresa un ano:"
    Leer anio

    Si anio <= 0 Entonces
        Escribir "El ano debe ser mayor que cero"
    SiNo
        Si (anio MOD 400 = 0) O (anio MOD 4 = 0 Y anio MOD 100 <> 0) Entonces
            Escribir anio, " es bisiesto"
        SiNo
            Escribir anio, " no es bisiesto"
        FinSi
    FinSi
FinAlgoritmo
