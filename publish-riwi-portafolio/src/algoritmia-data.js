import saludo from '../entregables/Algoritmia/Semana-1/Saludo.psc?raw'
import propinas from '../entregables/Algoritmia/Semana-1/Propinas.psc?raw'
import promedioNotas from '../entregables/Algoritmia/Semana-1/PromedioNotas.psc?raw'
import presupuestoPaseo from '../entregables/Algoritmia/Semana-1/PresupuestoPaseo.psc?raw'
import prepararTinto from '../entregables/Algoritmia/Semana-1/PrepararTinto.psc?raw'
import edadEnDias from '../entregables/Algoritmia/Semana-1/EdadEnDias.psc?raw'
import convertirMinutos from '../entregables/Algoritmia/Semana-1/ConvertirMinutos.psc?raw'
import areaTriangulo from '../entregables/Algoritmia/Semana-1/AreaTriangulo.psc?raw'
import parqueadero from '../entregables/Algoritmia/Semana-2/Parqueadero.psc?raw'
import costoEnvio from '../entregables/Algoritmia/Semana-2/CostoEnvio.psc?raw'
import clasificarNota from '../entregables/Algoritmia/Semana-2/ClasificarNota.psc?raw'
import bisiesto from '../entregables/Algoritmia/Semana-2/Bisiesto.psc?raw'
import validarEdad from '../entregables/Algoritmia/Semana-2/ValidarEdad.psc?raw'
import semaforo from '../entregables/Algoritmia/Semana-2/Semaforo.psc?raw'
import validarRegistros from '../entregables/Algoritmia/Semana-2/ValidarRegistros.psc?raw'
import validarPin from '../entregables/Algoritmia/Semana-3/ValidarPIN.psc?raw'
import acumularAhorro from '../entregables/Algoritmia/Semana-3/AcumularAhorro.psc?raw'
import caracol from '../entregables/Algoritmia/Caracol/Caracol.js?raw'

const amount = (value) => new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 2,
}).format(value)

const decimal = (value) => new Intl.NumberFormat('es-CO', {
  maximumFractionDigits: 2,
}).format(value)

const number = (value) => Number(value)
const invalidNumber = (...values) => values.some((value) => !Number.isFinite(value))
const commaSeparatedNumbers = (value) => value.split(',').map((part) => part.trim()).filter(Boolean).map(Number)
const numericField = (name, label, defaultValue = '') => ({ name, label, type: 'number', defaultValue })
const textField = (name, label, placeholder = '', defaultValue = '') => ({ name, label, type: 'text', placeholder, defaultValue })
const selectField = (name, label, options, defaultValue) => ({ name, label, type: 'select', options, defaultValue })
const vehicleOptions = [{ value: '1', label: 'Carro' }, { value: '2', label: 'Moto' }]
const yesNoOptions = [{ value: 'S', label: 'Sí' }, { value: 'N', label: 'No' }]
const zoneOptions = [{ value: '1', label: 'Local' }, { value: '2', label: 'Nacional' }, { value: '3', label: 'Rural' }]

