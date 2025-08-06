// In a file like lib/data.ts
import { supabase } from './supabaseClient';

export async function getProducts() {
  // Fetch all data from the 'products' table
  const { data, error } = await supabase
    .from('products')
    .select('*');

  // Basic error handling
  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  return data;
}