(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Personal_Projects/Jburrows-dev.github.io/personal-portfolio/app/components/toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Toggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Personal_Projects$2f$Jburrows$2d$dev$2e$github$2e$io$2f$personal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Personal_Projects/Jburrows-dev.github.io/personal-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Personal_Projects$2f$Jburrows$2d$dev$2e$github$2e$io$2f$personal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Personal_Projects/Jburrows-dev.github.io/personal-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Toggle() {
    _s();
    const [isLight, setIsLight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Personal_Projects$2f$Jburrows$2d$dev$2e$github$2e$io$2f$personal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const toggleDarkMode = ()=>{
        if (document.documentElement.getAttribute('data-theme') == 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        setIsLight((isLight)=>!isLight);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Personal_Projects$2f$Jburrows$2d$dev$2e$github$2e$io$2f$personal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "toggleBar",
        style: {
            justifyContent: "flex-" + (isLight ? "start" : "end")
        },
        onClick: toggleDarkMode,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Personal_Projects$2f$Jburrows$2d$dev$2e$github$2e$io$2f$personal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            className: "toggleBall",
            layout: true,
            transition: {
                type: "spring",
                stiffness: 700,
                damping: 50
            }
        }, void 0, false, {
            fileName: "[project]/Desktop/Personal_Projects/Jburrows-dev.github.io/personal-portfolio/app/components/toggle.tsx",
            lineNumber: 23,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Personal_Projects/Jburrows-dev.github.io/personal-portfolio/app/components/toggle.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_s(Toggle, "nJP0YTiNy9itJa0QwEcaj8PQjeU=");
_c = Toggle;
var _c;
__turbopack_context__.k.register(_c, "Toggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=10f5_Jburrows-dev_github_io_personal-portfolio_app_components_toggle_tsx_1kqdqdy._.js.map