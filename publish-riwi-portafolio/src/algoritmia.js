import { algorithms } from './algoritmia-data.js'

const list = document.querySelector('#algorithm-list')
const filter = document.querySelector('#algorithm-filter')
const groupOrder = ['Semana 1', 'Semana 2', 'Semana 3', 'Caracol']
const groupNames = {
  'Semana 1': 'Semana 1 · Fundamentos',
  'Semana 2': 'Semana 2 · Condiciones',
  'Semana 3': 'Semana 3 · Ciclos',
  Caracol: 'Caracol · JavaScript',
}

const createField = ({ name, label, type, placeholder = '', defaultValue = '', options = [] }, id) => {
  const wrapper = document.createElement('label')
  wrapper.className = 'block text-sm font-bold text-[#ffe3a0]'

  const labelText = document.createElement('span')
  labelText.className = 'mb-2 block'
  labelText.textContent = label

  let input
  if (type === 'select') {
    input = document.createElement('select')
    input.className = 'w-full rounded-xl border border-[#fff0c2]/20 bg-[#20292e] px-3 py-3 text-[#fff0c2] outline-none focus:border-[#c81019] focus:ring-2 focus:ring-[#c81019]'
    options.forEach(({ value, label: optionLabel }) => {
      const option = document.createElement('option')
      option.value = value
      option.textContent = optionLabel
      input.append(option)
    })
  } else {
    input = document.createElement('input')
    input.type = type
    input.placeholder = placeholder
    input.step = type === 'number' ? 'any' : ''
    input.className = 'w-full rounded-xl border border-[#fff0c2]/20 bg-[#20292e] px-3 py-3 text-[#fff0c2] outline-none placeholder:text-[#fff0c2]/35 focus:border-[#c81019] focus:ring-2 focus:ring-[#c81019]'
  }

  input.name = name
  input.id = `${id}-${name}`
  input.value = defaultValue
  input.required = true
  wrapper.append(labelText, input)
  return wrapper
}

const createCard = (algorithm) => {
  const card = document.createElement('article')
  card.dataset.week = algorithm.week
  card.className = 'rounded-3xl border border-[#ffe3a0]/35 bg-[#29343a] p-5 shadow-[6px_6px_0_0_#c81019] sm:p-7'

  const heading = document.createElement('div')
  heading.className = 'mb-5'
  heading.innerHTML = `
    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#c81019]">${algorithm.week}</p>
    <h3 class="mt-2 text-2xl font-black text-[#ffe3a0]">${algorithm.name}</h3>
    <p class="mt-2 leading-7 text-[#fff0c2]/70">${algorithm.description}</p>
  `

  const codeDetails = document.createElement('details')
  codeDetails.className = 'mb-5 overflow-hidden rounded-2xl border border-[#fff0c2]/15 bg-[#20292e]'
  const codeSummary = document.createElement('summary')
  codeSummary.className = 'cursor-pointer px-4 py-3 font-bold text-[#ffe3a0] hover:text-white'
  codeSummary.textContent = `Ver código ${algorithm.week === 'Caracol' ? 'JavaScript' : 'PSeInt'}`
  const code = document.createElement('pre')
  code.className = 'max-h-96 overflow-auto border-t border-[#fff0c2]/10 p-4 text-sm leading-6 text-[#fff0c2]/80'
  const codeText = document.createElement('code')
  codeText.textContent = algorithm.source.trim()
  code.append(codeText)
  codeDetails.append(codeSummary, code)

  const form = document.createElement('form')
  form.className = 'space-y-4'
  form.setAttribute('aria-label', `Ejecutar ${algorithm.name}`)
  if (algorithm.fields.length) {
    const fields = document.createElement('div')
    fields.className = 'grid gap-4 sm:grid-cols-2'
    algorithm.fields.forEach((field) => fields.append(createField(field, algorithm.id)))
    form.append(fields)
  }

  const submit = document.createElement('button')
  submit.type = 'submit'
  submit.className = 'rounded-full bg-[#ffe3a0] px-5 py-3 font-black uppercase tracking-wider text-[#20292e] transition hover:bg-[#c81019] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe3a0]'
  submit.textContent = 'Ejecutar algoritmo'
  form.append(submit)

  const output = document.createElement('pre')
  output.className = 'mt-4 min-h-14 whitespace-pre-wrap rounded-2xl border border-[#fff0c2]/10 bg-[#171d21] p-4 text-sm leading-6 text-[#ffe3a0]'
  output.setAttribute('aria-live', 'polite')
  output.textContent = 'El resultado aparecerá aquí.'

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const values = Object.fromEntries(new FormData(form).entries())
    output.textContent = algorithm.run(values)
  })

  card.append(heading, codeDetails, form, output)
  return card
}

groupOrder.forEach((group) => {
  const groupAlgorithms = algorithms.filter((algorithm) => algorithm.week === group)
  if (!groupAlgorithms.length) return

  const section = document.createElement('section')
  section.dataset.group = group
  section.setAttribute('aria-label', groupNames[group])

  const heading = document.createElement('h2')
  heading.className = 'mb-5 border-b border-[#fff0c2]/15 pb-3 text-xl font-black uppercase tracking-wider text-[#ffe3a0]'
  heading.textContent = groupNames[group]

  const cards = document.createElement('div')
  cards.className = 'grid gap-6 lg:grid-cols-2'
  groupAlgorithms.forEach((algorithm) => cards.append(createCard(algorithm)))
  section.append(heading, cards)
  list.append(section)
})

filter.addEventListener('change', () => {
  list.querySelectorAll('[data-group]').forEach((section) => {
    section.hidden = filter.value !== 'all' && section.dataset.group !== filter.value
  })
})
