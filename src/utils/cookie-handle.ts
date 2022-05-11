import Cookies from 'js-cookie'

export function getToken(tokenName: string) {
  return Cookies.get(tokenName)
}


export function setToken(tokenName: string, tokenValue: string) {
  return Cookies.set(tokenName, tokenValue)
}

export function removeToken(tokenName: string) {
  return Cookies.remove(tokenName)
}
