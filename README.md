# Concept Creep

A single-file browser replication of *prevalence-induced concept change*
(Levari, Gilbert, Wilson, Kikuchi, & Wilson, *Science*, 2018): when a
category becomes rarer, people's concept of it quietly expands to keep
catching borderline cases.

Two chapters share one trial engine — a sliding-window logistic fit that
tracks the player's own judgment boundary as prevalence shifts from 50% to
6% partway through:

- **Chroma Watch** — blue vs. purple dots (replicates Study 1).
- **Motor Pool** — family car vs. sports car (same paradigm, a new domain).

Play it: open `index.html` directly, or via GitHub Pages once enabled.

## Data collection

With consent, anonymized responses, response times, and demographics can be
logged to a Google Sheet — see `sheet-logger.gs.js` for the receiving Apps
Script and the `SHEET_WEBHOOK_URL` constant near the top of `index.html`.

## License

Content and code in this repository are licensed under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — see `LICENSE`.
