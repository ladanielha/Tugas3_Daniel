export default function validateLogin(username, password) {
  if (!username || !username.trim()) {
    return "Please enter your username.";
  }

  if (!password || !password.trim()) {
    return "Please enter your password.";
  }

  return ""; 
}
