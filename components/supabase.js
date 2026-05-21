const SUPABASE_URL = 'https://rgzfkmpulyrqtctvimtn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_0mdDY6zPN3WsqyCij7eWzA_jto1lMp4';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

