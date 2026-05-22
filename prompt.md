I need you to create a complete, fully functional micronation website called "Rooftopia" with the following specifications:

## PROJECT OVERVIEW
A professional website for a model country on a rooftop with citizenship, voting, admin panel, citizen messaging system, and document download functionality.

## TECH STACK
- HTML/CSS/JavaScript (frontend only)
- Supabase for backend (database, authentication, storage)
- EmailJS for email notifications
- GitHub Pages for hosting
- No internal CSS - all styles in external style.css file
- Use Font Awesome 6 for icons
- Use html2canvas for PNG downloads
- Use QRCode.js for QR code generation
- Use Chart.js for analytics charts

## SUPABASE CREDENTIALS
URL: https://bccuwxxfcznrqxdlbzjr.supabase.co
Anon Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjY3V3eHhmY3pucnF4ZGxiempyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3MTA2OTYsImV4cCI6MjA5MjI4NjY5Nn0.8uG7G-6D8OjoPskzlRZoC6fPINCqNLeXYurTXA-oudo

## EMAILJS CREDENTIALS
Public Key: yc1wK3daOfUYQaHE6
Service ID: service_8z50aj8
Template IDs: 
- template_qoidzii (application received)
- template_nr8o30q (application approved)
- template_otp (OTP verification - optional)

## ADMIN PASSWORD
rooftopia2026

## ADMIN EMAIL
ahadalihaider69@gmail.com

## DATABASE TABLES (Create these in Supabase)

1. applications table:
   - id (SERIAL PRIMARY KEY)
   - application_id (TEXT UNIQUE)
   - full_name (TEXT)
   - father_name (TEXT)
   - dob (DATE)
   - gender (TEXT)
   - email (TEXT)
   - current_country (TEXT)
   - province (TEXT)
   - reason (TEXT)
   - photo (TEXT)
   - status (TEXT DEFAULT 'pending')
   - cnic (TEXT)
   - approved_at (TIMESTAMP)
   - is_active (BOOLEAN DEFAULT TRUE)
   - submitted_at (TIMESTAMP)
   - auth_user_id (TEXT)
   - is_deleted (BOOLEAN DEFAULT FALSE)
   - deletion_status (TEXT DEFAULT 'none')
   - deletion_requested_at (TIMESTAMP)
   - deletion_expires_at (TIMESTAMP)

2. decrees table:
   - id (SERIAL PRIMARY KEY)
   - title (TEXT)
   - content (TEXT)
   - type (TEXT)
   - created_at (TIMESTAMP)
   - created_by (TEXT)

3. proposals table:
   - id (SERIAL PRIMARY KEY)
   - title (TEXT)
   - description (TEXT)
   - end_date (TIMESTAMP)
   - created_at (TIMESTAMP)
   - is_active (BOOLEAN DEFAULT TRUE)

4. votes table:
   - id (SERIAL PRIMARY KEY)
   - proposal_id (INTEGER REFERENCES proposals(id))
   - citizen_email (TEXT)
   - citizen_name (TEXT)
   - vote (TEXT)
   - voted_at (TIMESTAMP)

5. citizen_messages table:
   - id (SERIAL PRIMARY KEY)
   - user_email (TEXT)
   - user_name (TEXT)
   - subject (TEXT)
   - message (TEXT)
   - status (TEXT DEFAULT 'unread')
   - is_admin_reply (BOOLEAN DEFAULT FALSE)
   - created_at (TIMESTAMP)

6. deletion_requests table:
   - id (SERIAL PRIMARY KEY)
   - user_id (TEXT)
   - user_email (TEXT)
   - user_name (TEXT)
   - status (TEXT DEFAULT 'pending')
   - requested_at (TIMESTAMP)
   - reviewed_at (TIMESTAMP)
   - reviewed_by (TEXT)
   - expires_at (TIMESTAMP)
   - cancelled (BOOLEAN DEFAULT FALSE)

7. profile_pictures table:
   - id (SERIAL PRIMARY KEY)
   - user_id (TEXT)
   - user_email (TEXT)
   - photo_url (TEXT)
   - updated_at (TIMESTAMP)

8. website_visits table:
   - id (SERIAL PRIMARY KEY)
   - visitor_id (TEXT)
   - ip_address (TEXT)
   - page_visited (TEXT)
   - device (TEXT)
   - browser (TEXT)
   - visited_at (TIMESTAMP)

## STORAGE BUCKET
Create bucket: citizen-photos (public)

## FILE STRUCTURE (Create all these files)

1. style.css (master external stylesheet - NO inline CSS, use IDs and classes)
2. index.html (homepage)
3. about.html
4. events.html
5. tourism.html
6. constitution.html
7. apply.html
8. dashboard.html
9. login.html
10. signup.html
11. profile.html
12. vote.html
13. chat.html
14. download.html
15. admin.html
16. admin-messages.html
17. verify-card.html
18. js/nav.js (shared navigation)

## FEATURES TO IMPLEMENT

### 1. Public Pages (No Login Required)
- Homepage: Hero section, citizen count (from database), latest decrees, feature cards
- Constitution: 9 articles, preamble, print button
- Tourism: Attractions, visa types, gallery
- Events: Upcoming ceremonies and festivals
- About: Nation info, provinces, values

### 2. Authentication System
- Signup: Email/password with email confirmation (Supabase built-in)
- Login: Email/password, password reset via email
- Session persists across all pages

### 3. Citizenship Application
- Form with: full name, father's name, DOB, gender, email, current country, province, reason
- Photo upload (store in Supabase storage)
- Email confirmation on submission
- Admin approval required
- Generate CNIC on approval (format: PROVINCE-CITIZEN_NUMBER-GENDER)
- Province codes: PR1, PR2, PR3
- Gender codes: M, F, T

