import supabase from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function getAllUsers() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw new Error(userError.message);

  if (!user || user.user_metadata?.role !== "admin") {
    throw new Error("Unauthorized: Admin access required");
  }

  const { data: users, error: listUsersError } = await supabase
    .from("profiles")
    .select("*");

  if (listUsersError) throw new Error(listUsersError.message);
  return users;
}

export async function deleteUser(userId) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw new Error(userError.message);

  if (!user || user.user_metadata?.role !== "admin") {
    throw new Error("Unauthorized: Admin access required");
  }

  const { error } = await supabase.from("profiles").delete().eq("id", userId);

  if (error) throw new Error(error.message);

  return { success: true };
}
