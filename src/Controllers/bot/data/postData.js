const { response } = require('../../../utils');
const moment = require("moment");
const { Op } = require("sequelize");
const { Tickets, TicketNumber, Cash, User, Client } = require("../../../db");

module.exports = async (req, res) => {
  const { phoneNumber } = req.body;

  const startDate = moment().startOf("day").toDate();
  const endDate = moment(startDate).endOf("day").toDate();

  // Buscar tickets del cliente para la fecha actual
  const client = await Client.findAll({
    where: {
      phone: phoneNumber,
    },
  });



  if (!client || client.length === 0) {
    const respuesta1 = 'Cliente no encontrado'
    // Si el cliente no existe, enviar una respuesta indicando que el cliente no fue encontrado
    return response(res, 200, respuesta1);
  }

  // Buscar tickets del cliente para la fecha actual
  const tickets = await Tickets.findAll({
    where: {
      clientId: client[0].clientId,
      createdAt: {
        [Op.and]: [
          { [Op.gte]: startDate },
          { [Op.lt]: new Date(endDate.setDate(endDate.getDate() + 1)) },
        ],
      },
    },
    include: [{ model: TicketNumber }],
  });
  
  console.log(tickets);

  if (!tickets || tickets.length === 0) {
    const respuesta2 = "No se encontraron tickets para el cliente"
    // Si el cliente no tiene tickets para la fecha actual, enviar una respuesta indicando que no hay tickets
    return response(res, 200, respuesta2);
  }

  response(res, 200, tickets);
};
