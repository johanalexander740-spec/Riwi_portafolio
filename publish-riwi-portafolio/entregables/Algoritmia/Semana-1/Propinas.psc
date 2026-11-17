Algoritmo Propinas
    Definir personas Como Entero
    Definir cuenta, porcentaje, propina, total Como Real

    Escribir "Valor de la cuenta:"
    Leer cuenta
    Escribir "Porcentaje de propina:"
    Leer porcentaje
    Escribir "Cuantas personas pagan?"
    Leer personas

    Si cuenta < 0 O porcentaje < 0 O personas <= 0 Entonces
        Escribir "Revisa los valores ingresados"
    SiNo
        propina <- cuenta * porcentaje / 100
        total <- cuenta + propina
        Escribir "Propina: $", propina
        Escribir "Total: $", total
        Escribir "Cada persona paga: $", total / personas
    FinSi
FinAlgoritmo
