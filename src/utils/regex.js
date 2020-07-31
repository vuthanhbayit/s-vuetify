const REGEX_MIN = /^min:\d+$/
const REGEX_MAX = /^max:\d+$/
const REGEX_EMAIL = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const REGEX_NUMBER = /^[0-9]+$/
const REGEX_TEL = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\\./0-9]*$/

export { REGEX_MIN, REGEX_MAX, REGEX_EMAIL, REGEX_NUMBER, REGEX_TEL }
