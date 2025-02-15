module.exports = {

"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * A runtime-agnostic collection of methods for working with Base64URL encoding
 * @module
 */ __turbopack_esm__({
    "fromBuffer": (()=>fromBuffer),
    "fromUTF8String": (()=>fromUTF8String),
    "isBase64": (()=>isBase64),
    "isBase64URL": (()=>isBase64URL),
    "toBase64": (()=>toBase64),
    "toBuffer": (()=>toBuffer),
    "toUTF8String": (()=>toUTF8String),
    "trimPadding": (()=>trimPadding)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hexagon$2b$base64$40$1$2e$1$2e$28$2f$node_modules$2f40$hexagon$2f$base64$2f$src$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@hexagon+base64@1.1.28/node_modules/@hexagon/base64/src/base64.js [app-route] (ecmascript)");
;
function toBuffer(base64urlString, from = 'base64url') {
    const _buffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hexagon$2b$base64$40$1$2e$1$2e$28$2f$node_modules$2f40$hexagon$2f$base64$2f$src$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].toArrayBuffer(base64urlString, from === 'base64url');
    return new Uint8Array(_buffer);
}
function fromBuffer(buffer, to = 'base64url') {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hexagon$2b$base64$40$1$2e$1$2e$28$2f$node_modules$2f40$hexagon$2f$base64$2f$src$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].fromArrayBuffer(buffer, to === 'base64url');
}
function toBase64(base64urlString) {
    const fromBase64Url = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hexagon$2b$base64$40$1$2e$1$2e$28$2f$node_modules$2f40$hexagon$2f$base64$2f$src$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].toArrayBuffer(base64urlString, true);
    const toBase64 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hexagon$2b$base64$40$1$2e$1$2e$28$2f$node_modules$2f40$hexagon$2f$base64$2f$src$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].fromArrayBuffer(fromBase64Url);
    return toBase64;
}
function fromUTF8String(utf8String) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hexagon$2b$base64$40$1$2e$1$2e$28$2f$node_modules$2f40$hexagon$2f$base64$2f$src$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].fromString(utf8String, true);
}
function toUTF8String(base64urlString) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hexagon$2b$base64$40$1$2e$1$2e$28$2f$node_modules$2f40$hexagon$2f$base64$2f$src$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].toString(base64urlString, true);
}
function isBase64(input) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hexagon$2b$base64$40$1$2e$1$2e$28$2f$node_modules$2f40$hexagon$2f$base64$2f$src$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].validate(input, false);
}
function isBase64URL(input) {
    // Trim padding characters from the string if present
    input = trimPadding(input);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hexagon$2b$base64$40$1$2e$1$2e$28$2f$node_modules$2f40$hexagon$2f$base64$2f$src$2f$base64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].validate(input, true);
}
function trimPadding(input) {
    return input.replace(/=/g, '');
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCBOR.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * A runtime-agnostic collection of methods for working with CBOR encoding
 * @module
 */ __turbopack_esm__({
    "decodeFirst": (()=>decodeFirst),
    "encode": (()=>encode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$levischuck$2b$tiny$2d$cbor$40$0$2e$2$2e$8$2f$node_modules$2f40$levischuck$2f$tiny$2d$cbor$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@levischuck+tiny-cbor@0.2.8/node_modules/@levischuck/tiny-cbor/esm/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$levischuck$2b$tiny$2d$cbor$40$0$2e$2$2e$8$2f$node_modules$2f40$levischuck$2f$tiny$2d$cbor$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@levischuck+tiny-cbor@0.2.8/node_modules/@levischuck/tiny-cbor/esm/index.js [app-route] (ecmascript)");
;
function decodeFirst(input) {
    // Make a copy so we don't mutate the original
    const _input = new Uint8Array(input);
    const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$levischuck$2b$tiny$2d$cbor$40$0$2e$2$2e$8$2f$node_modules$2f40$levischuck$2f$tiny$2d$cbor$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.decodePartialCBOR(_input, 0);
    const [first] = decoded;
    return first;
}
function encode(input) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$levischuck$2b$tiny$2d$cbor$40$0$2e$2$2e$8$2f$node_modules$2f40$levischuck$2f$tiny$2d$cbor$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.encodeCBOR(input);
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Fundamental values that are needed to discern the more specific COSE public key types below.
 *
 * The use of `Maps` here is due to CBOR encoding being used with public keys, and the CBOR "Map"
 * type is being decoded to JavaScript's `Map` type instead of, say, a basic Object as us JS
 * developers might prefer.
 *
 * These types are an unorthodox way of saying "these Maps should involve these discrete lists of
 * keys", but it works.
 * @module
 */ /**
 * A type guard for determining if a COSE public key is an OKP key pair
 */ __turbopack_esm__({
    "COSEALG": (()=>COSEALG),
    "COSECRV": (()=>COSECRV),
    "COSEKEYS": (()=>COSEKEYS),
    "COSEKTY": (()=>COSEKTY),
    "isCOSEAlg": (()=>isCOSEAlg),
    "isCOSECrv": (()=>isCOSECrv),
    "isCOSEKty": (()=>isCOSEKty),
    "isCOSEPublicKeyEC2": (()=>isCOSEPublicKeyEC2),
    "isCOSEPublicKeyOKP": (()=>isCOSEPublicKeyOKP),
    "isCOSEPublicKeyRSA": (()=>isCOSEPublicKeyRSA)
});
function isCOSEPublicKeyOKP(cosePublicKey) {
    const kty = cosePublicKey.get(COSEKEYS.kty);
    return isCOSEKty(kty) && kty === COSEKTY.OKP;
}
function isCOSEPublicKeyEC2(cosePublicKey) {
    const kty = cosePublicKey.get(COSEKEYS.kty);
    return isCOSEKty(kty) && kty === COSEKTY.EC2;
}
function isCOSEPublicKeyRSA(cosePublicKey) {
    const kty = cosePublicKey.get(COSEKEYS.kty);
    return isCOSEKty(kty) && kty === COSEKTY.RSA;
}
var COSEKEYS;
(function(COSEKEYS) {
    COSEKEYS[COSEKEYS["kty"] = 1] = "kty";
    COSEKEYS[COSEKEYS["alg"] = 3] = "alg";
    COSEKEYS[COSEKEYS["crv"] = -1] = "crv";
    COSEKEYS[COSEKEYS["x"] = -2] = "x";
    COSEKEYS[COSEKEYS["y"] = -3] = "y";
    COSEKEYS[COSEKEYS["n"] = -1] = "n";
    COSEKEYS[COSEKEYS["e"] = -2] = "e";
})(COSEKEYS || (COSEKEYS = {}));
var COSEKTY;
(function(COSEKTY) {
    COSEKTY[COSEKTY["OKP"] = 1] = "OKP";
    COSEKTY[COSEKTY["EC2"] = 2] = "EC2";
    COSEKTY[COSEKTY["RSA"] = 3] = "RSA";
})(COSEKTY || (COSEKTY = {}));
function isCOSEKty(kty) {
    return Object.values(COSEKTY).indexOf(kty) >= 0;
}
var COSECRV;
(function(COSECRV) {
    COSECRV[COSECRV["P256"] = 1] = "P256";
    COSECRV[COSECRV["P384"] = 2] = "P384";
    COSECRV[COSECRV["P521"] = 3] = "P521";
    COSECRV[COSECRV["ED25519"] = 6] = "ED25519";
    COSECRV[COSECRV["SECP256K1"] = 8] = "SECP256K1";
})(COSECRV || (COSECRV = {}));
function isCOSECrv(crv) {
    return Object.values(COSECRV).indexOf(crv) >= 0;
}
var COSEALG;
(function(COSEALG) {
    COSEALG[COSEALG["ES256"] = -7] = "ES256";
    COSEALG[COSEALG["EdDSA"] = -8] = "EdDSA";
    COSEALG[COSEALG["ES384"] = -35] = "ES384";
    COSEALG[COSEALG["ES512"] = -36] = "ES512";
    COSEALG[COSEALG["PS256"] = -37] = "PS256";
    COSEALG[COSEALG["PS384"] = -38] = "PS384";
    COSEALG[COSEALG["PS512"] = -39] = "PS512";
    COSEALG[COSEALG["ES256K"] = -47] = "ES256K";
    COSEALG[COSEALG["RS256"] = -257] = "RS256";
    COSEALG[COSEALG["RS384"] = -258] = "RS384";
    COSEALG[COSEALG["RS512"] = -259] = "RS512";
    COSEALG[COSEALG["RS1"] = -65535] = "RS1";
})(COSEALG || (COSEALG = {}));
function isCOSEAlg(alg) {
    return Object.values(COSEALG).indexOf(alg) >= 0;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/mapCoseAlgToWebCryptoAlg.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "mapCoseAlgToWebCryptoAlg": (()=>mapCoseAlgToWebCryptoAlg)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
;
function mapCoseAlgToWebCryptoAlg(alg) {
    if ([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].RS1
    ].indexOf(alg) >= 0) {
        return 'SHA-1';
    } else if ([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].ES256,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].PS256,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].RS256
    ].indexOf(alg) >= 0) {
        return 'SHA-256';
    } else if ([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].ES384,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].PS384,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].RS384
    ].indexOf(alg) >= 0) {
        return 'SHA-384';
    } else if ([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].ES512,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].PS512,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].RS512,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].EdDSA
    ].indexOf(alg) >= 0) {
        return 'SHA-512';
    }
    throw new Error(`Could not map COSE alg value of ${alg} to a WebCrypto alg`);
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/getWebCrypto.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MissingWebCrypto": (()=>MissingWebCrypto),
    "_getWebCryptoInternals": (()=>_getWebCryptoInternals),
    "getWebCrypto": (()=>getWebCrypto)
});
let webCrypto = undefined;
function getWebCrypto() {
    /**
     * Hello there! If you came here wondering why this method is asynchronous when use of
     * `globalThis.crypto` is not, it's to minimize a bunch of refactor related to making this
     * synchronous. For example, `generateRegistrationOptions()` and `generateAuthenticationOptions()`
     * become synchronous if we make this synchronous (since nothing else in that method is async)
     * which represents a breaking API change in this library's core API.
     *
     * TODO: If it's after February 2025 when you read this then consider whether it still makes sense
     * to keep this method asynchronous.
     */ const toResolve = new Promise((resolve, reject)=>{
        if (webCrypto) {
            return resolve(webCrypto);
        }
        /**
         * Naively attempt to access Crypto as a global object, which popular ESM-centric run-times
         * support (and Node v20+)
         */ const _globalThisCrypto = _getWebCryptoInternals.stubThisGlobalThisCrypto();
        if (_globalThisCrypto) {
            webCrypto = _globalThisCrypto;
            return resolve(webCrypto);
        }
        // We tried to access it both in Node and globally, so bail out
        return reject(new MissingWebCrypto());
    });
    return toResolve;
}
class MissingWebCrypto extends Error {
    constructor(){
        const message = 'An instance of the Crypto API could not be located';
        super(message);
        this.name = 'MissingWebCrypto';
    }
}
const _getWebCryptoInternals = {
    stubThisGlobalThisCrypto: ()=>globalThis.crypto,
    // Make it possible to reset the `webCrypto` at the top of the file
    setCachedCrypto: (newCrypto)=>{
        webCrypto = newCrypto;
    }
};
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/digest.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "digest": (()=>digest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$mapCoseAlgToWebCryptoAlg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/mapCoseAlgToWebCryptoAlg.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$getWebCrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/getWebCrypto.js [app-route] (ecmascript)");
;
;
async function digest(data, algorithm) {
    const WebCrypto = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$getWebCrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWebCrypto"])();
    const subtleAlgorithm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$mapCoseAlgToWebCryptoAlg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapCoseAlgToWebCryptoAlg"])(algorithm);
    const hashed = await WebCrypto.subtle.digest(subtleAlgorithm, data);
    return new Uint8Array(hashed);
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/getRandomValues.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getRandomValues": (()=>getRandomValues)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$getWebCrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/getWebCrypto.js [app-route] (ecmascript)");
;
async function getRandomValues(array) {
    const WebCrypto = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$getWebCrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWebCrypto"])();
    WebCrypto.getRandomValues(array);
    return array;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/importKey.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "importKey": (()=>importKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$getWebCrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/getWebCrypto.js [app-route] (ecmascript)");
;
async function importKey(opts) {
    const WebCrypto = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$getWebCrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWebCrypto"])();
    const { keyData, algorithm } = opts;
    return WebCrypto.subtle.importKey('jwk', keyData, algorithm, false, [
        'verify'
    ]);
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript) <export * as isoBase64URL>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isoBase64URL": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verifyEC2.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyEC2": (()=>verifyEC2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$mapCoseAlgToWebCryptoAlg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/mapCoseAlgToWebCryptoAlg.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$importKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/importKey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$getWebCrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/getWebCrypto.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript) <export * as isoBase64URL>");
;
;
;
;
;
async function verifyEC2(opts) {
    const { cosePublicKey, signature, data, shaHashOverride } = opts;
    const WebCrypto = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$getWebCrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWebCrypto"])();
    // Import the public key
    const alg = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].alg);
    const crv = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].crv);
    const x = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].x);
    const y = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].y);
    if (!alg) {
        throw new Error('Public key was missing alg (EC2)');
    }
    if (!crv) {
        throw new Error('Public key was missing crv (EC2)');
    }
    if (!x) {
        throw new Error('Public key was missing x (EC2)');
    }
    if (!y) {
        throw new Error('Public key was missing y (EC2)');
    }
    let _crv;
    if (crv === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSECRV"].P256) {
        _crv = 'P-256';
    } else if (crv === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSECRV"].P384) {
        _crv = 'P-384';
    } else if (crv === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSECRV"].P521) {
        _crv = 'P-521';
    } else {
        throw new Error(`Unexpected COSE crv value of ${crv} (EC2)`);
    }
    const keyData = {
        kty: 'EC',
        crv: _crv,
        x: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].fromBuffer(x),
        y: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].fromBuffer(y),
        ext: false
    };
    const keyAlgorithm = {
        /**
         * Note to future self: you can't use `mapCoseAlgToWebCryptoKeyAlgName()` here because some
         * leaf certs from actual devices specified an RSA SHA value for `alg` (e.g. `-257`) which
         * would then map here to `'RSASSA-PKCS1-v1_5'`. We always want `'ECDSA'` here so we'll
         * hard-code this.
         */ name: 'ECDSA',
        namedCurve: _crv
    };
    const key = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$importKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["importKey"])({
        keyData,
        algorithm: keyAlgorithm
    });
    // Determine which SHA algorithm to use for signature verification
    let subtleAlg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$mapCoseAlgToWebCryptoAlg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapCoseAlgToWebCryptoAlg"])(alg);
    if (shaHashOverride) {
        subtleAlg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$mapCoseAlgToWebCryptoAlg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapCoseAlgToWebCryptoAlg"])(shaHashOverride);
    }
    const verifyAlgorithm = {
        name: 'ECDSA',
        hash: {
            name: subtleAlg
        }
    };
    return WebCrypto.subtle.verify(verifyAlgorithm, key, signature, data);
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/mapCoseAlgToWebCryptoKeyAlgName.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "mapCoseAlgToWebCryptoKeyAlgName": (()=>mapCoseAlgToWebCryptoKeyAlgName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
;
function mapCoseAlgToWebCryptoKeyAlgName(alg) {
    if ([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].EdDSA
    ].indexOf(alg) >= 0) {
        return 'Ed25519';
    } else if ([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].ES256,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].ES384,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].ES512,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].ES256K
    ].indexOf(alg) >= 0) {
        return 'ECDSA';
    } else if ([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].RS256,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].RS384,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].RS512,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].RS1
    ].indexOf(alg) >= 0) {
        return 'RSASSA-PKCS1-v1_5';
    } else if ([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].PS256,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].PS384,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].PS512
    ].indexOf(alg) >= 0) {
        return 'RSA-PSS';
    }
    throw new Error(`Could not map COSE alg value of ${alg} to a WebCrypto key alg name`);
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verifyRSA.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyRSA": (()=>verifyRSA)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$mapCoseAlgToWebCryptoAlg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/mapCoseAlgToWebCryptoAlg.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$importKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/importKey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$mapCoseAlgToWebCryptoKeyAlgName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/mapCoseAlgToWebCryptoKeyAlgName.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$getWebCrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/getWebCrypto.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript) <export * as isoBase64URL>");
;
;
;
;
;
;
async function verifyRSA(opts) {
    const { cosePublicKey, signature, data, shaHashOverride } = opts;
    const WebCrypto = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$getWebCrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWebCrypto"])();
    const alg = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].alg);
    const n = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].n);
    const e = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].e);
    if (!alg) {
        throw new Error('Public key was missing alg (RSA)');
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCOSEAlg"])(alg)) {
        throw new Error(`Public key had invalid alg ${alg} (RSA)`);
    }
    if (!n) {
        throw new Error('Public key was missing n (RSA)');
    }
    if (!e) {
        throw new Error('Public key was missing e (RSA)');
    }
    const keyData = {
        kty: 'RSA',
        alg: '',
        n: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].fromBuffer(n),
        e: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].fromBuffer(e),
        ext: false
    };
    const keyAlgorithm = {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$mapCoseAlgToWebCryptoKeyAlgName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapCoseAlgToWebCryptoKeyAlgName"])(alg),
        hash: {
            name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$mapCoseAlgToWebCryptoAlg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapCoseAlgToWebCryptoAlg"])(alg)
        }
    };
    const verifyAlgorithm = {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$mapCoseAlgToWebCryptoKeyAlgName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapCoseAlgToWebCryptoKeyAlgName"])(alg)
    };
    if (shaHashOverride) {
        keyAlgorithm.hash.name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$mapCoseAlgToWebCryptoAlg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapCoseAlgToWebCryptoAlg"])(shaHashOverride);
    }
    if (keyAlgorithm.name === 'RSASSA-PKCS1-v1_5') {
        if (keyAlgorithm.hash.name === 'SHA-256') {
            keyData.alg = 'RS256';
        } else if (keyAlgorithm.hash.name === 'SHA-384') {
            keyData.alg = 'RS384';
        } else if (keyAlgorithm.hash.name === 'SHA-512') {
            keyData.alg = 'RS512';
        } else if (keyAlgorithm.hash.name === 'SHA-1') {
            keyData.alg = 'RS1';
        }
    } else if (keyAlgorithm.name === 'RSA-PSS') {
        /**
         * salt length. The default value is 20 but the convention is to use hLen, the length of the
         * output of the hash function in bytes. A salt length of zero is permitted and will result in
         * a deterministic signature value. The actual salt length used can be determined from the
         * signature value.
         *
         * From https://www.cryptosys.net/pki/manpki/pki_rsaschemes.html
         */ let saltLength = 0;
        if (keyAlgorithm.hash.name === 'SHA-256') {
            keyData.alg = 'PS256';
            saltLength = 32; // 256 bits => 32 bytes
        } else if (keyAlgorithm.hash.name === 'SHA-384') {
            keyData.alg = 'PS384';
            saltLength = 48; // 384 bits => 48 bytes
        } else if (keyAlgorithm.hash.name === 'SHA-512') {
            keyData.alg = 'PS512';
            saltLength = 64; // 512 bits => 64 bytes
        }
        verifyAlgorithm.saltLength = saltLength;
    } else {
        throw new Error(`Unexpected RSA key algorithm ${alg} (${keyAlgorithm.name})`);
    }
    const key = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$importKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["importKey"])({
        keyData,
        algorithm: keyAlgorithm
    });
    return WebCrypto.subtle.verify(verifyAlgorithm, key, signature, data);
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * A runtime-agnostic collection of methods for working with Uint8Arrays
 * @module
 */ /**
 * Make sure two Uint8Arrays are deeply equivalent
 */ __turbopack_esm__({
    "areEqual": (()=>areEqual),
    "concat": (()=>concat),
    "fromASCIIString": (()=>fromASCIIString),
    "fromHex": (()=>fromHex),
    "fromUTF8String": (()=>fromUTF8String),
    "toDataView": (()=>toDataView),
    "toHex": (()=>toHex),
    "toUTF8String": (()=>toUTF8String)
});
function areEqual(array1, array2) {
    if (array1.length != array2.length) {
        return false;
    }
    return array1.every((val, i)=>val === array2[i]);
}
function toHex(array) {
    const hexParts = Array.from(array, (i)=>i.toString(16).padStart(2, '0'));
    // adce000235bcc60a648b0b25f1f05503
    return hexParts.join('');
}
function fromHex(hex) {
    if (!hex) {
        return Uint8Array.from([]);
    }
    const isValid = hex.length !== 0 && hex.length % 2 === 0 && !/[^a-fA-F0-9]/u.test(hex);
    if (!isValid) {
        throw new Error('Invalid hex string');
    }
    const byteStrings = hex.match(/.{1,2}/g) ?? [];
    return Uint8Array.from(byteStrings.map((byte)=>parseInt(byte, 16)));
}
function concat(arrays) {
    let pointer = 0;
    const totalLength = arrays.reduce((prev, curr)=>prev + curr.length, 0);
    const toReturn = new Uint8Array(totalLength);
    arrays.forEach((arr)=>{
        toReturn.set(arr, pointer);
        pointer += arr.length;
    });
    return toReturn;
}
function toUTF8String(array) {
    const decoder = new globalThis.TextDecoder('utf-8');
    return decoder.decode(array);
}
function fromUTF8String(utf8String) {
    const encoder = new globalThis.TextEncoder();
    return encoder.encode(utf8String);
}
function fromASCIIString(value) {
    return Uint8Array.from(value.split('').map((x)=>x.charCodeAt(0)));
}
function toDataView(array) {
    return new DataView(array.buffer, array.byteOffset, array.length);
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isoUint8Array": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertAAGUIDToString.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "convertAAGUIDToString": (()=>convertAAGUIDToString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
;
function convertAAGUIDToString(aaguid) {
    // Raw Hex: adce000235bcc60a648b0b25f1f05503
    const hex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].toHex(aaguid);
    const segments = [
        hex.slice(0, 8),
        hex.slice(8, 12),
        hex.slice(12, 16),
        hex.slice(16, 20),
        hex.slice(20, 32)
    ];
    // Formatted: adce0002-35bc-c60a-648b-0b25f1f05503
    return segments.join('-');
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCertBufferToPEM.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "convertCertBufferToPEM": (()=>convertCertBufferToPEM)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript) <export * as isoBase64URL>");
;
function convertCertBufferToPEM(certBuffer) {
    let b64cert;
    /**
     * Get certBuffer to a base64 representation
     */ if (typeof certBuffer === 'string') {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].isBase64URL(certBuffer)) {
            b64cert = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].toBase64(certBuffer);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].isBase64(certBuffer)) {
            b64cert = certBuffer;
        } else {
            throw new Error('Certificate is not a valid base64 or base64url string');
        }
    } else {
        b64cert = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].fromBuffer(certBuffer, 'base64');
    }
    let PEMKey = '';
    for(let i = 0; i < Math.ceil(b64cert.length / 64); i += 1){
        const start = 64 * i;
        PEMKey += `${b64cert.substr(start, 64)}\n`;
    }
    PEMKey = `-----BEGIN CERTIFICATE-----\n${PEMKey}-----END CERTIFICATE-----\n`;
    return PEMKey;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCBOR.js [app-route] (ecmascript) <export * as isoCBOR>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isoCBOR": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCBOR.js [app-route] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCOSEtoPKCS.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "convertCOSEtoPKCS": (()=>convertCOSEtoPKCS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCBOR$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCBOR.js [app-route] (ecmascript) <export * as isoCBOR>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
