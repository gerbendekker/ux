"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@aurelia-ux/core");
var UxDatepickerTheme = /** @class */ (function () {
    function UxDatepickerTheme() {
        this.themeKey = 'datepicker';
        this.foreground = '#333';
        this.overlay = 'rgba(0, 0, 0, 0.25)';
        this.calendarIcon = 'currentColor';
        // datepicker modal
        this.headerForeground = 'var(--ux-design--primary-foreground)';
        this.headerBackground = 'var(--ux-design--primary)';
        // calendar properties
        this.weekdayForeground = core_1.swatches.grey.p600;
        this.selectedDayForeground = 'var(--ux-design--accent-foreground)';
        this.selectedDayBackground = 'var(--ux-design--accent)';
        this.outOfRangeForeground = core_1.swatches.grey.p600;
    }
    return UxDatepickerTheme;
}());
exports.UxDatepickerTheme = UxDatepickerTheme;
