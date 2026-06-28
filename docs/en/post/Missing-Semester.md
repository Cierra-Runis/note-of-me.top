---
date: '2025-01-01T02:23:13+08:00'
id: XGMTLY
---

# The Missing Semester of Your CS Education

This blog post is some notes and personal insights I wrote for the MIT course "The Missing Semester of Your CS Education", and is not intended as a substitute for the course.

Here are the [Chinese lecture notes](https://missing-semester-cn.github.io) and the [bilibili video with Chinese subtitles](https://www.bilibili.com/video/BV1b2421M7v3).

## Paths

Paths should be pretty basic, right? `.` represents the current directory, `..` represents the parent directory, and these are consistent across Windows as well.

However, Windows and Unix systems use different path separators: Windows uses `\`, while Unix uses `/`. So it's best to use some libraries to handle paths, like Python's `os.path`, as handling paths manually can lead to issues.

> [!TIP] 2025-01-11 14:25:09 Reminder
>
> Python's `os.path` is gradually being recommended to be replaced by `pathlib`, which is more modern and easier to read.

One thing that impressed me was [LeetCode problem 71](https://leetcode.com/problems/simplify-path), which requires simplifying a Unix-style path. I highly recommend everyone to give it a try.

## Shell and Bash

This section was actually mentioned in [SSH](./SSH), but I'll add some more here.

Actually, I used to write scripts in Python, like the script for building APKs and Windows ZIPs for Mercurius and moving them to the `out` folder, which required anyone using the script to have Python installed, which is obviously not a good choice.

Bash is the default shell for Unix systems, and its script files end with `.sh`. On Windows, we can use WSL to run Bash scripts - although I think PowerShell should be used on Windows, whose script files end with `.ps1`, and of course there are also the older `.bat` and `.cmd` batch files.

> You can't expect everyone using the script to go install Python.
>
> First of all, Windows already has PowerShell built-in, and Linux and macOS have bash built-in, so using the system's existing tools can reduce a dependency. Of course, the downside is that you have to prepare two script files, `.ps1` and `.sh` (and indeed many repositories do this).
>
> Secondly, Python scripts require a specific version of Python to be installed, which may conflict with the existing version on the system, and some dependencies may also pollute the existing environment. Of course, using uv is an option, but uv also requires you to download and use it, so it depends on whether the project can or is willing to push this tool.
>
> Finally, if the project itself is multi-language development and includes Python, then it's understandable.

While watching this section, I also used Termux. Since GitHub has been acting up recently and I can't see which repositories have new releases, I wrote a script that combines `GitHub CLI` and `jq` commands to get the latest releases, but I won't show it here to avoid embarrassment.

## Regex

Regular expressions are patterns used to match strings, and they have applications in many places, such as search engines, text editors, IDEs, etc.

When I first learned Java, I wrote a Java program that simulates Minecraft commands, and I used string splitting:

```Java
// Match command
public void match(String input) {

    int i; // Command index
    for (i = 0; i < Command.length; i++) { // Search
        // If the left part of the input command matches the command in the command library
        if (input.regionMatches(0, Command[i], 0, Command[i].length())) {
            // Then cut off the left part, and pass the command index and the right split to the toCommand function
            input = input.substring(Command[i].length());
            String[] splitCommand = input.split(" "); // Split the input command by spaces
            toCommand(i, splitCommand);
            return;
        }
    }

    // If no command matches, print an error message
    if (i == Command.length) {
        System.out.print("\33[31;1mNo matched command!\33[0m\n\n");
    }
}
```

If we use regular expressions, this program could be more concise - of course, for command-line programs like this, there are corresponding libraries such as [Picocli](https://github.com/remkop/picocli), [JCommander](https://github.com/cbeust/jcommander), and Kotlin-only [Clikt](https://ajalt.github.io/clikt), etc.

<!-- 后来发现，VS Code 也支持正则表达式，自己也在写 Python 爬虫时用正则表达式来清洗出想要的内容，到现在 [Mercurius](https://github.com/Cierra-Runis/mercurius) 也支持使用正则表达式搜索日记内容，不得不说正则表达式非常强大。 -->

I later found that VS Code also supports regular expressions, and I used regular expressions to clean up the content I wanted when writing Python web scrapers. Now, [Mercurius](https://github.com/Cierra-Runis/mercurius) also supports using regular expressions to search diary content. I have to say that regular expressions are very powerful.

But regular expressions can also have some pitfalls. For example, in the video [「熟肉」非常慢代码来自 Cloudflare, 使整个公司瘫痪](https://www.bilibili.com/video/av1350874531), a small regular expression `.*.*=.*` caused the entire Cloudflare to crash.

## Vim

I'm still using VS Code for now, and it's quite difficult for me to fully switch to Vim:

1. Vim has a steep learning curve.
2. Vim runs in the shell, so how would I operate some of my real-time preview content, such as PDFs, web pages, and apps?

Giving up the mouse is still not very realistic, but I do want to speed up my programming, so maybe the Vim plugin for VS Code can help?

But how different would it be from using real Vim? Do I need to learn Vim before using the Vim plugin?

## Semantic Versioning

Semantic versioning is explained in [this link](https://semver.org).

I first became aware of version numbers through Minecraft's version numbers, such as `1.7.2`, but Minecraft does not fully adhere to this specification. In the Snapshot versions, we can also see another version format: `24w06a`, where `24` represents the year 2024, `w06` represents the 6th week, and `a` represents the first snapshot version of that week.

The specific format can be found in [this link](https://minecraft.wiki/w/Version_formats).

## The Difference between `source script.sh` and `./script.sh`

I vaguely remember that the former is called sourcing, and I first used this command when configuring zsh.

Specifically, the former runs the sh file in the current session, and if there are configurations such as environment variable settings in the file, then after running, this configuration will apply to the current session; while the latter runs in a subprocess, which will not affect the external session.

In addition, the latter also requires the user to have execution permissions, which requires using `chmod +x script.sh`.

## Personal Thoughts

If this is "the missing semester of computer education", then I have more than one missing semester.

I can say that this course includes most of the knowledge I've learned outside of class in recent years, and this knowledge is more practical compared to the four big subjects of 408 - although they are also important and cannot be ignored. I won't be doing data structures, computer organization, computer networks, or operating systems all day long.

I think interest is also very important. The teaching mode of those four big subjects is completely theoretical and makes people lose interest - but when I was learning about some principles of the GFW recently, wasn't it quite enjoyable?

At the same time, I also found that I have learned too little, and even though my knowledge is relatively broad, its depth is not satisfactory. So while I still have half a year before graduation, I will read more of these kinds of open courses.
