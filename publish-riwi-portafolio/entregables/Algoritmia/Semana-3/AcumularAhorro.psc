Algoritmo AcumularAhorro
    Definir aporte, total Como Real
    total <- 0

    Escribir "Ingresa un aporte para el ahorro (0 para terminar):"
    Leer aporte

    Mientras aporte <> 0 Hacer
        Si aporte > 0 Entonces
            total <- total + aporte
            Escribir "Ahorro acumulado: $", total
        SiNo
            Escribir "El aporte debe ser mayor que cero"
        FinSi

        Escribir "Ingresa otro aporte (0 para terminar):"
        Leer aporte
    FinMientras

    Escribir "Ahorro final: $", total
FinAlgoritmo
