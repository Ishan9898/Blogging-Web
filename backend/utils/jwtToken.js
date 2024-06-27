// export const sendToken = (user, statusCode, message, res) => {
//     // this getJWTTOKEN() function comes from user schema
//     const token = user.getJWTToken();
//     const options = {
//       expires: new Date(
//         Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//       ),
//       httpOnly: true,
//     };
//     res.status(statusCode).cookie("token", token, options).json({
//       success: true,
//       user,
//       message,
//       token,
//     });
//   };

export const sendToken = (user, statusCode, message, res) => {
  const token = user.getJWTToken();
  const cookieExpire = process.env.COOKIE_EXPIRE || 1; // Default to 1 day if COOKIE_EXPIRE is not set
  const options = {
      expires: new Date(Date.now() + cookieExpire * 24 * 60 * 60 * 1000),
      httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
  });
};
