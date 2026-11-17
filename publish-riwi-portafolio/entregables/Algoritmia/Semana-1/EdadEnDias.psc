Algoritmo EdadEnDias
    Definir edad, dias Como Entero

    Escribir "Cuantos anos tienes?"
    Leer edad

    Si edad < 0 Entonces
        Escribir "La edad no puede ser negativa"
    SiNo
        dias <- edad * 365
        Escribir "Has vivido aproximadamente ", dias, " dias"
    FinSi
FinAlgoritmo
