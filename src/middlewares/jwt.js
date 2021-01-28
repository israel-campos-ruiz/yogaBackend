import jwt from "jsonwebtoken";

export const generateJWT = (input) => {
  return new Promise((resolve, reject) => {
    const payload = { input };
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      {
        expiresIn: "2h",
      },
      (err, token) => {
        err && reject("no se pudo generar el token");
        resolve(token);
      }
    );
  });
};

export const verifyJWT = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (err, tokenVerify) => {
        err && reject('No se generó el token')
        resolve(tokenVerify);
    });
  });
};
