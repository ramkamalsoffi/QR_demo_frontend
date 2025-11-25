# Frontend API Integration

## Overview
The frontend form submits user data (email and batch number) to the backend API, which captures additional information (IP, device, OS, location) and returns the PDF URL for the corresponding batch number.

## API Endpoint

**POST** `http://localhost:5000/api/submission`

### Request Body
```json
{
  "email": "user@example.com",
  "batchNo": "BATCH-001"
}
```

### Success Response
```json
{
  "success": true,
  "message": "Form submitted successfully",
  "data": {
    "pdfUrl": "https://s3.amazonaws.com/bucket/QRSCAN/PDFs/document.pdf",
    "productName": "Product Name",
    "submittedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Product not found for the given batch number",
  "statusCode": 404
}
```

## Configuration

Set the backend API URL in `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Features

1. **Form Validation**
   - Email format validation
   - Required field validation
   - Real-time error messages

2. **API Integration**
   - Calls `/api/submission` endpoint
   - Handles success and error responses
   - Displays PDF download/view options

3. **PDF Display**
   - View PDF in new tab
   - Download PDF directly
   - Shows product name on success

4. **User Experience**
   - Loading states during submission
   - Success message with PDF links
   - Error handling with clear messages
   - Form reset after successful submission

## Flow

1. User enters email and batch number
2. Clicks "Submit" button
3. Frontend validates input
4. API call to `/api/submission`
5. Backend captures:
   - IP address
   - Device information
   - OS information
   - Browser information
   - Location (from IP)
6. Backend stores data in Customer table
7. Backend finds product by batch number
8. Backend returns PDF URL
9. Frontend displays PDF download/view options

## Testing

1. Start backend server: `cd QR_demo_backend && npm run dev`
2. Start frontend server: `cd QR_demo_frontend && npm run dev`
3. Open `http://localhost:3000`
4. Enter a valid email and batch number
5. Submit the form
6. PDF should be available for download/view

