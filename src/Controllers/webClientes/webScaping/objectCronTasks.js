const {
  anguilla9,
  anguilla10,
  anguilla11,
  anguilla15,
  anguilla16,
  anguilla17,
  anguilla18,
  anguilla19,
  anguilla22,
  lotedom1355,
  updateTicketStatus,
  updateTicketStatusAdmin,
  laSuerteDominicanaMD,
  laSuerteDominicana6,
  anguilla,
  laPrimeraNoche,
  laPrimeraDia,
  real1300,
  floridaNoche,
  floridaTarde,
  newYorkNoche,
  newYorkTarde,
  ganaMas,
  loteka1955,
  leidsaLS2055,
  leidsaDom1555,
  nacionalLS21,
  nacionalDom6,
} = require("./lotteryFunction");

const cronTasks = [
  { pattern: "5 10 * * *", nombre: "anguilla9", func: anguilla9 },
  { pattern: "10 10 * * *", nombre: "control", func: anguilla9 },
  { pattern: "20 10 * * *", nombre: "control", func: anguilla9 },
  { pattern: "30 10 * * *", nombre: "control", func: anguilla9 },

  { pattern: "5 11 * * *", nombre: "anguilla", func: anguilla10 },
  { pattern: "10 11 * * *", nombre: "control", func: anguilla10 },
  { pattern: "20 11 * * *", nombre: "control", func: anguilla10 },
  { pattern: "30 11 * * *", nombre: "control", func: anguilla10 },

  { pattern: "5 12 * * *", nombre: "anguilla", func: anguilla11 },
  { pattern: "10 12 * * *", nombre: "control", func: anguilla11 },
  { pattern: "20 12 * * *", nombre: "control", func: anguilla11 },
  { pattern: "30 12 * * *", nombre: "control", func: anguilla11 },

  { pattern: "5 13 * * *", nombre: "laPrimeraDia", func: laPrimeraDia },
  { pattern: "10 13 * * *", nombre: "control", func: laPrimeraDia },
  { pattern: "20 13 * * *", nombre: "control", func: laPrimeraDia },
  { pattern: "30 13 * * *", nombre: "control", func: laPrimeraDia },

  { pattern: "35 13 * * *", nombre: "laSuerteDominicanaMD", func: laSuerteDominicanaMD  },
  { pattern: "40 13 * * *", nombre: "control", func: laSuerteDominicanaMD },
  { pattern: "50 13 * * *", nombre: "control", func: laSuerteDominicanaMD },
  { pattern: "00 14 * * *", nombre: "control", func: laSuerteDominicanaMD },

  { pattern: "5 14 * * *", nombre: "real1300", func: real1300 },
  { pattern: "10 14 * * *", nombre: "control", func: real1300 },
  { pattern: "20 14 * * *", nombre: "control", func: real1300 },
  { pattern: "30 14 * * *", nombre: "control", func: real1300 },

  { pattern: "0 15 * * *", nombre: "lotedom1355", func: lotedom1355 },
  { pattern: "10 15 * * *", nombre: "control", func: lotedom1355 },
  { pattern: "20 15 * * *", nombre: "control", func: lotedom1355 },
  { pattern: "30 15 * * *", nombre: "control", func: lotedom1355 },

  { pattern: "35 15 * * *", nombre: "floridaTarde", func: floridaTarde },
  { pattern: "40 15 * * *", nombre: "control", func: floridaTarde },
  { pattern: "50 15 * * *", nombre: "control", func: floridaTarde },
  { pattern: "00 16 * * *", nombre: "control", func: floridaTarde },

  { pattern: "35 15 * * *", nombre: "ganaMas", func: ganaMas },
  { pattern: "40 15 * * *", nombre: "control", func: ganaMas },
  { pattern: "50 15 * * *", nombre: "control", func: ganaMas },
  { pattern: "00 16 * * *", nombre: "control", func: ganaMas },

  { pattern: "5 16 * * *", nombre: "anguilla", func: anguilla15 },
  { pattern: "10 16 * * *", nombre: "control", func: anguilla15 },
  { pattern: "20 16 * * *", nombre: "control", func: anguilla15 },
  { pattern: "30 16 * * *", nombre: "control", func: anguilla15 },

  { pattern: "35 16 * * *", nombre: "newYorkTarde", func: newYorkTarde },
  { pattern: "40 16 * * *", nombre: "control", func: newYorkTarde },
  { pattern: "50 16 * * *", nombre: "control", func: newYorkTarde },
  { pattern: "00 17 * * *", nombre: "control", func: newYorkTarde },

  { pattern: "1 17 * * *", nombre: "leidsaDom1555", func: leidsaDom1555 },
  { pattern: "10 17 * * *", nombre: "control", func: leidsaDom1555 },
  { pattern: "20 17 * * *", nombre: "control", func: leidsaDom1555 },
  { pattern: "30 17 * * *", nombre: "control", func: leidsaDom1555 },

  { pattern: "5 17 * * *", nombre: "anguilla", func: anguilla16 },
  { pattern: "9 17 * * *", nombre: "control", func: anguilla16 },
  { pattern: "19 17 * * *", nombre: "control", func: anguilla16 },
  { pattern: "29 17 * * *", nombre: "control", func: anguilla16 },

  { pattern: "5 18 * * *", nombre: "anguilla", func: anguilla17 },
  { pattern: "10 18 * * *", nombre: "control", func: anguilla17 },
  { pattern: "20 18 * * *", nombre: "control", func: anguilla17 },
  { pattern: "30 18 * * *", nombre: "control", func: anguilla17 },

  { pattern: "5 19 * * *", nombre: "nacionalDom6", func: nacionalDom6 },
  { pattern: "10 19 * * *", nombre: "control", func: nacionalDom6 },
  { pattern: "20 19 * * *", nombre: "control", func: nacionalDom6 },
  { pattern: "30 19 * * *", nombre: "control", func: nacionalDom6 },

  { pattern: "5 19 * * *", nombre: "anguilla", func: anguilla18 },
  { pattern: "10 19 * * *", nombre: "control", func: anguilla18 },
  { pattern: "20 19 * * *", nombre: "control", func: anguilla18 },
  { pattern: "30 19 * * *", nombre: "control", func: anguilla18 },

  { pattern: "5 19 * * *",nombre: "laSuerteDominicana6",func: laSuerteDominicana6 },
  { pattern: "10 19 * * *", nombre: "control", func: laSuerteDominicana6 },
  { pattern: "20 19 * * *", nombre: "control", func: laSuerteDominicana6 },
  { pattern: "30 19 * * *", nombre: "control", func: laSuerteDominicana6 },

  { pattern: "5 20 * * *", nombre: "anguilla", func: anguilla19 },
  { pattern: "10 20 * * *", nombre: "control", func: anguilla19 },
  { pattern: "20 20 * * *", nombre: "control", func: anguilla19 },
  { pattern: "30 20 * * *", nombre: "control", func: anguilla19 },

  { pattern: "1 20 * * *", nombre: "loteka1955", func: loteka1955 },
  { pattern: "10 20 * * *", nombre: "control", func: loteka1955 },
  { pattern: "20 20 * * *", nombre: "control", func: loteka1955 },
  { pattern: "30 20 * * *", nombre: "control", func: loteka1955 },

  { pattern: "5 21 * * *", nombre: "laPrimeraNoche", func: laPrimeraNoche },
  { pattern: "10 21 * * *", nombre: "control", func: laPrimeraNoche },
  { pattern: "20 21 * * *", nombre: "control", func: laPrimeraNoche },
  { pattern: "30 21 * * *", nombre: "control", func: laPrimeraNoche },

  { pattern: "0 22 * * *", nombre: "leidsaLS2055", func: leidsaLS2055 },
  { pattern: "10 22 * * *", nombre: "control", func: leidsaLS2055 },
  { pattern: "20 22 * * *", nombre: "control", func: leidsaLS2055 },
  { pattern: "30 22 * * *", nombre: "control", func: leidsaLS2055 },

  { pattern: "5 22 * * *", nombre: "nacionalLS21", func: nacionalLS21 },
  { pattern: "9 22 * * *", nombre: "control", func: nacionalLS21 },
  { pattern: "19 22 * * *", nombre: "control", func: nacionalLS21 },
  { pattern: "29 22 * * *", nombre: "control", func: nacionalLS21 },

  { pattern: "5 23 * * *", nombre: "anguilla", func: anguilla22 },
  { pattern: "10 23 * * *", nombre: "control", func: anguilla22 },
  { pattern: "20 23 * * *", nombre: "control", func: anguilla22 },
  { pattern: "30 23 * * *", nombre: "control", func: anguilla22 },

  { pattern: "0 1 * * *", nombre: "newYorkNoche", func: newYorkNoche },
  { pattern: "10 1 * * *", nombre: "control", func: newYorkNoche },
  { pattern: "20 1 * * *", nombre: "control", func: newYorkNoche },
  { pattern: "30 1 * * *", nombre: "control", func: newYorkNoche },

  { pattern: "50 23 * * *", nombre: "floridaNoche", func: floridaNoche },
  { pattern: "0 0 * * *", nombre: "control", func: floridaNoche },
  { pattern: "10 0 * * *", nombre: "control", func: floridaNoche },
  { pattern: "20 0 * * *", nombre: "control", func: floridaNoche },

  {
    pattern: "0 4 * * *",
    nombre: "ticketUpdateStateAdmin",
    func: updateTicketStatusAdmin,
  },

  { pattern: "0 5 * * *", nombre: "ticketUpdate", func: updateTicketStatus },
];

module.exports = { cronTasks };
