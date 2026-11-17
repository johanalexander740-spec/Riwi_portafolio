Algoritmo PromedioNotas
    Definir nota1, nota2, nota3, promedio Como Real

    Escribir "Primera nota:"
    Leer nota1
    Escribir "Segunda nota:"
    Leer nota2
    Escribir "Tercera nota:"
    Leer nota3

    Si nota1 < 0 O nota1 > 5 O nota2 < 0 O nota2 > 5 O nota3 < 0 O nota3 > 5 Entonces
        Escribir "Las notas deben estar entre 0 y 5"
    SiNo
        promedio <- (nota1 + nota2 + nota3) / 3
        Escribir "El promedio es: ", promedio
    FinSi
FinAlgoritmo
