# CLI Usage

`bullshit-generator` is a very simple CLI interface of `node-bullshit-generator` that comes with the library, allowing you to do basic article generations.

> This page assumes you have installed the `node-bullshit-generator` NPM package globally.
> In some cases, you may need to use this CLI with `npx`, like this:

```bash
npx bullshit-generator [...]
```

## Usage

This CLI is used like this in your command line:

```bash
$ bullshit-generator [theme] [length] [dict]
```

Where:

-   `theme` may be the theme of the article.
    Default: `学生会退会` (see [Library Reference](libref.md))
-   `length` may be the length of the article (a positive integer).
    Default: See [狗屁库.生成](libref.md)
-   `dict` may be a path to a dict configuration file (a js file).
    Default: The `default` dict

Note that invaild values (except those passed as `dict`) will be ignored, and their defaults will be used instead.

## Examples

```bash
$ bullshit-generator "disappearing"
```

Will generate an article with "disappearing" as the theme;

```bash
$ bullshit-generator "your mom" 500
```

Will generate an article in 500 characters with "your mom" as the theme;

```bash
$ bullshit-generator "using english" 3000 path/to/dict_configuration.js
```

Will generate an article in 3000 characters with "using english" as the theme, using the dict that the configuration file `path/to/dict_configuration.js` provides.
