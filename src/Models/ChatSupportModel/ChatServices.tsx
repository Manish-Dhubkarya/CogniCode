interface ChatOption {
  text: string;
  next?: number;
  final?: boolean;
  response?: string;
}

export const getChatOptions = (step: number): ChatOption[] => {
  const chatOptions: { [key: number]: ChatOption[] } = {
    0: [
      { text: 'Technical Support', next: 1 },
      { text: 'Billing Inquiries', next: 2 },
      { text: 'Product Information', next: 3 },
      { text: 'General Questions', next: 4 },
    ],
    1: [
      { text: 'Login Issues', next: 5 },
      { text: 'App Performance', next: 6 },
      { text: 'Account Settings', next: 7 },
    ],
    2: [
      {
        text: 'Payment Methods',
        final: true,
        response: 'We accept all major credit cards, PayPal, and bank transfers. For detailed information about payment methods, please visit our billing portal.',
      },
      {
        text: 'Invoice Request',
        final: true,
        response: 'You can download all your invoices from the billing section of your account dashboard.',
      },
    ],
    3: [
      {
        text: 'Product Features',
        final: true,
        response: 'Our product offers cutting-edge features including real-time analytics, custom reporting, and API integration.',
      },
      {
        text: 'Pricing Plans',
        final: true,
        response: 'We offer flexible pricing plans starting from $29/month. Visit our pricing page for detailed information.',
      },
    ],
    4: [
      {
        text: 'Contact Sales',
        final: true,
        response: 'Our sales team will contact you within 24 hours at your registered email address.',
      },
      {
        text: 'Business Hours',
        final: true,
        response: 'We are available Monday to Friday, 9 AM to 6 PM EST.',
      },
    ],
    5: [
      {
        text: 'Reset Password',
        final: true,
        response: 'To reset your password, click on "Forgot Password" on the login page and follow the instructions sent to your email.',
      },
      {
        text: 'Account Locked',
        final: true,
        response: 'If your account is locked, please wait 30 minutes before trying again or contact support for immediate assistance.',
      },
    ],
    6: [
      {
        text: 'Slow Performance',
        final: true,
        response: 'Try clearing your browser cache and cookies. If the issue persists, please check your internet connection.',
      },
      {
        text: 'App Crashes',
        final: true,
        response: 'Please update to the latest version of the app. If the problem continues, try reinstalling the application.',
      },
    ],
    7: [
      {
        text: 'Profile Updates',
        final: true,
        response: 'You can update your profile information from the settings page. Changes will be reflected immediately.',
      },
      {
        text: 'Privacy Settings',
        final: true,
        response: 'Your privacy settings can be managed from the account security section of your profile.',
      },
    ],
  };
  return chatOptions[step] || [];
};

// Mock API call for future backend integration
export const fetchChatResponse = async (option: ChatOption): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(option.response || `I understand you're interested in ${option.text}. Please select one of the options below for more specific assistance.`);
    }, 2000);
  });
};