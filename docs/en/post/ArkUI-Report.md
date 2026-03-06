---
date: '2024-07-01T19:31:29+08:00'
id: LVYMSF
---

# ArkUI Report

Hello everyone, today let's talk about something you might not want to read.

## ArkTS Language

> [ArkTS](https://developer.huawei.com/consumer/cn/arkts) is the application development language for the Harmony ecosystem.
>
> Building on the basic syntax of [TypeScript](https://www.typescriptlang.org), ArkTS further strengthens static checks and analysis. This allows for the detection of more errors during the development phase prior to program execution, thereby enhancing code robustness and achieving better runtime performance.
>
> It also offers capabilities such as a declarative UI paradigm and state management, helping you boost productivity and develop applications faster.

This is what the official website says, but I can only say uh uh. Maybe HUAWEI doesn't have the capability to create its own language, so they ended up turning TypeScript into a Frankenstein's monster stitched together with Swift or Kotlin. Some of the syntax that annoy me, such as anonymous functions with `.bind(this)` and template strings that require backticks `` const str = `Show: ${another} value` `` also require `this`, which must be due to limitations in the language implementation.

Similarly, I don't like ArkTS:

1. You must use DevEco Studio to use the ArkTS language.
2. DevEco Studio's built-in code formatting results just SHIT:

   ```TypeScript
   .toolBar({ items: [
     { value: "Plunger", icon: "house", action: () => {
     } },
     { value: "Intelligent", icon: "house", action: () => {
     } },
     { value: "Shop", icon: "house", action: () => {
     } },
     { value: "Me", icon: "house", action: () => {
     } },
   ]
   })
   ```

   I really can’t stand it. Is this all the same as copying Xcode?

3. Inconsistent formatting style, just like Swift. Add a few line breaks and spaces and the formatting result changes. I can't even imagine what it would be like for team collaboration.
4. No hot reload, but it does provide a `Preview` feature like SwiftUI - because if there wasn't even a `Preview` feature, with DevEco Studio not even supporting emulators, you wouldn't be able to do Harmony development without a HarmonyOS device.

## DevEco Studio

Holy crap, isn't this just Android Studio? Wait no, isn't this just IntelliJ IDEA? Remember to label it next time you release.

The truth is they just don't have the capability to develop their own IDE, so they chose to "build upon the IntelliJ IDEA Community open source version". This choice is correct, but the result can only be described as unsatisfactory.

First is the code formatting issue, which I've already covered above, so let me talk about something else.

There are way too few plugins. Since my most commonly used code editor is VSCode - actually in my mind this thing is pretty much equivalent to an IDE - I naturally want to use VSCode keybindings. Both IntelliJ IDEA and Android Studio have VSCode KeyMap plugins that can import keybindings from VSCode, but DevEco Studio just doesn't have it.

Does HUAWEI not have anyone using VSCode at all... Wait, Xcode doesn't have it either. Case solved.

Code completion is a mess, absolutely terrible. It feels like the code completion doesn't consider the context at all - that is, what type of thing should be filled at the cursor's current position, what can be filled by default - to suggest completion content. In contrast, original TypeScript's code completion in VSCode is the opposite extreme, overly dependent on context to the point where sometimes the result I want isn't in the completion suggestions.

Localization is inadequate. Logically speaking, this is a domestic company's software and localization should be done better, but many places aren't translated - some might say an all-English interface is better, developers should get more exposure to English, but, ~~I don't understand English~~ I prefer to stay in a more familiar environment.

## ArkUI

Did you also copy your documentation from Apple? Why do ArkUI, SwiftUI, Jetpack Compose, and XML-based Android documentation all look the same?

This is how tutorial books maintain their survival space, right?

The UI in the official getting started tutorial is way too ugly, or is this just what Harmony Design is? Actually, I don't even know if this counts as Harmony Design, because it's really ugly.

How am I supposed to use icons? Do I really have to download a bunch of SVGs and then use them as resource files? HarmonyOS has its own icon library, so can it be better integrated with ArkTS like Flutter or SwiftUI?

I see there's `Symbol`, but likewise, where's the sample code? I did find the sample code later, but if you ask me to find it again now, I really don't know where I dug up that sample code from.

```TypeScript
SymbolGlyph($r('sys.symbol.ohos_trash'))
  .fontWeight(FontWeight.Lighter)
  .fontSize(96);
```

```TypeScript
Text() {
  SymbolSpan($r('sys.symbol.ohos_trash'))
    .fontWeight(FontWeight.Normal)
    .fontSize(96)
}
```

What the hell, why don't I have `SymbolGlyph` and `SymbolSpan`? Are there version requirements? Remember to label it next time.

There's also no component Gallery to showcase the default component styles of Harmony Design. Don't copy Apple, you can do better!

## Conclusion

Exhausting.
