export const birthday = Date.parse('1994-09-07T21:42:00+08:00')

export function elapsedSinceBirth(now) {
  const seconds = Math.max(0, Math.floor((now - birthday) / 1000))
  return [
    Math.floor(seconds / 86400),
    Math.floor((seconds % 86400) / 3600),
    Math.floor((seconds % 3600) / 60),
    seconds % 60,
  ].map((value) => String(value).padStart(2, '0'))
}
