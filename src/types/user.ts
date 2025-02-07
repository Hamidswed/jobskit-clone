// src/types/user.ts  
export type User = {  
  id: number;  
  name: string;  
  email: string;  
  phone: string; 
  password?: string; 
  role: string;  
  verified: boolean;  
  phoneVerified: boolean;  
  balance: number;  
  level: string;  
  referralCode: string;  
  avatarId: number;  
  telegramUserId: number;  
  googleUserWithoutPassword: boolean;  
}; 