# EMI Dashboard

An open-source analytics dashboard for exploring EMI conversion behaviour, booking trends, customer segments, fee/revenue patterns, repeat usage, and portfolio performance.

The repository is designed as a reusable demo project. It uses synthetic/sample data and is not affiliated with any bank, payment app, or financial institution.

## What it includes

- EMI portfolio summary and trend views
- Booking-size and EMI-comfort analysis
- Processing-fee and revenue/yield views
- Customer segmentation and repeat-user analytics
- Marketing and platform-mix views
- Interactive filters, drill-downs, and charts
- Light/dark themes
- GitHub Pages deployment workflow
- Optional email-report automation

## Data

The public dashboard should use synthetic or anonymized sample data only.

For the optional email-report helper, provide either:

```bash
node scripts/emi-dashboard-email-check.mjs prepare --csv-file ./path/to/sample.csv
```

or set a remote CSV source:

```bash
export EMI_DATA_CSV_URL="https://example.com/sample.csv"
```

No production or institution-specific endpoint is hardcoded in this repository.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Deploy

A GitHub Pages workflow is included under `.github/workflows/deploy-pages.yml`.

The Vite base path is relative, so the built app can be hosted under different repository names or static-hosting paths without changing application code.

## Project structure

```text
src/
  components/       Dashboard charts and UI
  utils/            Data processing, demo data, and theme helpers
scripts/            Optional reporting utilities
email-templates/    Sample email report
.github/workflows/  Pages deployment and optional automation
```

## Privacy

Do not commit real customer data, credentials, private endpoints, production logs, or personally identifiable information. Keep public demos limited to synthetic or safely anonymized datasets.