;
;
function convertCOSEtoPKCS(cosePublicKey) {
    // This is a little sloppy, I'm using COSEPublicKeyEC2 since it could have both x and y, but when
    // there's no y it means it's probably better typed as COSEPublicKeyOKP. I'll leave this for now
    // and revisit it later if it ever becomes an actual problem.
    const struct = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCBOR$3e$__["isoCBOR"].decodeFirst(cosePublicKey);
    const tag = Uint8Array.from([
        0x04
    ]);
    const x = struct.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].x);
    const y = struct.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].y);
    if (!x) {
        throw new Error('COSE public key was missing x');
    }
    if (y) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].concat([
            tag,
            x,
            y
        ]);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].concat([
        tag,
        x
    ]);
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/decodeAttestationObject.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "_decodeAttestationObjectInternals": (()=>_decodeAttestationObjectInternals),
    "decodeAttestationObject": (()=>decodeAttestationObject)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCBOR$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCBOR.js [app-route] (ecmascript) <export * as isoCBOR>");
;
function decodeAttestationObject(attestationObject) {
    return _decodeAttestationObjectInternals.stubThis(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCBOR$3e$__["isoCBOR"].decodeFirst(attestationObject));
}
const _decodeAttestationObjectInternals = {
    stubThis: (value)=>value
};
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/decodeClientDataJSON.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "_decodeClientDataJSONInternals": (()=>_decodeClientDataJSONInternals),
    "decodeClientDataJSON": (()=>decodeClientDataJSON)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript) <export * as isoBase64URL>");
;
function decodeClientDataJSON(data) {
    const toString = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].toUTF8String(data);
    const clientData = JSON.parse(toString);
    return _decodeClientDataJSONInternals.stubThis(clientData);
}
const _decodeClientDataJSONInternals = {
    stubThis: (value)=>value
};
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/decodeCredentialPublicKey.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "_decodeCredentialPublicKeyInternals": (()=>_decodeCredentialPublicKeyInternals),
    "decodeCredentialPublicKey": (()=>decodeCredentialPublicKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCBOR$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCBOR.js [app-route] (ecmascript) <export * as isoCBOR>");
;
function decodeCredentialPublicKey(publicKey) {
    return _decodeCredentialPublicKeyInternals.stubThis(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCBOR$3e$__["isoCBOR"].decodeFirst(publicKey));
}
const _decodeCredentialPublicKeyInternals = {
    stubThis: (value)=>value
};
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * A runtime-agnostic collection of methods for working with the WebCrypto API
 * @module
 */ __turbopack_esm__({});
;
;
;
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js [app-route] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "digest": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["digest"]),
    "getRandomValues": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$getRandomValues$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRandomValues"]),
    "verify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verify"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/digest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$getRandomValues$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/getRandomValues.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "digest": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["digest"]),
    "getRandomValues": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getRandomValues"]),
    "verify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["verify"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js [app-route] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js [app-route] (ecmascript) <export * as isoCrypto>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isoCrypto": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js [app-route] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/generateUserID.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "_generateUserIDInternals": (()=>_generateUserIDInternals),
    "generateUserID": (()=>generateUserID)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCrypto$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js [app-route] (ecmascript) <export * as isoCrypto>");
;
async function generateUserID() {
    /**
     * WebAuthn spec says user.id has a max length of 64 bytes. I prefer how 32 random bytes look
     * after they're base64url-encoded so I'm choosing to go with that here.
     */ const newUserID = new Uint8Array(32);
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCrypto$3e$__["isoCrypto"].getRandomValues(newUserID);
    return _generateUserIDInternals.stubThis(newUserID);
}
const _generateUserIDInternals = {
    stubThis: (value)=>value
};
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/getCertificateInfo.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getCertificateInfo": (()=>getCertificateInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/parser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$certificate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/certificate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$basic_constraints$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/extensions/basic_constraints.js [app-route] (ecmascript)");
;
;
const issuerSubjectIDKey = {
    '2.5.4.6': 'C',
    '2.5.4.10': 'O',
    '2.5.4.11': 'OU',
    '2.5.4.3': 'CN'
};
function getCertificateInfo(leafCertBuffer) {
    const x509 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(leafCertBuffer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$certificate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Certificate"]);
    const parsedCert = x509.tbsCertificate;
    // Issuer
    const issuer = {
        combined: ''
    };
    parsedCert.issuer.forEach(([iss])=>{
        const key = issuerSubjectIDKey[iss.type];
        if (key) {
            issuer[key] = iss.value.toString();
        }
    });
    issuer.combined = issuerSubjectToString(issuer);
    // Subject
    const subject = {
        combined: ''
    };
    parsedCert.subject.forEach(([iss])=>{
        const key = issuerSubjectIDKey[iss.type];
        if (key) {
            subject[key] = iss.value.toString();
        }
    });
    subject.combined = issuerSubjectToString(subject);
    let basicConstraintsCA = false;
    if (parsedCert.extensions) {
        // console.log(parsedCert.extensions);
        for (const ext of parsedCert.extensions){
            if (ext.extnID === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$basic_constraints$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["id_ce_basicConstraints"]) {
                const basicConstraints = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(ext.extnValue, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$basic_constraints$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BasicConstraints"]);
                basicConstraintsCA = basicConstraints.cA;
            }
        }
    }
    return {
        issuer,
        subject,
        version: parsedCert.version,
        basicConstraintsCA,
        notBefore: parsedCert.validity.notBefore.getTime(),
        notAfter: parsedCert.validity.notAfter.getTime(),
        parsedCertificate: x509
    };
}
/**
 * Stringify the parts of Issuer or Subject info for easier comparison of subject issuers with
 * issuer subjects.
 *
 * The order might seem arbitrary, because it is. It should be enough that the two are stringified
 * in the same order.
 */ function issuerSubjectToString(input) {
    const parts = [];
    if (input.C) {
        parts.push(input.C);
    }
    if (input.O) {
        parts.push(input.O);
    }
    if (input.OU) {
        parts.push(input.OU);
    }
    if (input.CN) {
        parts.push(input.CN);
    }
    return parts.join(' : ');
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/fetch.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * A simple method for requesting data via standard `fetch`. Should work
 * across multiple runtimes.
 */ __turbopack_esm__({
    "_fetchInternals": (()=>_fetchInternals),
    "fetch": (()=>fetch)
});
function fetch(url) {
    return _fetchInternals.stubThis(url);
}
const _fetchInternals = {
    stubThis: (url)=>globalThis.fetch(url)
};
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/isCertRevoked.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isCertRevoked": (()=>isCertRevoked)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$fetch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/fetch.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$authority_key_identifier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/extensions/authority_key_identifier.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$subject_key_identifier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/extensions/subject_key_identifier.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$crl_distribution_points$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/extensions/crl_distribution_points.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/parser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$certificate_list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/certificate_list.js [app-route] (ecmascript)");
;
;
;
;
const cacheRevokedCerts = {};
async function isCertRevoked(cert) {
    const { extensions } = cert.tbsCertificate;
    if (!extensions) {
        return false;
    }
    let extAuthorityKeyID;
    let extSubjectKeyID;
    let extCRLDistributionPoints;
    extensions.forEach((ext)=>{
        if (ext.extnID === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$authority_key_identifier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["id_ce_authorityKeyIdentifier"]) {
            extAuthorityKeyID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(ext.extnValue, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$authority_key_identifier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AuthorityKeyIdentifier"]);
        } else if (ext.extnID === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$subject_key_identifier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["id_ce_subjectKeyIdentifier"]) {
            extSubjectKeyID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(ext.extnValue, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$subject_key_identifier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SubjectKeyIdentifier"]);
        } else if (ext.extnID === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$crl_distribution_points$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["id_ce_cRLDistributionPoints"]) {
            extCRLDistributionPoints = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(ext.extnValue, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$crl_distribution_points$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CRLDistributionPoints"]);
        }
    });
    // Check to see if we've got cached info for the cert's CA
    let keyIdentifier = undefined;
    if (extAuthorityKeyID && extAuthorityKeyID.keyIdentifier) {
        keyIdentifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].toHex(new Uint8Array(extAuthorityKeyID.keyIdentifier.buffer));
    } else if (extSubjectKeyID) {
        /**
         * We might be dealing with a self-signed root certificate. Check the
         * Subject key Identifier extension next.
         */ keyIdentifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].toHex(new Uint8Array(extSubjectKeyID.buffer));
    }
    const certSerialHex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].toHex(new Uint8Array(cert.tbsCertificate.serialNumber));
    if (keyIdentifier) {
        const cached = cacheRevokedCerts[keyIdentifier];
        if (cached) {
            const now = new Date();
            // If there's a nextUpdate then make sure we're before it
            if (!cached.nextUpdate || cached.nextUpdate > now) {
                return cached.revokedCerts.indexOf(certSerialHex) >= 0;
            }
        }
    }
    const crlURL = extCRLDistributionPoints?.[0].distributionPoint?.fullName?.[0].uniformResourceIdentifier;
    // If no URL is provided then we have nothing to check
    if (!crlURL) {
        return false;
    }
    // Download and read the CRL
    let certListBytes;
    try {
        const respCRL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$fetch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetch"])(crlURL);
        certListBytes = await respCRL.arrayBuffer();
    } catch (_err) {
        return false;
    }
    let data;
    try {
        data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(certListBytes, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$certificate_list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CertificateList"]);
    } catch (_err) {
        // Something was malformed with the CRL, so pass
        return false;
    }
    const newCached = {
        revokedCerts: [],
        nextUpdate: undefined
    };
    // nextUpdate
    if (data.tbsCertList.nextUpdate) {
        newCached.nextUpdate = data.tbsCertList.nextUpdate.getTime();
    }
    // revokedCertificates
    const revokedCerts = data.tbsCertList.revokedCertificates;
    if (revokedCerts) {
        for (const cert of revokedCerts){
            const revokedHex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].toHex(new Uint8Array(cert.userCertificate));
            newCached.revokedCerts.push(revokedHex);
        }
        // Cache the results
        if (keyIdentifier) {
            cacheRevokedCerts[keyIdentifier] = newCached;
        }
        return newCached.revokedCerts.indexOf(certSerialHex) >= 0;
    }
    return false;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/decodeAuthenticatorExtensions.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "decodeAuthenticatorExtensions": (()=>decodeAuthenticatorExtensions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCBOR$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCBOR.js [app-route] (ecmascript) <export * as isoCBOR>");
;
function decodeAuthenticatorExtensions(extensionData) {
    let toCBOR;
    try {
        toCBOR = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCBOR$3e$__["isoCBOR"].decodeFirst(extensionData);
    } catch (err) {
        const _err = err;
        throw new Error(`Error decoding authenticator extensions: ${_err.message}`);
    }
    return convertMapToObjectDeep(toCBOR);
}
/**
 * CBOR-encoded extensions can be deeply-nested Maps, which are too deep for a simple
 * `Object.entries()`. This method will recursively make sure that all Maps are converted into
 * basic objects.
 */ function convertMapToObjectDeep(input) {
    const mapped = {};
    for (const [key, value] of input){
        if (value instanceof Map) {
            mapped[key] = convertMapToObjectDeep(value);
        } else {
            mapped[key] = value;
        }
    }
    return mapped;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/parseAuthenticatorData.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "_parseAuthenticatorDataInternals": (()=>_parseAuthenticatorDataInternals),
    "parseAuthenticatorData": (()=>parseAuthenticatorData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeAuthenticatorExtensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/decodeAuthenticatorExtensions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCBOR$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCBOR.js [app-route] (ecmascript) <export * as isoCBOR>");
;
;
function parseAuthenticatorData(authData) {
    if (authData.byteLength < 37) {
        throw new Error(`Authenticator data was ${authData.byteLength} bytes, expected at least 37 bytes`);
    }
    let pointer = 0;
    const dataView = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].toDataView(authData);
    const rpIdHash = authData.slice(pointer, pointer += 32);
    const flagsBuf = authData.slice(pointer, pointer += 1);
    const flagsInt = flagsBuf[0];
    // Bit positions can be referenced here:
    // https://www.w3.org/TR/webauthn-2/#flags
    const flags = {
        up: !!(flagsInt & 1 << 0),
        uv: !!(flagsInt & 1 << 2),
        be: !!(flagsInt & 1 << 3),
        bs: !!(flagsInt & 1 << 4),
        at: !!(flagsInt & 1 << 6),
        ed: !!(flagsInt & 1 << 7),
        flagsInt
    };
    const counterBuf = authData.slice(pointer, pointer + 4);
    const counter = dataView.getUint32(pointer, false);
    pointer += 4;
    let aaguid = undefined;
    let credentialID = undefined;
    let credentialPublicKey = undefined;
    if (flags.at) {
        aaguid = authData.slice(pointer, pointer += 16);
        const credIDLen = dataView.getUint16(pointer);
        pointer += 2;
        credentialID = authData.slice(pointer, pointer += credIDLen);
        /**
         * Firefox 117 incorrectly CBOR-encodes authData when EdDSA (-8) is used for the public key.
         * A CBOR "Map of 3 items" (0xa3) should be "Map of 4 items" (0xa4), and if we manually adjust
         * the single byte there's a good chance the authData can be correctly parsed.
         *
         * This browser release also incorrectly uses the string labels "OKP" and "Ed25519" instead of
         * their integer representations for kty and crv respectively. That's why the COSE public key
         * in the hex below looks so odd.
         */ // Bytes decode to `{ 1: "OKP", 3: -8, -1: "Ed25519" }` (it's missing key -2 a.k.a. COSEKEYS.x)
        const badEdDSACBOR = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].fromHex('a301634f4b500327206745643235353139');
        const bytesAtCurrentPosition = authData.slice(pointer, pointer + badEdDSACBOR.byteLength);
        let foundBadCBOR = false;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].areEqual(badEdDSACBOR, bytesAtCurrentPosition)) {
            // Change the bad CBOR 0xa3 to 0xa4 so that the credential public key can be recognized
            foundBadCBOR = true;
            authData[pointer] = 0xa4;
        }
        // Decode the next CBOR item in the buffer, then re-encode it back to a Buffer
        const firstDecoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCBOR$3e$__["isoCBOR"].decodeFirst(authData.slice(pointer));
        const firstEncoded = Uint8Array.from(/**
         * Casting to `Map` via `as unknown` here because TS doesn't make it possible to define Maps
         * with discrete keys and properties with known types per pair, and CBOR libs typically parse
         * CBOR Major Type 5 to `Map` because you can have numbers for keys. A `COSEPublicKey` can be
         * generalized as "a Map with numbers for keys and either numbers or bytes for values" though.
         * If this presumption falls apart then other parts of verification later on will fail so we
         * should be safe doing this here.
         */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCBOR$3e$__["isoCBOR"].encode(firstDecoded));
        if (foundBadCBOR) {
            // Restore the bit we changed so that `authData` is the same as it came in and won't break
            // signature verification.
            authData[pointer] = 0xa3;
        }
        credentialPublicKey = firstEncoded;
        pointer += firstEncoded.byteLength;
    }
    let extensionsData = undefined;
    let extensionsDataBuffer = undefined;
    if (flags.ed) {
        const firstDecoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCBOR$3e$__["isoCBOR"].decodeFirst(authData.slice(pointer));
        extensionsDataBuffer = Uint8Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCBOR$3e$__["isoCBOR"].encode(firstDecoded));
        extensionsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeAuthenticatorExtensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeAuthenticatorExtensions"])(extensionsDataBuffer);
        pointer += extensionsDataBuffer.byteLength;
    }
    // Pointer should be at the end of the authenticator data, otherwise too much data was sent
    if (authData.byteLength > pointer) {
        throw new Error('Leftover bytes detected while parsing authenticator data');
    }
    return _parseAuthenticatorDataInternals.stubThis({
        rpIdHash,
        flagsBuf,
        flags,
        counter,
        counterBuf,
        aaguid,
        credentialID,
        credentialPublicKey,
        extensionsData,
        extensionsDataBuffer
    });
}
const _parseAuthenticatorDataInternals = {
    stubThis: (value)=>value
};
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/toHash.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "toHash": (()=>toHash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCrypto$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js [app-route] (ecmascript) <export * as isoCrypto>");
;
function toHash(data, algorithm = -7) {
    if (typeof data === 'string') {
        data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].fromUTF8String(data);
    }
    const digest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCrypto$3e$__["isoCrypto"].digest(data, algorithm);
    return digest;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/mapX509SignatureAlgToCOSEAlg.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "mapX509SignatureAlgToCOSEAlg": (()=>mapX509SignatureAlgToCOSEAlg)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
;
function mapX509SignatureAlgToCOSEAlg(signatureAlgorithm) {
    let alg;
    if (signatureAlgorithm === '1.2.840.10045.4.3.2') {
        alg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].ES256;
    } else if (signatureAlgorithm === '1.2.840.10045.4.3.3') {
        alg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].ES384;
    } else if (signatureAlgorithm === '1.2.840.10045.4.3.4') {
        alg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].ES512;
    } else if (signatureAlgorithm === '1.2.840.113549.1.1.11') {
        alg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].RS256;
    } else if (signatureAlgorithm === '1.2.840.113549.1.1.12') {
        alg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].RS384;
    } else if (signatureAlgorithm === '1.2.840.113549.1.1.13') {
        alg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].RS512;
    } else if (signatureAlgorithm === '1.2.840.113549.1.1.5') {
        alg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].RS1;
    } else {
        throw new Error(`Unable to map X.509 signature algorithm ${signatureAlgorithm} to a COSE algorithm`);
    }
    return alg;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertX509PublicKeyToCOSE.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "convertX509PublicKeyToCOSE": (()=>convertX509PublicKeyToCOSE)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$ecc$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$ecc$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-ecc@2.3.15/node_modules/@peculiar/asn1-ecc/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$rsa$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$rsa$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-rsa@2.3.15/node_modules/@peculiar/asn1-rsa/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$mapX509SignatureAlgToCOSEAlg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/mapX509SignatureAlgToCOSEAlg.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/parser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$certificate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/certificate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$ecc$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$ecc$2f$build$2f$es2015$2f$object_identifiers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-ecc@2.3.15/node_modules/@peculiar/asn1-ecc/build/es2015/object_identifiers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$rsa$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$rsa$2f$build$2f$es2015$2f$rsa_public_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-rsa@2.3.15/node_modules/@peculiar/asn1-rsa/build/es2015/rsa_public_key.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$ecc$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$ecc$2f$build$2f$es2015$2f$ec_parameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-ecc@2.3.15/node_modules/@peculiar/asn1-ecc/build/es2015/ec_parameters.js [app-route] (ecmascript)");
;
;
;
;
;
;
function convertX509PublicKeyToCOSE(x509Certificate) {
    let cosePublicKey = new Map();
    /**
     * Time to extract the public key from an X.509 certificate
     */ const x509 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(x509Certificate, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$certificate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Certificate"]);
    const { tbsCertificate } = x509;
    const { subjectPublicKeyInfo, signature: _tbsSignature } = tbsCertificate;
    const signatureAlgorithm = _tbsSignature.algorithm;
    const publicKeyAlgorithmID = subjectPublicKeyInfo.algorithm.algorithm;
    if (publicKeyAlgorithmID === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$ecc$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$ecc$2f$build$2f$es2015$2f$object_identifiers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["id_ecPublicKey"]) {
        /**
         * EC2 Public Key
         */ if (!subjectPublicKeyInfo.algorithm.parameters) {
            throw new Error('Certificate public key was missing parameters (EC2)');
        }
        const ecParameters = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(new Uint8Array(subjectPublicKeyInfo.algorithm.parameters), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$ecc$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$ecc$2f$build$2f$es2015$2f$ec_parameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ECParameters"]);
        let crv = -999;
        const { namedCurve } = ecParameters;
        if (namedCurve === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$ecc$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$ecc$2f$build$2f$es2015$2f$object_identifiers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["id_secp256r1"]) {
            crv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSECRV"].P256;
        } else if (namedCurve === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$ecc$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$ecc$2f$build$2f$es2015$2f$object_identifiers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["id_secp384r1"]) {
            crv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSECRV"].P384;
        } else {
            throw new Error(`Certificate public key contained unexpected namedCurve ${namedCurve} (EC2)`);
        }
        const subjectPublicKey = new Uint8Array(subjectPublicKeyInfo.subjectPublicKey);
        let x;
        let y;
        if (subjectPublicKey[0] === 0x04) {
            // Public key is in "uncompressed form", so we can split the remaining bytes in half
            let pointer = 1;
            const halfLength = (subjectPublicKey.length - 1) / 2;
            x = subjectPublicKey.slice(pointer, pointer += halfLength);
            y = subjectPublicKey.slice(pointer);
        } else {
            throw new Error('TODO: Figure out how to handle public keys in "compressed form"');
        }
        const coseEC2PubKey = new Map();
        coseEC2PubKey.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].kty, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKTY"].EC2);
        coseEC2PubKey.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].alg, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$mapX509SignatureAlgToCOSEAlg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapX509SignatureAlgToCOSEAlg"])(signatureAlgorithm));
        coseEC2PubKey.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].crv, crv);
        coseEC2PubKey.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].x, x);
        coseEC2PubKey.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].y, y);
        cosePublicKey = coseEC2PubKey;
    } else if (publicKeyAlgorithmID === '1.2.840.113549.1.1.1') {
        /**
         * RSA public key
         */ const rsaPublicKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(subjectPublicKeyInfo.subjectPublicKey, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$rsa$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$rsa$2f$build$2f$es2015$2f$rsa_public_key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RSAPublicKey"]);
        const coseRSAPubKey = new Map();
        coseRSAPubKey.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].kty, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKTY"].RSA);
        coseRSAPubKey.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].alg, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$mapX509SignatureAlgToCOSEAlg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapX509SignatureAlgToCOSEAlg"])(signatureAlgorithm));
        coseRSAPubKey.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].n, new Uint8Array(rsaPublicKey.modulus));
        coseRSAPubKey.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].e, new Uint8Array(rsaPublicKey.publicExponent));
        cosePublicKey = coseRSAPubKey;
    } else {
        throw new Error(`Certificate public key contained unexpected algorithm ID ${publicKeyAlgorithmID}`);
    }
    return cosePublicKey;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/verifySignature.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "_verifySignatureInternals": (()=>_verifySignatureInternals),
    "verifySignature": (()=>verifySignature)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeCredentialPublicKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/decodeCredentialPublicKey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertX509PublicKeyToCOSE$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertX509PublicKeyToCOSE.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCrypto$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js [app-route] (ecmascript) <export * as isoCrypto>");
