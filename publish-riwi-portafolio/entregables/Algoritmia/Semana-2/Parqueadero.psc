Algoritmo Parqueadero
    Definir tipo, minutos, horas Como Entero
    Definir tarifa, valor Como Real
    Definir factura Como Caracter

    Escribir "Tipo de vehiculo: 1 carro, 2 moto"
    Leer tipo
    Escribir "Minutos en el parqueadero:"
    Leer minutos
    Escribir "Tiene factura? Escribe S o N:"
    Leer factura
    factura <- Mayusculas(factura)

    Si minutos < 0 Entonces
        Escribir "Los minutos no pueden ser negativos"
    SiNo
        Si tipo = 1 Entonces
            tarifa <- 4000
        SiNo
            Si tipo = 2 Entonces
                tarifa <- 2000
            SiNo
                tarifa <- 0
            FinSi
        FinSi

        Si tarifa = 0 Entonces
            Escribir "Tipo de vehiculo no valido"
        SiNo
            Si minutos <= 15 Entonces
                valor <- 0
            SiNo
                horas <- trunc((minutos + 59) / 60)
                valor <- horas * tarifa

                Si valor > 30000 Entonces
                    valor <- 30000
                FinSi
                Si factura = "S" Entonces
                    valor <- valor / 2
                FinSi
            FinSi
            Escribir "Valor a pagar: $", valor
        FinSi
    FinSi
FinAlgoritmo
