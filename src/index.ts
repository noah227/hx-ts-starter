/**
 * 简单字符串处理
 */
const _ = (message: string) => {
    // 使用hx自然也是可以的
    const hx = require("hbuilderx")
    const appName = hx.env.appName
    return `<strong>${message} | @${appName}</strong>`
}
export default _