;
;
;
function verifySignature(opts) {
    const { signature, data, credentialPublicKey, x509Certificate, hashAlgorithm } = opts;
    if (!x509Certificate && !credentialPublicKey) {
        throw new Error('Must declare either "leafCert" or "credentialPublicKey"');
    }
    if (x509Certificate && credentialPublicKey) {
        throw new Error('Must not declare both "leafCert" and "credentialPublicKey"');
    }
    let cosePublicKey = new Map();
    if (credentialPublicKey) {
        cosePublicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeCredentialPublicKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeCredentialPublicKey"])(credentialPublicKey);
    } else if (x509Certificate) {
        cosePublicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertX509PublicKeyToCOSE$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertX509PublicKeyToCOSE"])(x509Certificate);
    }
    return _verifySignatureInternals.stubThis(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCrypto$3e$__["isoCrypto"].verify({
        cosePublicKey,
        signature,
        data,
        shaHashOverride: hashAlgorithm
    }));
}
const _verifySignatureInternals = {
    stubThis: (value)=>value
};
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertPEMToBytes.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "convertPEMToBytes": (()=>convertPEMToBytes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript) <export * as isoBase64URL>");
;
function convertPEMToBytes(pem) {
    const certBase64 = pem.replace('-----BEGIN CERTIFICATE-----', '').replace('-----END CERTIFICATE-----', '').replace(/[\n ]/g, '');
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].toBuffer(certBase64, 'base64');
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/validateCertificatePath.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "validateCertificatePath": (()=>validateCertificatePath)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$isCertRevoked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/isCertRevoked.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/verifySignature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$mapX509SignatureAlgToCOSEAlg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/mapX509SignatureAlgToCOSEAlg.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$getCertificateInfo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/getCertificateInfo.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertPEMToBytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertPEMToBytes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$serializer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/serializer.js [app-route] (ecmascript)");
;
;
;
;
;
;
async function validateCertificatePath(x5cCertsPEM, trustAnchorsPEM = []) {
    if (trustAnchorsPEM.length === 0) {
        // We have no trust anchors to chain back to, so skip path validation
        return true;
    }
    let invalidSubjectAndIssuerError = false;
    let certificateNotYetValidOrExpiredErrorMessage = undefined;
    for (const anchorPEM of trustAnchorsPEM){
        try {
            const certsWithTrustAnchor = x5cCertsPEM.concat([
                anchorPEM
            ]);
            await _validatePath(certsWithTrustAnchor);
            // If we successfully validated a path then there's no need to continue. Reset any existing
            // errors that were thrown by earlier trust anchors
            invalidSubjectAndIssuerError = false;
            certificateNotYetValidOrExpiredErrorMessage = undefined;
            break;
        } catch (err) {
            if (err instanceof InvalidSubjectAndIssuer) {
                invalidSubjectAndIssuerError = true;
            } else if (err instanceof CertificateNotYetValidOrExpired) {
                certificateNotYetValidOrExpiredErrorMessage = err.message;
            } else {
                throw err;
            }
        }
    }
    // We tried multiple trust anchors and none of them worked
    if (invalidSubjectAndIssuerError) {
        throw new InvalidSubjectAndIssuer();
    } else if (certificateNotYetValidOrExpiredErrorMessage) {
        throw new CertificateNotYetValidOrExpired(certificateNotYetValidOrExpiredErrorMessage);
    }
    return true;
}
/**
 * @param x5cCerts X.509 `x5c` certs in PEM string format
 * @param anchorCert X.509 trust anchor cert in PEM string format
 */ async function _validatePath(x5cCertsWithTrustAnchorPEM) {
    if (new Set(x5cCertsWithTrustAnchorPEM).size !== x5cCertsWithTrustAnchorPEM.length) {
        throw new Error('Invalid certificate path: found duplicate certificates');
    }
    // Make sure no certs are revoked, and all are within their time validity window
    for (const certificatePEM of x5cCertsWithTrustAnchorPEM){
        const certInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$getCertificateInfo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCertificateInfo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertPEMToBytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertPEMToBytes"])(certificatePEM));
        await assertCertNotRevoked(certInfo.parsedCertificate);
        assertCertIsWithinValidTimeWindow(certInfo, certificatePEM);
    }
    // Make sure each x5c cert is issued by the next certificate in the chain
    for(let i = 0; i < x5cCertsWithTrustAnchorPEM.length - 1; i += 1){
        const subjectPem = x5cCertsWithTrustAnchorPEM[i];
        const issuerPem = x5cCertsWithTrustAnchorPEM[i + 1];
        const subjectInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$getCertificateInfo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCertificateInfo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertPEMToBytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertPEMToBytes"])(subjectPem));
        const issuerInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$getCertificateInfo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCertificateInfo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertPEMToBytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertPEMToBytes"])(issuerPem));
        // Make sure subject issuer is issuer subject
        if (subjectInfo.issuer.combined !== issuerInfo.subject.combined) {
            throw new InvalidSubjectAndIssuer();
        }
        const issuerCertIsRootCert = issuerInfo.issuer.combined === issuerInfo.subject.combined;
        await assertSubjectIsSignedByIssuer(subjectInfo.parsedCertificate, issuerPem);
        // Perform one final check if the issuer cert is also a root certificate
        if (issuerCertIsRootCert) {
            await assertSubjectIsSignedByIssuer(issuerInfo.parsedCertificate, issuerPem);
        }
    }
    return true;
}
/**
 * Check if the certificate is revoked or not. If it is, raise an error
 */ async function assertCertNotRevoked(certificate) {
    // Check for certificate revocation
    const subjectCertRevoked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$isCertRevoked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCertRevoked"])(certificate);
    if (subjectCertRevoked) {
        throw new Error(`Found revoked certificate in certificate path`);
    }
}
/**
 * Require the cert to be within its notBefore and notAfter time window
 *
 * @param certInfo Parsed cert information
 * @param certPEM PEM-formatted certificate, for error reporting
 */ function assertCertIsWithinValidTimeWindow(certInfo, certPEM) {
    const { notBefore, notAfter } = certInfo;
    const now = new Date(Date.now());
    if (notBefore > now || notAfter < now) {
        throw new CertificateNotYetValidOrExpired(`Certificate is not yet valid or expired: ${certPEM}`);
    }
}
/**
 * Ensure that the subject cert has been signed by the next cert in the chain
 */ async function assertSubjectIsSignedByIssuer(subjectCert, issuerPEM) {
    // Verify the subject certificate's signature with the issuer cert's public key
    const data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$serializer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnSerializer"].serialize(subjectCert.tbsCertificate);
    const signature = subjectCert.signatureValue;
    const signatureAlgorithm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$mapX509SignatureAlgToCOSEAlg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapX509SignatureAlgToCOSEAlg"])(subjectCert.signatureAlgorithm.algorithm);
    const issuerCertBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertPEMToBytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertPEMToBytes"])(issuerPEM);
    const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySignature"])({
        data: new Uint8Array(data),
        signature: new Uint8Array(signature),
        x509Certificate: issuerCertBytes,
        hashAlgorithm: signatureAlgorithm
    });
    if (!verified) {
        throw new InvalidSubjectSignatureForIssuer();
    }
}
// Custom errors to help pass on certain errors
class InvalidSubjectAndIssuer extends Error {
    constructor(){
        const message = 'Subject issuer did not match issuer subject';
        super(message);
        this.name = 'InvalidSubjectAndIssuer';
    }
}
class InvalidSubjectSignatureForIssuer extends Error {
    constructor(){
        const message = 'Subject signature was invalid for issuer';
        super(message);
        this.name = 'InvalidSubjectSignatureForIssuer';
    }
}
class CertificateNotYetValidOrExpired extends Error {
    constructor(message){
        super(message);
        this.name = 'CertificateNotYetValidOrExpired';
    }
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/index.js [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/index.js [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertAAGUIDToString$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertAAGUIDToString.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCertBufferToPEM.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCOSEtoPKCS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCOSEtoPKCS.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeAttestationObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/decodeAttestationObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeClientDataJSON$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/decodeClientDataJSON.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeCredentialPublicKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/decodeCredentialPublicKey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$generateChallenge$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/generateChallenge.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$generateUserID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/generateUserID.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$getCertificateInfo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/getCertificateInfo.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$isCertRevoked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/isCertRevoked.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$parseAuthenticatorData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/parseAuthenticatorData.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$toHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/toHash.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/validateCertificatePath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/verifySignature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/index.js [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verifyOKP.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyOKP": (()=>verifyOKP)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$importKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/importKey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$getWebCrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/getWebCrypto.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript) <export * as isoBase64URL>");
;
;
;
;
async function verifyOKP(opts) {
    const { cosePublicKey, signature, data } = opts;
    const WebCrypto = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$getWebCrypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWebCrypto"])();
    const alg = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].alg);
    const crv = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].crv);
    const x = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].x);
    if (!alg) {
        throw new Error('Public key was missing alg (OKP)');
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCOSEAlg"])(alg)) {
        throw new Error(`Public key had invalid alg ${alg} (OKP)`);
    }
    if (!crv) {
        throw new Error('Public key was missing crv (OKP)');
    }
    if (!x) {
        throw new Error('Public key was missing x (OKP)');
    }
    // Pulled key import steps from here:
    // https://wicg.github.io/webcrypto-secure-curves/#ed25519-operations
    let _crv;
    if (crv === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSECRV"].ED25519) {
        _crv = 'Ed25519';
    } else {
        throw new Error(`Unexpected COSE crv value of ${crv} (OKP)`);
    }
    const keyData = {
        kty: 'OKP',
        crv: _crv,
        alg: 'EdDSA',
        x: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].fromBuffer(x),
        ext: false
    };
    const keyAlgorithm = {
        name: _crv,
        namedCurve: _crv
    };
    const key = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$importKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["importKey"])({
        keyData,
        algorithm: keyAlgorithm
    });
    const verifyAlgorithm = {
        name: _crv
    };
    return WebCrypto.subtle.verify(verifyAlgorithm, key, signature, data);
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/unwrapEC2Signature.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "unwrapEC2Signature": (()=>unwrapEC2Signature)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$ecc$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$ecc$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-ecc@2.3.15/node_modules/@peculiar/asn1-ecc/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/parser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$ecc$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$ecc$2f$build$2f$es2015$2f$ec_signature_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-ecc@2.3.15/node_modules/@peculiar/asn1-ecc/build/es2015/ec_signature_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
;
;
;
;
function unwrapEC2Signature(signature, crv) {
    const parsedSignature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(signature, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$ecc$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$ecc$2f$build$2f$es2015$2f$ec_signature_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ECDSASigValue"]);
    const rBytes = new Uint8Array(parsedSignature.r);
    const sBytes = new Uint8Array(parsedSignature.s);
    const componentLength = getSignatureComponentLength(crv);
    const rNormalizedBytes = toNormalizedBytes(rBytes, componentLength);
    const sNormalizedBytes = toNormalizedBytes(sBytes, componentLength);
    const finalSignature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].concat([
        rNormalizedBytes,
        sNormalizedBytes
    ]);
    return finalSignature;
}
/**
 * The SubtleCrypto Web Crypto API expects ECDSA signatures with `r` and `s` values to be encoded
 * to a specific length depending on the order of the curve. This function returns the expected
 * byte-length for each of the `r` and `s` signature components.
 *
 * See <https://www.w3.org/TR/WebCryptoAPI/#ecdsa-operations>
 */ function getSignatureComponentLength(crv) {
    switch(crv){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSECRV"].P256:
            return 32;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSECRV"].P384:
            return 48;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSECRV"].P521:
            return 66;
        default:
            throw new Error(`Unexpected COSE crv value of ${crv} (EC2)`);
    }
}
/**
 * Converts the ASN.1 integer representation to bytes of a specific length `n`.
 *
 * DER encodes integers as big-endian byte arrays, with as small as possible representation and
 * requires a leading `0` byte to disambiguate between negative and positive numbers. This means
 * that `r` and `s` can potentially not be the expected byte-length that is needed by the
 * SubtleCrypto Web Crypto API: if there are leading `0`s it can be shorter than expected, and if
 * it has a leading `1` bit, it can be one byte longer.
 *
 * See <https://www.itu.int/rec/T-REC-X.690-202102-I/en>
 * See <https://www.w3.org/TR/WebCryptoAPI/#ecdsa-operations>
 */ function toNormalizedBytes(bytes, componentLength) {
    let normalizedBytes;
    if (bytes.length < componentLength) {
        // In case the bytes are shorter than expected, we need to pad it with leading `0`s.
        normalizedBytes = new Uint8Array(componentLength);
        normalizedBytes.set(bytes, componentLength - bytes.length);
    } else if (bytes.length === componentLength) {
        normalizedBytes = bytes;
    } else if (bytes.length === componentLength + 1 && bytes[0] === 0 && (bytes[1] & 0x80) === 0x80) {
        // The bytes contain a leading `0` to encode that the integer is positive. This leading `0`
        // needs to be removed for compatibility with the SubtleCrypto Web Crypto API.
        normalizedBytes = bytes.subarray(1);
    } else {
        throw new Error(`Invalid signature component length ${bytes.length}, expected ${componentLength}`);
    }
    return normalizedBytes;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verify.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verify": (()=>verify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$verifyEC2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verifyEC2.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$verifyRSA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verifyRSA.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$verifyOKP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verifyOKP.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$unwrapEC2Signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/unwrapEC2Signature.js [app-route] (ecmascript)");
;
;
;
;
;
function verify(opts) {
    const { cosePublicKey, signature, data, shaHashOverride } = opts;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCOSEPublicKeyEC2"])(cosePublicKey)) {
        const crv = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].crv);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCOSECrv"])(crv)) {
            throw new Error(`unknown COSE curve ${crv}`);
        }
        const unwrappedSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$unwrapEC2Signature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unwrapEC2Signature"])(signature, crv);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$verifyEC2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyEC2"])({
            cosePublicKey,
            signature: unwrappedSignature,
            data,
            shaHashOverride
        });
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCOSEPublicKeyRSA"])(cosePublicKey)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$verifyRSA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyRSA"])({
            cosePublicKey,
            signature,
            data,
            shaHashOverride
        });
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCOSEPublicKeyOKP"])(cosePublicKey)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$verifyOKP$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyOKP"])({
            cosePublicKey,
            signature,
            data
        });
    }
    const kty = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].kty);
    throw new Error(`Signature verification with public key of kty ${kty} is not supported by this method`);
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$digest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/digest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$getRandomValues$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/getRandomValues.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * A collection of methods for isomorphic manipulation of trickier data types
 *
 * The goal with these is to make it easier to replace dependencies later that might not play well
 * with specific server-like runtimes that expose global Web APIs (CloudFlare Workers, Deno, Bun,
 * etc...), while also supporting execution in Node.
 */ __turbopack_esm__({});
;
;
;
;
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCBOR$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCBOR.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/generateChallenge.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "_generateChallengeInternals": (()=>_generateChallengeInternals),
    "generateChallenge": (()=>generateChallenge)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCrypto$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js [app-route] (ecmascript) <export * as isoCrypto>");
;
async function generateChallenge() {
    /**
     * WebAuthn spec says that 16 bytes is a good minimum:
     *
     * "In order to prevent replay attacks, the challenges MUST contain enough entropy to make
     * guessing them infeasible. Challenges SHOULD therefore be at least 16 bytes long."
     *
     * Just in case, let's double it
     */ const challenge = new Uint8Array(32);
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoCrypto$3e$__["isoCrypto"].getRandomValues(challenge);
    return _generateChallengeInternals.stubThis(challenge);
}
const _generateChallengeInternals = {
    stubThis: (value)=>value
};
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/generateRegistrationOptions.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateRegistrationOptions": (()=>generateRegistrationOptions),
    "supportedCOSEAlgorithmIdentifiers": (()=>supportedCOSEAlgorithmIdentifiers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$generateChallenge$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/generateChallenge.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$generateUserID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/generateUserID.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript) <export * as isoBase64URL>");
