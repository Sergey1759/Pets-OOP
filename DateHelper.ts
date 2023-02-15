export function dateHelper(eatExpiration:Date) {
    return `${eatExpiration.getDate()}.${eatExpiration.getMonth() + 1}. ${eatExpiration.getHours()}:${eatExpiration.getMinutes()}`
}