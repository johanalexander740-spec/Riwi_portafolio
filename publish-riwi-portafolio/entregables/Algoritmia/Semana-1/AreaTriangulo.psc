Algoritmo AreaTriangulo
    Definir base, altura, area Como Real

    Escribir "Ingresa la base del triangulo:"
    Leer base
    Escribir "Ingresa la altura del triangulo:"
    Leer altura

    Si base <= 0 O altura <= 0 Entonces
        Escribir "La base y la altura deben ser mayores que cero"
    SiNo
        area <- base * altura / 2
        Escribir "El area del triangulo es: ", area
    FinSi
FinAlgoritmo
