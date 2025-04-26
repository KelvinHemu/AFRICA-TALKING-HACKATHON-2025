import AfricasTalking from 'africastalking';
import * as dotenv from 'dotenv';
dotenv.config();

// Initialize Africa's Talking SDK with credentials from .env
const africasTalking = AfricasTalking({
  apiKey: process.env.AT_API_KEY || '',
  username: process.env.AT_USERNAME || 'sandbox',
});

// Export SMS and USSD services
export const sms = africasTalking.SMS;
export const ussd = africasTalking.USSD;

// Helper function to send SMS
export async function sendSMS(to: string | string[], message: string) {
  try {
    const result = await sms.send({
      to: Array.isArray(to) ? to : [to],
      message,
    });
    return result;
  } catch (error) {
    // Add more robust error handling/logging as needed
    throw error;
  }
}

// (Optional) Add USSD helpers here as needed 