import { ElementRef, AfterViewInit, OnDestroy, OnInit, EventEmitter, Renderer } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { ControlValueAccessor } from '@angular/forms';
export declare const CALENDAR_VALUE_ACCESSOR: any;
export interface LocaleSettings {
    firstDayOfWeek?: number;
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    monthNames: string[];
    monthNamesShort: string[];
}
export declare class Calendar implements AfterViewInit, OnInit, OnDestroy, ControlValueAccessor {
    el: ElementRef;
    domHandler: DomHandler;
    renderer: Renderer;
    defaultDate: Date;
    style: string;
    styleClass: string;
    inputStyle: string;
    inputStyleClass: string;
    placeholder: string;
    disabled: any;
    dateFormat: string;
    inline: boolean;
    showOtherMonths: boolean;
    selectOtherMonths: boolean;
    showIcon: boolean;
    icon: string;
    appendTo: any;
    readonlyInput: boolean;
    shortYearCutoff: any;
    monthNavigator: boolean;
    yearNavigator: boolean;
    yearRange: string;
    showTime: boolean;
    hourFormat: string;
    timeOnly: boolean;
    dataType: string;
    onBlur: EventEmitter<any>;
    onSelect: EventEmitter<any>;
    locale: LocaleSettings;
    overlayViewChild: ElementRef;
    value: Date;
    dates: any[];
    weekDays: string[];
    currentMonthText: string;
    currentMonth: number;
    currentYear: number;
    currentHour: number;
    currentMinute: number;
    pm: boolean;
    overlay: HTMLDivElement;
    overlayVisible: boolean;
    closeOverlay: boolean;
    dateClick: boolean;
    onModelChange: Function;
    onModelTouched: Function;
    calendarElement: any;
    documentClickListener: any;
    ticksTo1970: number;
    yearOptions: number[];
    focus: boolean;
    filled: boolean;
    inputFieldValue: string;
    _minDate: Date;
    _maxDate: Date;
    minDate: Date;
    maxDate: Date;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    createMonth(month: number, year: number): void;
    prevMonth(event: any): void;
    nextMonth(event: any): void;
    onDateSelect(event: any, dateMeta: any): void;
    updateInputfield(): void;
    selectDate(dateMeta: any): void;
    updateModel(): void;
    getFirstDayOfMonthIndex(month: number, year: number): number;
    getDaysCountInMonth(month: number, year: number): number;
    getDaysCountInPrevMonth(month: number, year: number): number;
    getPreviousMonthAndYear(month: number, year: number): {
        'month': any;
        'year': any;
    };
    getNextMonthAndYear(month: number, year: number): {
        'month': any;
        'year': any;
    };
    getSundayIndex(): number;
    isSelected(dateMeta: any): boolean;
    isToday(dateMeta: any): boolean;
    isSelectable(day: any, month: any, year: any): boolean;
    onInputFocus(event: any): void;
    onInputBlur(event: any): void;
    onButtonClick(event: any, inputfield: any): void;
    onInputKeydown(event: any): void;
    onMonthDropdownChange(m: string): void;
    onYearDropdownChange(y: string): void;
    incrementHour(event: any): void;
    decrementHour(event: any): void;
    incrementMinute(event: any): void;
    decrementMinute(event: any): void;
    updateTime(): void;
    toggleAMPM(event: any): void;
    onInput(event: any): void;
    parseValueFromString(text: string): Date;
    populateTime(value: any, timeString: any, ampm: any): void;
    updateUI(): void;
    onDatePickerClick(event: any): void;
    showOverlay(event: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    formatDate(date: any, format: any): string;
    formatTime(date: any): string;
    parseTime(value: any): {
        hour: number;
        minute: number;
    };
    parseDate(value: any, format: any): any;
    daylightSavingAdjust(date: any): any;
    updateFilledState(): void;
    ngOnDestroy(): void;
}
export declare class CalendarModule {
}
