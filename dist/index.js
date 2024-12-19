"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var header_slice_1 = __importDefault(require("./header-slice"));
var store = (0, toolkit_1.configureStore)({
    reducer: { header: header_slice_1.default.reducer }
});
exports.default = store;
