---
order: 2
---

# Symbols

## General

Representations and expressions specified in this document make use of the symbols listed in [Time scale component symbols](#time-scale-component-symbols) through [Separator symbols](#separator-symbols).

Representations (also referred to as "format representations") give rise to expressions for dates, times, intervals and recurring intervals.

> [!NOTE] EXAMPLE
>
> 1. `[YYYY]` is a format representation for a calendar year, where each `Y` is to be replaced by a single digit creating an expression, for example `'1985'`.
> 2. The date and time representation `[YYYY]["-"][MM]["-"][DD]` gives rise to the expression `'2003-02-10'` which identifies 10 February 2003.

To clearly separate date and representation from the text, punctuation marks and associated symbols used to describe them, the following symbols are used to demarcate boundaries of expressions and representations in this document:

- single quotation marks enclose expressions (for example, `'1985'`); in some cases they are omitted to reflect the actualities of the examples; the are omitted in Clause 5. <!-- TODO: link to Clause 5 -->
- all individual tokens that are part of a representation are contained between the open and close brackets symbols (`"["` and `"]"`);
  > [!NOTE] EXAMPLE
  >
  > 3. For the date and time representation `[YYYY]["-"][MM]["-"][DD]`, `[YYYY]`, `["-"]`, `[MM]`, `["-"]`, and `[DD]` are individual tokens and enclosed by brackets. <!-- markdownlint-disable-line -->
- when double quotations marks enclose a string within a representation, that string is a literal and becomes part of any expression of that representation.
  > [!NOTE] EXAMPLE
  >
  > 4. The representation `[i]["Y"]` represents a positive integer followed by the symbol `"Y"`. `'12Y'` meaning "12 years" is an expression of that representation. <!-- markdownlint-disable-line -->

Quotation marks and brackets are not part of the expression or representation itself and shall be omitted in implementation.

All characters used in date and time expressions and representations are part of the ISO/IEC 646 repertoire, except for "hyphen", "minus" and "plus-minus". In an environment where use is made of a character repertoire based on ISO/IEC 646, "hyphen" and "minus" should be both mapped onto "hyphen-minus".

The character "space" shall not be used in the expressions.

## Time scale component symbols

The following time scale component symbols are in implied form, for the representation of date and time.

<dl>
  <dt>year</dt><dd>time scale component calendar year</dd>
  <dt>month</dt><dd>time scale component calendar month</dd>
  <dt>week</dt><dd>time scale component calendar week of year</dd>
  <dt>day</dt><dd>time scale component calendar day of month</dd>
  <dt>dayk</dt><dd>time scale component calendar day of week</dd>
  <dt>dayo</dt><dd>time scale component calendar day of year</dd>
  <dt>hour</dt><dd>time scale component clock hour</dd>
  <dt>min</dt><dd>time scale component clock minute</dd>
  <dt>sec</dt><dd>time scale component clock second</dd>
  <dt>dec</dt><dd>time scale component decade</dd>
  <dt>cent</dt><dd>time scale component century</dd>
  <dt>

$c(x,y)$

  </dt><dd>

time scale component $c$ extended to accept a fixed-point number, with $x$ digits in the decimal part and $y$ digits in the fractional part; for example, `[year(6,0)]` represents a year time scale component that accepts 6 digits for year; `min(2,3)` represents a minute time scale component that accepts 2 digits in the decimal part and 3 digits in the fraction part, separated by a decimal sign

> [!NOTE] NOTE
>
> If $y$ is omitted it is assumed to be zero. Thus `[year(6)]` means the same as `[year(6,0)]`.

  </dd>
</dl>

## Composite component symbols

<dl> <!-- TODO: Add link -->
  <dt>date</dt><dd>the composite time scale components for the complete representation of a date as determined in 5.2.2.1 a)</dd>
  <dt>dateX</dt><dd>the composite time scale components for the complete representation of a date as determined in 5.2.2.1 a)</dd>

  <dt>odate</dt><dd>the composite time scale components for the complete representation of an ordinal date of year as determined 5.2.3.1 a)</dd>
  <dt>odateX</dt><dd>the composite time scale components for the complete representation of an ordinal date of year as determined 5.2.3.1 b)</dd>

  <dt>wdate</dt><dd>the composite time scale components for the complete representation of a week date as determined in 5.2.4.1 a)</dd>
  <dt>wdateX</dt><dd>the composite time scale components for the complete representation of a week date as determined in 5.2.4.1 b)</dd>

  <dt>shift</dt><dd>the composite time scale components for time shift in basic form with hours and minutes, as determined in 4.3.13 a)</dd>
  <dt>shiftH</dt><dd>the composite time scale components for time shift in basic hourly form, as determined in 4.3.13 b)</dd>
  <dt>shiftX</dt><dd>the composite time scale components for time shift in extended form, as determined in 4.3.13 c)</dd>

  <dt>time</dt><dd>the composite time scale components for the complete representation of a time of day as determined in 5.3.1.2 a)</dd>
  <dt>timeX</dt><dd>the composite time scale components for the complete representation of a time of day as determined in 5.3.1.2 b)</dd>

  <dt>duration</dt><dd>the composite time scale units for the representation of a duration as determined in 5.5.2.2 a) and b)</dd>
