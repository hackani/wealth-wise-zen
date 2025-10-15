export interface Transaction {
  id: string;
  user_id: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  description: string;
  date: string;
  created_at: string;
}

export interface Investment {
  id: string;
  user_id: string;
  name: string;
  type: 'stock' | 'crypto' | 'gold' | 'real_estate';
  quantity: number;
  purchase_price: number;
  current_price: number;
  purchase_date: string;
  created_at: string;
}

export interface Budget {
  id: string;
  user_id: string;
  category: string;
  limit: number;
  spent: number;
  month: string;
  created_at: string;
}

export interface Goal {
  id: string;
  user_id: string;
  title: string;
  target_amount: number;
  current_amount: number;
  target_date: string;
  category: 'savings' | 'house' | 'car' | 'tour' | 'other';
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
}

export interface BankAccount {
  id: string;
  user_id: string;
  bank_name: string;
  account_number: string;
  account_type: 'savings' | 'checking' | 'credit';
  balance: number;
  connected: boolean;
  created_at: string;
}
