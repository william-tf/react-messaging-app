function isValid(user) {
  return Boolean(
    user.username &&
      user.password &&
      typeof user.username === "string" &&
      typeof user.password === "string"
  );
}

module.exports = {
  isValid,
};
