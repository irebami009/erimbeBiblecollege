import axios from "axios";

// ReniMail Configuration helper
const getEnvVar = (key) => {
  let val;
  if (typeof import.meta !== "undefined" && import.meta?.env) {
    val = import.meta.env[key];
  }
  if (!val && typeof process !== "undefined" && process?.env) {
    val = process.env[key];
  }
  return val;
};

export const getReniMailConfig = () => {
  const baseUrl = (getEnvVar("VITE_RENIMAIL_BASE_URL") || "https://srv.fireswitch.ng:1037").replace(/\/$/, "");
  const bearerToken = getEnvVar("VITE_RENIMAIL_BEARER_TOKEN") || "";
  const schoolEmail = getEnvVar("VITE_SCHOOL_EMAIL") || "samuelirebami009@gmail.com";
  return { baseUrl, bearerToken, schoolEmail };
};

/**
 * Core function to send email via ReniMail API (/v1/mail/ra/api/email/send)
 */
export const sendEmailViaReniMail = async ({
  name,
  to,
  subject,
  body,
  editorType = "html",
  senderName = "EriMbe Bible College"
}) => {
  const { baseUrl, bearerToken, schoolEmail } = getReniMailConfig();
  const targetEmail = to || schoolEmail;
  const endpoint = `${baseUrl}/v1/mail/ra/api/email/send`;

  const headers = {
    "Content-Type": "application/json",
  };

  if (bearerToken) {
    headers["Authorization"] = `Bearer ${bearerToken.trim()}`;
  }

  const payload = {
    name: name || "Website Submission",
    to: targetEmail,
    subject: subject,
    body: body,
    editor_type: editorType,
    sender_name: senderName
  };

  try {
    const response = await axios.post(endpoint, payload, { headers });
    
    // Check if endpoint returned HTML (like SPA index.html) instead of API JSON response
    if (typeof response.data === "string" && response.data.trim().startsWith("<")) {
      throw new Error("ReniMail API host returned web page HTML instead of API response. Please set VITE_RENIMAIL_BASE_URL to your ReniMail backend server URL and provide VITE_RENIMAIL_BEARER_TOKEN in .env.");
    }

    return response.data;
  } catch (error) {
    const errorDetails = error?.response?.data?.message || error.message || "Failed to connect to ReniMail service.";
    console.error("ReniMail API Error:", errorDetails);
    throw new Error(errorDetails);
  }
};

/**
 * Sends online admission application directly to school email (samuelirebami009@gmail.com)
 */
