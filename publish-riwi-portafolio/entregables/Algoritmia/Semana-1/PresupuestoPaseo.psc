Algoritmo PresupuestoPaseo
    Definir personas Como Entero
    Definir transportePorPersona, comidaPorPersona, total Como Real

    Escribir "¿Cuantas personas van al paseo?"
    Leer personas
    Escribir "Costo de transporte por persona:"
    Leer transportePorPersona
    Escribir "Costo de comida por persona:"
    Leer comidaPorPersona

    Si personas <= 0 O transportePorPersona < 0 O comidaPorPersona < 0 Entonces
        Escribir "Verifica que las personas sean mas de cero y los costos no sean negativos"
    SiNo
        total <- personas * (transportePorPersona + comidaPorPersona)
        Escribir "Presupuesto total del paseo: $", total
        Escribir "Aporte por persona: $", transportePorPersona + comidaPorPersona
    FinSi
FinAlgoritmo
