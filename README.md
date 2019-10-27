# Green Lab - Kebab Team - Subject Selection

This repository is part of the project ``An Empirical Analysis of JavaScript Dead Code in the Wild``, described in [Kebab Team  Base Repository](https://github.com/GreeLab-Kebab/gl-kebab). It contains a list of 100 mobile webpages, selected from the [tranco list](https://tranco-list.eu/), which were dowloaded using the [Save All Resources](https://chrome.google.com/webstore/detail/save-all-resources/abpdnfjocnmdomablahdcfnoggeeiedb?hl=en) chrome extension . A tool called [LacunaV2](https://github.com/GreeLab-Kebab/LacunaV2) was used run the downloaded webpages. It strips the JavaScript dead code from the webpages using a combinition of different analysers and optimisation levels (0-4). For the purpose of this experiment only dynamic and tajs (Type analyser for JavaScript) analysers were considered as they result in highest accuracy and F-score as compared to other analysers. Later, the downloaded subjects were tested for all four optimisation levels offered by LacunaV2. Out of 100 mobile webpages, only 16 subjects were selected as they succeeded to generate results for both analysers and all optimisation levels.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for experiment replication purpose.

The 100 mobile webpages were downloaded using the settings shown in this [figure.](https://user-images.githubusercontent.com/35984622/67622865-000c6e00-f81f-11e9-8d10-e55122d1d652.png)

### Prerequisites

Clone the LacunaV2 tool from [this repository](https://github.com/GreeLab-Kebab/LacunaV2).

### Instalation

Clone the following repository for subject selection:

```Console
$ git clone https://github.com/GreeLab-Kebab/gl-kebab-subjects   
```

### Execution
1. Download the mobile webpages selected from the tranco list, using the ```Save All Resources``` chrome extension. This step is optional as [100 mobile webpages](https://github.com/GreeLab-Kebab/gl-kebab-subjects/tree/master/100-unzipped-webpages) have already been downloaded based on [these](https://user-images.githubusercontent.com/35984622/67622865-000c6e00-f81f-11e9-8d10-e55122d1d652.png) settings. To automatically download the webpage the [download.sh](https://github.com/GreeLab-Kebab/gl-kebab-subjects/blob/master/download.sh) script was used.

2. Unzip the downloaded webpages. This step is also optional, as the unzipped 100 webpages can be found [here](https://github.com/GreeLab-Kebab/gl-kebab-subjects/tree/master/100-unzipped-webpages).

3. LacunaV2 requires an entry html file, which can have different names (index.html, home.html). Run [findIndexHtml.sh](https://github.com/GreeLab-Kebab/gl-kebab-subjects/blob/master/findIndexHtml.sh) script on the downloaded webpages to find the entry html files.

4. Run Lacuna using [runLacuna.sh](https://github.com/GreeLab-Kebab/gl-kebab-subjects/blob/master/runLacuna.sh) script and pass the file genereted in the previous step as first argument and path to Lacuna directory (saved on your computer) as a second argument. After LacunaV2 finishes, the result will be saved in the [lacunaWebPages](https://github.com/GreeLab-Kebab/gl-kebab-subjects/tree/master/lacunaWebPages) directory.

## Issues

Some webpages were excluded because the tajs analyser gives exceptions for ES6 features as mentioned below:
1. let keyword
2. Arrow functions
3. Template Literals

## Example (Analyse www.linkdin.com)

- Tajs missing functionality
```JavaScript 
        function getDfd() {
            let yFn, nFn;
            const p = new Promise((y, n) => {
                yFn = y;
                nFn = n;
            });
            p.resolve = yFn;
            p.reject = nFn;
            return p;
        }
        window.lazyloader = getDfd();
        window.tracking = getDfd();
        window.impressionTracking = getDfd();
```
- exception: Only var/const declarations supported, let is not supported
[Tajs Link](https://github.com/cs-au-dk/TAJS/blob/a519cdd38261ba143b5f21ee917c86839c180469/src/dk/brics/tajs/js2flowgraph/FunctionBuilder.java#L1549)

```java
public TranslationResult process(VariableDeclarationListTree tree, AstEnv env) {
        if (tree.declarationType != TokenType.VAR && tree.declarationType != TokenType.CONST /* TODO: unsound to treat as var, but unlikely to be an issue in practice (GitHub #182) */) {
            throw new SyntacticSupportNotImplemented(makeSourceLocation(tree) + ": Only var/const declarations supported, " + tree.declarationType + " is not supported");
        }
        return processList(tree.declarations, env.makeStatementLevel(true));
    }
```

## Authors 

- *Azim AFroozeh* &ndash; [azimafroozeh](https://github.com/azimafroozeh);
- *Saliha Tabbassum* &ndash; [saalihairshad](https://github.com/saalihairshad); 
- *Stan Swanborn* &ndash; [StanSwanborn](https://github.com/StanSwanborn);
- *Thijmen Kurk* &ndash; [ThijmenKurk](https://github.com/ThijmenKurk);
- *Wesley Shann* &ndash; [sshann](https://github.com/sshann);

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.