;
;
;
const supportedCOSEAlgorithmIdentifiers = [
    // EdDSA (In first position to encourage authenticators to use this over ES256)
    -8,
    // ECDSA w/ SHA-256
    -7,
    // ECDSA w/ SHA-512
    -36,
    // RSASSA-PSS w/ SHA-256
    -37,
    // RSASSA-PSS w/ SHA-384
    -38,
    // RSASSA-PSS w/ SHA-512
    -39,
    // RSASSA-PKCS1-v1_5 w/ SHA-256
    -257,
    // RSASSA-PKCS1-v1_5 w/ SHA-384
    -258,
    // RSASSA-PKCS1-v1_5 w/ SHA-512
    -259,
    // RSASSA-PKCS1-v1_5 w/ SHA-1 (Deprecated; here for legacy support)
    -65535
];
/**
 * Set up some default authenticator selection options as per the latest spec:
 * https://www.w3.org/TR/webauthn-2/#dictdef-authenticatorselectioncriteria
 *
 * Helps with some older platforms (e.g. Android 7.0 Nougat) that may not be aware of these
 * defaults.
 */ const defaultAuthenticatorSelection = {
    residentKey: 'preferred',
    userVerification: 'preferred'
};
/**
 * Use the most commonly-supported algorithms
 * See the following:
 *   - https://www.iana.org/assignments/cose/cose.xhtml#algorithms
 *   - https://w3c.github.io/webauthn/#dom-publickeycredentialcreationoptions-pubkeycredparams
 */ const defaultSupportedAlgorithmIDs = [
    -8,
    -7,
    -257
];
async function generateRegistrationOptions(options) {
    const { rpName, rpID, userName, userID, challenge = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$generateChallenge$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateChallenge"])(), userDisplayName = '', timeout = 60000, attestationType = 'none', excludeCredentials = [], authenticatorSelection = defaultAuthenticatorSelection, extensions, supportedAlgorithmIDs = defaultSupportedAlgorithmIDs, preferredAuthenticatorType } = options;
    /**
     * Prepare pubKeyCredParams from the array of algorithm ID's
     */ const pubKeyCredParams = supportedAlgorithmIDs.map((id)=>({
            alg: id,
            type: 'public-key'
        }));
    /**
     * Capture some of the nuances of how `residentKey` and `requireResidentKey` how either is set
     * depending on when either is defined in the options
     */ if (authenticatorSelection.residentKey === undefined) {
        /**
         * `residentKey`: "If no value is given then the effective value is `required` if
         * requireResidentKey is true or `discouraged` if it is false or absent."
         *
         * See https://www.w3.org/TR/webauthn-2/#dom-authenticatorselectioncriteria-residentkey
         */ if (authenticatorSelection.requireResidentKey) {
            authenticatorSelection.residentKey = 'required';
        } else {
        /**
             * FIDO Conformance v1.7.2 fails the first test if we do this, even though this is
             * technically compatible with the WebAuthn L2 spec...
             */ // authenticatorSelection.residentKey = 'discouraged';
        }
    } else {
        /**
         * `requireResidentKey`: "Relying Parties SHOULD set it to true if, and only if, residentKey is
         * set to "required""
         *
         * Spec says this property defaults to `false` so we should still be okay to assign `false` too
         *
         * See https://www.w3.org/TR/webauthn-2/#dom-authenticatorselectioncriteria-requireresidentkey
         */ authenticatorSelection.requireResidentKey = authenticatorSelection.residentKey === 'required';
    }
    /**
     * Preserve ability to specify `string` values for challenges
     */ let _challenge = challenge;
    if (typeof _challenge === 'string') {
        _challenge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].fromUTF8String(_challenge);
    }
    /**
     * Explicitly disallow use of strings for userID anymore because `isoBase64URL.fromBuffer()` below
     * will return an empty string if one gets through!
     */ if (typeof userID === 'string') {
        throw new Error(`String values for \`userID\` are no longer supported. See https://simplewebauthn.dev/docs/advanced/server/custom-user-ids`);
    }
    /**
     * Generate a user ID if one is not provided
     */ let _userID = userID;
    if (!_userID) {
        _userID = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$generateUserID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateUserID"])();
    }
    /**
     * Map authenticator preference to hints. Map to authenticatorAttachment as well for
     * backwards-compatibility.
     */ const hints = [];
    if (preferredAuthenticatorType) {
        if (preferredAuthenticatorType === 'securityKey') {
            hints.push('security-key');
            authenticatorSelection.authenticatorAttachment = 'cross-platform';
        } else if (preferredAuthenticatorType === 'localDevice') {
            hints.push('client-device');
            authenticatorSelection.authenticatorAttachment = 'platform';
        } else if (preferredAuthenticatorType === 'remoteDevice') {
            hints.push('hybrid');
            authenticatorSelection.authenticatorAttachment = 'cross-platform';
        }
    }
    return {
        challenge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].fromBuffer(_challenge),
        rp: {
            name: rpName,
            id: rpID
        },
        user: {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].fromBuffer(_userID),
            name: userName,
            displayName: userDisplayName
        },
        pubKeyCredParams,
        timeout,
        attestation: attestationType,
        excludeCredentials: excludeCredentials.map((cred)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].isBase64URL(cred.id)) {
                throw new Error(`excludeCredential id "${cred.id}" is not a valid base64url string`);
            }
            return {
                ...cred,
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].trimPadding(cred.id),
                type: 'public-key'
            };
        }),
        authenticatorSelection,
        extensions: {
            ...extensions,
            credProps: true
        },
        hints
    };
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/parseBackupFlags.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Make sense of Bits 3 and 4 in authenticator indicating:
 *
 * - Whether the credential can be used on multiple devices
 * - Whether the credential is backed up or not
 *
 * Invalid configurations will raise an `Error`
 */ __turbopack_esm__({
    "InvalidBackupFlags": (()=>InvalidBackupFlags),
    "parseBackupFlags": (()=>parseBackupFlags)
});
function parseBackupFlags({ be, bs }) {
    const credentialBackedUp = bs;
    let credentialDeviceType = 'singleDevice';
    if (be) {
        credentialDeviceType = 'multiDevice';
    }
    if (credentialDeviceType === 'singleDevice' && credentialBackedUp) {
        throw new InvalidBackupFlags('Single-device credential indicated that it was backed up, which should be impossible.');
    }
    return {
        credentialDeviceType,
        credentialBackedUp
    };
}
class InvalidBackupFlags extends Error {
    constructor(message){
        super(message);
        this.name = 'InvalidBackupFlags';
    }
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/matchExpectedRPID.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "matchExpectedRPID": (()=>matchExpectedRPID)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$toHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/toHash.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
;
;
async function matchExpectedRPID(rpIDHash, expectedRPIDs) {
    try {
        const matchedRPID = await Promise.any(expectedRPIDs.map((expected)=>{
            return new Promise((resolve, reject)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$toHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toHash"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].fromASCIIString(expected)).then((expectedRPIDHash)=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].areEqual(rpIDHash, expectedRPIDHash)) {
                        resolve(expected);
                    } else {
                        reject();
                    }
                });
            });
        }));
        return matchedRPID;
    } catch (err) {
        const _err = err;
        // This means no matches were found
        if (_err.name === 'AggregateError') {
            throw new UnexpectedRPIDHash();
        }
        // An unexpected error occurred
        throw err;
    }
}
class UnexpectedRPIDHash extends Error {
    constructor(){
        const message = 'Unexpected RP ID hash';
        super(message);
        this.name = 'UnexpectedRPIDHash';
    }
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/android-safetynet.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * GlobalSign Root CA
 *
 * Downloaded from https://pki.goog/roots.pem
 *
 * Valid until 2028-01-28 @ 04:00 PST
 *
 * SHA256 Fingerprint
 * EB:D4:10:40:E4:BB:3E:C7:42:C9:E3:81:D3:1E:F2:A4:1A:48:B6:68:5C:96:E7:CE:F3:C1:DF:6C:D4:33:1C:99
 */ __turbopack_esm__({
    "GlobalSign_Root_CA": (()=>GlobalSign_Root_CA)
});
const GlobalSign_Root_CA = `-----BEGIN CERTIFICATE-----
MIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkG
A1UEBhMCQkUxGTAXBgNVBAoTEEdsb2JhbFNpZ24gbnYtc2ExEDAOBgNVBAsTB1Jv
b3QgQ0ExGzAZBgNVBAMTEkdsb2JhbFNpZ24gUm9vdCBDQTAeFw05ODA5MDExMjAw
MDBaFw0yODAxMjgxMjAwMDBaMFcxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9i
YWxTaWduIG52LXNhMRAwDgYDVQQLEwdSb290IENBMRswGQYDVQQDExJHbG9iYWxT
aWduIFJvb3QgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDaDuaZ
jc6j40+Kfvvxi4Mla+pIH/EqsLmVEQS98GPR4mdmzxzdzxtIK+6NiY6arymAZavp
xy0Sy6scTHAHoT0KMM0VjU/43dSMUBUc71DuxC73/OlS8pF94G3VNTCOXkNz8kHp
1Wrjsok6Vjk4bwY8iGlbKk3Fp1S4bInMm/k8yuX9ifUSPJJ4ltbcdG6TRGHRjcdG
snUOhugZitVtbNV4FpWi6cgKOOvyJBNPc1STE4U6G7weNLWLBYy5d4ux2x8gkasJ
U26Qzns3dLlwR5EiUWMWea6xrkEmCMgZK9FGqkjWZCrXgzT/LCrBbBlDSgeF59N8
9iFo7+ryUp9/k5DPAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8E
BTADAQH/MB0GA1UdDgQWBBRge2YaRQ2XyolQL30EzTSo//z9SzANBgkqhkiG9w0B
AQUFAAOCAQEA1nPnfE920I2/7LqivjTFKDK1fPxsnCwrvQmeU79rXqoRSLblCKOz
yj1hTdNGCbM+w6DjY1Ub8rrvrTnhQ7k4o+YviiY776BQVvnGCv04zcQLcFGUl5gE
38NflNUVyRRBnMRddWQVDf9VMOyGj/8N7yy5Y0b2qvzfvGn9LhJIZJrglfCm7ymP
AbEVtQwdpf5pLGkkeB6zpxxxYu7KyJesF12KwvhHhm4qxFYxldBniYUr+WymXUad
DKqC5JlR3XC321Y9YeRq4VzW9v493kHMB65jUr9TU/Qr6cf9tveCX4XSQRjbgbME
HMUfpIBvFSDJ3gyICh3WZlXi/EjJKSZp4A==
-----END CERTIFICATE-----
`;
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/android-key.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Google Hardware Attestation Root 1
 *
 * Downloaded from https://developer.android.com/training/articles/security-key-attestation#root_certificate
 * (first entry)
 *
 * Valid until 2026-05-24 @ 09:28 PST
 *
 * SHA256 Fingerprint
 * C1:98:4A:3E:F4:5C:1E:2A:91:85:51:DE:10:60:3C:86:F7:05:1B:22:49:C4:89:1C:AE:32:30:EA:BD:0C:97:D5
 */ __turbopack_esm__({
    "Google_Hardware_Attestation_Root_1": (()=>Google_Hardware_Attestation_Root_1),
    "Google_Hardware_Attestation_Root_2": (()=>Google_Hardware_Attestation_Root_2),
    "Google_Hardware_Attestation_Root_3": (()=>Google_Hardware_Attestation_Root_3),
    "Google_Hardware_Attestation_Root_4": (()=>Google_Hardware_Attestation_Root_4)
});
const Google_Hardware_Attestation_Root_1 = `-----BEGIN CERTIFICATE-----
MIIFYDCCA0igAwIBAgIJAOj6GWMU0voYMA0GCSqGSIb3DQEBCwUAMBsxGTAXBgNV
BAUTEGY5MjAwOWU4NTNiNmIwNDUwHhcNMTYwNTI2MTYyODUyWhcNMjYwNTI0MTYy
ODUyWjAbMRkwFwYDVQQFExBmOTIwMDllODUzYjZiMDQ1MIICIjANBgkqhkiG9w0B
AQEFAAOCAg8AMIICCgKCAgEAr7bHgiuxpwHsK7Qui8xUFmOr75gvMsd/dTEDDJdS
Sxtf6An7xyqpRR90PL2abxM1dEqlXnf2tqw1Ne4Xwl5jlRfdnJLmN0pTy/4lj4/7
tv0Sk3iiKkypnEUtR6WfMgH0QZfKHM1+di+y9TFRtv6y//0rb+T+W8a9nsNL/ggj
nar86461qO0rOs2cXjp3kOG1FEJ5MVmFmBGtnrKpa73XpXyTqRxB/M0n1n/W9nGq
C4FSYa04T6N5RIZGBN2z2MT5IKGbFlbC8UrW0DxW7AYImQQcHtGl/m00QLVWutHQ
oVJYnFPlXTcHYvASLu+RhhsbDmxMgJJ0mcDpvsC4PjvB+TxywElgS70vE0XmLD+O
JtvsBslHZvPBKCOdT0MS+tgSOIfga+z1Z1g7+DVagf7quvmag8jfPioyKvxnK/Eg
sTUVi2ghzq8wm27ud/mIM7AY2qEORR8Go3TVB4HzWQgpZrt3i5MIlCaY504LzSRi
igHCzAPlHws+W0rB5N+er5/2pJKnfBSDiCiFAVtCLOZ7gLiMm0jhO2B6tUXHI/+M
RPjy02i59lINMRRev56GKtcd9qO/0kUJWdZTdA2XoS82ixPvZtXQpUpuL12ab+9E
aDK8Z4RHJYYfCT3Q5vNAXaiWQ+8PTWm2QgBR/bkwSWc+NpUFgNPN9PvQi8WEg5Um
AGMCAwEAAaOBpjCBozAdBgNVHQ4EFgQUNmHhAHyIBQlRi0RsR/8aTMnqTxIwHwYD
VR0jBBgwFoAUNmHhAHyIBQlRi0RsR/8aTMnqTxIwDwYDVR0TAQH/BAUwAwEB/zAO
BgNVHQ8BAf8EBAMCAYYwQAYDVR0fBDkwNzA1oDOgMYYvaHR0cHM6Ly9hbmRyb2lk
Lmdvb2dsZWFwaXMuY29tL2F0dGVzdGF0aW9uL2NybC8wDQYJKoZIhvcNAQELBQAD
ggIBACDIw41L3KlXG0aMiS//cqrG+EShHUGo8HNsw30W1kJtjn6UBwRM6jnmiwfB
Pb8VA91chb2vssAtX2zbTvqBJ9+LBPGCdw/E53Rbf86qhxKaiAHOjpvAy5Y3m00m
qC0w/Zwvju1twb4vhLaJ5NkUJYsUS7rmJKHHBnETLi8GFqiEsqTWpG/6ibYCv7rY
DBJDcR9W62BW9jfIoBQcxUCUJouMPH25lLNcDc1ssqvC2v7iUgI9LeoM1sNovqPm
QUiG9rHli1vXxzCyaMTjwftkJLkf6724DFhuKug2jITV0QkXvaJWF4nUaHOTNA4u
JU9WDvZLI1j83A+/xnAJUucIv/zGJ1AMH2boHqF8CY16LpsYgBt6tKxxWH00XcyD
CdW2KlBCeqbQPcsFmWyWugxdcekhYsAWyoSf818NUsZdBWBaR/OukXrNLfkQ79Iy
ZohZbvabO/X+MVT3rriAoKc8oE2Uws6DF+60PV7/WIPjNvXySdqspImSN78mflxD
qwLqRBYkA3I75qppLGG9rp7UCdRjxMl8ZDBld+7yvHVgt1cVzJx9xnyGCC23Uaic
MDSXYrB4I4WHXPGjxhZuCuPBLTdOLU8YRvMYdEvYebWHMpvwGCF6bAx3JBpIeOQ1
wDB5y0USicV3YgYGmi+NZfhA4URSh77Yd6uuJOJENRaNVTzk
-----END CERTIFICATE-----
`;
const Google_Hardware_Attestation_Root_2 = `-----BEGIN CERTIFICATE-----
MIIFHDCCAwSgAwIBAgIJANUP8luj8tazMA0GCSqGSIb3DQEBCwUAMBsxGTAXBgNV
BAUTEGY5MjAwOWU4NTNiNmIwNDUwHhcNMTkxMTIyMjAzNzU4WhcNMzQxMTE4MjAz
NzU4WjAbMRkwFwYDVQQFExBmOTIwMDllODUzYjZiMDQ1MIICIjANBgkqhkiG9w0B
AQEFAAOCAg8AMIICCgKCAgEAr7bHgiuxpwHsK7Qui8xUFmOr75gvMsd/dTEDDJdS
Sxtf6An7xyqpRR90PL2abxM1dEqlXnf2tqw1Ne4Xwl5jlRfdnJLmN0pTy/4lj4/7
tv0Sk3iiKkypnEUtR6WfMgH0QZfKHM1+di+y9TFRtv6y//0rb+T+W8a9nsNL/ggj
nar86461qO0rOs2cXjp3kOG1FEJ5MVmFmBGtnrKpa73XpXyTqRxB/M0n1n/W9nGq
C4FSYa04T6N5RIZGBN2z2MT5IKGbFlbC8UrW0DxW7AYImQQcHtGl/m00QLVWutHQ
oVJYnFPlXTcHYvASLu+RhhsbDmxMgJJ0mcDpvsC4PjvB+TxywElgS70vE0XmLD+O
JtvsBslHZvPBKCOdT0MS+tgSOIfga+z1Z1g7+DVagf7quvmag8jfPioyKvxnK/Eg
sTUVi2ghzq8wm27ud/mIM7AY2qEORR8Go3TVB4HzWQgpZrt3i5MIlCaY504LzSRi
igHCzAPlHws+W0rB5N+er5/2pJKnfBSDiCiFAVtCLOZ7gLiMm0jhO2B6tUXHI/+M
RPjy02i59lINMRRev56GKtcd9qO/0kUJWdZTdA2XoS82ixPvZtXQpUpuL12ab+9E
aDK8Z4RHJYYfCT3Q5vNAXaiWQ+8PTWm2QgBR/bkwSWc+NpUFgNPN9PvQi8WEg5Um
AGMCAwEAAaNjMGEwHQYDVR0OBBYEFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMB8GA1Ud
IwQYMBaAFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMA8GA1UdEwEB/wQFMAMBAf8wDgYD
VR0PAQH/BAQDAgIEMA0GCSqGSIb3DQEBCwUAA4ICAQBOMaBc8oumXb2voc7XCWnu
XKhBBK3e2KMGz39t7lA3XXRe2ZLLAkLM5y3J7tURkf5a1SutfdOyXAmeE6SRo83U
h6WszodmMkxK5GM4JGrnt4pBisu5igXEydaW7qq2CdC6DOGjG+mEkN8/TA6p3cno
L/sPyz6evdjLlSeJ8rFBH6xWyIZCbrcpYEJzXaUOEaxxXxgYz5/cTiVKN2M1G2ok
QBUIYSY6bjEL4aUN5cfo7ogP3UvliEo3Eo0YgwuzR2v0KR6C1cZqZJSTnghIC/vA
D32KdNQ+c3N+vl2OTsUVMC1GiWkngNx1OO1+kXW+YTnnTUOtOIswUP/Vqd5SYgAI
mMAfY8U9/iIgkQj6T2W6FsScy94IN9fFhE1UtzmLoBIuUFsVXJMTz+Jucth+IqoW
Fua9v1R93/k98p41pjtFX+H8DslVgfP097vju4KDlqN64xV1grw3ZLl4CiOe/A91
oeLm2UHOq6wn3esB4r2EIQKb6jTVGu5sYCcdWpXr0AUVqcABPdgL+H7qJguBw09o
jm6xNIrw2OocrDKsudk/okr/AwqEyPKw9WnMlQgLIKw1rODG2NvU9oR3GVGdMkUB
ZutL8VuFkERQGt6vQ2OCw0sV47VMkuYbacK/xyZFiRcrPJPb41zgbQj9XAEyLKCH
ex0SdDrx+tWUDqG8At2JHA==
-----END CERTIFICATE-----
`;
const Google_Hardware_Attestation_Root_3 = `
-----BEGIN CERTIFICATE-----
MIIFHDCCAwSgAwIBAgIJAMNrfES5rhgxMA0GCSqGSIb3DQEBCwUAMBsxGTAXBgNV
BAUTEGY5MjAwOWU4NTNiNmIwNDUwHhcNMjExMTE3MjMxMDQyWhcNMzYxMTEzMjMx
MDQyWjAbMRkwFwYDVQQFExBmOTIwMDllODUzYjZiMDQ1MIICIjANBgkqhkiG9w0B
AQEFAAOCAg8AMIICCgKCAgEAr7bHgiuxpwHsK7Qui8xUFmOr75gvMsd/dTEDDJdS
Sxtf6An7xyqpRR90PL2abxM1dEqlXnf2tqw1Ne4Xwl5jlRfdnJLmN0pTy/4lj4/7
tv0Sk3iiKkypnEUtR6WfMgH0QZfKHM1+di+y9TFRtv6y//0rb+T+W8a9nsNL/ggj
nar86461qO0rOs2cXjp3kOG1FEJ5MVmFmBGtnrKpa73XpXyTqRxB/M0n1n/W9nGq
C4FSYa04T6N5RIZGBN2z2MT5IKGbFlbC8UrW0DxW7AYImQQcHtGl/m00QLVWutHQ
oVJYnFPlXTcHYvASLu+RhhsbDmxMgJJ0mcDpvsC4PjvB+TxywElgS70vE0XmLD+O
JtvsBslHZvPBKCOdT0MS+tgSOIfga+z1Z1g7+DVagf7quvmag8jfPioyKvxnK/Eg
sTUVi2ghzq8wm27ud/mIM7AY2qEORR8Go3TVB4HzWQgpZrt3i5MIlCaY504LzSRi
igHCzAPlHws+W0rB5N+er5/2pJKnfBSDiCiFAVtCLOZ7gLiMm0jhO2B6tUXHI/+M
RPjy02i59lINMRRev56GKtcd9qO/0kUJWdZTdA2XoS82ixPvZtXQpUpuL12ab+9E
aDK8Z4RHJYYfCT3Q5vNAXaiWQ+8PTWm2QgBR/bkwSWc+NpUFgNPN9PvQi8WEg5Um
AGMCAwEAAaNjMGEwHQYDVR0OBBYEFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMB8GA1Ud
IwQYMBaAFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMA8GA1UdEwEB/wQFMAMBAf8wDgYD
VR0PAQH/BAQDAgIEMA0GCSqGSIb3DQEBCwUAA4ICAQBTNNZe5cuf8oiq+jV0itTG
zWVhSTjOBEk2FQvh11J3o3lna0o7rd8RFHnN00q4hi6TapFhh4qaw/iG6Xg+xOan
63niLWIC5GOPFgPeYXM9+nBb3zZzC8ABypYuCusWCmt6Tn3+Pjbz3MTVhRGXuT/T
QH4KGFY4PhvzAyXwdjTOCXID+aHud4RLcSySr0Fq/L+R8TWalvM1wJJPhyRjqRCJ
erGtfBagiALzvhnmY7U1qFcS0NCnKjoO7oFedKdWlZz0YAfu3aGCJd4KHT0MsGiL
Zez9WP81xYSrKMNEsDK+zK5fVzw6jA7cxmpXcARTnmAuGUeI7VVDhDzKeVOctf3a
0qQLwC+d0+xrETZ4r2fRGNw2YEs2W8Qj6oDcfPvq9JySe7pJ6wcHnl5EZ0lwc4xH
7Y4Dx9RA1JlfooLMw3tOdJZH0enxPXaydfAD3YifeZpFaUzicHeLzVJLt9dvGB0b
HQLE4+EqKFgOZv2EoP686DQqbVS1u+9k0p2xbMA105TBIk7npraa8VM0fnrRKi7w
lZKwdH+aNAyhbXRW9xsnODJ+g8eF452zvbiKKngEKirK5LGieoXBX7tZ9D1GNBH2
Ob3bKOwwIWdEFle/YF/h6zWgdeoaNGDqVBrLr2+0DtWoiB1aDEjLWl9FmyIUyUm7
mD/vFDkzF+wm7cyWpQpCVQ==
-----END CERTIFICATE-----
`;
const Google_Hardware_Attestation_Root_4 = `
-----BEGIN CERTIFICATE-----
MIIFHDCCAwSgAwIBAgIJAPHBcqaZ6vUdMA0GCSqGSIb3DQEBCwUAMBsxGTAXBgNV
BAUTEGY5MjAwOWU4NTNiNmIwNDUwHhcNMjIwMzIwMTgwNzQ4WhcNNDIwMzE1MTgw
NzQ4WjAbMRkwFwYDVQQFExBmOTIwMDllODUzYjZiMDQ1MIICIjANBgkqhkiG9w0B
AQEFAAOCAg8AMIICCgKCAgEAr7bHgiuxpwHsK7Qui8xUFmOr75gvMsd/dTEDDJdS
Sxtf6An7xyqpRR90PL2abxM1dEqlXnf2tqw1Ne4Xwl5jlRfdnJLmN0pTy/4lj4/7
tv0Sk3iiKkypnEUtR6WfMgH0QZfKHM1+di+y9TFRtv6y//0rb+T+W8a9nsNL/ggj
nar86461qO0rOs2cXjp3kOG1FEJ5MVmFmBGtnrKpa73XpXyTqRxB/M0n1n/W9nGq
C4FSYa04T6N5RIZGBN2z2MT5IKGbFlbC8UrW0DxW7AYImQQcHtGl/m00QLVWutHQ
oVJYnFPlXTcHYvASLu+RhhsbDmxMgJJ0mcDpvsC4PjvB+TxywElgS70vE0XmLD+O
JtvsBslHZvPBKCOdT0MS+tgSOIfga+z1Z1g7+DVagf7quvmag8jfPioyKvxnK/Eg
sTUVi2ghzq8wm27ud/mIM7AY2qEORR8Go3TVB4HzWQgpZrt3i5MIlCaY504LzSRi
igHCzAPlHws+W0rB5N+er5/2pJKnfBSDiCiFAVtCLOZ7gLiMm0jhO2B6tUXHI/+M
RPjy02i59lINMRRev56GKtcd9qO/0kUJWdZTdA2XoS82ixPvZtXQpUpuL12ab+9E
aDK8Z4RHJYYfCT3Q5vNAXaiWQ+8PTWm2QgBR/bkwSWc+NpUFgNPN9PvQi8WEg5Um
AGMCAwEAAaNjMGEwHQYDVR0OBBYEFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMB8GA1Ud
IwQYMBaAFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMA8GA1UdEwEB/wQFMAMBAf8wDgYD
VR0PAQH/BAQDAgIEMA0GCSqGSIb3DQEBCwUAA4ICAQB8cMqTllHc8U+qCrOlg3H7
174lmaCsbo/bJ0C17JEgMLb4kvrqsXZs01U3mB/qABg/1t5Pd5AORHARs1hhqGIC
W/nKMav574f9rZN4PC2ZlufGXb7sIdJpGiO9ctRhiLuYuly10JccUZGEHpHSYM2G
tkgYbZba6lsCPYAAP83cyDV+1aOkTf1RCp/lM0PKvmxYN10RYsK631jrleGdcdkx
oSK//mSQbgcWnmAEZrzHoF1/0gso1HZgIn0YLzVhLSA/iXCX4QT2h3J5z3znluKG
1nv8NQdxei2DIIhASWfu804CA96cQKTTlaae2fweqXjdN1/v2nqOhngNyz1361mF
mr4XmaKH/ItTwOe72NI9ZcwS1lVaCvsIkTDCEXdm9rCNPAY10iTunIHFXRh+7KPz
lHGewCq/8TOohBRn0/NNfh7uRslOSZ/xKbN9tMBtw37Z8d2vvnXq/YWdsm1+JLVw
n6yYD/yacNJBlwpddla8eaVMjsF6nBnIgQOf9zKSe06nSTqvgwUHosgOECZJZ1Eu
zbH4yswbt02tKtKEFhx+v+OTge/06V+jGsqTWLsfrOCNLuA8H++z+pUENmpqnnHo
vaI47gC+TNpkgYGkkBT6B/m/U01BuOBBTzhIlMEZq9qkDWuM2cA5kW5V3FJUcfHn
w1IdYIg2Wxg7yHcQZemFQg==
-----END CERTIFICATE-----
`;
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/apple.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Apple WebAuthn Root CA
 *
 * Downloaded from https://www.apple.com/certificateauthority/Apple_WebAuthn_Root_CA.pem
 *
 * Valid until 2045-03-14 @ 17:00 PST
 *
 * SHA256 Fingerprint
 * 09:15:DD:5C:07:A2:8D:B5:49:D1:F6:77:BB:5A:75:D4:BF:BE:95:61:A7:73:42:43:27:76:2E:9E:02:F9:BB:29
 */ __turbopack_esm__({
    "Apple_WebAuthn_Root_CA": (()=>Apple_WebAuthn_Root_CA)
});
const Apple_WebAuthn_Root_CA = `-----BEGIN CERTIFICATE-----
MIICEjCCAZmgAwIBAgIQaB0BbHo84wIlpQGUKEdXcTAKBggqhkjOPQQDAzBLMR8w
HQYDVQQDDBZBcHBsZSBXZWJBdXRobiBSb290IENBMRMwEQYDVQQKDApBcHBsZSBJ
bmMuMRMwEQYDVQQIDApDYWxpZm9ybmlhMB4XDTIwMDMxODE4MjEzMloXDTQ1MDMx
NTAwMDAwMFowSzEfMB0GA1UEAwwWQXBwbGUgV2ViQXV0aG4gUm9vdCBDQTETMBEG
A1UECgwKQXBwbGUgSW5jLjETMBEGA1UECAwKQ2FsaWZvcm5pYTB2MBAGByqGSM49
AgEGBSuBBAAiA2IABCJCQ2pTVhzjl4Wo6IhHtMSAzO2cv+H9DQKev3//fG59G11k
xu9eI0/7o6V5uShBpe1u6l6mS19S1FEh6yGljnZAJ+2GNP1mi/YK2kSXIuTHjxA/
pcoRf7XkOtO4o1qlcaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUJtdk
2cV4wlpn0afeaxLQG2PxxtcwDgYDVR0PAQH/BAQDAgEGMAoGCCqGSM49BAMDA2cA
MGQCMFrZ+9DsJ1PW9hfNdBywZDsWDbWFp28it1d/5w2RPkRX3Bbn/UbDTNLx7Jr3
jAGGiQIwHFj+dJZYUJR786osByBelJYsVZd2GbHQu209b5RCmGQ21gpSAk9QZW4B
1bWeT0vT
-----END CERTIFICATE-----
`;
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/mds.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * GlobalSign Root CA - R3
 *
 * Downloaded from https://valid.r3.roots.globalsign.com/
 *
 * Valid until 2029-03-18 @ 00:00 PST
 *
 * SHA256 Fingerprint
 * CB:B5:22:D7:B7:F1:27:AD:6A:01:13:86:5B:DF:1C:D4:10:2E:7D:07:59:AF:63:5A:7C:F4:72:0D:C9:63:C5:3B
 */ __turbopack_esm__({
    "GlobalSign_Root_CA_R3": (()=>GlobalSign_Root_CA_R3)
});
const GlobalSign_Root_CA_R3 = `-----BEGIN CERTIFICATE-----
 MIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4G
 A1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjMxEzARBgNVBAoTCkdsb2JhbFNp
 Z24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDkwMzE4MTAwMDAwWhcNMjkwMzE4
 MTAwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEG
 A1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjCCASIwDQYJKoZI
 hvcNAQEBBQADggEPADCCAQoCggEBAMwldpB5BngiFvXAg7aEyiie/QV2EcWtiHL8
 RgJDx7KKnQRfJMsuS+FggkbhUqsMgUdwbN1k0ev1LKMPgj0MK66X17YUhhB5uzsT
 gHeMCOFJ0mpiLx9e+pZo34knlTifBtc+ycsmWQ1z3rDI6SYOgxXG71uL0gRgykmm
 KPZpO/bLyCiR5Z2KYVc3rHQU3HTgOu5yLy6c+9C7v/U9AOEGM+iCK65TpjoWc4zd
 QQ4gOsC0p6Hpsk+QLjJg6VfLuQSSaGjlOCZgdbKfd/+RFO+uIEn8rUAVSNECMWEZ
 XriX7613t2Saer9fwRPvm2L7DWzgVGkWqQPabumDk3F2xmmFghcCAwEAAaNCMEAw
 DgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFI/wS3+o
 LkUkrk1Q+mOai97i3Ru8MA0GCSqGSIb3DQEBCwUAA4IBAQBLQNvAUKr+yAzv95ZU
 RUm7lgAJQayzE4aGKAczymvmdLm6AC2upArT9fHxD4q/c2dKg8dEe3jgr25sbwMp
 jjM5RcOO5LlXbKr8EpbsU8Yt5CRsuZRj+9xTaGdWPoO4zzUhw8lo/s7awlOqzJCK
 6fBdRoyV3XpYKBovHd7NADdBj+1EbddTKJd+82cEHhXXipa0095MJ6RMG3NzdvQX
 mcIfeg7jLQitChws/zyrVQ4PkX4268NXSb7hLi18YIvDQVETI53O9zJrlAGomecs
 Mx86OyXShkDOOyyGeMlhLxS67ttVb9+E7gUJTb0o2HLO02JQZR7rkpeDMdmztcpH
 WD9f
 -----END CERTIFICATE-----
 `;
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/settingsService.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SettingsService": (()=>SettingsService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCertBufferToPEM.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$defaultRootCerts$2f$android$2d$safetynet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/android-safetynet.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$defaultRootCerts$2f$android$2d$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/android-key.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$defaultRootCerts$2f$apple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/apple.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$defaultRootCerts$2f$mds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/mds.js [app-route] (ecmascript)");
;
;
;
;
;
class BaseSettingsService {
    constructor(){
        // Certificates are stored as PEM-formatted strings
        Object.defineProperty(this, "pemCertificates", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.pemCertificates = new Map();
    }
    setRootCertificates(opts) {
        const { identifier, certificates } = opts;
        const newCertificates = [];
        for (const cert of certificates){
            if (cert instanceof Uint8Array) {
                newCertificates.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertCertBufferToPEM"])(cert));
            } else {
                newCertificates.push(cert);
            }
        }
        this.pemCertificates.set(identifier, newCertificates);
    }
    getRootCertificates(opts) {
        const { identifier } = opts;
        return this.pemCertificates.get(identifier) ?? [];
    }
}
const SettingsService = new BaseSettingsService();
// Initialize default certificates
SettingsService.setRootCertificates({
    identifier: 'android-key',
    certificates: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$defaultRootCerts$2f$android$2d$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Google_Hardware_Attestation_Root_1"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$defaultRootCerts$2f$android$2d$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Google_Hardware_Attestation_Root_2"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$defaultRootCerts$2f$android$2d$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Google_Hardware_Attestation_Root_3"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$defaultRootCerts$2f$android$2d$key$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Google_Hardware_Attestation_Root_4"]
    ]
});
SettingsService.setRootCertificates({
    identifier: 'android-safetynet',
    certificates: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$defaultRootCerts$2f$android$2d$safetynet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GlobalSign_Root_CA"]
    ]
});
SettingsService.setRootCertificates({
    identifier: 'apple',
    certificates: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$defaultRootCerts$2f$apple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Apple_WebAuthn_Root_CA"]
    ]
});
SettingsService.setRootCertificates({
    identifier: 'mds',
    certificates: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$defaultRootCerts$2f$mds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GlobalSign_Root_CA_R3"]
    ]
});
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationFIDOU2F.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyAttestationFIDOU2F": (()=>verifyAttestationFIDOU2F)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCOSEtoPKCS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCOSEtoPKCS.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCertBufferToPEM.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/validateCertificatePath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/verifySignature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
;
;
;
;
;
;
async function verifyAttestationFIDOU2F(options) {
    const { attStmt, clientDataHash, rpIdHash, credentialID, credentialPublicKey, aaguid, rootCertificates } = options;
    const reservedByte = Uint8Array.from([
        0x00
    ]);
    const publicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCOSEtoPKCS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertCOSEtoPKCS"])(credentialPublicKey);
    const signatureBase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].concat([
        reservedByte,
        rpIdHash,
        clientDataHash,
        credentialID,
        publicKey
    ]);
    const sig = attStmt.get('sig');
    const x5c = attStmt.get('x5c');
    if (!x5c) {
        throw new Error('No attestation certificate provided in attestation statement (FIDOU2F)');
    }
    if (!sig) {
        throw new Error('No attestation signature provided in attestation statement (FIDOU2F)');
    }
    // FIDO spec says that aaguid _must_ equal 0x00 here to be legit
    const aaguidToHex = Number.parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].toHex(aaguid), 16);
    if (aaguidToHex !== 0x00) {
        throw new Error(`AAGUID "${aaguidToHex}" was not expected value`);
    }
    try {
        // Try validating the certificate path using the root certificates set via SettingsService
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateCertificatePath"])(x5c.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertCertBufferToPEM"]), rootCertificates);
    } catch (err) {
        const _err = err;
        throw new Error(`${_err.message} (FIDOU2F)`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySignature"])({
        signature: sig,
        data: signatureBase,
        x509Certificate: x5c[0],
        hashAlgorithm: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].ES256
    });
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/validateExtFIDOGenCEAAGUID.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "validateExtFIDOGenCEAAGUID": (()=>validateExtFIDOGenCEAAGUID)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/parser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$types$2f$octet_string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/types/octet_string.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
;
;
/**
 * Attestation Certificate Extension OID: `id-fido-gen-ce-aaguid`
 *
 * Sourced from https://fidoalliance.org/specs/fido-v2.0-ps-20150904/fido-key-attestation-v2.0-ps-20150904.html#verifying-an-attestation-statement
 */ const id_fido_gen_ce_aaguid = '1.3.6.1.4.1.45724.1.1.4';
