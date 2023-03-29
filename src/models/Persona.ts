const Persona = {
  default: 'default human',
  elon: 'Elon Musk',
  pmarca: 'Marc Andreessen',
  capitalist: 'Venture capitalist',
  founder: 'Startup founder',
  thiel: 'Peter Thiel',
  child: 'Child',
  trump: 'Trump',
  eminem: 'Eminem',
  cuban: 'Mark Cuban',
  stark: 'Iron Man',
}

export type PersonaKeys = keyof typeof Persona

export default Persona
