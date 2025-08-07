import supabase from "./supabase";

export async function createGuest(userData) {
  const { data, error } = await supabase
    .from("guests")
    .insert([{ ...userData }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }
  return data;
}
