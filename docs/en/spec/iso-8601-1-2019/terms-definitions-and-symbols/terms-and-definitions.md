---
order: 1
---

# Terms and definitions

For the purposes of this document, the following terms and definitions apply.

ISO and IEC maintain terminological databases for use in standardization at the following addresses:

- ISO Online browsing platform: available at [https://www.iso.org/obp](https://www.iso.org/obp)
- IEC Electropedia: available at [https://www.electropedia.org](https://www.electropedia.org)

## Basic concepts

### date

[time](#time) on the [calendar](#calendar) [time scale](#time-scale)

> [!NOTE] NOTE
>
> 1. Common forms of date include [calendar date](#calendar-date), [ordinal date](#ordinal-date) and [week date](#week-date).

### time

mark attribute to an [instant](#instant) or a [time interval](#time-interval) on a specified [time scale](#time-scale)

> [!NOTE] NOTE
>
> 1. The term "time" is often used in common language. However, it should only be used if the meaning is clearly visible from the context.
> 2. On a time scale consisting of successive time intervals, such as a [clock](#clock) or [calendar](#calendar), distinct instants may be expressed by the same time.
> 3. This definition corresponds with the definition of the term "date" in IEC 60050-113:2011, 113-01-12.

### instant

point on the [time axis](#time-axis)

> [!NOTE] NOTE
>
> 1. An instantaneous event occurs at a specific instant.

> [!NOTE] SOURCE: IEC 60050-113:2011, 113-01-08

### time axis

mathematical representation of the succession in time according to the space-time model of instantaneous events along a unique axis

> [!NOTE] NOTE
>
> 1. According to the theory of special relativity, the time axis depends on the choice of a spatial reference frame.
> 2. In IEC 60050-113:2011, 113-01-03, time according to the space-time model is defined to be the one-dimensional subspace of space-time, locally orthogonal to space.

> [!NOTE] SOURCE: IEC 60050-113:2011, 113-01-07, modified
>
> The words "according to the space-time" have been added; the phrase "special theory of relativity" has been changed to "theory of special relativity" for clarity; Note 2 to entry has been added.

### time scale

system of ordered marks which can be attributed to [instants](#instant) on the [time axis](#time-axis), one instant being chosen as the origin

> [!NOTE] NOTE
>
> 1. A time scale may amongst others be chosen as:
>    - continuous, e.g. international atomic time (TAI) (see IEC 60050-713:1998, 713-05-18);
>    - continuous with discontinuities, e.g. [UTC](#utc-coordinated-universal-time) due to [leap seconds](#leap-second), [standard time](#standard-time) due to summer time and winter time;
>    - successive steps, e.g. [calendars](#calendar), where the [time axis](#time-axis) is split up into a succession of consecutive [time intervals](#time-interval) and the same mark is attributed to all instants of each time interval;
>    - discrete, e.g. in digital techniques.

> [!NOTE] SOURCE: IEC 60050-113:2011, 113-01-11, modified
>
> The words "amongst others" in Note 1 have been added; Notes 2 and 3 have been deleted.

### time interval

part of the [time axis](#time-axis) limited by two [instants](#instant) and, unless otherwise stated, the limiting instants themselves

> [!NOTE] SOURCE: IEC 60050-113:2011, 113-01-10, modified
>
> The words "and, unless otherwise stated, the limiting instants themselves" have been added; the Notes have been deleted.

### time scale unit

unit of measurement of a [duration](#duration)

> [!NOTE] EXAMPLE
>
> 1. Calendar year, calendar month and calendar day are time scale units of the Gregorian calendar.
> 2. Clock hour, clock minutes and clock seconds are time scale units of the 24-hour clock.

### duration

non-negative quantity of time equal to the difference between the final and initial [instants](#instant) of a [time interval](#time-interval)

> [!NOTE] NOTE
>
> 1. The duration is one of the base quantities in the International System of Quantities (ISQ) on which the International System of Units (SI) is based. The term "time" instead of "duration" is often used in this context and also for an infinitesimal duration.
> 2. For the term "duration", expressions such as "time" or "time interval" are often used, but the term "time" is not recommended in this sense and the term "time interval" is deprecated in this sense to avoid confusion with the concept of "time interval".
> 3. The exact duration of a [time scale unit](#time-scale-unit) depends on the [time scale](#time-scale) used. For example, the duration of a year, month, week, day, hour or minute, may depend on when they occur (in a [Gregorian calendar](#gregorian-calendar), a [calendar month](#calendar-month) can have a duration of 28, 29, 30 or 31 days; in a [24-hour clock](#24-hour-clock), a [clock minute](#clock-minute) can have a duration of 59, 60 or 61 seconds, etc.). Therefore, the exact duration can only be evaluated if the exact duration of each is known.
> 4. This definition is closely related to Note 1 of the terminology entry "duration" in IEC 60050-113:2011, 113-01-13.

### clock

[time scale](#time-scale) suited for intra-day time measurement

> [!NOTE] EXAMPLE
>
> The [24-hour clock](#24-hour-clock) is a type of clock.

> [!NOTE] NOTE
>
> 1. [clock second](#clock-second), [clock minute](#clock-minute) and [clock hour](#clock-hour) are often [time scale units](#time-scale-unit) included in a clock.

### 24-hour clock

[clock](#clock) that subdivides a [calendar day](#calendar-day) into 24 [clock hours](#clock-hour)

> [!NOTE] NOTE
>
> 1. [UTC](#utc-coordinated-universal-time) forms the basis of today's 24-hour clocks and is used in this document as a type of 24-hour clock, as described in 4.2.3.

<!-- TODO: Add link to 4.2.3 -->

### recurring time interval

series of consecutive [time intervals](#time-interval) of identical [duration](#duration)

> [!NOTE] NOTE
>
> 1. If the duration of the time intervals is measured in [calendar](#calendar) entities, the duration of each time interval depends on the [calendar dates](#calendar-date) of its start and end.
> 2. If the starting [instants](#instant) of time intervals are repeated according to a set of rules, the "repeat rules for recurring time intervals" in ISO 8601-2:2019, Clause 5 apply.

<!-- TODO: Add link to ISO 8601-2:2019, Clause 5 -->

### UTC, Coordinated Universal Time

[time scale](#time-scale) with the same rate as International Atomic Time (TAI), but differing from TAI only by an integral number of [seconds](#second)

> [!NOTE] NOTE
>
> 1. UTC is the time standard commonly used across the world from which local time is derived.
> 2. UTC is produced by the Bureau International des Poids et Mesures (BIPM), i.e. the International Bureau of Weights and Measures.
> 3. TAI is a continuous time scale produced by the BIPM based on the best realizations of the SI second. TAI is a realization of Terrestrial Time (TT) with the same rate as TT, as defined by the International Astronomical Union Resolution B1.9 (2000).

> [!NOTE] SOURCE: BIPM Recommendation CCTF 3 (2017), modified
>
> The definition of TAI has been included as Note 3 to the entry.

### UTC of day

[time of day](#time-of-day) in [UTC](#utc-coordinated-universal-time)

### standard time

[time scale](#time-scale) derived from [UTC](#utc-coordinated-universal-time), by a [time shift](#time-shift) established in a given location by the competent authority

> [!NOTE] EXAMPLE
>
> 1. Some standard times do not vary within a year, such as US Eastern Standard Time (EST), US Eastern Daylight Time (EDT), Australian Western Standard Time (AWST), China Standard Time (CST), Hong Kong Standard Time (HKT), Korea Standard Time (KST) and Japanese Standard Time (JST).
> 2. Some standard times vary within a year, such as US Eastern Time (ET) and Australian Central Standard Time (ACST).

> [!NOTE] NOTE
>
> 1. The time shift of a standard time may vary in the course of a year, such as due to daylight savings.

> [!NOTE] SOURCE: IEC 60050-113:2011, 113-01-17, modified
>
> The original NOTE has been deleted; EXAMPLE 1 and 2 and Note 1 to entry has been added.

### local time scale

locally-applicable [time scale](#time-scale) such as [standard time](#standard-time) or a non-[UTC](#utc-coordinated-universal-time) based time scale

### time of day

[time](#time) occurring within a [calendar day](#calendar-day)

> [!NOTE] NOTE
>
> 1. Generally, time of day relates to the [duration](#duration) elapsed after the beginning of the day. However, this correlation breaks when changes occur in the [time scale](#time-scale) that applies to the time of day, such as [time shifts](#time-shift) and [leap seconds](#leap-second).
> 2. This definition corresponds closely with the definition of "clock time" given in IEC 60050-113:2011, 113-01-18, except that the concepts of duration and time scale are not used in this definition.

### local time of day

[time of day](#time-of-day) in a [local time scale](#local-time-scale)

### calendar

[time scale](#time-scale) that uses the [time scale unit](#time-scale-unit) of [calendar day](#calendar-day) as its basic unit

> [!NOTE] EXAMPLE
>
> The [Gregorian calendar](#gregorian-calendar) is a type of calendar.

> [!NOTE] NOTE
>
> 1. [Calendar month](#calendar-month) and [calendar year](#calendar-year) are time scale units often included in a calendar.

### Gregorian calendar

[calendar](#calendar) in general use that defines a [calendar year](#calendar-year) that closely approximates the tropical year

> [!NOTE] NOTE
>
> 1. In this document the term "Gregorian calendar" is used to refer to the [time scale](#time-scale) described in 4.2.1.

<!-- TODO: Add link to 4.2.1 -->

### common year

[calendar year](#calendar-year) in the [Gregorian calendar](#gregorian-calendar) that has 365 [calendar days](#calendar-day)

### leap year

[calendar year](#calendar-year) in the [Gregorian calendar](#gregorian-calendar) that has 366 [calendar days](#calendar-day)

> [!NOTE] NOTE
>
> 1. A leap year is a calendar year whose year number is divisible by four and is not a [centennial year](#centennial-year), or a centennial year whose year number is divisible by four hundred.

### centennial year

[calendar year](#calendar-year) in the [Gregorian calendar](#gregorian-calendar) whose year number is divisible without remainder by one hundred

### week calendar

[calendar](#calendar) based on an unbounded series of contiguous [calendar weeks](#calendar-week) that uses the [time scale unit](#time-scale-unit) of calendar week as its basic unit to represent a [calendar year](#calendar-year), according to the rule that the first calendar week of a calendar year is the week including the first Thursday of that year, and that the last one is the week immediately preceding the first calendar week of the next calendar year

> [!NOTE] NOTE
>
> 1. This rule is based on the principle that a week belongs to the calendar year to which the majority of its [calendar days](#calendar-day) belong.
> 2. In the week calendar, calendar days of the first and last calendar week of a calendar year may belong to the previous and the next calendar year respectively in the [Gregorian calendar](#gregorian-calendar).
> 3. The week calendar is described in 4.2.2.

<!-- TODO: Add link to 4.2.2 -->

### leap second

intentional time step of one [second](#second) to adjust [UTC](#utc-coordinated-universal-time) to ensure appropriate agreement with UT1, a [time scale](#time-scale) based on the rotation of the Earth

> [!NOTE] NOTE
>
> 1. See also ITU-R TF.460-6.
> 2. An inserted second is called a positive leap second and an omitted second is called a negative leap second. A positive leap second is inserted after `23:59:59Z` and can be represented as `23:59:60Z`. A negative leap second is achieved by the omission of `23:59:59Z`. Insertion or omission takes place as determined by the International Earth Rotation and Reference Systems Service (IERS), normally on 30 June or 31 December, but if necessary, on 31 March or 30 September.

### time shift

constant [duration](#duration) difference between [times](#time) of two [time scales](#time-scale)

## Time and date units

### second

base unit of [duration](#duration) measurement in the International System of Units (SI)

> [!NOTE] NOTE
>
> 1. Second is as defined by the CGPM (Confvérence générale des poids et mesures, General Conference on Weights and Measures) on the proposal of the CIPM (Comité international des poids et mesures, International Committee for Weights and Measures).
> 2. See also ISO 80000-3.

### clock second

[time scale unit](#time-scale-unit) whose [duration](#duration) is one [second](#second)

> [!NOTE] NOTE
>
> 1. Clock second is in common parlance often referred to as second, however in this document clock second and second have different definitions.

### minute

[duration](#duration) of 60 [seconds](#second)

> [!NOTE] NOTE
>
> 1. See also ISO 80000-3.
> 2. The duration of a minute is 60 seconds except if modified by the insertion or deletion of a [leap second](#leap-second).

### clock minute

[time scale unit](#time-scale-unit) whose [duration](#duration) is one [minute](#minute)

> [!NOTE] NOTE
>
> 1. Clock minute is in common parlance often referred to as minute, however in this document clock minute and minute have different definitions.

### hour

[duration](#duration) of 60 [minutes](#minute)

> [!NOTE] NOTE
>
> 1. See also ISO 80000-3.

### clock hour

[time scale unit](#time-scale-unit) whose [duration](#duration) is one [hour](#hour)

> [!NOTE] NOTE
>
> 1. Clock hour is in common parlance often referred to as hour, however in this document clock hour and hour have different definitions.

### calendar date

particular [calendar day](#calendar-day) represented by its [calendar year](#calendar-year), its [calendar month](#calendar-month) and its [calendar day of month](#calendar-day-of-month)

### ordinal date

particular [calendar day](#calendar-day) represented by its [calendar year](#calendar-year) and its [calendar day of year](#calendar-day-of-year)

### week date

particular [calendar day](#calendar-day) represented by its [calendar year](#calendar-year) to which its [calendar week](#calendar-week) belongs, its [calendar week of year](#calendar-week-of-year) and its [calendar day of week](#calendar-day-of-week)

### day

[duration](#duration) of a [calendar day](#calendar-day)

> [!NOTE] NOTE
>
> 1. The term "day" applies also to the duration of any [time interval](#time-interval) which starts at a certain [time of day](#time-of-day) on a certain [calendar day](#calendar-day) and ends at the same time of day on the next calendar day.
> 2. See also ISO 80000-3.

### calendar day

[time scale unit](#time-scale-unit) starting at the beginning of the day and ending with the beginning of the next day, the latter being the starting [instant](#instant) of the next calendar day

> [!NOTE] NOTE
>
> 1. Calendar day is in common referred to as day, however in this document calendar day and day have different definitions.
> 2. The [duration](#duration) of a calendar day using the [24-hour clock](#24-hour-clock) is 24 [hours](#hour); except if modified by
>    - the insertion or deletion of [leap seconds](#leap-second), by decision of the IERS, or
>    - the insertion or deletion of other time intervals, as may be prescribed by local authorities to alter the [time scale](#time-scale) of local time.

### calendar day of week

day amongst the sequence of [week calendar](#week-calendar) days, namely, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday or Sunday

> [!NOTE] NOTE
>
> 1. The week calendar is defined in 4.2.2.

<!-- TODO: Add link to 4.2.2 -->

### calendar day of month

ordinal number of a [calendar day](#calendar-day) within a [calendar month](#calendar-month)

### calendar day of year

ordinal number of a [calendar day](#calendar-day) within a [calendar year](#calendar-year)

### week

[duration](#duration) of a [calendar week](#calendar-week)

> [!NOTE] NOTE
>
> 1. The term "week" applies also to the duration of any [time interval](#time-interval) which starts at a certain [time of day](#time-of-day) on a certain [calendar day](#calendar-day) and ends at the same time of day at the same calendar day of the next calendar week.

### calendar week

[time scale unit](#time-scale-unit) of seven [calendar days](#calendar-day) which begins on Monday and ends on Sunday, according to the [week calendar](#week-calendar)

### calendar week of year

ordinal number of a [calendar week](#calendar-week) within a [calendar year](#calendar-year) of the [week calendar](#week-calendar)

### month

[duration](#duration) of a [calendar month](#calendar-month)

> [!NOTE] NOTE
>
> 1. The term "month" applies also to the duration of any [time interval](#time-interval) which starts at a certain [time of day](#time-of-day) on a certain [calendar day](#calendar-day) of the calendar month and ends at the same time of day on the same calendar day of the next calendar month, if it exists.
> 2. In certain applications a month is considered as a duration of 30 calendar days.

### calendar month

[time scale unit](#time-scale-unit) resulting from a defined division of a [calendar year](#calendar-year), each containing a specified number of [calendar days](#calendar-day)

> [!NOTE] NOTE
>
> 1. A calendar month is in common parlance often referred to as month, however in this document calendar month and month have different definitions.

### year

[duration](#duration) of a [calendar year](#calendar-year)

> [!NOTE] NOTE
>
> 1. In the [Gregorian calendar](#gregorian-calendar), a year has 365 or 366 days. The duration is 366 days if the corresponding [time interval](#time-interval) begins February 28 or earlier in a [leap year](#leap-year) or March 2 or later in a year immediately preceding a leap year. If the interval begins February 29 (on a leap year), or March 1 of a year preceding a leap year, the end date has to be agreed on. Otherwise the duration is 365 days.
> 2. The term "year" applies also to the duration of any [time interval](#time-interval) which starts at a certain [time of day](#time-of-day) on a certain [calendar date](#calendar-date) of the calendar year and ends at the same time of day at the same calendar date of the next calendar year with the exception noted in Note 1 to entry.

### calendar year

[time scale unit](#time-scale-unit) defined by the [calendar](#calendar) system

### decade

[time scale unit](#time-scale-unit) of 10 [calendar years](#calendar-year), beginning with a year whose year number is divisible without remainder by ten

> [!NOTE] NOTE
>
> 1. Decade is also used to refer to an arbitrary [duration](#duration) of 10 years, however decade is not used as such in this document.

### century

[time scale unit](#time-scale-unit) of 100 [calendar years](#calendar-year) [duration](#duration), beginning with a year whose year number is divisible without remainder by 100

> [!NOTE] EXAMPLE
>
> The 19th century covers the years 1800 through 1899.

> [!NOTE] NOTE
>
> 1. Century is also used to refer to an arbitrary [duration](#duration) of 100 years, however century is not used as such in this document.

## Representations and formats

### date and time expression

### date and time representation

### time scale component

### basic format

### extended format

### complete representation

### representation with reduced precision

### representation with decimal fraction

### decimal sign

### expanded representation
