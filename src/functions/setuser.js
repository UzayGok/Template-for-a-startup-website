import jwtDecode from 'jwt-decode'

export default function setUser(accessToken, refreshToken) {
  if (accessToken) {
    const accessTokendc = jwtDecode(accessToken)

    if (accessTokendc.exp * 1000 >= Date.now()) {
      localStorage.setItem('username', accessTokendc.username)
      localStorage.setItem('firstname', accessTokendc.first_name)
      localStorage.setItem('lastname', accessTokendc.last_name)
    }
  } else if (refreshToken) {
    const refreshTokendc = jwtDecode(refreshToken)

    if (refreshTokendc.exp * 1000 >= Date.now()) {
      localStorage.setItem('username', refreshTokendc.username)
      localStorage.setItem('firstname', refreshTokendc.first_name)
      localStorage.setItem('lastname', refreshTokendc.last_name)
    }
  }
}
