# EMI Dashboard

An analytics demo for exploring EMI conversion behaviour, booking trends, customer segments, fee/revenue patterns, repeat usage, and portfolio performance.

This is a reusable demo project, not affiliated with a bank, payment app, or financial institution. It uses synthetic values only. Do not upload personal, customer, account, transaction, financial, or production data.

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

## Data and mailer

The dashboard starts with synthetic demo values. A selected CSV is read in the browser session. The Mailer tab previews a report; it does not send email from the website.

The reporting script supports a local CSV path or an EMI_DATA_CSV_URL environment variable. For example:

    node scripts/emi-dashboard-email-check.mjs prepare --csv-file ./path/to/synthetic-sample.csv

If GMAIL_USER and GMAIL_APP_PASSWORD are set in the local environment, this command can send email to the configured recipient. Check the recipient and use synthetic values before running it.

The checked-in GitHub Actions workflow is manually dispatched and currently does not pass a CSV source to the runner. A maintainer must configure a source before an Actions run can send. When configured with a source and Gmail secrets, it processes the CSV on a GitHub-hosted runner, emails a report to the configured recipients, and commits delivery-date metadata to a public state file. Treat that data flow and metadata as public; use synthetic values only.

No production or institution-specific endpoint is hardcoded in this repository.

## Run locally

    npm install
    npm run dev

Then open the local URL printed by Vite.

## Build

    npm run build
    npm run preview

## Deploy

A GitHub Pages workflow is included under .github/workflows/deploy-pages.yml. The Vite base path is relative, so the built app can be hosted under different repository names or static-hosting paths.

## Privacy

The browser dashboard stores the selected theme preference in local storage; it does not store the uploaded CSV there. GitHub Pages logs visitor IP addresses for security. The site requests Inter and Outfit fonts from Google Fonts. See [PRIVACY.md](PRIVACY.md) for details.

## License and third-party material

The [MIT license](LICENSE) applies only to original code and documentation listed in [LICENSE_SCOPE.md](LICENSE_SCOPE.md). Demo output, graphics, icons, fonts, dependencies, and other third-party material are excluded. Read [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) before reusing assets or bundled dependencies. MIT allows reuse of covered material subject to retaining its notice; it does not grant rights to excluded material.

## Contributing and security

See [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).