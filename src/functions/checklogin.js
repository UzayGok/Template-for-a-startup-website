import jwtDecode from 'jwt-decode'

export default function checkLogin() {
  const accessToken = localStorage.access
  const refreshToken = localStorage.refresh
  var expired = true
  if (accessToken) {
    const accessTokendc = jwtDecode(accessToken)
    if (accessTokendc.exp * 1000 >= Date.now()) {
      expired = false
    }
  
  }
  if (refreshToken) {
    const refreshTokendc = jwtDecode(refreshToken)
    if (refreshTokendc.exp * 1000 >= Date.now()) {
      expired = false
    }
    
  }
  return !expired
}