export const algorithms = [
  {
    id: 'saludo',
    week: 'Semana 1',
    name: 'Saludo',
    description: 'Solicita un nombre y construye un saludo personalizado.',
    source: saludo,
    fields: [textField('nombre', 'Nombre', 'Escribe tu nombre')],
    run: ({ nombre }) => `Hola, ${nombre.trim()}. Bienvenido a Algoritmia`,
  },
  {
    id: 'propinas',
    week: 'Semana 1',
    name: 'Propinas',
    description: 'Calcula la propina, el total de la cuenta y cuánto paga cada persona.',
    source: propinas,
    fields: [numericField('cuenta', 'Valor de la cuenta'), numericField('porcentaje', 'Porcentaje de propina'), numericField('personas', 'Personas que pagan')],
    run: ({ cuenta: rawCuenta, porcentaje: rawPorcentaje, personas: rawPersonas }) => {
      const cuenta = number(rawCuenta)
      const porcentaje = number(rawPorcentaje)
      const personas = number(rawPersonas)
      if (invalidNumber(cuenta, porcentaje, personas)) return 'Ingresa valores numéricos válidos.'
      if (!Number.isInteger(personas)) return 'La cantidad de personas debe ser un número entero.'
      if (cuenta < 0 || porcentaje < 0 || personas <= 0) return 'Revisa los valores ingresados.'
      const propina = cuenta * porcentaje / 100
      const total = cuenta + propina
      return `Propina: ${amount(propina)}\nTotal: ${amount(total)}\nCada persona paga: ${amount(total / personas)}`
    },
  },
  {
    id: 'promedio-notas',
    week: 'Semana 1',
    name: 'Promedio de notas',
    description: 'Valida tres notas de 0 a 5 y calcula su promedio.',
    source: promedioNotas,
    fields: [numericField('nota1', 'Primera nota'), numericField('nota2', 'Segunda nota'), numericField('nota3', 'Tercera nota')],
    run: ({ nota1: a, nota2: b, nota3: c }) => {
      const notes = [number(a), number(b), number(c)]
      if (invalidNumber(...notes)) return 'Ingresa notas numéricas válidas.'
      if (notes.some((note) => note < 0 || note > 5)) return 'Las notas deben estar entre 0 y 5.'
      return `El promedio es: ${decimal(notes.reduce((sum, note) => sum + note, 0) / 3)}`
    },
  },
  {
    id: 'presupuesto-paseo',
    week: 'Semana 1',
    name: 'Presupuesto del paseo',
    description: 'Suma transporte y comida por persona para estimar el costo total del paseo.',
    source: presupuestoPaseo,
    fields: [numericField('personas', 'Personas'), numericField('transporte', 'Transporte por persona'), numericField('comida', 'Comida por persona')],
    run: ({ personas: rawPersonas, transporte: rawTransporte, comida: rawComida }) => {
      const personas = number(rawPersonas)
      const transporte = number(rawTransporte)
      const comida = number(rawComida)
      if (invalidNumber(personas, transporte, comida)) return 'Ingresa valores numéricos válidos.'
      if (!Number.isInteger(personas)) return 'La cantidad de personas debe ser un número entero.'
      if (personas <= 0 || transporte < 0 || comida < 0) return 'Las personas deben ser más de cero y los costos no pueden ser negativos.'
      return `Presupuesto total del paseo: ${amount(personas * (transporte + comida))}\nAporte por persona: ${amount(transporte + comida)}`
    },
  },
  {
    id: 'preparar-tinto',
    week: 'Semana 1',
    name: 'Preparar un tinto',
    description: 'Muestra en orden los pasos de un procedimiento cotidiano.',
    source: prepararTinto,
    fields: [],
    run: () => '1. Calienta una taza de agua.\n2. Pon café en un pocillo.\n3. Agrega el agua caliente.\n4. Revuelve y sirve.',
  },
  {
    id: 'edad-en-dias',
    week: 'Semana 1',
    name: 'Edad en días',
    description: 'Convierte una edad en años a una cantidad aproximada de días.',
    source: edadEnDias,
    fields: [numericField('edad', 'Edad en años')],
    run: ({ edad: rawEdad }) => {
      const edad = number(rawEdad)
      if (!Number.isInteger(edad)) return 'Ingresa una edad entera.'
      if (edad < 0) return 'La edad no puede ser negativa.'
      return `Has vivido aproximadamente ${edad * 365} días.`
    },
  },
  {
    id: 'convertir-minutos',
    week: 'Semana 1',
    name: 'Convertir minutos',
    description: 'Separa una cantidad de minutos en horas completas y minutos restantes.',
    source: convertirMinutos,
    fields: [numericField('minutos', 'Cantidad de minutos')],
    run: ({ minutos: rawMinutos }) => {
      const minutos = number(rawMinutos)
      if (!Number.isInteger(minutos)) return 'Ingresa una cantidad entera de minutos.'
      if (minutos < 0) return 'La cantidad no puede ser negativa.'
      return `${minutos} minutos equivalen a ${Math.trunc(minutos / 60)} horas y ${minutos % 60} minutos.`
    },
  },
  {
    id: 'area-triangulo',
    week: 'Semana 1',
    name: 'Área del triángulo',
    description: 'Calcula el área de un triángulo con su base y altura.',
    source: areaTriangulo,
    fields: [numericField('base', 'Base'), numericField('altura', 'Altura')],
    run: ({ base: rawBase, altura: rawAltura }) => {
      const base = number(rawBase)
      const altura = number(rawAltura)
      if (invalidNumber(base, altura)) return 'Ingresa valores numéricos válidos.'
      if (base <= 0 || altura <= 0) return 'La base y la altura deben ser mayores que cero.'
      return `El área del triángulo es: ${decimal(base * altura / 2)}`
    },
  },
  {
    id: 'parqueadero',
    week: 'Semana 2',
    name: 'Parqueadero',
    description: 'Calcula el cobro por tiempo, tipo de vehículo, tarifa máxima y factura.',
    source: parqueadero,
    fields: [selectField('tipo', 'Tipo de vehículo', vehicleOptions, '1'), numericField('minutos', 'Minutos en el parqueadero'), selectField('factura', '¿Tiene factura?', yesNoOptions, 'N')],
    run: ({ tipo, minutos: rawMinutos, factura }) => {
      const minutos = number(rawMinutos)
      if (!Number.isInteger(minutos)) return 'Ingresa una cantidad entera de minutos.'
      if (minutos < 0) return 'Los minutos no pueden ser negativos.'
      const tarifa = tipo === '1' ? 4000 : tipo === '2' ? 2000 : 0
      if (!tarifa) return 'Tipo de vehículo no válido.'
      if (minutos <= 15) return 'Valor a pagar: $ 0'
      let valor = Math.min(Math.ceil(minutos / 60) * tarifa, 30000)
      if (factura === 'S') valor /= 2
      return `Valor a pagar: ${amount(valor)}`
    },
  },
  {
    id: 'costo-envio',
    week: 'Semana 2',
    name: 'Costo de envío',
    description: 'Calcula el costo de envío según el peso del paquete y la zona.',
    source: costoEnvio,
    fields: [selectField('zona', 'Zona', zoneOptions, '1'), numericField('peso', 'Peso en kilogramos')],
    run: ({ zona, peso: rawPeso }) => {
      const peso = number(rawPeso)
      if (!Number.isFinite(peso)) return 'Ingresa un peso válido.'
      if (peso <= 0) return 'El peso debe ser mayor que cero.'
      const tarifas = { '1': 5000, '2': 9000, '3': 12000 }
      if (!tarifas[zona]) return 'La zona seleccionada no es válida.'
      return `Costo de envío: ${amount(peso * tarifas[zona])}`
    },
  },
  {
    id: 'clasificar-nota',
    week: 'Semana 2',
    name: 'Clasificar nota',
    description: 'Valida la nota final y determina si se aprobó la asignatura.',
    source: clasificarNota,
    fields: [numericField('nota', 'Nota final (0 a 5)')],
    run: ({ nota: rawNota }) => {
      const nota = number(rawNota)
      if (!Number.isFinite(nota)) return 'Ingresa una nota válida.'
      if (nota < 0 || nota > 5) return 'Nota inválida: debe estar entre 0 y 5.'
      return nota >= 3 ? 'Aprobaste la asignatura.' : 'Debes reforzar los temas de la asignatura.'
    },
  },
  {
    id: 'bisiesto',
    week: 'Semana 2',
    name: 'Año bisiesto',
    description: 'Determina si un año es bisiesto aplicando las reglas del calendario gregoriano.',
    source: bisiesto,
    fields: [numericField('anio', 'Año')],
    run: ({ anio: rawAnio }) => {
      const anio = number(rawAnio)
      if (!Number.isInteger(anio)) return 'Ingresa un año entero.'
      if (anio <= 0) return 'El año debe ser mayor que cero.'
      return (anio % 400 === 0 || (anio % 4 === 0 && anio % 100 !== 0))
        ? `${anio} es bisiesto.`
        : `${anio} no es bisiesto.`
    },
  },
  {
    id: 'validar-edad',
    week: 'Semana 2',
    name: 'Validar edad',
    description: 'Comprueba que la edad esté dentro del rango de 0 a 120 años.',
    source: validarEdad,
    fields: [numericField('edad', 'Edad')],
    run: ({ edad: rawEdad }) => {
      const edad = number(rawEdad)
      if (!Number.isInteger(edad)) return 'Ingresa una edad entera.'
      return edad >= 0 && edad <= 120 ? 'Edad válida.' : 'Edad inválida.'
    },
  },
  {
    id: 'semaforo',
    week: 'Semana 2',
    name: 'Semáforo de inventario',
    description: 'Clasifica el inventario como agotado, bajo o suficiente.',
    source: semaforo,
    fields: [numericField('unidades', 'Unidades disponibles')],
    run: ({ unidades: rawUnidades }) => {
      const unidades = number(rawUnidades)
      if (!Number.isInteger(unidades)) return 'Ingresa una cantidad entera.'
      if (unidades < 0) return 'Cantidad no válida.'
      if (unidades === 0) return 'Rojo: inventario agotado.'
      if (unidades <= 10) return 'Amarillo: hay pocas unidades.'
      return 'Verde: inventario suficiente.'
    },
  },
  {
    id: 'validar-registros',
    week: 'Semana 2',
    name: 'Validar registro',
    description: 'Permite el registro si la persona tiene al menos 14 años y acepta los términos.',
    source: validarRegistros,
    fields: [numericField('edad', 'Edad'), selectField('respuesta', '¿Aceptas los términos?', yesNoOptions, 'N')],
    run: ({ edad: rawEdad, respuesta }) => {
      const edad = number(rawEdad)
      if (!Number.isInteger(edad)) return 'Ingresa una edad entera.'
      return edad >= 14 && respuesta.toUpperCase() === 'S' ? 'Registro exitoso.' : 'No puedes registrarte.'
    },
  },
  {
    id: 'validar-pin',
    week: 'Semana 3',
    name: 'Validar PIN',
    description: 'Permite hasta tres intentos para ingresar el PIN correcto.',
    source: validarPin,
    fields: [textField('intentos', 'PIN por intento (separados por coma)', '1234, 2580, 0000', '2580')],
    run: ({ intentos }) => {
      const pins = intentos.split(',').map((pin) => pin.trim()).filter(Boolean).slice(0, 3)
      if (!pins.length || pins.some((pin) => !/^\d+$/.test(pin))) return 'Escribe uno o más PIN enteros separados por coma.'
      const correcto = pins.findIndex((pin) => pin === '2580')
      if (correcto >= 0) return `Bienvenido. PIN correcto en el intento ${correcto + 1}.`
      if (pins.length < 3) return `PIN incorrecto. Te quedan ${3 - pins.length} intentos. Agrega el siguiente PIN para continuar.`
      return `Tarjeta bloqueada. Intentos realizados: ${pins.length}.`
    },
  },
  {
    id: 'acumular-ahorro',
    week: 'Semana 3',
    name: 'Acumular ahorro',
    description: 'Suma aportes positivos hasta recibir el valor 0; los aportes negativos se rechazan.',
    source: acumularAhorro,
    fields: [textField('aportes', 'Aportes en orden (separados por coma)', '10000, 5000, 0', '10000, 5000, 0')],
    run: ({ aportes }) => {
      const values = commaSeparatedNumbers(aportes)
      if (!values.length || values.some((value) => !Number.isFinite(value))) return 'Ingresa cantidades válidas separadas por coma.'
      let total = 0
      const messages = []
      for (const aporte of values) {
        if (aporte === 0) break
        if (aporte > 0) {
          total += aporte
          messages.push(`Ahorro acumulado: ${amount(total)}`)
        } else {
          messages.push('El aporte debe ser mayor que cero.')
        }
      }
      messages.push(`Ahorro final: ${amount(total)}`)
      return messages.join('\n')
    },
  },
  {
    id: 'caracol',
    week: 'Caracol',
    name: 'Caracol',
    description: 'Calcula el avance neto de un caracol en un día, restando lo que baja de lo que sube.',
    source: caracol,
    fields: [numericField('altura', 'Altura actual', '10'), numericField('sube', 'Unidades que sube', '3'), numericField('baja', 'Unidades que baja', '2')],
    run: ({ altura: rawAltura, sube: rawSube, baja: rawBaja }) => {
      const altura = number(rawAltura)
      const sube = number(rawSube)
      const baja = number(rawBaja)
      if (invalidNumber(altura, sube, baja)) return 'Ingresa valores numéricos válidos.'
      return `Avance neto: ${decimal(sube - baja)} unidades.\nAltura después de un ciclo: ${decimal(altura + sube - baja)} unidades.`
    },
  },
]