### 4. User Dashboard
- Check application status by email
- Download ID card and passport when approved

### 5. Voting System
- View active proposals
- Cast Yes/No/Abstain votes
- Real-time results with percentage bars
- Prevent double voting

### 6. Chat System (Citizen)
- Real-time messaging with Supreme Guardian
- Message history
- Real-time updates using Supabase subscriptions

### 7. Profile Page
- View profile information
- Upload profile picture
- Request account deletion (7-day grace period)
- Cancel deletion request
- View citizenship status

### 8. Account Deletion (7-Day Grace Period)
- User requests deletion → immediately logged out
- 7-day countdown starts
- If user logs in within 7 days: option to cancel deletion
- If user does NOT login within 7 days: account auto-deleted
- Admin can delete immediately or reject request

### 9. Document Download (ID Card & Passport)
- ID Card: 324px × 204px (credit card size)
  - Front: Photo, name, father name, DOB, gender, province, CNIC, issue/expiry dates
  - Back: Magnetic strip, QR code for verification, disclaimer
- Passport: Same dimensions
  - Cover, Page 1 (personal info), Page 2 (visa stamps)
- 1-year validity from issue date
- Download as PNG using html2canvas
- QR code for real-time verification

### 10. QR Code Verification
- Generate QR code on ID card back and passport
- Scan to open verify-card.html
- Shows: document status (VALID/EXPIRED/TERMINATED), citizen details, dates

### 11. Admin Panel (Password: rooftopia2026)
- Applications Tab: Approve/reject, send email on approval
- Citizens Tab: View active/terminated, terminate/restore
- Decrees Tab: Post new decrees, delete existing
- Proposals Tab: Create proposals with end dates, view vote counts
- Deletion Requests Tab: View pending requests, days remaining, delete now/reject
- Analytics Tab: Charts for visits, devices, province distribution

### 12. Admin Messages
- View all citizen conversations
- Unread messages highlighted
- Reply to messages in real-time
- Delete conversations

### 13. Navigation (Consistent Across All Pages)
- Bottom bar on mobile, top bar on desktop
- Profile dropdown when logged in
- Shows profile picture, logout option
- Admin link for admin users only

### 14. Mobile-First Responsive Design
- All touch targets minimum 44px
- Bottom navigation for thumb reach
- Responsive grids (1 column mobile, 2-4 columns desktop)
- Hamburger menu on mobile

## STYLING REQUIREMENTS
- External CSS only (style.css)
- Use CSS variables for colors
- Color palette: Deep Navy Blue (#1E3A5F), Ocean Blue (#2C5F8A), Warm Sand (#F4A261)
- Fonts: Playfair Display (headings), Inter (body)
- Glassmorphism effects on navigation
- Smooth animations and transitions
- No inline CSS - use IDs and classes

## CNIC FORMAT
Format: PR1-00001-M
- PR1/PR2/PR3 for province
- 5-digit citizen number
- M/F/T for gender

## SPECIAL FEATURES
- All buttons have :active scale effect for mobile touch feedback
- Loading spinners on async operations
- Inline messages (no alert() popups)
- Print styles for constitution page
- Custom scrollbar styling

## EMAIL TEMPLATES NEEDED

### Template: template_qoidzii (Application Received)
Subject: Citizenship Application Received - Rooftopia
Variables: applicant_name, application_id, province, submission_date

### Template: template_nr8o30q (Application Approved)
Subject: Citizenship Approved - Welcome to Rooftopia!
Variables: to_name, cnic_number, province, login_url

## VERIFICATION PAGE
Create verify-card.html that:
- Reads URL parameters: id, cnic, token
- Validates token
- Fetches application from Supabase
- Displays document status (VALID/EXPIRED/TERMINATED)
- Shows citizen details
- Shows issue and expiry dates

## IMPORTANT NOTES
1. Every HTML element must have an ID for CSS styling
2. No inline CSS - all styles in style.css
3. Mobile-first responsive design
4. Use Font Awesome 6 for icons
5. Session must persist across all pages
6. Navigation must show profile icon when logged in on ALL pages
7. Use consistent error handling with inline messages
8. All async operations must have loading states

## DELIVERABLES
Generate all 18 files with complete, working code. Ensure all files link together properly and all features work seamlessly.

Make sure to include:
- Complete SQL schema for all tables
- Complete CSS file with all styles (2000+ lines)
- All HTML files with proper IDs
- Shared navigation script (js/nav.js)
- QR code integration
- 7-day grace period deletion system
- Real-time chat functionality
- Voting system with charts
- Analytics with Chart.js
What This Prompt Will Generate
File	Purpose
style.css	Master CSS file (2000+ lines)
index.html	Homepage
about.html	About page
events.html	Events page
tourism.html	Tourism page
constitution.html	Constitution
apply.html	Citizenship application
dashboard.html	User dashboard
login.html	Login page
signup.html	Signup page
profile.html	User profile
vote.html	Voting page
chat.html	Citizen chat
download.html	Document download
admin.html	Admin panel
admin-messages.html	Admin messages
verify-card.html	QR verification
js/nav.js	Shared navigation
How to Use This Prompt
Copy the entire prompt above

Paste into any AI assistant (ChatGPT, Claude, DeepSeek, Gemini)

The AI will generate all 18 files with complete code

Create files with the generated code

Deploy to GitHub Pages

One-Time Setup After Generation
Run SQL schema in Supabase SQL Editor

Create storage bucket citizen-photos in Supabase

Enable email confirmation in Supabase Auth → Providers → Email

Set Site URL in Supabase Auth → URL Configuration

Create EmailJS templates with the IDs above

Deploy to GitHub Pages

✅ This prompt will generate the complete Rooftopia website!