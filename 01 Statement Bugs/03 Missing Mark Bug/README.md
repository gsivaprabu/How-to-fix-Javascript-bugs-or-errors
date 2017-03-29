# Statement Bugs - Missing Mark Bug

- Automatic Semicolon Insertion (ASI)

JavaScript needs semicolons in order to parse the language, however, there is a mechanism called automatic semicolon insertion to assist with parsing [http://es5.github.io/#x7.9](http://es5.github.io/#x7.9)

### ASI Rules

* Applied when new line or curly brace is followed by invalid token
* Applied when new line comes before -- or ++ token
* Applied when new line follows a continue, break, return or throw statement
* Applied at end of a file if needed to parse

### ASI Exceptions

* Not applied if would result in an empty statement
* Not applied inside head of a for statement


### Semicolon-less JavaScript Rules

* Don't end your statements with a semicolon
* If statement starts with


### Using Semicolons As Expected

* Follow the official specification when semicolons are required
* Use tools like JSLin