Algoritmo CostoEnvio
    Definir zona Como Entero
    Definir peso, tarifa, total Como Real

    Escribir "Selecciona la zona (1 = local, 2 = nacional, 3 = rural):"
    Leer zona
    Escribir "Ingresa el peso del paquete en kilogramos:"
    Leer peso

    Si peso <= 0 Entonces
        Escribir "El peso debe ser mayor que cero"
    SiNo
        Segun zona Hacer
            1:
                tarifa <- 5000
            2:
                tarifa <- 9000
            3:
                tarifa <- 12000
            De Otro Modo:
                tarifa <- 0
        FinSegun

        Si tarifa = 0 Entonces
            Escribir "La zona seleccionada no es valida"
        SiNo
            total <- peso * tarifa
            Escribir "Costo de envio: $", total
        FinSi
    FinSi
FinAlgoritmo
