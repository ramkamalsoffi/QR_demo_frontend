# QR Demo Frontend

A professional Next.js frontend application for submitting batch numbers and email addresses with a beautiful purple theme matching the admin dashboard.

## Features

- 🎨 Modern UI with Tailwind CSS
- 💜 Purple theme matching admin dashboard
- 📧 Email and Batch Number form submission
- ✅ Form validation and success/error messages
- 📱 Fully responsive design
- 🎯 Lucide icons integration

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
QR_demo_frontend/
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main form page
│   └── globals.css        # Global styles
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Form Fields

- **Email Address**: Validated email input
- **Batch Number**: Text input for batch number

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons

## API Integration

To connect to your backend API, update the `handleSubmit` function in `app/page.tsx`:

```typescript
const response = await fetch('/api/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, batchNo }),
})
```

