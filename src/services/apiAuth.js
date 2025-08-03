import supabase, { supabaseUrl } from "./supabase";

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

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1.Update password or fullName
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  // 2. Upload the avatar Image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars//${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}