function validateExtFIDOGenCEAAGUID(certExtensions, aaguid) {
    // The certificate had no extensions so there's nothing to validate
    if (!certExtensions) {
        return true;
    }
    const extFIDOGenCEAAGUID = certExtensions.find((ext)=>ext.extnID === id_fido_gen_ce_aaguid);
    // The extension isn't present so there's nothing to validate
    if (!extFIDOGenCEAAGUID) {
        return true;
    }
    // Parse the extension value
    const parsedExtFIDOGenCEAAGUID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(extFIDOGenCEAAGUID.extnValue, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$types$2f$octet_string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OctetString"]);
    const extValue = new Uint8Array(parsedExtFIDOGenCEAAGUID.buffer);
    // Compare the two values
    const aaguidAndExtAreEqual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].areEqual(aaguid, extValue);
    if (!aaguidAndExtAreEqual) {
        const _debugExtHex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].toHex(extValue);
        const _debugAAGUIDHex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].toHex(aaguid);
        throw new Error(`Certificate extension id-fido-gen-ce-aaguid (${id_fido_gen_ce_aaguid}) value of "${_debugExtHex}" was present but not equal to attestation statement AAGUID value of "${_debugAAGUIDHex}"`);
    }
    return true;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/logging.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// const defaultLogger = debug('SimpleWebAuthn');
/**
 * Generate an instance of a `debug` logger that extends off of the "simplewebauthn" namespace for
 * consistent naming.
 *
 * See https://www.npmjs.com/package/debug for information on how to control logging output when
 * using @simplewebauthn/server
 *
 * Example:
 *
 * ```
 * const log = getLogger('mds');
 * log('hello'); // simplewebauthn:mds hello +0ms
 * ```
 */ __turbopack_esm__({
    "getLogger": (()=>getLogger)
});
function getLogger(_name) {
    // This is a noop for now while I search for a better debug logger technique
    return (_message, ..._rest)=>{};
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/metadata/parseJWT.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "parseJWT": (()=>parseJWT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript) <export * as isoBase64URL>");
;
function parseJWT(jwt) {
    const parts = jwt.split('.');
    return [
        JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].toUTF8String(parts[0])),
        JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].toUTF8String(parts[1])),
        parts[2]
    ];
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/metadata/verifyJWT.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyJWT": (()=>verifyJWT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertX509PublicKeyToCOSE$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertX509PublicKeyToCOSE.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$verifyEC2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verifyEC2.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$verifyRSA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verifyRSA.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript) <export * as isoBase64URL>");
;
;
;
;
;
function verifyJWT(jwt, leafCert) {
    const [header, payload, signature] = jwt.split('.');
    const certCOSE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertX509PublicKeyToCOSE$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertX509PublicKeyToCOSE"])(leafCert);
    const data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].fromUTF8String(`${header}.${payload}`);
    const signatureBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].toBuffer(signature);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCOSEPublicKeyEC2"])(certCOSE)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$verifyEC2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyEC2"])({
            data,
            signature: signatureBytes,
            cosePublicKey: certCOSE,
            shaHashOverride: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].ES256
        });
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCOSEPublicKeyRSA"])(certCOSE)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoCrypto$2f$verifyRSA$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyRSA"])({
            data,
            signature: signatureBytes,
            cosePublicKey: certCOSE
        });
    }
    const kty = certCOSE.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].kty);
    throw new Error(`JWT verification with public key of kty ${kty} is not supported by this method`);
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/metadataService.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BaseMetadataService": (()=>BaseMetadataService),
    "MetadataService": (()=>MetadataService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/validateCertificatePath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCertBufferToPEM.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertAAGUIDToString$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertAAGUIDToString.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$settingsService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/settingsService.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$logging$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/logging.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertPEMToBytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertPEMToBytes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$fetch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/fetch.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$metadata$2f$parseJWT$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/metadata/parseJWT.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$metadata$2f$verifyJWT$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/metadata/verifyJWT.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
const defaultURLMDS = 'https://mds.fidoalliance.org/'; // v3
var SERVICE_STATE;
(function(SERVICE_STATE) {
    SERVICE_STATE[SERVICE_STATE["DISABLED"] = 0] = "DISABLED";
    SERVICE_STATE[SERVICE_STATE["REFRESHING"] = 1] = "REFRESHING";
    SERVICE_STATE[SERVICE_STATE["READY"] = 2] = "READY";
})(SERVICE_STATE || (SERVICE_STATE = {}));
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$logging$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLogger"])('MetadataService');
class BaseMetadataService {
    constructor(){
        Object.defineProperty(this, "mdsCache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "statementCache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: SERVICE_STATE.DISABLED
        });
        Object.defineProperty(this, "verificationMode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'strict'
        });
    }
    async initialize(opts = {}) {
        const { mdsServers = [
            defaultURLMDS
        ], statements, verificationMode } = opts;
        this.setState(SERVICE_STATE.REFRESHING);
        // If metadata statements are provided, load them into the cache first
        if (statements?.length) {
            let statementsAdded = 0;
            statements.forEach((statement)=>{
                // Only cache statements that are for FIDO2-compatible authenticators
                if (statement.aaguid) {
                    this.statementCache[statement.aaguid] = {
                        entry: {
                            metadataStatement: statement,
                            statusReports: [],
                            timeOfLastStatusChange: '1970-01-01'
                        },
                        url: ''
                    };
                    statementsAdded += 1;
                }
            });
            log(`Cached ${statementsAdded} local statements`);
        }
        // If MDS servers are provided, then process them and add their statements to the cache
        if (mdsServers?.length) {
            // Get a current count so we know how many new statements we've added from MDS servers
            const currentCacheCount = Object.keys(this.statementCache).length;
            let numServers = mdsServers.length;
            for (const url of mdsServers){
                try {
                    await this.downloadBlob({
                        url,
                        no: 0,
                        nextUpdate: new Date(0)
                    });
                } catch (err) {
                    // Notify of the error and move on
                    log(`Could not download BLOB from ${url}:`, err);
                    numServers -= 1;
                }
            }
            // Calculate the difference to get the total number of new statements we successfully added
            const newCacheCount = Object.keys(this.statementCache).length;
            const cacheDiff = newCacheCount - currentCacheCount;
            log(`Cached ${cacheDiff} statements from ${numServers} metadata server(s)`);
        }
        if (verificationMode) {
            this.verificationMode = verificationMode;
        }
        this.setState(SERVICE_STATE.READY);
    }
    async getStatement(aaguid) {
        if (this.state === SERVICE_STATE.DISABLED) {
            return;
        }
        if (!aaguid) {
            return;
        }
        if (aaguid instanceof Uint8Array) {
            aaguid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertAAGUIDToString$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertAAGUIDToString"])(aaguid);
        }
        // If a cache refresh is in progress then pause this until the service is ready
        await this.pauseUntilReady();
        // Try to grab a cached statement
        const cachedStatement = this.statementCache[aaguid];
        if (!cachedStatement) {
            if (this.verificationMode === 'strict') {
                // FIDO conformance requires RP's to only support registered AAGUID's
                throw new Error(`No metadata statement found for aaguid "${aaguid}"`);
            }
            // Allow registration verification to continue without using metadata
            return;
        }
        // If the statement points to an MDS API, check the MDS' nextUpdate to see if we need to refresh
        if (cachedStatement.url) {
            const mds = this.mdsCache[cachedStatement.url];
            const now = new Date();
            if (now > mds.nextUpdate) {
                try {
                    this.setState(SERVICE_STATE.REFRESHING);
                    await this.downloadBlob(mds);
                } finally{
                    this.setState(SERVICE_STATE.READY);
                }
            }
        }
        const { entry } = cachedStatement;
        // Check to see if the this aaguid has a status report with a "compromised" status
        for (const report of entry.statusReports){
            const { status } = report;
            if (status === 'USER_VERIFICATION_BYPASS' || status === 'ATTESTATION_KEY_COMPROMISE' || status === 'USER_KEY_REMOTE_COMPROMISE' || status === 'USER_KEY_PHYSICAL_COMPROMISE') {
                throw new Error(`Detected compromised aaguid "${aaguid}"`);
            }
        }
        return entry.metadataStatement;
    }
    /**
     * Download and process the latest BLOB from MDS
     */ async downloadBlob(mds) {
        const { url, no } = mds;
        // Get latest "BLOB" (FIDO's terminology, not mine)
        const resp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$fetch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetch"])(url);
        const data = await resp.text();
        // Parse the JWT
        const parsedJWT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$metadata$2f$parseJWT$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseJWT"])(data);
        const header = parsedJWT[0];
        const payload = parsedJWT[1];
        if (payload.no <= no) {
            // From FIDO MDS docs: "also ignore the file if its number (no) is less or equal to the
            // number of the last BLOB cached locally."
            throw new Error(`Latest BLOB no. "${payload.no}" is not greater than previous ${no}`);
        }
        const headerCertsPEM = header.x5c.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertCertBufferToPEM"]);
        try {
            // Validate the certificate chain
            const rootCerts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$settingsService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingsService"].getRootCertificates({
                identifier: 'mds'
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateCertificatePath"])(headerCertsPEM, rootCerts);
        } catch (error) {
            const _error = error;
            // From FIDO MDS docs: "ignore the file if the chain cannot be verified or if one of the
            // chain certificates is revoked"
            throw new Error(`BLOB certificate path could not be validated: ${_error.message}`);
        }
        // Verify the BLOB JWT signature
        const leafCert = headerCertsPEM[0];
        const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$metadata$2f$verifyJWT$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyJWT"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertPEMToBytes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertPEMToBytes"])(leafCert));
        if (!verified) {
            // From FIDO MDS docs: "The FIDO Server SHOULD ignore the file if the signature is invalid."
            throw new Error('BLOB signature could not be verified');
        }
        // Cache statements for FIDO2 devices
        for (const entry of payload.entries){
            // Only cache entries with an `aaguid`
            if (entry.aaguid) {
                this.statementCache[entry.aaguid] = {
                    entry,
                    url
                };
            }
        }
        // Remember info about the server so we can refresh later
        const [year, month, day] = payload.nextUpdate.split('-');
        this.mdsCache[url] = {
            ...mds,
            // Store the payload `no` to make sure we're getting the next BLOB in the sequence
            no: payload.no,
            // Convert the nextUpdate property into a Date so we can determine when to re-download
            nextUpdate: new Date(parseInt(year, 10), // Months need to be zero-indexed
            parseInt(month, 10) - 1, parseInt(day, 10))
        };
    }
    /**
     * A helper method to pause execution until the service is ready
     */ pauseUntilReady() {
        if (this.state === SERVICE_STATE.READY) {
            return new Promise((resolve)=>{
                resolve();
            });
        }
        // State isn't ready, so set up polling
        const readyPromise = new Promise((resolve, reject)=>{
            const totalTimeoutMS = 70000;
            const intervalMS = 100;
            let iterations = totalTimeoutMS / intervalMS;
            // Check service state every `intervalMS` milliseconds
            const intervalID = globalThis.setInterval(()=>{
                if (iterations < 1) {
                    clearInterval(intervalID);
                    reject(`State did not become ready in ${totalTimeoutMS / 1000} seconds`);
                } else if (this.state === SERVICE_STATE.READY) {
                    clearInterval(intervalID);
                    resolve();
                }
                iterations -= 1;
            }, intervalMS);
        });
        return readyPromise;
    }
    /**
     * Report service status on change
     */ setState(newState) {
        this.state = newState;
        if (newState === SERVICE_STATE.DISABLED) {
            log('MetadataService is DISABLED');
        } else if (newState === SERVICE_STATE.REFRESHING) {
            log('MetadataService is REFRESHING');
        } else if (newState === SERVICE_STATE.READY) {
            log('MetadataService is READY');
        }
    }
}
const MetadataService = new BaseMetadataService();
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/metadata/verifyAttestationWithMetadata.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "algSignToCOSEInfoMap": (()=>algSignToCOSEInfoMap),
    "verifyAttestationWithMetadata": (()=>verifyAttestationWithMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCertBufferToPEM.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/validateCertificatePath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeCredentialPublicKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/decodeCredentialPublicKey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
;
;
;
;
async function verifyAttestationWithMetadata({ statement, credentialPublicKey, x5c, attestationStatementAlg }) {
    const { authenticationAlgorithms, authenticatorGetInfo, attestationRootCertificates } = statement;
    // Make sure the alg in the attestation statement matches one of the ones specified in metadata
    const keypairCOSEAlgs = new Set();
    authenticationAlgorithms.forEach((algSign)=>{
        // Map algSign string to { kty, alg, crv }
        const algSignCOSEINFO = algSignToCOSEInfoMap[algSign];
        // Keeping this statement here just in case MDS returns something unexpected
        if (algSignCOSEINFO) {
            keypairCOSEAlgs.add(algSignCOSEINFO);
        }
    });
    // Extract the public key's COSE info for comparison
    const decodedPublicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeCredentialPublicKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeCredentialPublicKey"])(credentialPublicKey);
    const kty = decodedPublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].kty);
    const alg = decodedPublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].alg);
    if (!kty) {
        throw new Error('Credential public key was missing kty');
    }
    if (!alg) {
        throw new Error('Credential public key was missing alg');
    }
    if (!kty) {
        throw new Error('Credential public key was missing kty');
    }
    // Assume everything is a number because these values should be
    const publicKeyCOSEInfo = {
        kty,
        alg
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCOSEPublicKeyEC2"])(decodedPublicKey)) {
        const crv = decodedPublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].crv);
        publicKeyCOSEInfo.crv = crv;
    }
    /**
     * Attempt to match the credential public key's algorithm to one specified in the device's
     * metadata
     */ let foundMatch = false;
    for (const keypairAlg of keypairCOSEAlgs){
        // Make sure algorithm and key type match
        if (keypairAlg.alg === publicKeyCOSEInfo.alg && keypairAlg.kty === publicKeyCOSEInfo.kty) {
            // If not an RSA keypair then make sure curve numbers match too
            if ((keypairAlg.kty === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKTY"].EC2 || keypairAlg.kty === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKTY"].OKP) && keypairAlg.crv === publicKeyCOSEInfo.crv) {
                foundMatch = true;
            } else {
                // We've matched an RSA public key's properties
                foundMatch = true;
            }
        }
        if (foundMatch) {
            break;
        }
    }
    // Make sure the public key is one of the allowed algorithms
    if (!foundMatch) {
        /**
         * Craft some useful error output from the MDS algorithms
         *
         * Example:
         *
         * ```
         * [
         *   'rsassa_pss_sha256_raw' (COSE info: { kty: 3, alg: -37 }),
         *   'secp256k1_ecdsa_sha256_raw' (COSE info: { kty: 2, alg: -47, crv: 8 })
         * ]
         * ```
         */ const debugMDSAlgs = authenticationAlgorithms.map((algSign)=>`'${algSign}' (COSE info: ${stringifyCOSEInfo(algSignToCOSEInfoMap[algSign])})`);
        const strMDSAlgs = JSON.stringify(debugMDSAlgs, null, 2).replace(/"/g, '');
        /**
         * Construct useful error output about the public key
         */ const strPubKeyAlg = stringifyCOSEInfo(publicKeyCOSEInfo);
        throw new Error(`Public key parameters ${strPubKeyAlg} did not match any of the following metadata algorithms:\n${strMDSAlgs}`);
    }
    /**
     * Confirm the attestation statement's algorithm is one supported according to metadata
     */ if (attestationStatementAlg !== undefined && authenticatorGetInfo?.algorithms !== undefined) {
        const getInfoAlgs = authenticatorGetInfo.algorithms.map((_alg)=>_alg.alg);
        if (getInfoAlgs.indexOf(attestationStatementAlg) < 0) {
            throw new Error(`Attestation statement alg ${attestationStatementAlg} did not match one of ${getInfoAlgs}`);
        }
    }
    // Prepare to check the certificate chain
    const authenticatorCerts = x5c.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertCertBufferToPEM"]);
    const statementRootCerts = attestationRootCertificates.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertCertBufferToPEM"]);
    /**
     * If an authenticator returns exactly one certificate in its x5c, and that cert is found in the
     * metadata statement then the authenticator is "self-referencing". In this case we forego
     * certificate chain validation.
     */ let authenticatorIsSelfReferencing = false;
    if (authenticatorCerts.length === 1 && statementRootCerts.indexOf(authenticatorCerts[0]) >= 0) {
        authenticatorIsSelfReferencing = true;
    }
    if (!authenticatorIsSelfReferencing) {
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateCertificatePath"])(authenticatorCerts, statementRootCerts);
        } catch (err) {
            const _err = err;
            throw new Error(`Could not validate certificate path with any metadata root certificates: ${_err.message}`);
        }
    }
    return true;
}
const algSignToCOSEInfoMap = {
    secp256r1_ecdsa_sha256_raw: {
        kty: 2,
        alg: -7,
        crv: 1
    },
    secp256r1_ecdsa_sha256_der: {
        kty: 2,
        alg: -7,
        crv: 1
    },
    rsassa_pss_sha256_raw: {
        kty: 3,
        alg: -37
    },
    rsassa_pss_sha256_der: {
        kty: 3,
        alg: -37
    },
    secp256k1_ecdsa_sha256_raw: {
        kty: 2,
        alg: -47,
        crv: 8
    },
    secp256k1_ecdsa_sha256_der: {
        kty: 2,
        alg: -47,
        crv: 8
    },
    rsassa_pss_sha384_raw: {
        kty: 3,
        alg: -38
    },
    rsassa_pkcsv15_sha256_raw: {
        kty: 3,
        alg: -257
    },
    rsassa_pkcsv15_sha384_raw: {
        kty: 3,
        alg: -258
    },
    rsassa_pkcsv15_sha512_raw: {
        kty: 3,
        alg: -259
    },
    rsassa_pkcsv15_sha1_raw: {
        kty: 3,
        alg: -65535
    },
    secp384r1_ecdsa_sha384_raw: {
        kty: 2,
        alg: -35,
        crv: 2
    },
    secp512r1_ecdsa_sha256_raw: {
        kty: 2,
        alg: -36,
        crv: 3
    },
    ed25519_eddsa_sha512_raw: {
        kty: 1,
        alg: -8,
        crv: 6
    }
};
/**
 * A helper to format COSEInfo a little nicer than we can achieve with JSON.stringify()
 *
 * Input: `{ "kty": 3, "alg": -257 }`
 *
 * Output: `"{ kty: 3, alg: -257 }"`
 */ function stringifyCOSEInfo(info) {
    const { kty, alg, crv } = info;
    let toReturn = '';
    if (kty !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKTY"].RSA) {
        toReturn = `{ kty: ${kty}, alg: ${alg}, crv: ${crv} }`;
    } else {
        toReturn = `{ kty: ${kty}, alg: ${alg} }`;
    }
    return toReturn;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationPacked.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyAttestationPacked": (()=>verifyAttestationPacked)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCertBufferToPEM.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/validateCertificatePath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$getCertificateInfo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/getCertificateInfo.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/verifySignature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateExtFIDOGenCEAAGUID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/validateExtFIDOGenCEAAGUID.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$metadataService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/metadataService.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$metadata$2f$verifyAttestationWithMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/metadata/verifyAttestationWithMetadata.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
;
;
;
;
;
;
;
;
;
async function verifyAttestationPacked(options) {
    const { attStmt, clientDataHash, authData, credentialPublicKey, aaguid, rootCertificates } = options;
    const sig = attStmt.get('sig');
    const x5c = attStmt.get('x5c');
    const alg = attStmt.get('alg');
    if (!sig) {
        throw new Error('No attestation signature provided in attestation statement (Packed)');
    }
    if (!alg) {
        throw new Error('Attestation statement did not contain alg (Packed)');
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCOSEAlg"])(alg)) {
        throw new Error(`Attestation statement contained invalid alg ${alg} (Packed)`);
    }
    const signatureBase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].concat([
        authData,
        clientDataHash
    ]);
    let verified = false;
    if (x5c) {
        const { subject, basicConstraintsCA, version, notBefore, notAfter, parsedCertificate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$getCertificateInfo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCertificateInfo"])(x5c[0]);
        const { OU, CN, O, C } = subject;
        if (OU !== 'Authenticator Attestation') {
            throw new Error('Certificate OU was not "Authenticator Attestation" (Packed|Full)');
        }
        if (!CN) {
            throw new Error('Certificate CN was empty (Packed|Full)');
        }
        if (!O) {
            throw new Error('Certificate O was empty (Packed|Full)');
        }
        if (!C || C.length !== 2) {
            throw new Error('Certificate C was not two-character ISO 3166 code (Packed|Full)');
        }
        if (basicConstraintsCA) {
            throw new Error('Certificate basic constraints CA was not `false` (Packed|Full)');
        }
        if (version !== 2) {
            throw new Error('Certificate version was not `3` (ASN.1 value of 2) (Packed|Full)');
        }
        let now = new Date();
        if (notBefore > now) {
            throw new Error(`Certificate not good before "${notBefore.toString()}" (Packed|Full)`);
        }
        now = new Date();
        if (notAfter < now) {
            throw new Error(`Certificate not good after "${notAfter.toString()}" (Packed|Full)`);
        }
        // Validate attestation statement AAGUID against leaf cert AAGUID
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateExtFIDOGenCEAAGUID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateExtFIDOGenCEAAGUID"])(parsedCertificate.tbsCertificate.extensions, aaguid);
        } catch (err) {
            const _err = err;
            throw new Error(`${_err.message} (Packed|Full)`);
        }
        // If available, validate attestation alg and x5c with info in the metadata statement
        const statement = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$metadataService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MetadataService"].getStatement(aaguid);
        if (statement) {
            // The presence of x5c means this is a full attestation. Check to see if attestationTypes
            // includes packed attestations.
            if (statement.attestationTypes.indexOf('basic_full') < 0) {
                throw new Error('Metadata does not indicate support for full attestations (Packed|Full)');
            }
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$metadata$2f$verifyAttestationWithMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyAttestationWithMetadata"])({
                    statement,
                    credentialPublicKey,
                    x5c,
                    attestationStatementAlg: alg
                });
            } catch (err) {
                const _err = err;
                throw new Error(`${_err.message} (Packed|Full)`);
            }
        } else {
            try {
                // Try validating the certificate path using the root certificates set via SettingsService
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateCertificatePath"])(x5c.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertCertBufferToPEM"]), rootCertificates);
            } catch (err) {
                const _err = err;
                throw new Error(`${_err.message} (Packed|Full)`);
            }
        }
        verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySignature"])({
            signature: sig,
            data: signatureBase,
            x509Certificate: x5c[0]
        });
    } else {
        verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySignature"])({
            signature: sig,
            data: signatureBase,
            credentialPublicKey,
            hashAlgorithm: alg
        });
    }
    return verified;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationAndroidSafetyNet.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyAttestationAndroidSafetyNet": (()=>verifyAttestationAndroidSafetyNet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$toHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/toHash.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/verifySignature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$getCertificateInfo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/getCertificateInfo.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/validateCertificatePath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCertBufferToPEM.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$metadataService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/metadataService.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$metadata$2f$verifyAttestationWithMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/metadata/verifyAttestationWithMetadata.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript) <export * as isoBase64URL>");
