import { Menu } from "@grammyjs/menu";

import { BotContext } from "../../types";
import { MenuIds } from "../../../constants";

const help = `🌐 *1.country Help*

*Commands*
/rent [domain] - Rent a domain name for 30 days
/renew [domain] - Renew a domain for 30 days
/notion [domainName] [alias] [url] - Link a notion page to https://alias.domainName.country
/check [domain] - Reserved
/cert [domain] - Reserved
/nft [domain] - Reserved
`;

// /check [domain] - Check a 1.country domain status
// /cert [domain] - Check domain's cert status
// /nft [domain] - Check domain's nft metadata status

export const oneCountryMainMenu = new Menu<BotContext>(MenuIds.ONE_COUNTRY_MAIN) //<MyContext>
  .text("Help", (ctx) =>
    ctx
      .editMessageText(help, {
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      })
      .catch((ex: any) => console.log("### ex", ex))
  )
  .row()
  .url("Go to 1.country", "https://1.country")
  .row()
  .back("Back to the Main Menu");
