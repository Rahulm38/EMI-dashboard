# Third-party notices

The MIT license applies only to the original code and documentation listed in LICENSE_SCOPE.md. It does not relicense dependencies, marks, fonts, or graphics.

## Dependencies

The package manifests declare third-party runtime packages including Chart.js, chartjs-plugin-annotation, chartjs-plugin-zoom, DOMPurify, Hammer.js, html2canvas, jsPDF, lucide-react, Nodemailer, Papa Parse, React, react-chartjs-2, and Recharts. Build and development dependencies are also declared in package.json. Each package and its transitive dependencies retain their own upstream license and notices. The package manifests identify versions; consult each upstream package for the applicable terms before redistributing a built copy.

## Fonts and assets

The app requests the Inter and Outfit web fonts from Google Fonts. A browser loads the stylesheet and font files from Google's services when the page is rendered. See [Google Fonts technical considerations](https://developers.google.com/fonts/docs/technical_considerations) and [Google's privacy policy](https://policies.google.com/privacy).

The following repository paths are excluded from the MIT grant: public/favicon.svg, public/icons.svg, src/assets/hero.png, src/assets/react.svg, and src/assets/vite.svg. These contain site artwork, social/product marks, or graphics whose upstream terms are separate; their provenance and reuse terms have not been fully verified here. Do not assume that the project license permits copying them. The marks remain the property of their respective owners.

This is a current known-materials list, not a complete third-party software bill of materials. Transitive packages are recorded in package-lock.json and keep their own terms.