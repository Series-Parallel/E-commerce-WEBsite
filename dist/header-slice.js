"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerActions = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var headerSlice = (0, toolkit_1.createSlice)({
    name: "ad",
    initialState: { addIsVisible: true },
    reducers: {
        closeAd: function (state) {
            state.addIsVisible = !state.addIsVisible;
        },
    },
});
exports.headerActions = headerSlice.actions;
exports.default = headerSlice;