;
;
;
;
;
;
;
;
async function verifyAttestationAndroidSafetyNet(options) {
    const { attStmt, clientDataHash, authData, aaguid, rootCertificates, verifyTimestampMS = true, credentialPublicKey } = options;
    const alg = attStmt.get('alg');
    const response = attStmt.get('response');
    const ver = attStmt.get('ver');
    if (!ver) {
        throw new Error('No ver value in attestation (SafetyNet)');
    }
    if (!response) {
        throw new Error('No response was included in attStmt by authenticator (SafetyNet)');
    }
    // Prepare to verify a JWT
    const jwt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].toUTF8String(response);
    const jwtParts = jwt.split('.');
    const HEADER = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].toUTF8String(jwtParts[0]));
    const PAYLOAD = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].toUTF8String(jwtParts[1]));
    const SIGNATURE = jwtParts[2];
    /**
     * START Verify PAYLOAD
     */ const { nonce, ctsProfileMatch, timestampMs } = PAYLOAD;
    if (verifyTimestampMS) {
        // Make sure timestamp is in the past
        let now = Date.now();
        if (timestampMs > Date.now()) {
            throw new Error(`Payload timestamp "${timestampMs}" was later than "${now}" (SafetyNet)`);
        }
        // Consider a SafetyNet attestation valid within a minute of it being performed
        const timestampPlusDelay = timestampMs + 60 * 1000;
        now = Date.now();
        if (timestampPlusDelay < now) {
            throw new Error(`Payload timestamp "${timestampPlusDelay}" has expired (SafetyNet)`);
        }
    }
    const nonceBase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].concat([
        authData,
        clientDataHash
    ]);
    const nonceBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$toHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toHash"])(nonceBase);
    const expectedNonce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].fromBuffer(nonceBuffer, 'base64');
    if (nonce !== expectedNonce) {
        throw new Error('Could not verify payload nonce (SafetyNet)');
    }
    if (!ctsProfileMatch) {
        throw new Error('Could not verify device integrity (SafetyNet)');
    }
    /**
     * END Verify PAYLOAD
     */ /**
     * START Verify Header
     */ // `HEADER.x5c[0]` is definitely a base64 string
    const leafCertBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].toBuffer(HEADER.x5c[0], 'base64');
    const leafCertInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$getCertificateInfo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCertificateInfo"])(leafCertBuffer);
    const { subject } = leafCertInfo;
    // Ensure the certificate was issued to this hostname
    // See https://developer.android.com/training/safetynet/attestation#verify-attestation-response
    if (subject.CN !== 'attest.android.com') {
        throw new Error('Certificate common name was not "attest.android.com" (SafetyNet)');
    }
    const statement = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$metadataService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MetadataService"].getStatement(aaguid);
    if (statement) {
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$metadata$2f$verifyAttestationWithMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyAttestationWithMetadata"])({
                statement,
                credentialPublicKey,
                x5c: HEADER.x5c,
                attestationStatementAlg: alg
            });
        } catch (err) {
            const _err = err;
            throw new Error(`${_err.message} (SafetyNet)`);
        }
    } else {
        try {
            // Try validating the certificate path using the root certificates set via SettingsService
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateCertificatePath"])(HEADER.x5c.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertCertBufferToPEM"]), rootCertificates);
        } catch (err) {
            const _err = err;
            throw new Error(`${_err.message} (SafetyNet)`);
        }
    }
    /**
     * END Verify Header
     */ /**
     * START Verify Signature
     */ const signatureBaseBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].fromUTF8String(`${jwtParts[0]}.${jwtParts[1]}`);
    const signatureBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].toBuffer(SIGNATURE);
    const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySignature"])({
        signature: signatureBuffer,
        data: signatureBaseBuffer,
        x509Certificate: leafCertBuffer
    });
    /**
     * END Verify Signature
     */ return verified;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/constants.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// deno-lint-ignore-file no-dupe-keys
