# Sikchi Mind Care Clinic website

Static one-page site for GitHub Pages.

## Preview locally

Open this file directly in a browser:

```text
/Users/hsikchi/Documents/New project/work/rachit_website/index.html
```

Optional local server preview:

```bash
cd "/Users/hsikchi/Documents/New project/work/rachit_website"
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

If a browser tab was already open while the design was changing, hard refresh once so
the browser loads the latest CSS.

## Before publishing

Replace these placeholders:

- Doctor medical registration number in `index.html`
- Clinic phone number in `index.html`
- Clinic email in `index.html` and `script.js`
- Full clinic address in `index.html`
- Emergency contact wording, if the clinic has a preferred local protocol
- Real booking workflow if you prefer Google Forms, Calendly, Practo, or another scheduler
- If using Google Forms or email, collect only appointment logistics on the public form.
  Clinical details should be taken during the consultation or through the clinic's approved process.
- For Zoom, enable waiting room/passcode settings. For Google Meet, share links privately.
  Do not record consultations unless consent and record-keeping requirements are satisfied.

## GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this folder.
3. In GitHub, go to Settings > Pages.
4. Choose "Deploy from a branch".
5. Select the `main` branch and `/root` folder.
6. Save. GitHub will show the public URL after deployment.

## Telemedicine notes to verify

The site copy is written to be conservative and aligned with India's Telemedicine Practice
Guidelines for Registered Medical Practitioners, including consent, identity, confidentiality,
emergency limits, and prescription limits. Before publishing, Dr. Sikchi should confirm the final
booking, consent, prescription, and record-keeping workflow against current NMC/state medical
council requirements.

Reference used while drafting:

- Ministry of Health and Family Welfare, Telemedicine Practice Guidelines:
  https://www.mohfw.gov.in/pdf/Telemedicine.pdf
