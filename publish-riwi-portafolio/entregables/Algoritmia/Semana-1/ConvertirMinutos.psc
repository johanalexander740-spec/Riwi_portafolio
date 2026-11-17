Algoritmo ConvertirMinutos
    Definir minutos, horas, minutosRestantes Como Entero

    Escribir "Ingresa una cantidad de minutos:"
    Leer minutos

    Si minutos < 0 Entonces
        Escribir "La cantidad no puede ser negativa"
    SiNo
        horas <- trunc(minutos / 60)
        minutosRestantes <- minutos MOD 60
        Escribir minutos, " minutos equivalen a ", horas, " horas y ", minutosRestantes, " minutos"
    FinSi
FinAlgoritmo
