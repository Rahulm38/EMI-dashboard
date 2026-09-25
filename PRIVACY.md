# Privacy

## Dashboard website

The site is a static GitHub Pages app with no project-owned account system, upload server, or analytics. Its dashboard starts with synthetic demo values. If a visitor selects a CSV, the app reads and parses it with the browser's FileReader API and keeps the processed records in application memory for that page session. The app stores the selected theme preference in browser local storage; it does not store the uploaded CSV there.

The EMI Mailer tab is only a preview. It does not send email from the website.

The page requests Inter and Outfit fonts from Google Fonts. The browser contacts Google's font services to load them. See [Google Fonts technical considerations](https://developers.google.com/fonts/docs/technical_considerations) and [Google's privacy policy](https://policies.google.com/privacy).

## GitHub Pages

GitHub says it logs and stores visitor IP addresses for security purposes when a GitHub Pages site is visited. See [GitHub Pages data collection](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) and [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). These are GitHub's hosting logs; the project owner does not receive the visitor log from the page.

## Separate email automation

The workflow in .github/workflows/email-automation.yml is currently manual-only; its schedule is commented out. The email script accepts a local CSV path or EMI_DATA_CSV_URL, but the checked-in workflow currently does not pass a CSV source to its runner. A maintainer must configure a source before an Actions run can send. Once configured and run with the required secrets, the script reads and processes the CSV on the GitHub Actions runner, then sends the report through Gmail to EMAIL_TO_RECIPIENTS (or GMAIL_USER if no recipient list is set). This moves the source data and report through GitHub Actions and Gmail and exposes the report to the configured recipients. The workflow also commits delivery-date metadata to .emi-dashboard-email-state.json in this public repository. Use synthetic values only and treat that metadata as public.

Do not use the dashboard or mailer workflow with real customer, personal, financial, account, transaction, or production data. Do not put secrets or private source URLs in commits, public issues, or workflow logs.

See THIRD_PARTY_NOTICES.md for external services and LICENSE_SCOPE.md for material covered by the repository's license.