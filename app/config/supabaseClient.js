import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_SUPERBASE_URL;
// console.log(supabaseUrl, "url");
const supabaseKey = process.env.NEXT_SUPERBASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
