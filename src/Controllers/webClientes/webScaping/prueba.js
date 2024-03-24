const puppeteer = require("puppeteer");
// const { Numbers, Tickets, User, TicketNumber } = require("../../../db");
// const { Op } = require("sequelize");


async function lotedom1355() {
  const maxRetries = 3;
  let retries = 0;
  let browser;
  let page;

  while (retries < maxRetries) {
    try {
      const today = new Date();
      today.setHours(today.getHours() - 3);

      const startOfDay = new Date(today);
startOfDay.setHours(0, 0, 0, 0); // Establecer la hora a las 00:00:00

const endOfDay = new Date(today);
endOfDay.setHours(23, 59, 59, 999); 

const numberAlready = await Numbers.findOne({
  where: {
    nameLottery: "LoteDom",
    hr: "13:55",
    day:{
        [Op.between]: [startOfDay, endOfDay],
}
  },
});

      if (numberAlready) return "Ok";

      browser = await puppeteer.launch({
        headless: "new",
        args: ["--no-sandbox"],
      });

      page = await browser.newPage();
      const url =
        "https://www.conectate.com.do/loterias/lotedom";

      await page.goto(url, { waitUntil: "domcontentloaded" });
      await page.waitForSelector(".game-scores", { timeout: 30000 });

      const numbersData = await page.evaluate(() => {
        const container = Array.from(document.querySelectorAll(".game-scores"));

        const numbers = container.map((element) => {
          const numberBubbles = Array.from(element.querySelectorAll(".score"));
          const numbers = numberBubbles.map((bubble) =>
            bubble.textContent.trim()
          );
          return numbers;
        });

        return numbers;
      });

      if (numbersData.length > 0 && numbersData[0].length === 3) {
        const numbers = numbersData[0];

        // Verificar si el número es "00" y ajustar el valor
        const adjustedNumbers = numbers.map((num) =>
          num === "00" ? "100" : num
        );

        await Numbers.create({
          number1: adjustedNumbers[0],
          number2: adjustedNumbers[1],
          number3: adjustedNumbers[2],
          page: "https://lotedom.com/",
          nameLottery: "LoteDom",
          hr: "13:55",
          imageUrl:
            "https://enloteria.com/assets/lotedom-9aae43273ce4d8d4d5429f6f57f2fadc54012eb96fc80d6f59cfb9b72576b7e9.svg",
          day: today,
        });

        break;
      } else {
        console.log("No se encontraron números válidos en la página.");
      }
    } catch (error) {
      console.error(
        "Se produjo un error al ejecutar la función newYorkTarde:",
        error
      );
      retries++;
    } finally {
      if (page) {
        await page.close();
      }
      if (browser) {
        await browser.close();
      }
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}


async function real1300() {
  let browser;
  let page;

  try {
    const today = new Date();
    today.setHours(today.getHours() - 3);

    const startOfDay = new Date(today);
startOfDay.setHours(0, 0, 0, 0); // Establecer la hora a las 00:00:00

const endOfDay = new Date(today);
endOfDay.setHours(23, 59, 59, 999); 

    const numberAlready = await Numbers.findOne({
      where: {
        nameLottery: "Real",
        hr: "13:00",
        day:{
            [Op.between]: [startOfDay, endOfDay],
}
      },
    });

    if (numberAlready) return "Ok";

    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox"],
    });

    page = await browser.newPage();
    const url = "https://www.lotoreal.com.do/";

    await page.goto(url, { waitUntil: "domcontentloaded" });
    await page.waitForSelector(".result__bowls-container", { timeout: 150000 });

    const numbersData = await page.evaluate(() => {
      const container = Array.from(
        document.querySelectorAll(".result__bowls-container")
      );

      const numbers = container.map((element) => {
        const numberBubbles = Array.from(element.querySelectorAll(".bolo"));
        const numbers = numberBubbles.map((bubble) =>
          bubble.textContent.trim()
        );
        return numbers;
      });

      return numbers;
    });

    if (numbersData.length > 1 && numbersData[1].length === 3) {
      const numbers = numbersData[1];

      // Verificar si el número es "00" y ajustar el valor
      const adjustedNumbers = numbers.map((num) =>
        num === "00" ? "100" : num
      );

      await Numbers.create({
        number1: adjustedNumbers[0],
        number2: adjustedNumbers[1],
        number3: adjustedNumbers[2],
        page: "https://www.lotoreal.com.do/",
        nameLottery: "Real",
        hr: "13:00",
        imageUrl:
          "https://enloteria.com/assets/real-eeb33736cd36eff0dfb219af8954fe0ab37245bd412801ea864f6a131c3c758c.svg",
        day: today,
      });
    } else {
      console.log("No se encontraron números válidos en la página.");
    }
  } catch (error) {
    console.error(
      "Se produjo un error al ejecutar la función real1300:",
      error
    );
  } finally {
    if (page) {
      await page.close();
    }
    if (browser) {
      await browser.close();
    }
  }
}

lotedom1355()