/**
 * A whole lotta domain knowledge is captured here, with hazy connections to source
 * documents. Good places to start searching for more info on these values are the
 * following Trusted Computing Group TPM Library docs linked in the WebAuthn API:
 *
 * - https://www.trustedcomputinggroup.org/wp-content/uploads/TPM-Rev-2.0-Part-1-Architecture-01.38.pdf
 * - https://www.trustedcomputinggroup.org/wp-content/uploads/TPM-Rev-2.0-Part-2-Structures-01.38.pdf
 * - https://www.trustedcomputinggroup.org/wp-content/uploads/TPM-Rev-2.0-Part-3-Commands-01.38.pdf
 */ /**
 * 6.9 TPM_ST (Structure Tags)
 */ __turbopack_esm__({
    "TPM_ALG": (()=>TPM_ALG),
    "TPM_ECC_CURVE": (()=>TPM_ECC_CURVE),
    "TPM_ECC_CURVE_COSE_CRV_MAP": (()=>TPM_ECC_CURVE_COSE_CRV_MAP),
    "TPM_MANUFACTURERS": (()=>TPM_MANUFACTURERS),
    "TPM_ST": (()=>TPM_ST)
});
const TPM_ST = {
    0x00c4: 'TPM_ST_RSP_COMMAND',
    0x8000: 'TPM_ST_NULL',
    0x8001: 'TPM_ST_NO_SESSIONS',
    0x8002: 'TPM_ST_SESSIONS',
    0x8014: 'TPM_ST_ATTEST_NV',
    0x8015: 'TPM_ST_ATTEST_COMMAND_AUDIT',
    0x8016: 'TPM_ST_ATTEST_SESSION_AUDIT',
    0x8017: 'TPM_ST_ATTEST_CERTIFY',
    0x8018: 'TPM_ST_ATTEST_QUOTE',
    0x8019: 'TPM_ST_ATTEST_TIME',
    0x801a: 'TPM_ST_ATTEST_CREATION',
    0x8021: 'TPM_ST_CREATION',
    0x8022: 'TPM_ST_VERIFIED',
    0x8023: 'TPM_ST_AUTH_SECRET',
    0x8024: 'TPM_ST_HASHCHECK',
    0x8025: 'TPM_ST_AUTH_SIGNED',
    0x8029: 'TPM_ST_FU_MANIFEST'
};
const TPM_ALG = {
    0x0000: 'TPM_ALG_ERROR',
    0x0001: 'TPM_ALG_RSA',
    0x0004: 'TPM_ALG_SHA',
    // @ts-ignore 2300
    0x0004: 'TPM_ALG_SHA1',
    0x0005: 'TPM_ALG_HMAC',
    0x0006: 'TPM_ALG_AES',
    0x0007: 'TPM_ALG_MGF1',
    0x0008: 'TPM_ALG_KEYEDHASH',
    0x000a: 'TPM_ALG_XOR',
    0x000b: 'TPM_ALG_SHA256',
    0x000c: 'TPM_ALG_SHA384',
    0x000d: 'TPM_ALG_SHA512',
    0x0010: 'TPM_ALG_NULL',
    0x0012: 'TPM_ALG_SM3_256',
    0x0013: 'TPM_ALG_SM4',
    0x0014: 'TPM_ALG_RSASSA',
    0x0015: 'TPM_ALG_RSAES',
    0x0016: 'TPM_ALG_RSAPSS',
    0x0017: 'TPM_ALG_OAEP',
    0x0018: 'TPM_ALG_ECDSA',
    0x0019: 'TPM_ALG_ECDH',
    0x001a: 'TPM_ALG_ECDAA',
    0x001b: 'TPM_ALG_SM2',
    0x001c: 'TPM_ALG_ECSCHNORR',
    0x001d: 'TPM_ALG_ECMQV',
    0x0020: 'TPM_ALG_KDF1_SP800_56A',
    0x0021: 'TPM_ALG_KDF2',
    0x0022: 'TPM_ALG_KDF1_SP800_108',
    0x0023: 'TPM_ALG_ECC',
    0x0025: 'TPM_ALG_SYMCIPHER',
    0x0026: 'TPM_ALG_CAMELLIA',
    0x0040: 'TPM_ALG_CTR',
    0x0041: 'TPM_ALG_OFB',
    0x0042: 'TPM_ALG_CBC',
    0x0043: 'TPM_ALG_CFB',
    0x0044: 'TPM_ALG_ECB'
};
const TPM_ECC_CURVE = {
    0x0000: 'TPM_ECC_NONE',
    0x0001: 'TPM_ECC_NIST_P192',
    0x0002: 'TPM_ECC_NIST_P224',
    0x0003: 'TPM_ECC_NIST_P256',
    0x0004: 'TPM_ECC_NIST_P384',
    0x0005: 'TPM_ECC_NIST_P521',
    0x0010: 'TPM_ECC_BN_P256',
    0x0011: 'TPM_ECC_BN_P638',
    0x0020: 'TPM_ECC_SM2_P256'
};
const TPM_MANUFACTURERS = {
    'id:414D4400': {
        name: 'AMD',
        id: 'AMD'
    },
    'id:414E5400': {
        name: 'Ant Group',
        id: 'ANT'
    },
    'id:41544D4C': {
        name: 'Atmel',
        id: 'ATML'
    },
    'id:4252434D': {
        name: 'Broadcom',
        id: 'BRCM'
    },
    'id:4353434F': {
        name: 'Cisco',
        id: 'CSCO'
    },
    'id:464C5953': {
        name: 'Flyslice Technologies',
        id: 'FLYS'
    },
    'id:524F4343': {
        name: 'Fuzhou Rockchip',
        id: 'ROCC'
    },
    'id:474F4F47': {
        name: 'Google',
        id: 'GOOG'
    },
    'id:48504900': {
        name: 'HPI',
        id: 'HPI'
    },
    'id:48504500': {
        name: 'HPE',
        id: 'HPE'
    },
    'id:48495349': {
        name: 'Huawei',
        id: 'HISI'
    },
    'id:49424d00': {
        name: 'IBM',
        id: 'IBM'
    },
    'id:49424D00': {
        name: 'IBM',
        id: 'IBM'
    },
    'id:49465800': {
        name: 'Infineon',
        id: 'IFX'
    },
    'id:494E5443': {
        name: 'Intel',
        id: 'INTC'
    },
    'id:4C454E00': {
        name: 'Lenovo',
        id: 'LEN'
    },
    'id:4D534654': {
        name: 'Microsoft',
        id: 'MSFT'
    },
    'id:4E534D20': {
        name: 'National Semiconductor',
        id: 'NSM'
    },
    'id:4E545A00': {
        name: 'Nationz',
        id: 'NTZ'
    },
    'id:4E534700': {
        name: 'NSING',
        id: 'NSG'
    },
    'id:4E544300': {
        name: 'Nuvoton Technology',
        id: 'NTC'
    },
    'id:51434F4D': {
        name: 'Qualcomm',
        id: 'QCOM'
    },
    'id:534D534E': {
        name: 'Samsung',
        id: 'SMSN'
    },
    'id:53454345': {
        name: 'SecEdge',
        id: 'SECE'
    },
    'id:534E5300': {
        name: 'Sinosun',
        id: 'SNS'
    },
    'id:534D5343': {
        name: 'SMSC',
        id: 'SMSC'
    },
    'id:53544D20': {
        name: 'STMicroelectronics',
        id: 'STM'
    },
    'id:54584E00': {
        name: 'Texas Instruments',
        id: 'TXN'
    },
    'id:57454300': {
        name: 'Winbond',
        id: 'WEC'
    },
    'id:5345414C': {
        name: 'Wisekey',
        id: 'SEAL'
    },
    'id:FFFFF1D0': {
        name: 'FIDO Alliance',
        id: 'FIDO'
    }
};
const TPM_ECC_CURVE_COSE_CRV_MAP = {
    TPM_ECC_NIST_P256: 1,
    TPM_ECC_NIST_P384: 2,
    TPM_ECC_NIST_P521: 3,
    TPM_ECC_BN_P256: 1,
    TPM_ECC_SM2_P256: 1
};
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/parseCertInfo.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "parseCertInfo": (()=>parseCertInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
;
;
function parseCertInfo(certInfo) {
    let pointer = 0;
    const dataView = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].toDataView(certInfo);
    // Get a magic constant
    const magic = dataView.getUint32(pointer);
    pointer += 4;
    // Determine the algorithm used for attestation
    const typeBuffer = dataView.getUint16(pointer);
    pointer += 2;
    const type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TPM_ST"][typeBuffer];
    // The name of a parent entity, can be ignored
    const qualifiedSignerLength = dataView.getUint16(pointer);
    pointer += 2;
    const qualifiedSigner = certInfo.slice(pointer, pointer += qualifiedSignerLength);
    // Get the expected hash of `attsToBeSigned`
    const extraDataLength = dataView.getUint16(pointer);
    pointer += 2;
    const extraData = certInfo.slice(pointer, pointer += extraDataLength);
    // Information about the TPM device's internal clock, can be ignored
    const clock = certInfo.slice(pointer, pointer += 8);
    const resetCount = dataView.getUint32(pointer);
    pointer += 4;
    const restartCount = dataView.getUint32(pointer);
    pointer += 4;
    const safe = !!certInfo.slice(pointer, pointer += 1);
    const clockInfo = {
        clock,
        resetCount,
        restartCount,
        safe
    };
    // TPM device firmware version
    const firmwareVersion = certInfo.slice(pointer, pointer += 8);
    // Attested Name
    const attestedNameLength = dataView.getUint16(pointer);
    pointer += 2;
    const attestedName = certInfo.slice(pointer, pointer += attestedNameLength);
    const attestedNameDataView = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].toDataView(attestedName);
    // Attested qualified name, can be ignored
    const qualifiedNameLength = dataView.getUint16(pointer);
    pointer += 2;
    const qualifiedName = certInfo.slice(pointer, pointer += qualifiedNameLength);
    const attested = {
        nameAlg: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TPM_ALG"][attestedNameDataView.getUint16(0)],
        nameAlgBuffer: attestedName.slice(0, 2),
        name: attestedName,
        qualifiedName
    };
    return {
        magic,
        type,
        qualifiedSigner,
        extraData,
        clockInfo,
        firmwareVersion,
        attested
    };
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/parsePubArea.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "parsePubArea": (()=>parsePubArea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
;
;
function parsePubArea(pubArea) {
    let pointer = 0;
    const dataView = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].toDataView(pubArea);
    const type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TPM_ALG"][dataView.getUint16(pointer)];
    pointer += 2;
    const nameAlg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TPM_ALG"][dataView.getUint16(pointer)];
    pointer += 2;
    // Get some authenticator attributes(?)
    // const objectAttributesInt = pubArea.slice(pointer, (pointer += 4)).readUInt32BE(0);
    const objectAttributesInt = dataView.getUint32(pointer);
    pointer += 4;
    const objectAttributes = {
        fixedTPM: !!(objectAttributesInt & 1),
        stClear: !!(objectAttributesInt & 2),
        fixedParent: !!(objectAttributesInt & 8),
        sensitiveDataOrigin: !!(objectAttributesInt & 16),
        userWithAuth: !!(objectAttributesInt & 32),
        adminWithPolicy: !!(objectAttributesInt & 64),
        noDA: !!(objectAttributesInt & 512),
        encryptedDuplication: !!(objectAttributesInt & 1024),
        restricted: !!(objectAttributesInt & 32768),
        decrypt: !!(objectAttributesInt & 65536),
        signOrEncrypt: !!(objectAttributesInt & 131072)
    };
    // Slice out the authPolicy of dynamic length
    const authPolicyLength = dataView.getUint16(pointer);
    pointer += 2;
    const authPolicy = pubArea.slice(pointer, pointer += authPolicyLength);
    // Extract additional curve params according to type
    const parameters = {};
    let unique = Uint8Array.from([]);
    if (type === 'TPM_ALG_RSA') {
        const symmetric = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TPM_ALG"][dataView.getUint16(pointer)];
        pointer += 2;
        const scheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TPM_ALG"][dataView.getUint16(pointer)];
        pointer += 2;
        const keyBits = dataView.getUint16(pointer);
        pointer += 2;
        const exponent = dataView.getUint32(pointer);
        pointer += 4;
        parameters.rsa = {
            symmetric,
            scheme,
            keyBits,
            exponent
        };
        /**
         * See 11.2.4.5 TPM2B_PUBLIC_KEY_RSA here:
         * https://trustedcomputinggroup.org/wp-content/uploads/TPM-Rev-2.0-Part-2-Structures-00.96-130315.pdf
         */ // const uniqueLength = pubArea.slice(pointer, (pointer += 2)).readUInt16BE(0);
        const uniqueLength = dataView.getUint16(pointer);
        pointer += 2;
        unique = pubArea.slice(pointer, pointer += uniqueLength);
    } else if (type === 'TPM_ALG_ECC') {
        const symmetric = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TPM_ALG"][dataView.getUint16(pointer)];
        pointer += 2;
        const scheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TPM_ALG"][dataView.getUint16(pointer)];
        pointer += 2;
        const curveID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TPM_ECC_CURVE"][dataView.getUint16(pointer)];
        pointer += 2;
        const kdf = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TPM_ALG"][dataView.getUint16(pointer)];
        pointer += 2;
        parameters.ecc = {
            symmetric,
            scheme,
            curveID,
            kdf
        };
        /**
         * See 11.2.5.1 TPM2B_ECC_PARAMETER here:
         * https://trustedcomputinggroup.org/wp-content/uploads/TPM-Rev-2.0-Part-2-Structures-00.96-130315.pdf
         */ // Retrieve X
        const uniqueXLength = dataView.getUint16(pointer);
        pointer += 2;
        const uniqueX = pubArea.slice(pointer, pointer += uniqueXLength);
        // Retrieve Y
        const uniqueYLength = dataView.getUint16(pointer);
        pointer += 2;
        const uniqueY = pubArea.slice(pointer, pointer += uniqueYLength);
        unique = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].concat([
            uniqueX,
            uniqueY
        ]);
    } else {
        throw new Error(`Unexpected type "${type}" (TPM)`);
    }
    return {
        type,
        nameAlg,
        objectAttributes,
        authPolicy,
        parameters,
        unique
    };
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/verifyAttestationTPM.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyAttestationTPM": (()=>verifyAttestationTPM)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeCredentialPublicKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/decodeCredentialPublicKey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$toHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/toHash.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCertBufferToPEM.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/validateCertificatePath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$getCertificateInfo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/getCertificateInfo.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/verifySignature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateExtFIDOGenCEAAGUID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/validateExtFIDOGenCEAAGUID.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$metadataService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/metadataService.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$metadata$2f$verifyAttestationWithMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/metadata/verifyAttestationWithMetadata.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$parseCertInfo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/parseCertInfo.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$parsePubArea$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/parsePubArea.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/parser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$certificate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/certificate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$subject_alternative_name$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/extensions/subject_alternative_name.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$extended_key_usage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/extensions/extended_key_usage.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
async function verifyAttestationTPM(options) {
    const { aaguid, attStmt, authData, credentialPublicKey, clientDataHash, rootCertificates } = options;
    const ver = attStmt.get('ver');
    const sig = attStmt.get('sig');
    const alg = attStmt.get('alg');
    const x5c = attStmt.get('x5c');
    const pubArea = attStmt.get('pubArea');
    const certInfo = attStmt.get('certInfo');
    /**
     * Verify structures
     */ if (ver !== '2.0') {
        throw new Error(`Unexpected ver "${ver}", expected "2.0" (TPM)`);
    }
    if (!sig) {
        throw new Error('No attestation signature provided in attestation statement (TPM)');
    }
    if (!alg) {
        throw new Error(`Attestation statement did not contain alg (TPM)`);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCOSEAlg"])(alg)) {
        throw new Error(`Attestation statement contained invalid alg ${alg} (TPM)`);
    }
    if (!x5c) {
        throw new Error('No attestation certificate provided in attestation statement (TPM)');
    }
    if (!pubArea) {
        throw new Error('Attestation statement did not contain pubArea (TPM)');
    }
    if (!certInfo) {
        throw new Error('Attestation statement did not contain certInfo (TPM)');
    }
    const parsedPubArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$parsePubArea$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePubArea"])(pubArea);
    const { unique, type: pubType, parameters } = parsedPubArea;
    // Verify that the public key specified by the parameters and unique fields of pubArea is
    // identical to the credentialPublicKey in the attestedCredentialData in authenticatorData.
    const cosePublicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeCredentialPublicKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeCredentialPublicKey"])(credentialPublicKey);
    if (pubType === 'TPM_ALG_RSA') {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCOSEPublicKeyRSA"])(cosePublicKey)) {
            throw new Error(`Credential public key with kty ${cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].kty)} did not match ${pubType}`);
        }
        const n = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].n);
        const e = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].e);
        if (!n) {
            throw new Error('COSE public key missing n (TPM|RSA)');
        }
        if (!e) {
            throw new Error('COSE public key missing e (TPM|RSA)');
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].areEqual(unique, n)) {
            throw new Error('PubArea unique is not same as credentialPublicKey (TPM|RSA)');
        }
        if (!parameters.rsa) {
            throw new Error(`Parsed pubArea type is RSA, but missing parameters.rsa (TPM|RSA)`);
        }
        const eBuffer = e;
        // If `exponent` is equal to 0x00, then exponent is the default RSA exponent of 2^16+1 (65537)
        const pubAreaExponent = parameters.rsa.exponent || 65537;
        // Do some bit shifting to get to an integer
        const eSum = eBuffer[0] + (eBuffer[1] << 8) + (eBuffer[2] << 16);
        if (pubAreaExponent !== eSum) {
            throw new Error(`Unexpected public key exp ${eSum}, expected ${pubAreaExponent} (TPM|RSA)`);
        }
    } else if (pubType === 'TPM_ALG_ECC') {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCOSEPublicKeyEC2"])(cosePublicKey)) {
            throw new Error(`Credential public key with kty ${cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].kty)} did not match ${pubType}`);
        }
        const crv = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].crv);
        const x = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].x);
        const y = cosePublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].y);
        if (!crv) {
            throw new Error('COSE public key missing crv (TPM|ECC)');
        }
        if (!x) {
            throw new Error('COSE public key missing x (TPM|ECC)');
        }
        if (!y) {
            throw new Error('COSE public key missing y (TPM|ECC)');
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].areEqual(unique, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].concat([
            x,
            y
        ]))) {
            throw new Error('PubArea unique is not same as public key x and y (TPM|ECC)');
        }
        if (!parameters.ecc) {
            throw new Error(`Parsed pubArea type is ECC, but missing parameters.ecc (TPM|ECC)`);
        }
        const pubAreaCurveID = parameters.ecc.curveID;
        const pubAreaCurveIDMapToCOSECRV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TPM_ECC_CURVE_COSE_CRV_MAP"][pubAreaCurveID];
        if (pubAreaCurveIDMapToCOSECRV !== crv) {
            throw new Error(`Public area key curve ID "${pubAreaCurveID}" mapped to "${pubAreaCurveIDMapToCOSECRV}" which did not match public key crv of "${crv}" (TPM|ECC)`);
        }
    } else {
        throw new Error(`Unsupported pubArea.type "${pubType}"`);
    }
    const parsedCertInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$parseCertInfo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseCertInfo"])(certInfo);
    const { magic, type: certType, attested, extraData } = parsedCertInfo;
    if (magic !== 0xff544347) {
        throw new Error(`Unexpected magic value "${magic}", expected "0xff544347" (TPM)`);
    }
    if (certType !== 'TPM_ST_ATTEST_CERTIFY') {
        throw new Error(`Unexpected type "${certType}", expected "TPM_ST_ATTEST_CERTIFY" (TPM)`);
    }
    // Hash pubArea to create pubAreaHash using the nameAlg in attested
    const pubAreaHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$toHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toHash"])(pubArea, attestedNameAlgToCOSEAlg(attested.nameAlg));
    // Concatenate attested.nameAlg and pubAreaHash to create attestedName.
    const attestedName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].concat([
        attested.nameAlgBuffer,
        pubAreaHash
    ]);
    // Check that certInfo.attested.name is equals to attestedName.
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].areEqual(attested.name, attestedName)) {
        throw new Error(`Attested name comparison failed (TPM)`);
    }
    // Concatenate authData with clientDataHash to create attToBeSigned
    const attToBeSigned = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].concat([
        authData,
        clientDataHash
    ]);
    // Hash attToBeSigned using the algorithm specified in attStmt.alg to create attToBeSignedHash
    const attToBeSignedHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$toHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toHash"])(attToBeSigned, alg);
    // Check that certInfo.extraData is equals to attToBeSignedHash.
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].areEqual(extraData, attToBeSignedHash)) {
        throw new Error('CertInfo extra data did not equal hashed attestation (TPM)');
    }
    /**
     * Verify signature
     */ if (x5c.length < 1) {
        throw new Error('No certificates present in x5c array (TPM)');
    }
    // Pick a leaf AIK certificate of the x5c array and parse it.
    const leafCertInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$getCertificateInfo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCertificateInfo"])(x5c[0]);
    const { basicConstraintsCA, version, subject, notAfter, notBefore } = leafCertInfo;
    if (basicConstraintsCA) {
        throw new Error('Certificate basic constraints CA was not `false` (TPM)');
    }
    // Check that certificate is of version 3 (value must be set to 2).
    if (version !== 2) {
        throw new Error('Certificate version was not `3` (ASN.1 value of 2) (TPM)');
    }
    // Check that Subject sequence is empty.
    if (subject.combined.length > 0) {
        throw new Error('Certificate subject was not empty (TPM)');
    }
    // Check that certificate is currently valid
    let now = new Date();
    if (notBefore > now) {
        throw new Error(`Certificate not good before "${notBefore.toString()}" (TPM)`);
    }
    // Check that certificate has not expired
    now = new Date();
    if (notAfter < now) {
        throw new Error(`Certificate not good after "${notAfter.toString()}" (TPM)`);
    }
    /**
     * Plumb the depths of the certificate's ASN.1-formatted data for some values we need to verify
     */ const parsedCert = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(x5c[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$certificate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Certificate"]);
    if (!parsedCert.tbsCertificate.extensions) {
        throw new Error('Certificate was missing extensions (TPM)');
    }
    let subjectAltNamePresent;
    let extKeyUsage;
    parsedCert.tbsCertificate.extensions.forEach((ext)=>{
        if (ext.extnID === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$subject_alternative_name$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["id_ce_subjectAltName"]) {
            subjectAltNamePresent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(ext.extnValue, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$subject_alternative_name$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SubjectAlternativeName"]);
        } else if (ext.extnID === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$extended_key_usage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["id_ce_extKeyUsage"]) {
            extKeyUsage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(ext.extnValue, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$extensions$2f$extended_key_usage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExtendedKeyUsage"]);
        }
    });
    // Check that certificate contains subjectAltName (2.5.29.17) extension,
    if (!subjectAltNamePresent) {
        throw new Error('Certificate did not contain subjectAltName extension (TPM)');
    }
    // TPM-specific values are buried within `directoryName`, so first make sure there are values
    // there.
    if (!subjectAltNamePresent[0].directoryName?.[0].length) {
        throw new Error('Certificate subjectAltName extension directoryName was empty (TPM)');
    }
    const { tcgAtTpmManufacturer, tcgAtTpmModel, tcgAtTpmVersion } = getTcgAtTpmValues(subjectAltNamePresent[0].directoryName);
    if (!tcgAtTpmManufacturer || !tcgAtTpmModel || !tcgAtTpmVersion) {
        throw new Error('Certificate contained incomplete subjectAltName data (TPM)');
    }
    if (!extKeyUsage) {
        throw new Error('Certificate did not contain ExtendedKeyUsage extension (TPM)');
    }
    // Check that tcpaTpmManufacturer (2.23.133.2.1) field is set to a valid manufacturer ID.
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TPM_MANUFACTURERS"][tcgAtTpmManufacturer]) {
        throw new Error(`Could not match TPM manufacturer "${tcgAtTpmManufacturer}" (TPM)`);
    }
    // Check that certificate contains extKeyUsage (2.5.29.37) extension and it must contain
    // tcg-kp-AIKCertificate (2.23.133.8.3) OID.
    if (extKeyUsage[0] !== '2.23.133.8.3') {
        throw new Error(`Unexpected extKeyUsage "${extKeyUsage[0]}", expected "2.23.133.8.3" (TPM)`);
    }
    // Validate attestation statement AAGUID against leaf cert AAGUID
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateExtFIDOGenCEAAGUID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateExtFIDOGenCEAAGUID"])(parsedCert.tbsCertificate.extensions, aaguid);
    } catch (err) {
        const _err = err;
        throw new Error(`${_err.message} (TPM)`);
    }
    // Run some metadata checks if a statement exists for this authenticator
    const statement = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$metadataService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MetadataService"].getStatement(aaguid);
    if (statement) {
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$metadata$2f$verifyAttestationWithMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyAttestationWithMetadata"])({
                statement,
                credentialPublicKey,
                x5c,
                attestationStatementAlg: alg
            });
        } catch (err) {
            const _err = err;
            throw new Error(`${_err.message} (TPM)`);
        }
    } else {
        try {
            // Try validating the certificate path using the root certificates set via SettingsService
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateCertificatePath"])(x5c.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertCertBufferToPEM"]), rootCertificates);
        } catch (err) {
            const _err = err;
            throw new Error(`${_err.message} (TPM)`);
        }
    }
    // Verify signature over certInfo with the public key extracted from AIK certificate.
    // In the wise words of Yuriy Ackermann: "Get Martini friend, you are done!"
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySignature"])({
        signature: sig,
        data: certInfo,
        x509Certificate: x5c[0],
        hashAlgorithm: alg
    });
}
/**
 * Contain logic for pulling TPM-specific values out of subjectAlternativeName extension
 */ function getTcgAtTpmValues(root) {
    const oidManufacturer = '2.23.133.2.1';
    const oidModel = '2.23.133.2.2';
    const oidVersion = '2.23.133.2.3';
    let tcgAtTpmManufacturer;
    let tcgAtTpmModel;
    let tcgAtTpmVersion;
    /**
     * Iterate through the following potential structures:
     *
     * (Good, follows the spec)
     * https://trustedcomputinggroup.org/wp-content/uploads/TCG_IWG_EKCredentialProfile_v2p3_r2_pub.pdf (page 33)
     * Name [
     *   RelativeDistinguishedName [
     *     AttributeTypeAndValue { type, value }
     *   ]
     *   RelativeDistinguishedName [
     *     AttributeTypeAndValue { type, value }
     *   ]
     *   RelativeDistinguishedName [
     *     AttributeTypeAndValue { type, value }
     *   ]
     * ]
     *
     * (Bad, does not follow the spec)
     * Name [
     *   RelativeDistinguishedName [
     *     AttributeTypeAndValue { type, value }
     *     AttributeTypeAndValue { type, value }
     *     AttributeTypeAndValue { type, value }
     *   ]
     * ]
     *
     * Both structures have been seen in the wild and need to be supported
     */ root.forEach((relName)=>{
        relName.forEach((attr)=>{
            if (attr.type === oidManufacturer) {
                tcgAtTpmManufacturer = attr.value.toString();
            } else if (attr.type === oidModel) {
                tcgAtTpmModel = attr.value.toString();
            } else if (attr.type === oidVersion) {
                tcgAtTpmVersion = attr.value.toString();
            }
        });
    });
    return {
        tcgAtTpmManufacturer,
        tcgAtTpmModel,
        tcgAtTpmVersion
    };
}
/**
 * Convert TPM-specific SHA algorithm ID's with COSE-specific equivalents. Note that the choice to
 * use ECDSA SHA IDs is arbitrary; any such COSEALG that would map to SHA-256 in
 * `mapCoseAlgToWebCryptoAlg()`
 *
 * SHA IDs referenced from here:
 *
 * https://trustedcomputinggroup.org/wp-content/uploads/TCG_TPM2_r1p59_Part2_Structures_pub.pdf
 */ function attestedNameAlgToCOSEAlg(alg) {
    if (alg === 'TPM_ALG_SHA256') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].ES256;
    } else if (alg === 'TPM_ALG_SHA384') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].ES384;
    } else if (alg === 'TPM_ALG_SHA512') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEALG"].ES512;
    }
    throw new Error(`Unexpected TPM attested name alg ${alg}`);
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationAndroidKey.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyAttestationAndroidKey": (()=>verifyAttestationAndroidKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$android$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$android$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-android@2.3.15/node_modules/@peculiar/asn1-android/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCertBufferToPEM.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/validateCertificatePath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/verifySignature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCOSEtoPKCS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCOSEtoPKCS.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$metadataService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/metadataService.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$metadata$2f$verifyAttestationWithMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/metadata/verifyAttestationWithMetadata.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/parser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$certificate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/certificate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$android$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$android$2f$build$2f$es2015$2f$key_description$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-android@2.3.15/node_modules/@peculiar/asn1-android/build/es2015/key_description.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
async function verifyAttestationAndroidKey(options) {
    const { authData, clientDataHash, attStmt, credentialPublicKey, aaguid, rootCertificates } = options;
    const x5c = attStmt.get('x5c');
    const sig = attStmt.get('sig');
    const alg = attStmt.get('alg');
    if (!x5c) {
        throw new Error('No attestation certificate provided in attestation statement (Android Key)');
    }
    if (!sig) {
        throw new Error('No attestation signature provided in attestation statement (Android Key)');
    }
    if (!alg) {
        throw new Error(`Attestation statement did not contain alg (Android Key)`);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCOSEAlg"])(alg)) {
        throw new Error(`Attestation statement contained invalid alg ${alg} (Android Key)`);
    }
    /**
     * Verify that the public key in the first certificate in x5c matches the credentialPublicKey in
     * the attestedCredentialData in authenticatorData.
     */ // Find the public cert in the certificate as PKCS
    const parsedCert = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(x5c[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$certificate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Certificate"]);
    const parsedCertPubKey = new Uint8Array(parsedCert.tbsCertificate.subjectPublicKeyInfo.subjectPublicKey);
    // Convert the credentialPublicKey to PKCS
    const credPubKeyPKCS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCOSEtoPKCS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertCOSEtoPKCS"])(credentialPublicKey);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].areEqual(credPubKeyPKCS, parsedCertPubKey)) {
        throw new Error('Credential public key does not equal leaf cert public key (Android Key)');
    }
    /**
     * Verify that the attestationChallenge field in the attestation certificate extension data is
     * identical to clientDataHash.
     */ // Find Android KeyStore Extension in certificate extensions
    const extKeyStore = parsedCert.tbsCertificate.extensions?.find((ext)=>ext.extnID === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$android$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$android$2f$build$2f$es2015$2f$key_description$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["id_ce_keyDescription"]);
    if (!extKeyStore) {
        throw new Error('Certificate did not contain extKeyStore (Android Key)');
    }
    const parsedExtKeyStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(extKeyStore.extnValue, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$android$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$android$2f$build$2f$es2015$2f$key_description$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KeyDescription"]);
    // Verify extKeyStore values
    const { attestationChallenge, teeEnforced, softwareEnforced } = parsedExtKeyStore;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].areEqual(new Uint8Array(attestationChallenge.buffer), clientDataHash)) {
        throw new Error('Attestation challenge was not equal to client data hash (Android Key)');
    }
    /**
     * The AuthorizationList.allApplications field is not present on either authorization list
     * (softwareEnforced nor teeEnforced), since PublicKeyCredential MUST be scoped to the RP ID.
     *
     * (i.e. These shouldn't contain the [600] tag)
     */ if (teeEnforced.allApplications !== undefined) {
        throw new Error('teeEnforced contained "allApplications [600]" tag (Android Key)');
    }
    if (softwareEnforced.allApplications !== undefined) {
        throw new Error('teeEnforced contained "allApplications [600]" tag (Android Key)');
    }
    const statement = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$metadataService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MetadataService"].getStatement(aaguid);
    if (statement) {
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$metadata$2f$verifyAttestationWithMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyAttestationWithMetadata"])({
                statement,
                credentialPublicKey,
                x5c,
                attestationStatementAlg: alg
            });
        } catch (err) {
            const _err = err;
            throw new Error(`${_err.message} (Android Key)`);
        }
    } else {
        /**
         * Verify that x5c contains a full certificate path.
         */ const x5cNoRootPEM = x5c.slice(0, -1).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertCertBufferToPEM"]);
        const x5cRootPEM = x5c.slice(-1).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertCertBufferToPEM"]);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateCertificatePath"])(x5cNoRootPEM, x5cRootPEM);
        } catch (err) {
            const _err = err;
            throw new Error(`${_err.message} (Android Key)`);
        }
        /**
         * Make sure the root certificate is one of the Google Hardware Attestation Root certificates
         *
         * https://developer.android.com/privacy-and-security/security-key-attestation#root_certificate
         */ if (rootCertificates.length > 0 && rootCertificates.indexOf(x5cRootPEM[0]) < 0) {
            throw new Error('x5c root certificate was not a known root certificate (Android Key)');
        }
    }
    /**
     * Verify that sig is a valid signature over the concatenation of authenticatorData and
     * clientDataHash using the public key in the first certificate in x5c with the algorithm
     * specified in alg.
     */ const signatureBase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].concat([
        authData,
        clientDataHash
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySignature"])({
        signature: sig,
        data: signatureBase,
        x509Certificate: x5c[0],
        hashAlgorithm: alg
    });
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationApple.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyAttestationApple": (()=>verifyAttestationApple)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/validateCertificatePath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCertBufferToPEM.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$toHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/toHash.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCOSEtoPKCS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertCOSEtoPKCS.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-schema@2.3.15/node_modules/@peculiar/asn1-schema/build/es2015/parser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$certificate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@peculiar+asn1-x509@2.3.15/node_modules/@peculiar/asn1-x509/build/es2015/certificate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
;
;
;
;
;
;
;
async function verifyAttestationApple(options) {
    const { attStmt, authData, clientDataHash, credentialPublicKey, rootCertificates } = options;
    const x5c = attStmt.get('x5c');
    if (!x5c) {
        throw new Error('No attestation certificate provided in attestation statement (Apple)');
    }
    /**
     * Verify certificate path
     */ try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$validateCertificatePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateCertificatePath"])(x5c.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCertBufferToPEM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertCertBufferToPEM"]), rootCertificates);
    } catch (err) {
        const _err = err;
        throw new Error(`${_err.message} (Apple)`);
    }
    /**
     * Compare nonce in certificate extension to computed nonce
     */ const parsedCredCert = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$schema$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$schema$2f$build$2f$es2015$2f$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsnParser"].parse(x5c[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$peculiar$2b$asn1$2d$x509$40$2$2e$3$2e$15$2f$node_modules$2f40$peculiar$2f$asn1$2d$x509$2f$build$2f$es2015$2f$certificate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Certificate"]);
    const { extensions, subjectPublicKeyInfo } = parsedCredCert.tbsCertificate;
    if (!extensions) {
        throw new Error('credCert missing extensions (Apple)');
    }
    const extCertNonce = extensions.find((ext)=>ext.extnID === '1.2.840.113635.100.8.2');
    if (!extCertNonce) {
        throw new Error('credCert missing "1.2.840.113635.100.8.2" extension (Apple)');
    }
    const nonceToHash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].concat([
        authData,
        clientDataHash
    ]);
    const nonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$toHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toHash"])(nonceToHash);
    /**
     * Ignore the first six ASN.1 structure bytes that define the nonce as an OCTET STRING. Should
     * trim off <Buffer 30 24 a1 22 04 20>
     *
     * TODO: Try and get @peculiar (GitHub) to add a schema for "1.2.840.113635.100.8.2" when we
     * find out where it's defined (doesn't seem to be publicly documented at the moment...)
     */ const extNonce = new Uint8Array(extCertNonce.extnValue.buffer).slice(6);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].areEqual(nonce, extNonce)) {
        throw new Error(`credCert nonce was not expected value (Apple)`);
    }
    /**
     * Verify credential public key matches the Subject Public Key of credCert
     */ const credPubKeyPKCS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertCOSEtoPKCS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertCOSEtoPKCS"])(credentialPublicKey);
    const credCertSubjectPublicKey = new Uint8Array(subjectPublicKeyInfo.subjectPublicKey);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].areEqual(credPubKeyPKCS, credCertSubjectPublicKey)) {
        throw new Error('Credential public key does not equal credCert public key (Apple)');
    }
    return true;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifyRegistrationResponse.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyRegistrationResponse": (()=>verifyRegistrationResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeAttestationObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/decodeAttestationObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeClientDataJSON$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/decodeClientDataJSON.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$parseAuthenticatorData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/parseAuthenticatorData.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$toHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/toHash.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeCredentialPublicKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/decodeCredentialPublicKey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/cose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertAAGUIDToString$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/convertAAGUIDToString.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$parseBackupFlags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/parseBackupFlags.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$matchExpectedRPID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/matchExpectedRPID.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$settingsService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/settingsService.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$generateRegistrationOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/generateRegistrationOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$verifyAttestationFIDOU2F$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationFIDOU2F.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$verifyAttestationPacked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationPacked.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$verifyAttestationAndroidSafetyNet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationAndroidSafetyNet.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$verifyAttestationTPM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/verifyAttestationTPM.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$verifyAttestationAndroidKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationAndroidKey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$verifyAttestationApple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationApple.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript) <export * as isoBase64URL>");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
