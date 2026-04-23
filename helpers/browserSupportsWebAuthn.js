/**
 * 使得在测试期间可以模拟返回值
 * - 查看定义:@see {@link _browserSupportsWebAuthnInternals}
 * @ignore 不要将其包含在文档输出中
 * @type {{ stubThis: <T>(value: T) => T }}
 */
const _browserSupportsWebAuthnInternals = { stubThis: value => value };

/**
 * 判断浏览器是否支持 WebAuthn
 * - 查看定义:@see {@link browserSupportsWebAuthn}
 * @returns {boolean} 如果浏览器支持 WebAuthn 则返回 true,否则返回 false
 */
const browserSupportsWebAuthn = () => {
    return _browserSupportsWebAuthnInternals.stubThis(globalThis?.PublicKeyCredential !== undefined &&
        typeof globalThis.PublicKeyCredential === 'function');
}

export { _browserSupportsWebAuthnInternals, browserSupportsWebAuthn };