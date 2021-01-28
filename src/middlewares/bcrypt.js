import bcrypt from "bcrypt";
export const bcryptHashPasword = async (password) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};

export const bcryptComparePassword = async (password, dbPassword) =>
  await bcrypt.compare(password, dbPassword);
