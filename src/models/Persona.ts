const Persona = {
  default: 'Default human',
  elon: 'Elon Musk',
  founder: 'Startup founder',
  eminem: 'Eminem',
  cuban: 'Mark Cuban',
  stark: 'Iron Man',
  jackson: 'Samuel L. Jackson',
  andreessen: 'Marc Andreessen',
  homes: 'Elizabeth Holmes',
  west: 'Kanya West',
  dickinson: 'Emily Dickinson',
  beyonce: 'Beyoncé',
  jobs: 'Steve Jobs',
}

export type PersonaKeys = keyof typeof Persona

export default Persona
