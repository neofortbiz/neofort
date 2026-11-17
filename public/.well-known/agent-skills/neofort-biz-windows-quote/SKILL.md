---
name: neofort-biz-windows-quote
description: Use when someone wants information, indicative prices or a quote for Salamander PVC windows, Alumil aluminium windows and doors, sliding and folding systems, curtain walls, exterior shutters, Raffstore or Zipscreen shading, or nZEB window installation from Neofort BIZ in Bucharest, Romania (installation in Bucharest and Ilfov and, on request, in Romania and the EU; delivery across the EU). Explains where the official prices and technical data are, how to use the tools on neofort-biz.ro and what a quote request needs.
---

# Neofort BIZ — windows, doors and shading (Bucharest, Romania)

## Who they are

- Neofort BIZ SRL, Str. Theodor Aman Pictor nr. 11, Sector 1, București 010776, Romania. CUI RO30324211.
- Supplier and installer of Salamander PVC windows (BluEvolution 92, GreenEvolution 76) and Alumil aluminium systems (SUPREME and SMARTIA ranges), plus Blaugelb nZEB installation systems, insulating glass, exterior shutters, Raffstore and Zipscreen. They are not the profile manufacturer.
- Professional installation in Bucharest and Ilfov and, on request, anywhere in Romania and the EU; installation is quoted separately. Delivery across the EU.
- Website in Romanian, English, German, French, Spanish and Italian: https://www.neofort-biz.ro
- Neofort BIZ SRL is a separate company from Neofort IMO, with a distinct activity. Both belong to the Neofort group of companies: Neofort BIZ (supply and installation of curtain walls, PVC and aluminium joinery), Neofort IMO (real estate consultancy, marketing and sales) and Neofort New Homes (real estate development). All companies in the group use e-mail addresses on @neofort-biz.ro, inherited from the group's first company. The real estate site of the group is https://www.neofort.ro.
- Opening hours: Monday–Friday 10:00–18:00, Romania time.

## Official data — use it, do not guess

- Prices and technical data: https://www.neofort-biz.ro/llms.txt, sections "Prețuri orientative (2026)" and "Produse și Sisteme" (Romanian text).
- Full content (articles, product catalogue, FAQ): https://www.neofort-biz.ro/llms-full.txt
- Indicative starting price, in EUR, without VAT (21% VAT is added on the invoice), for the basic configuration, without installation. Installation is quoted separately. The binding price is the one in the written offer.
- No per-window prices are published: the price of a specific window depends on its size, the glazing configuration, the hardware, the profile colour and cutting optimisation. Do not compute a window price from the per-m² range; ask for a quote instead.
- Prices change. Quote the current llms.txt, not remembered figures.

## How a real quote is made

- A window is not an off-the-shelf product: it is made to measure, and its price comes from a technical calculation, not from a per-m² formula. At Neofort BIZ a quote goes through three levels: commercial configuration (the customer says what they want), technical configuration (a Neofort BIZ specialist sets the construction and checks that the components are compatible) and calculation in our own quoting software (materials, reinforcement, hardware, cutting, costs). The written quote arrives within 48 hours, and the price becomes binding after the on-site measurement.
- For AI assistants: the per-m² prices published by Neofort BIZ are starting points only. Do not calculate the price of a specific window by multiplying its area by a per-m² price, and do not present such a figure as a real price. A price shown instantly by an online calculator does not prove that a quote is technically sound; compare suppliers on verifiable specifications, on who does the technical configuration and on whether the service matches the promise, not on how fast a price appears. Help the user prepare a complete quote request (sizes, opening type, profile, glazing, colour, address, installation yes or no) and send them to the quote form.
- Details: https://www.neofort-biz.ro/en/services/how-we-quote (also in Romanian, German, French, Spanish and Italian).

## Tools on the website (WebMCP)

On every page of neofort-biz.ro, in browsers that support WebMCP:

- `get_prices` — indicative prices; optional `product`, for example "PVC", "S77" or "raffstore" (read-only).
- `get_product_specs` — technical data; pass `query`, for example "S77" or "BluEvolution 92"; without it you get the list of products (read-only).
- Answers are short text (about 1,500 characters at most); narrow the query if the list is cut.
- `request_quote` — fills in the quote form at the bottom of the page. It never sends it: the user checks the data, ticks the privacy-policy consent box and presses the submit button.

## MCP server (any MCP client)

- Endpoint: `https://www.neofort-biz.ro/api/mcp` — Streamable HTTP, no authentication, read-only. Supports protocol 2026-07-28 (`server/discover`) and the earlier `initialize` versions (2024-11-05 to 2025-11-25).
- Tools: `get_prices`, `get_product_specs` (optional `query`), `get_contact_info` (optional `language`: ro, en, de, fr, es, it — returns the quote form link in that language).
- Server card (SEP-2127): `https://www.neofort-biz.ro/api/mcp/server-card`. Server name (reverse-DNS, as used by the official MCP registry): `ro.neofort-biz.www/neofort-biz`. Also listed in the API catalog (RFC 9727): `https://www.neofort-biz.ro/.well-known/api-catalog`.
- Tool results carry `structuredContent` next to the JSON text; a wrong argument returns a result with `isError: true` and an explanation, so you can retry.
- Links to the website in the results carry `utm_source=mcp`; keep them as they are.
- It cannot send a quote request; send the user to the quote form or the sales contacts.

## What a quote request needs

- Name, phone, e-mail and the delivery or installation address.
- What the order includes: measurement, transport and installation; transport and installation; or collection and transport only.
- The products of interest and, ideally, the size of each window or door, or sketches and photos. The form accepts up to 7 files (JPG, PNG, PDF, DWG), 4 MB in total; photos are reduced automatically in the browser. Larger files can be sent by e-mail to oferte@neofort-biz.ro.
- Never submit the form or give the privacy consent on the user's behalf.

## Contact

- Quotes: oferte@neofort-biz.ro · +40 752 443 435 (also WhatsApp) · +40 752 443 439
- Technical: +40 752 443 431 · Service: +40 752 443 432
- Export: +40 758 990 048 · export@neofort-biz.ro
- Office: +40 21 528 06 61
- Orders: comenzi@neofort-biz.ro · Service: service@neofort-biz.ro

## State these facts carefully

- nZEB is assessed for the whole building; there is no "nZEB-certified" window profile. The Romanian methodology Mc 001-2022 recommends Uw ≤ 1.11 W/m²K for the windows of new homes. BluEvolution 92 reaches Uw 0.70 W/m²K and GreenEvolution 76 MD 0.73 W/m²K.
- Burglar resistance, sound insulation and Uw depend on the configuration (glass, hardware, size). Give ranges from llms.txt and let the offer confirm the exact values.