export const sendApplicationEmail = async (appData, photoName, docName) => {
  const { schoolEmail } = getReniMailConfig();
  const fullName = `${appData.surname || ''} ${appData.firstName || ''} ${appData.otherNames || ''}`.trim() || appData.fullName || "Applicant";
  const refNo = appData.referenceNumber || `CSLBC-2026-${Math.floor(10000 + Math.random() * 90000)}`;
  const subject = `New Student Application: ${fullName} (${refNo})`;

  const schoolsHtml = Array.isArray(appData.educationHistory) && appData.educationHistory.length > 0
    ? appData.educationHistory.map((s, idx) => `
        <tr>
          <td style="padding: 6px; border: 1px solid #e2e8f0;">${idx + 1}</td>
          <td style="padding: 6px; border: 1px solid #e2e8f0;">${s.schoolAttended || '-'}</td>
          <td style="padding: 6px; border: 1px solid #e2e8f0;">${s.qualification || '-'}</td>
          <td style="padding: 6px; border: 1px solid #e2e8f0;">${s.year || '-'}</td>
        </tr>
      `).join('')
    : '<tr><td colspan="4" style="padding: 6px; border: 1px solid #e2e8f0;">No educational history provided</td></tr>';

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 680px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
      
      <!-- Institution Header -->
      <div style="background-color: #0F172A; padding: 24px; text-align: center; border-radius: 12px 12px 0 0; color: #ffffff;">
        <h2 style="color: #D4AF37; margin: 0 0 6px 0; font-size: 22px; font-weight: bold; text-transform: uppercase;">Erimbe Bible College</h2>
        <p style="margin: 0; font-size: 12px; color: #cbd5e1;">Alapako, Lagos-Ibadan Expressway, Opposite Govamit, Ogun State, Nigeria</p>
        <p style="margin: 4px 0 0 0; font-size: 12px; color: #94a3b8;">Tel: +234 708 737 0199 | Ref: <strong style="color: #D4AF37;">${refNo}</strong></p>
        <h3 style="margin: 12px 0 0 0; font-size: 16px; color: #ffffff; text-decoration: underline;">OFFICIAL ADMISSION APPLICATION</h3>
      </div>

      <div style="padding: 24px; color: #1e293b;">

        <!-- 01 COURSE SELECTION -->
        <h4 style="color: #0F172A; border-bottom: 2px solid #D4AF37; padding-bottom: 6px; margin: 0 0 12px 0;">01. Course Selection</h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;">
          <tr>
            <td style="padding: 6px 0; font-weight: bold; width: 35%;">Selected Program:</td>
            <td style="padding: 6px 0; color: #b45309; font-weight: bold;">${appData.program || "Not specified"}</td>
          </tr>
        </table>

        <!-- 02 PERSONAL INFORMATION -->
        <h4 style="color: #0F172A; border-bottom: 2px solid #D4AF37; padding-bottom: 6px; margin: 0 0 12px 0;">02. Personal Information</h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;">
          <tr><td style="padding: 5px 0; font-weight: bold; width: 35%;">Full Name:</td><td style="padding: 5px 0;">${fullName}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold;">Date of Birth / Age:</td><td style="padding: 5px 0;">${appData.dateOfBirth || '-'} (${appData.age || '-'} yrs)</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold;">Gender / Nationality:</td><td style="padding: 5px 0;">${appData.gender || '-'} / ${appData.nationality || 'Nigerian'}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold;">Marital Status:</td><td style="padding: 5px 0;">${appData.maritalStatus || '-'}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold;">Phone / Email:</td><td style="padding: 5px 0;">${appData.phone || '-'} | <a href="mailto:${appData.email}">${appData.email || '-'}</a></td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold;">Occupation / Workplace:</td><td style="padding: 5px 0;">${appData.occupation || '-'} (${appData.workplaceAddress || '-'})</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold;">Residential Address:</td><td style="padding: 5px 0;">${appData.residentialAddress || '-'}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold;">Postal Address:</td><td style="padding: 5px 0;">${appData.postalAddress || '-'}</td></tr>
        </table>

        <!-- 03 SPONSORSHIP -->
        <h4 style="color: #0F172A; border-bottom: 2px solid #D4AF37; padding-bottom: 6px; margin: 0 0 12px 0;">03. Sponsorship</h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;">
          <tr><td style="padding: 5px 0; font-weight: bold; width: 35%;">Self-Sponsored:</td><td style="padding: 5px 0;">${appData.isSelfSponsored === "Yes" ? "Yes (Self-Sponsored)" : "No"}</td></tr>
          ${appData.isSelfSponsored === "No" ? `
            <tr><td style="padding: 5px 0; font-weight: bold;">Sponsor Name:</td><td style="padding: 5px 0;">${appData.sponsorName || '-'}</td></tr>
            <tr><td style="padding: 5px 0; font-weight: bold;">Sponsor Phone:</td><td style="padding: 5px 0;">${appData.sponsorPhone || '-'}</td></tr>
            <tr><td style="padding: 5px 0; font-weight: bold;">Sponsor Address:</td><td style="padding: 5px 0;">${appData.sponsorAddress || '-'}</td></tr>
          ` : ''}
        </table>

        <!-- 04 NEXT OF KIN -->
        <h4 style="color: #0F172A; border-bottom: 2px solid #D4AF37; padding-bottom: 6px; margin: 0 0 12px 0;">04. Next of Kin</h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;">
          <tr><td style="padding: 5px 0; font-weight: bold; width: 35%;">Next of Kin Name:</td><td style="padding: 5px 0;">${appData.nextOfKinName || '-'}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold;">Relationship:</td><td style="padding: 5px 0;">${appData.relationship === "Others" ? appData.otherRelationship : appData.relationship}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold;">Phone / Address:</td><td style="padding: 5px 0;">${appData.nextOfKinPhone || '-'} | ${appData.nextOfKinAddress || '-'}</td></tr>
        </table>

        <!-- 05 SPIRITUAL QUALIFICATION -->
        <h4 style="color: #0F172A; border-bottom: 2px solid #D4AF37; padding-bottom: 6px; margin: 0 0 12px 0;">05. Spiritual Qualification</h4>
        <div style="font-size: 13px; line-height: 1.5; margin-bottom: 20px;">
          <p><strong>Born Again:</strong> ${appData.isBornAgain || 'No'} ${appData.bornAgainWhen ? `(When: ${appData.bornAgainWhen})` : ''}</p>
          ${appData.salvationExperience ? `<p style="background: #f8fafc; padding: 10px; border-left: 3px solid #D4AF37;"><strong>Salvation Experience:</strong> ${appData.salvationExperience}</p>` : ''}
          <p><strong>Baptized in Holy Spirit:</strong> ${appData.isSpiritBaptized || 'No'}</p>
          ${appData.holySpiritBaptismDetails ? `<p style="background: #f8fafc; padding: 10px; border-left: 3px solid #D4AF37;"><strong>Holy Spirit Baptism Details:</strong> ${appData.holySpiritBaptismDetails}</p>` : ''}
          <p><strong>Divine Call to Service:</strong> ${appData.hasDivineCall || 'No'}</p>
          ${appData.divineCallDetails ? `<p style="background: #f8fafc; padding: 10px; border-left: 3px solid #D4AF37;"><strong>Office & Gifts:</strong> ${appData.divineCallDetails}</p>` : ''}
        </div>

        <!-- 06 EDUCATIONAL QUALIFICATION -->
        <h4 style="color: #0F172A; border-bottom: 2px solid #D4AF37; padding-bottom: 6px; margin: 0 0 12px 0;">06. Educational History & Documents</h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 12px; text-align: left;">
          <thead>
            <tr style="background: #f1f5f9; font-weight: bold;">
              <th style="padding: 6px; border: 1px solid #cbd5e1;">#</th>
              <th style="padding: 6px; border: 1px solid #cbd5e1;">School Attended</th>
              <th style="padding: 6px; border: 1px solid #cbd5e1;">Qualification</th>
              <th style="padding: 6px; border: 1px solid #cbd5e1;">Year</th>
            </tr>
          </thead>
          <tbody>
            ${schoolsHtml}
          </tbody>
        </table>
        ${photoName ? `<p style="font-size: 12px; color: #16a34a; font-weight: bold;">✔ Passport Photo: ${photoName}</p>` : ''}
        ${docName ? `<p style="font-size: 12px; color: #16a34a; font-weight: bold;">✔ Academic Document: ${docName}</p>` : ''}

        <!-- 07 ATTESTATION -->
        <h4 style="color: #0F172A; border-bottom: 2px solid #D4AF37; padding-bottom: 6px; margin: 20px 0 12px 0;">07. Official Attestation Records</h4>
        
        <div style="font-size: 12px; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 12px;">
          <p style="font-weight: bold; color: #0F172A; margin: 0 0 6px 0;">SECTION A: MINISTER / PASTOR ATTESTATION</p>
          <p style="margin: 0 0 6px 0;">Attesting Minister: <strong>${appData.ministerName || '-'}</strong> | Church: <strong>${appData.ministerChurchAddress || '-'}</strong></p>
          <p style="margin: 0; color: #16a34a;">✔ Pastor Confirmation: ${appData.ministerConfirmed ? "Confirmed True" : "Pending"}</p>
        </div>

        <div style="font-size: 12px; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
          <p style="font-weight: bold; color: #0F172A; margin: 0 0 6px 0;">SECTION B: STUDENT ATTESTATION</p>
          <p style="margin: 0 0 6px 0;">Applicant Name: <strong>${fullName}</strong> | Date: <strong>${appData.studentDate || '-'}</strong></p>
          <p style="margin: 0; color: #16a34a;">✔ Student Declaration: ${appData.studentConfirmed ? "Confirmed All Information Is True" : "Pending"}</p>
        </div>

      </div>

      <div style="background-color: #f1f5f9; padding: 14px; text-align: center; border-radius: 0 0 12px 12px; font-size: 12px; color: #64748b; margin-top: 10px;">
        Sent via ReniMail Gateway to school inbox (${schoolEmail})
      </div>
    </div>
  `;

  return sendEmailViaReniMail({
    name: `Application - ${fullName}`,
    to: schoolEmail,
    subject: subject,
    body: htmlBody,
    editorType: "html",
    senderName: "Christ The Source of Life Admissions"
  });
};

/**
 * Sends contact section inquiry to the school email (samuelirebami009@gmail.com)
 */
export const sendContactInquiryEmail = async (formData) => {
  const { schoolEmail } = getReniMailConfig();
  const fullName = `${formData.firstName} ${formData.lastName}`;
  const subject = `New Contact Inquiry: ${formData.subject} - ${fullName}`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <div style="background-color: #0F172A; padding: 24px; text-align: center; border-radius: 12px 12px 0 0;">
        <h2 style="color: #D4AF37; margin: 0; font-size: 24px; font-weight: bold;">EriMbe Bible College</h2>
        <p style="color: #94a3b8; margin: 6px 0 0 0; font-size: 14px;">Official Website Contact Inquiry</p>
      </div>

      <div style="padding: 24px; color: #1e293b;">
        <h3 style="color: #0F172A; border-bottom: 2px solid #D4AF37; padding-bottom: 8px; margin-top: 0;">Inquiry Details</h3>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #475569; width: 35%;">Sender Name:</td>
            <td style="padding: 10px 0; font-weight: 600; color: #0F172A;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Email Address:</td>
            <td style="padding: 10px 0;"><a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${formData.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Phone Number:</td>
            <td style="padding: 10px 0; font-weight: 600; color: #0F172A;">${formData.phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Inquiry Topic:</td>
            <td style="padding: 10px 0; font-weight: bold; color: #0F172A;">${formData.subject}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #0F172A; border-radius: 8px;">
          <h4 style="margin: 0 0 8px 0; color: #0F172A; font-size: 14px;">Message:</h4>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155;">${formData.message}</p>
        </div>
      </div>

      <div style="background-color: #f1f5f9; padding: 14px; text-align: center; border-radius: 0 0 12px 12px; font-size: 12px; color: #64748b; margin-top: 10px;">
        Sent via ReniMail Gateway to school inbox (${schoolEmail})
      </div>
    </div>
  `;

  return sendEmailViaReniMail({
    name: `Inquiry - ${fullName}`,
    to: schoolEmail,
    subject: subject,
    body: htmlBody,
    editorType: "html",
    senderName: "EriMbe Bible College Admissions"
  });
};
