Algoritmo ClasificarNota
    Definir nota Como Real

    Escribir "Ingresa la nota final (0 a 5):"
    Leer nota

    Si nota < 0 O nota > 5 Entonces
        Escribir "Nota invalida: debe estar entre 0 y 5"
    SiNo
        Si nota >= 3 Entonces
            Escribir "Aprobaste la asignatura"
        SiNo
            Escribir "Debes reforzar los temas de la asignatura"
        FinSi
    FinSi
FinAlgoritmo
