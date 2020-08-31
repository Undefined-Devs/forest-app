export const mode = process.env.NODE_ENV === 'production'
export const user_key = mode ? "user" : "development_user";
export const logged_key = mode ? "logged" : "development_logged";
export const token_key = mode ? "token" : "development_token";
export const url = mode ? "http://thisjesusmartinez.com:3001/api/v1/" : "http://localhost:3000/api/v1";