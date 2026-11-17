import activitySource from '../entregables/IA/riwi-tres-cupos-borrador (2).txt?raw'

const source = document.querySelector('#activity-source')
if (source) {
  source.textContent = activitySource.trim()
}