async function verifyRegistrationResponse(options) {
    const { response, expectedChallenge, expectedOrigin, expectedRPID, expectedType, requireUserPresence = true, requireUserVerification = true, supportedAlgorithmIDs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$generateRegistrationOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supportedCOSEAlgorithmIdentifiers"] } = options;
    const { id, rawId, type: credentialType, response: attestationResponse } = response;
    // Ensure credential specified an ID
    if (!id) {
        throw new Error('Missing credential ID');
    }
    // Ensure ID is base64url-encoded
    if (id !== rawId) {
        throw new Error('Credential ID was not base64url-encoded');
    }
    // Make sure credential type is public-key
    if (credentialType !== 'public-key') {
        throw new Error(`Unexpected credential type ${credentialType}, expected "public-key"`);
    }
    const clientDataJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeClientDataJSON$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeClientDataJSON"])(attestationResponse.clientDataJSON);
    const { type, origin, challenge, tokenBinding } = clientDataJSON;
    // Make sure we're handling an registration
    if (Array.isArray(expectedType)) {
        if (!expectedType.includes(type)) {
            const joinedExpectedType = expectedType.join(', ');
            throw new Error(`Unexpected registration response type "${type}", expected one of: ${joinedExpectedType}`);
        }
    } else if (expectedType) {
        if (type !== expectedType) {
            throw new Error(`Unexpected registration response type "${type}", expected "${expectedType}"`);
        }
    } else if (type !== 'webauthn.create') {
        throw new Error(`Unexpected registration response type: ${type}`);
    }
    // Ensure the device provided the challenge we gave it
    if (typeof expectedChallenge === 'function') {
        if (!await expectedChallenge(challenge)) {
            throw new Error(`Custom challenge verifier returned false for registration response challenge "${challenge}"`);
        }
    } else if (challenge !== expectedChallenge) {
        throw new Error(`Unexpected registration response challenge "${challenge}", expected "${expectedChallenge}"`);
    }
    // Check that the origin is our site
    if (Array.isArray(expectedOrigin)) {
        if (!expectedOrigin.includes(origin)) {
            throw new Error(`Unexpected registration response origin "${origin}", expected one of: ${expectedOrigin.join(', ')}`);
        }
    } else {
        if (origin !== expectedOrigin) {
            throw new Error(`Unexpected registration response origin "${origin}", expected "${expectedOrigin}"`);
        }
    }
    if (tokenBinding) {
        if (typeof tokenBinding !== 'object') {
            throw new Error(`Unexpected value for TokenBinding "${tokenBinding}"`);
        }
        if ([
            'present',
            'supported',
            'not-supported'
        ].indexOf(tokenBinding.status) < 0) {
            throw new Error(`Unexpected tokenBinding.status value of "${tokenBinding.status}"`);
        }
    }
    const attestationObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].toBuffer(attestationResponse.attestationObject);
    const decodedAttestationObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeAttestationObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeAttestationObject"])(attestationObject);
    const fmt = decodedAttestationObject.get('fmt');
    const authData = decodedAttestationObject.get('authData');
    const attStmt = decodedAttestationObject.get('attStmt');
    const parsedAuthData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$parseAuthenticatorData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAuthenticatorData"])(authData);
    const { aaguid, rpIdHash, flags, credentialID, counter, credentialPublicKey, extensionsData } = parsedAuthData;
    // Make sure the response's RP ID is ours
    let matchedRPID;
    if (expectedRPID) {
        let expectedRPIDs = [];
        if (typeof expectedRPID === 'string') {
            expectedRPIDs = [
                expectedRPID
            ];
        } else {
            expectedRPIDs = expectedRPID;
        }
        matchedRPID = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$matchExpectedRPID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["matchExpectedRPID"])(rpIdHash, expectedRPIDs);
    }
    // Make sure someone was physically present
    if (requireUserPresence && !flags.up) {
        throw new Error('User presence was required, but user was not present');
    }
    // Enforce user verification if specified
    if (requireUserVerification && !flags.uv) {
        throw new Error('User verification was required, but user could not be verified');
    }
    if (!credentialID) {
        throw new Error('No credential ID was provided by authenticator');
    }
    if (!credentialPublicKey) {
        throw new Error('No public key was provided by authenticator');
    }
    if (!aaguid) {
        throw new Error('No AAGUID was present during registration');
    }
    const decodedPublicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeCredentialPublicKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeCredentialPublicKey"])(credentialPublicKey);
    const alg = decodedPublicKey.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$cose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COSEKEYS"].alg);
    if (typeof alg !== 'number') {
        throw new Error('Credential public key was missing numeric alg');
    }
    // Make sure the key algorithm is one we specified within the registration options
    if (!supportedAlgorithmIDs.includes(alg)) {
        const supported = supportedAlgorithmIDs.join(', ');
        throw new Error(`Unexpected public key alg "${alg}", expected one of "${supported}"`);
    }
    const clientDataHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$toHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toHash"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].toBuffer(attestationResponse.clientDataJSON));
    const rootCertificates = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$settingsService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingsService"].getRootCertificates({
        identifier: fmt
    });
    // Prepare arguments to pass to the relevant verification method
    const verifierOpts = {
        aaguid,
        attStmt,
        authData,
        clientDataHash,
        credentialID,
        credentialPublicKey,
        rootCertificates,
        rpIdHash
    };
    /**
     * Verification can only be performed when attestation = 'direct'
     */ let verified = false;
    if (fmt === 'fido-u2f') {
        verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$verifyAttestationFIDOU2F$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyAttestationFIDOU2F"])(verifierOpts);
    } else if (fmt === 'packed') {
        verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$verifyAttestationPacked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyAttestationPacked"])(verifierOpts);
    } else if (fmt === 'android-safetynet') {
        verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$verifyAttestationAndroidSafetyNet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyAttestationAndroidSafetyNet"])(verifierOpts);
    } else if (fmt === 'android-key') {
        verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$verifyAttestationAndroidKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyAttestationAndroidKey"])(verifierOpts);
    } else if (fmt === 'tpm') {
        verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$tpm$2f$verifyAttestationTPM$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyAttestationTPM"])(verifierOpts);
    } else if (fmt === 'apple') {
        verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifications$2f$verifyAttestationApple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyAttestationApple"])(verifierOpts);
    } else if (fmt === 'none') {
        if (attStmt.size > 0) {
            throw new Error('None attestation had unexpected attestation statement');
        }
        // This is the weaker of the attestations, so there's nothing else to really check
        verified = true;
    } else {
        throw new Error(`Unsupported Attestation Format: ${fmt}`);
    }
    const toReturn = {
        verified
    };
    if (toReturn.verified) {
        const { credentialDeviceType, credentialBackedUp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$parseBackupFlags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseBackupFlags"])(flags);
        toReturn.registrationInfo = {
            fmt,
            aaguid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$convertAAGUIDToString$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertAAGUIDToString"])(aaguid),
            credentialType,
            credential: {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].fromBuffer(credentialID),
                publicKey: credentialPublicKey,
                counter,
                transports: response.response.transports
            },
            attestationObject,
            userVerified: flags.uv,
            credentialDeviceType,
            credentialBackedUp,
            origin: clientDataJSON.origin,
            rpID: matchedRPID,
            authenticatorExtensionResults: extensionsData
        };
    }
    return toReturn;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/authentication/generateAuthenticationOptions.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateAuthenticationOptions": (()=>generateAuthenticationOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$generateChallenge$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/generateChallenge.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript) <export * as isoBase64URL>");
;
;
async function generateAuthenticationOptions(options) {
    const { allowCredentials, challenge = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$generateChallenge$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateChallenge"])(), timeout = 60000, userVerification = 'preferred', extensions, rpID } = options;
    /**
     * Preserve ability to specify `string` values for challenges
     */ let _challenge = challenge;
    if (typeof _challenge === 'string') {
        _challenge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].fromUTF8String(_challenge);
    }
    return {
        rpId: rpID,
        challenge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].fromBuffer(_challenge),
        allowCredentials: allowCredentials?.map((cred)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].isBase64URL(cred.id)) {
                throw new Error(`excludeCredential id "${cred.id}" is not a valid base64url string`);
            }
            return {
                ...cred,
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].trimPadding(cred.id),
                type: 'public-key'
            };
        }),
        timeout,
        userVerification,
        extensions
    };
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/authentication/verifyAuthenticationResponse.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyAuthenticationResponse": (()=>verifyAuthenticationResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeClientDataJSON$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/decodeClientDataJSON.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$toHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/toHash.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/verifySignature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$parseAuthenticatorData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/parseAuthenticatorData.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$parseBackupFlags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/parseBackupFlags.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$matchExpectedRPID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/matchExpectedRPID.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js [app-route] (ecmascript) <export * as isoBase64URL>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js [app-route] (ecmascript) <export * as isoUint8Array>");
;
;
;
;
;
;
;
async function verifyAuthenticationResponse(options) {
    const { response, expectedChallenge, expectedOrigin, expectedRPID, expectedType, credential, requireUserVerification = true, advancedFIDOConfig } = options;
    const { id, rawId, type: credentialType, response: assertionResponse } = response;
    // Ensure credential specified an ID
    if (!id) {
        throw new Error('Missing credential ID');
    }
    // Ensure ID is base64url-encoded
    if (id !== rawId) {
        throw new Error('Credential ID was not base64url-encoded');
    }
    // Make sure credential type is public-key
    if (credentialType !== 'public-key') {
        throw new Error(`Unexpected credential type ${credentialType}, expected "public-key"`);
    }
    if (!response) {
        throw new Error('Credential missing response');
    }
    if (typeof assertionResponse?.clientDataJSON !== 'string') {
        throw new Error('Credential response clientDataJSON was not a string');
    }
    const clientDataJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$decodeClientDataJSON$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decodeClientDataJSON"])(assertionResponse.clientDataJSON);
    const { type, origin, challenge, tokenBinding } = clientDataJSON;
    // Make sure we're handling an authentication
    if (Array.isArray(expectedType)) {
        if (!expectedType.includes(type)) {
            const joinedExpectedType = expectedType.join(', ');
            throw new Error(`Unexpected authentication response type "${type}", expected one of: ${joinedExpectedType}`);
        }
    } else if (expectedType) {
        if (type !== expectedType) {
            throw new Error(`Unexpected authentication response type "${type}", expected "${expectedType}"`);
        }
    } else if (type !== 'webauthn.get') {
        throw new Error(`Unexpected authentication response type: ${type}`);
    }
    // Ensure the device provided the challenge we gave it
    if (typeof expectedChallenge === 'function') {
        if (!await expectedChallenge(challenge)) {
            throw new Error(`Custom challenge verifier returned false for registration response challenge "${challenge}"`);
        }
    } else if (challenge !== expectedChallenge) {
        throw new Error(`Unexpected authentication response challenge "${challenge}", expected "${expectedChallenge}"`);
    }
    // Check that the origin is our site
    if (Array.isArray(expectedOrigin)) {
        if (!expectedOrigin.includes(origin)) {
            const joinedExpectedOrigin = expectedOrigin.join(', ');
            throw new Error(`Unexpected authentication response origin "${origin}", expected one of: ${joinedExpectedOrigin}`);
        }
    } else {
        if (origin !== expectedOrigin) {
            throw new Error(`Unexpected authentication response origin "${origin}", expected "${expectedOrigin}"`);
        }
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].isBase64URL(assertionResponse.authenticatorData)) {
        throw new Error('Credential response authenticatorData was not a base64url string');
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].isBase64URL(assertionResponse.signature)) {
        throw new Error('Credential response signature was not a base64url string');
    }
    if (assertionResponse.userHandle && typeof assertionResponse.userHandle !== 'string') {
        throw new Error('Credential response userHandle was not a string');
    }
    if (tokenBinding) {
        if (typeof tokenBinding !== 'object') {
            throw new Error('ClientDataJSON tokenBinding was not an object');
        }
        if ([
            'present',
            'supported',
            'notSupported'
        ].indexOf(tokenBinding.status) < 0) {
            throw new Error(`Unexpected tokenBinding status ${tokenBinding.status}`);
        }
    }
    const authDataBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].toBuffer(assertionResponse.authenticatorData);
    const parsedAuthData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$parseAuthenticatorData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAuthenticatorData"])(authDataBuffer);
    const { rpIdHash, flags, counter, extensionsData } = parsedAuthData;
    // Make sure the response's RP ID is ours
    let expectedRPIDs = [];
    if (typeof expectedRPID === 'string') {
        expectedRPIDs = [
            expectedRPID
        ];
    } else {
        expectedRPIDs = expectedRPID;
    }
    const matchedRPID = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$matchExpectedRPID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["matchExpectedRPID"])(rpIdHash, expectedRPIDs);
    if (advancedFIDOConfig !== undefined) {
        const { userVerification: fidoUserVerification } = advancedFIDOConfig;
        /**
         * Use FIDO Conformance-defined rules for verifying UP and UV flags
         */ if (fidoUserVerification === 'required') {
            // Require `flags.uv` be true (implies `flags.up` is true)
            if (!flags.uv) {
                throw new Error('User verification required, but user could not be verified');
            }
        } else if (fidoUserVerification === 'preferred' || fidoUserVerification === 'discouraged') {
        // Ignore `flags.uv`
        }
    } else {
        /**
         * Use WebAuthn spec-defined rules for verifying UP and UV flags
         */ // WebAuthn only requires the user presence flag be true
        if (!flags.up) {
            throw new Error('User not present during authentication');
        }
        // Enforce user verification if required
        if (requireUserVerification && !flags.uv) {
            throw new Error('User verification required, but user could not be verified');
        }
    }
    const clientDataHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$toHash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toHash"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].toBuffer(assertionResponse.clientDataJSON));
    const signatureBase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoUint8Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoUint8Array$3e$__["isoUint8Array"].concat([
        authDataBuffer,
        clientDataHash
    ]);
    const signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$iso$2f$isoBase64URL$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__isoBase64URL$3e$__["isoBase64URL"].toBuffer(assertionResponse.signature);
    if ((counter > 0 || credential.counter > 0) && counter <= credential.counter) {
        // Error out when the counter in the DB is greater than or equal to the counter in the
        // dataStruct. It's related to how the authenticator maintains the number of times its been
        // used for this client. If this happens, then someone's somehow increased the counter
        // on the device without going through this site
        throw new Error(`Response counter value ${counter} was lower than expected ${credential.counter}`);
    }
    const { credentialDeviceType, credentialBackedUp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$parseBackupFlags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseBackupFlags"])(flags);
    const toReturn = {
        verified: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$helpers$2f$verifySignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySignature"])({
            signature,
            data: signatureBase,
            credentialPublicKey: credential.publicKey
        }),
        authenticationInfo: {
            newCounter: counter,
            credentialID: credential.id,
            userVerified: flags.uv,
            credentialDeviceType,
            credentialBackedUp,
            authenticatorExtensionResults: extensionsData,
            origin: clientDataJSON.origin,
            rpID: matchedRPID
        }
    };
    return toReturn;
}
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/metadata/mdsTypes.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
const AlgSign = [
    'secp256r1_ecdsa_sha256_raw',
    'secp256r1_ecdsa_sha256_der',
    'rsassa_pss_sha256_raw',
    'rsassa_pss_sha256_der',
    'secp256k1_ecdsa_sha256_raw',
    'secp256k1_ecdsa_sha256_der',
    'rsassa_pss_sha384_raw',
    'rsassa_pkcsv15_sha256_raw',
    'rsassa_pkcsv15_sha384_raw',
    'rsassa_pkcsv15_sha512_raw',
    'rsassa_pkcsv15_sha1_raw',
    'secp384r1_ecdsa_sha384_raw',
    'secp512r1_ecdsa_sha256_raw',
    'ed25519_eddsa_sha512_raw'
];
;
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/types/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/index.js [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
}}),
"[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/index.js [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$generateRegistrationOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/generateRegistrationOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$registration$2f$verifyRegistrationResponse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/registration/verifyRegistrationResponse.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$authentication$2f$generateAuthenticationOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/authentication/generateAuthenticationOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$authentication$2f$verifyAuthenticationResponse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/authentication/verifyAuthenticationResponse.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$metadataService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/metadataService.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$services$2f$settingsService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/services/settingsService.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$metadata$2f$mdsTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/metadata/mdsTypes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$types$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/types/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$simplewebauthn$2b$server$40$13$2e$1$2e$1$2f$node_modules$2f40$simplewebauthn$2f$server$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@simplewebauthn+server@13.1.1/node_modules/@simplewebauthn/server/esm/index.js [app-route] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=0f51e_%40simplewebauthn_server_esm_3349ce._.js.map