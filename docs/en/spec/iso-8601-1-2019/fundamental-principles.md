---
order: 5
---

# Fundamental principles

## Basic rules

This document gives a set of rules for the representation of

- dates and times,
- date and time intervals, and
- recurring intervals.

Both accurate and approximate representations can be identified by means of unique and unambiguous expressions specifying the relevant dates, times of day and durations. The degree of precision required and obtainable can be varied by including or deleting the appropriate time scale components (such as seconds).

The decreasing order of time scale components, left-to-right, is common to these representations.

## Time scales

### The Gregorian calendar

This document uses the Gregorian calendar for the identification of calendar days.

The Gregorian calendar provides a time scale consisting of a series of contiguous calendar years, each identified by a year number represented by an integer, greater than that of the immediately preceding calendar year by 1. This document allows the identification of calendar years by their year number for years both before and after the introduction of the Gregorian calendar.

The Gregorian calendar distinguishes common years of 365 consecutive calendar days and leap years of 366 consecutive calendar days.

In the Gregorian calendar each calendar year is divided into 12 sequential calendar months, each consisting of a specified number of calendar days as indicated in [Table 1](#table-1). Usage of the Gregorian calendar for identifying dates preceding its introduction (15 October 1582) should only be by mutual agreement of the communicating partners.

<figure id="table-1">
  <figcaption style="text-align: center;">Table 1 - Calendar months</figcaption>

| Calendar month number | Calendar month name | Number of days in the calendar month | Ordinal dates of calendar days in a common calendar year | Ordinal dates of calendar days in a leap calendar year |
| :-------------------: | :-----------------: | :----------------------------------: | :------------------------------------------------------: | :----------------------------------------------------: |
|          01           |       January       |                  31                  |                        001 to 031                        |                       001 to 031                       |
|          02           |      February       |          28 (leap year 29)           |                        032 to 059                        |                       032 to 060                       |
|          03           |        March        |                  31                  |                        060 to 090                        |                       061 to 091                       |
|          04           |        April        |                  30                  |                        091 to 120                        |                       092 to 121                       |
|          05           |         May         |                  31                  |                        121 to 151                        |                       122 to 152                       |
|          06           |        June         |                  30                  |                        152 to 181                        |                       153 to 182                       |
|          07           |        July         |                  31                  |                        182 to 212                        |                       183 to 213                       |
|          08           |       August        |                  31                  |                        213 to 243                        |                       214 to 244                       |
|          09           |      September      |                  30                  |                        244 to 273                        |                       245 to 274                       |
|          10           |       October       |                  31                  |                        274 to 304                        |                       275 to 305                       |
|          11           |      November       |                  30                  |                        305 to 334                        |                       306 to 335                       |
|          12           |      December       |                  31                  |                        335 to 365                        |                       336 to 366                       |

</figure>

### The week calendar

This document allow s the use of the week calendar time scale for the identification of calendar days within a week.

This time scale is based on an unbounded series of contiguous calendar weeks. The calendar week number identifies the calendar week within the calendar year. Each calendar week has seven calendar days as indicated in [Table 2](#table-2).

The reference point of the time scale assigns Saturday to 1 January 2000.

<figure id="table-2">
  <figcaption style="text-align: center;">Table 2 - Calendar days within a week</figcaption>

| Ordinal day number in the week | Name of day in the week |
| :----------------------------: | :---------------------: |
|               1                |         Monday          |
|               2                |         Tuesday         |
|               3                |        Wednesday        |
|               4                |        Thursday         |
|               5                |         Friday          |
|               6                |        Saturday         |
|               7                |         Sunday          |

</figure>

> [!NOTE] NOTE
>
> When identifying a calendar day using a calendar year, a calendar week of year number and a calendar day of week, it is possible that the resulting calendar day belong to another calendar year in the Gregorian calendar. The week calendar as applied to the Gregorian calendar do not always match. For example, the first day of 2019 Week 1 (a Monday) is `2018-12-31`.

### The 24-hour clock

This document uses the 24-hour clock for identification of times within a calendar day, where the duration of a calendar day is defined as 24 clock hours, the duration of a clock hour as 60 clock minutes, and the duration of a clock minute generally as 60 clock seconds (except when insertion or omission of a leap second occurs).

Intra-day time scales provide marks which, except in case of discontinuities (e.g. daylight savings time), represent the duration elapsed after the start of the calendar day. These marks are referred to as time of day and are expressed in terms of the number of hours elapsed after the beginning of the day, the number of minutes elapsed after the last full hour, the integral number of seconds elapsed after the last full minute and, if applicable, the fractional part of the last full second. (Alternatively, the marks can be expressed in terms of the number of hours with fractional part of hour with no minute or second component, or hours and minutes with fractional part of minute, with no second component.)

## Time scale components and units

### General

Time scale units are represented in two forms within this document:

<ol style="list-style-type: lower-alpha;">
  <li>implied form;</li>
  <li>explicit form.</li>
</ol>

In this document, time scale components for date and time are represented in the implied form. Time scale units for duration (see 5.5.2) are represented in the explicit form. <!-- TODO: Add link -->

### Calendar year and years duration

The Gregorian calendar defines a calendar year to be either 365 or 366 days, which begins on January 1 and ends on December 31. Each Gregorian calendar year can be identified by a 4-digit ordinal number beginning with `'0000'` for year zero, through `'9999'`.

The calendar year and years duration are represented as follows:

<ol style="list-style-type: lower-alpha;">
  <li>

Implied: `[YYYY]`

> [!NOTE] EXAMPLE 1
>
> `'1985'` (calendar year 1985)

  </li>

  <li>

Explicit: `[i]["Y"]`

> [!NOTE] EXAMPLE 2
>
> `'12Y'` (twelve years)

  </li>
</ol>

The number of digits may exceed 4 in the case of expanded representation, in which case the year number may be preceded by a minus sign to indicate a year preceding year zero.

### Calendar month and months duration

In the Gregorian calendar, each calendar month within its calendar year is identified by a specific name, and represented by a two-digit ordinal number from `'01'` for January to `'12'` for December.

The calendar month and months duration are represented as follows:

<ol style="list-style-type: lower-alpha;">
  <li>

Implied: `[MM]`

> [!NOTE] EXAMPLE 1
>
> `'12'` (calendar month December)

  </li>

  <li>

Explicit: `[i]["M"]`

> [!NOTE] EXAMPLE 2
>
> `'8M'` (8 months)

  </li>
</ol>
