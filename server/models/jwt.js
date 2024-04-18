const jwt = require('jsonwebtoken');

// Example secret key (should be securely stored in environment variables)

const secretKey = 'your-secret-key';

// Example user data (payload)
const userData = {
  userId: '123456789',
  username: 'example_user',
  role: 'admin'
};

//jwt.sign() to generate a JWT,
// passing the user data, the secret key, and optionally, some options like expiration time (expiresIn).
// Generate a JWT
const token = jwt.sign(userData, secretKey, { expiresIn: '1h' }); // Expires in 1 hour

console.log('Generated JWT:', token);


//jwt.verify() to verify the JWT.
// This method takes the token, the secret key, and 
//a callback function that will be called with an error (if any) and the decoded payload of the JWT.
//Inside the callback, we log the decoded payload if the verification is successful.
// Verify the JWT
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error('JWT verification failed:', err);
    return;
  }

  console.log('Decoded JWT payload:', decoded);
});