</dl>

## Symbols used in place of digits or signs

These symbols are used to represent characters in the date and time representations. They are used in representations only, and are replaced by one or more characters, as described, in expressions:

<dl>
  <dt>Y</dt><dd>a digit used in the time scale component "calendar year"</dd>
  <dt>M</dt><dd>a digit used in the time scale component "calendar month"</dd>
  <dt>D</dt><dd>a digit used in the time scale component "calendar day"</dd>

  <dt>E</dt><dd>a digit used in the time scale component "century"</dd>
  <dt>W</dt><dd>a digit used in the time scale component "calendar week"</dd>

  <dt>h</dt><dd>a digit used in the time scale component "clock hour"</dd>
  <dt>m</dt><dd>a digit used in the time scale component "clock minute"</dd>
  <dt>s</dt><dd>a digit used in the time scale component "clock second"</dd>

  <dt>n</dt><dd>a positive integer, may be left absent to signify an unbounded value</dd>
  <dt>i</dt><dd>a positive integer</dd>

  <dt>±</dt><dd>a plus sign <code>["+"]</code> to represent a positive value or zero (the plus sign shall not be omitted), or a minus sign <code>["-"]</code> otherwise</dd>
</dl>

## Designator symbols

These symbols are used to represent designators in the date and time expressions:

<dl>
  <dt>"H"</dt><dd>the hour designator, following a data element which represents the number of hours in a duration expression</dd>
  <dt>"M"</dt><dd>the months or minutes designator, following a data element which represents the number of months or minutes in a duration expression

> [!NOTE] NOTE
>
> Although `"M"` can be used to designate months or minutes, its meaning is unambiguous in expressions because the portion of a duration statement is preceded by the character `"T"`.

  </dd>

  <dt>"P"</dt><dd>the duration designator, preceding the component which represents the duration

> [!NOTE] NOTE
>
> The use of the character `"P"` is based on the historical use of the term "period" for duration.

  </dd>

  <dt>"R"</dt><dd>the recurring time interval designator</dd>

  <dt>"S"</dt><dd>the seconds designator, following a data element which represents the number of seconds in a duration expression</dd>

  <dt>"T"</dt><dd>the time designator, which indicates
    <ul>
      <li>the start of the representation of local time of day to designate local time of day expressions as such;</li>
      <li>the start of the representation of the time of day in date and time expressions;</li>
      <li>the start of the representation of the number of hours, minutes or seconds in expressions of duration</li>
    </ul>
  </dd>

  <dt>"Y"</dt><dd>the years designator, following a data element which represents the number of years in a duration expression</dd>
  <dt>"W"</dt><dd>the week designator, following a data element which represents the ordinal number of a calendar week within the calendar year</dd>

  <dt>"Z"</dt><dd>the UTC designator, added to the end of a time representation to indicate that a time of day is represented as UTC of day

> [!NOTE] NOTE
>
> The use of the character `"Z"` comes from its commonly known relationship with the "zero meridian", and its usage in the military and navigation as "Zulu time" which was inherited from GMT (Greenwich Mean Time).

  </dd>

  <dt>"𝑥"</dt><dd>the representation of character <code>"𝑥"</code> according to the textual representation of <code>"𝑥"</code> in the ISO/IEC 646 repertoire</dd>
</dl>

## Separator symbols

In date and time expressions and date and time representations, the following characters are used as separators.

<dl>
  <dt>"-" (hyphen)</dt><dd>

the `"-"` hyphen character, in extended format, separates the time scale components for "year" and "month", "year" and "week", "year" and "day", "month" and "day", and "week" and "day"

  </dd>
  <dt>":" (colon)</dt><dd>

the `":"` colon character, in extended format, separates the time scale components for "hour" and "minute", and "minute" and "second"

  </dd>
  <dt>"/" (solidus)</dt><dd>

the `"/"` solidus character separates start and end times in the representation of a time interval, as well as the symbols `"R"` from tge remainder of a recurring time interval representation

  </dd>
  <dt>"." (period), "," (comma)</dt><dd>

the `"."` period and `","` comma characters are decimal sign used to separate the integer part from the decimal fraction of a number

  </dd>
</dl>
